#!/usr/bin/env bash
# check-plan.sh — Verifiche automatiche grep-able della checklist Definition of Done
# Uso: bash tools/check-plan.sh plans/mozzecane/<slug>.md

set -uo pipefail

if [ $# -lt 1 ]; then
  echo "Uso: $0 <path/to/plan.md>" >&2
  exit 2
fi

PLAN="$1"
if [ ! -f "$PLAN" ]; then
  echo "File non trovato: $PLAN" >&2
  exit 2
fi

REFS="$(dirname "$PLAN")/_references.md"

PASS=0
FAIL=0

ok() { echo "[OK]   $1"; PASS=$((PASS+1)); }
ko() { echo "[FAIL] $1"; FAIL=$((FAIL+1)); }

echo "=== Verifica $PLAN ==="

# 1. Sezioni complete (§1..§14, eventuale §11-bis)
SECTIONS=$(grep -cE '^## §[0-9]+(-bis)?\b' "$PLAN" || true)
if [ "$SECTIONS" -ge 14 ]; then
  ok "Sezioni: $SECTIONS heading §N trovate (≥14)"
else
  ko "Sezioni: solo $SECTIONS heading §N trovate, attese ≥14"
fi

# 2. Lunghezza
WORDS=$(wc -w < "$PLAN")
echo "[INFO] Lunghezza: $WORDS parole — verificare contro target del business"

# 4. Nessun dato inventato — segnala occorrenze sospette per ispezione manuale
SUSPECT=$(grep -nE '(tel:\+?[0-9]|€\s?[0-9]|dal 19[0-9][0-9]|n\. ?[0-9]+|partita IVA|P\.IVA [0-9]|wa\.me/[0-9])' "$PLAN" | grep -vE '\[DA CONFERMARE|\[REF-' | wc -l)
if [ "$SUSPECT" -gt 0 ]; then
  echo "[WARN] $SUSPECT occorrenze potenzialmente non verificate di tel/€/data/IVA/wa.me — ispezionare:"
  grep -nE '(tel:\+?[0-9]|€\s?[0-9]|dal 19[0-9][0-9]|n\. ?[0-9]+|partita IVA|P\.IVA [0-9]|wa\.me/[0-9])' "$PLAN" | grep -vE '\[DA CONFERMARE|\[REF-' | head -20
else
  ok "Nessun dato di contatto/prezzo non protetto da [DA CONFERMARE] o [REF-*]"
fi

# 5. Stock photo escluse
STOCK=$(grep -ciE '(unsplash|pexels|shutterstock|istockphoto|adobestock|pixabay|freepik)' "$PLAN" || true)
if [ "$STOCK" -eq 0 ]; then
  ok "Nessun rimando a stock photo"
else
  ko "$STOCK rimandi a stock photo trovati"
fi

# 6. Riferimenti inline (§13 ha ≥8 URL)
URLS_13=$(awk '/^## §13[. ]/{flag=1; next} /^## §1[4-9][. ]/{flag=0} flag' "$PLAN" | grep -cE 'https?://' || true)
if [ "$URLS_13" -ge 8 ]; then
  ok "§13: $URLS_13 URL trovati (≥8)"
else
  ko "§13: solo $URLS_13 URL, attesi ≥8"
fi

# 7. Riferimenti tracciati (REF-* citati esistono in _references.md)
if [ -f "$REFS" ]; then
  MISSING=0
  while read -r ref; do
    [ -z "$ref" ] && continue
    if ! grep -qF "$ref" "$REFS"; then
      echo "[FAIL] Reference mancante in _references.md: $ref"
      MISSING=$((MISSING+1))
    fi
  done < <(grep -oE '\[REF-[a-z0-9-]+-[0-9]+\]' "$PLAN" | sort -u)
  if [ "$MISSING" -eq 0 ]; then
    ok "Tutti i [REF-*] citati esistono in _references.md"
  else
    ko "$MISSING reference mancanti in _references.md"
  fi
else
  echo "[WARN] _references.md non trovato in $(dirname "$PLAN") — voce 7 saltata"
fi

# 8. Conformità nominata (§11 cita Garante e GDPR)
SEC11=$(awk '/^## §11([. ]|-bis)/{flag=1; next} /^## §1[2-9][. ]/{flag=0} flag' "$PLAN")
if echo "$SEC11" | grep -qE '(Garante|provv\.? Garante|10 giugno 2021)' && echo "$SEC11" | grep -qE '(GDPR|2016/679)'; then
  ok "§11 cita Garante e GDPR"
else
  ko "§11 manca riferimento esplicito a Garante 2021 o GDPR Reg. UE 2016/679"
fi

# 12. Accessibilità — WCAG 2.1 AA + criteri
SEC12=$(awk '/^## §12[. ]/{flag=1; next} /^## §1[3-9][. ]/{flag=0} flag' "$PLAN")
A11Y=$(echo "$SEC12" | grep -ciE '(WCAG|contrasto|focus|alt|gerarchia|aria-label|prefers-reduced)' || true)
if [ "$A11Y" -ge 4 ]; then
  ok "§12 accessibilità: $A11Y match (WCAG + ≥3 criteri)"
else
  ko "§12 accessibilità: solo $A11Y match, attesi ≥4"
fi

# 13. Performance — almeno una metrica numerica
PERF=$(echo "$SEC12" | grep -cE '(LCP|CLS|INP|< [0-9]+ ?(KB|MB|s|ms)|<[0-9]+ ?(KB|MB|s|ms))' || true)
if [ "$PERF" -ge 1 ]; then
  ok "§12 performance: $PERF metrica/e numerica/he"
else
  ko "§12 performance: nessuna metrica numerica trovata"
fi

# 14. Lingua italiana — heuristic frasi inglesi sospette
EN=$(grep -cE '\b(the |and |with |from |this |that |will |have |been |please |using |make |add )\b' "$PLAN" || true)
if [ "$EN" -le 30 ]; then
  ok "Lingua: $EN occorrenze inglesi (sotto soglia, presunte in citazioni/REF)"
else
  echo "[WARN] $EN occorrenze inglesi sopra soglia — ispezionare per filler EN"
  FAIL=$((FAIL+1))
fi

# 15. Marketing-speak
MKT=$(grep -ciE '(soluzione 360°|user-friendly|all.avanguardia|esperienza unica|rivoluzionario|leader del settore|innovativo|sinergia|best-in-class)' "$PLAN" || true)
if [ "$MKT" -eq 0 ]; then
  ok "Nessun marketing-speak nella lista vietata"
else
  echo "[WARN] $MKT occorrenze di marketing-speak — verificare ognuna abbia un dato a supporto:"
  grep -niE '(soluzione 360°|user-friendly|all.avanguardia|esperienza unica|rivoluzionario|leader del settore|innovativo|sinergia|best-in-class)' "$PLAN" | head -10
fi

echo ""
echo "=== Riepilogo: $PASS OK / $FAIL FAIL ==="
if [ "$FAIL" -eq 0 ]; then
  echo "Verifiche automatiche superate. Restano da controllare visivamente: §2 dati, §10 CTA, §14 KPI, sezioni complete (§1..§14 + §11-bis se applicabile)."
  exit 0
else
  echo "Verifiche automatiche con FAIL — risolvere prima di considerare il piano done."
  exit 1
fi
