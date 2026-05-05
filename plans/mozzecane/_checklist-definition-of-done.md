# Checklist — Definition of Done per piano

Ogni voce è verificabile in 30 secondi. Un piano è considerato **done** solo con **15/15**. Sotto 15, torna in revisione.

Il file `tools/check-plan.sh` esegue automaticamente le verifiche grep-able (4, 6, 8, 9, 14, 15). Le altre richiedono ispezione visiva.

---

## Checklist (15 voci)

### 1. Sezioni complete
Il piano contiene tutte le sezioni `§1`–`§14`. Per Farmacia/Erboristeria/Salumificio aggiunge `§11-bis`.
- [ ] Tutte le 14 sezioni presenti come heading `##`
- [ ] §11-bis presente se applicabile

### 2. Lunghezza nel target
Conteggio parole nel range del business (vedi tabella allocation nel meta-plan):
- Rosati / Balzan: 8.300 ± 100
- Girasole / Farmacia / Effebi: 8.600 ± 150
- Armonia: 8.250 ± 100
- Clima World / Bottega / Sfizio / 3D Service: 8.800 ± 150
- Maracaibo / RB Design: 8.750 ± 150

Comando: `wc -w plans/mozzecane/<slug>.md`

### 3. Dati verificati
Ogni cella della tabella `§2` ha:
- URL della fonte (GBP, visura CC, Facebook ufficiale, Albo), **oppure**
- Tag `[DA CONFERMARE — chiedere al cliente: <domanda>]`

Nessuna casella vuota o con valore senza una delle due. Ispezione visiva di §2.

### 4. Nessun dato inventato
Verifica con grep:
```
grep -E '(tel:|€|dal 19|n\. |partita IVA|wa\.me/)' plans/mozzecane/<slug>.md
```
Tutte le occorrenze devono essere:
- In §2 con fonte, **oppure**
- Indicate come `[DA CONFERMARE]`, **oppure**
- In sezione `§13` (riferimenti esterni), **oppure**
- In citazioni esplicite di siti esterni (REF-*).

### 5. Stock photo escluse
Zero rimandi a `unsplash.com`, `pexels.com`, `shutterstock.com`, `istockphoto.com`, `adobestock.com`, `pixabay.com`, `freepik.com`. Le immagini necessarie sono marcate "fornite dal cliente" o "servizio fotografico da pianificare".

```
grep -iE '(unsplash|pexels|shutterstock|istockphoto|adobestock|pixabay|freepik)' plans/mozzecane/<slug>.md
```
Output atteso: vuoto.

### 6. Riferimenti inline
La sezione `§13` contiene ≥8 voci, ognuna con URL HTTPS valido.

```
awk '/^## §?13/,/^## §?14/' plans/mozzecane/<slug>.md | grep -c 'https://'
```
Atteso: ≥8.

### 7. Riferimenti tracciati
Ogni voce inline cita un `[REF-<vertical>-<NN>]` esistente in `_references.md`. Verifica manuale o:

```
grep -oE '\[REF-[a-z-]+-[0-9]+\]' plans/mozzecane/<slug>.md | sort -u | while read ref; do
  grep -q "^$ref" plans/mozzecane/_references.md || echo "MISSING: $ref"
done
```
Output atteso: vuoto.

### 8. Conformità nominata
La sezione `§11` cita per nome il provv. Garante 10 giugno 2021 e il GDPR (Reg. UE 2016/679).

```
awk '/^## §?11/,/^## §?12/' plans/mozzecane/<slug>.md | grep -E '(Garante|2016/679)'
```
Atteso: almeno 2 occorrenze (entrambi i riferimenti).

### 9. Conformità settoriale
La sezione `§11.d` (o `§11-bis`) cita ≥1 riferimento normativo specifico del verticale, con numero (decreto, regolamento, articolo).

Verifica visiva contro la lista:
- Farmacia: D.Lgs. 219/2006, Reg. UE 1924/2006
- Erboristeria: D.Lgs. 169/2004, Reg. UE 1924/2006
- Estetica: Reg. UE 1223/2009
- Salumificio: Reg. UE 1169/2011, Reg. CE 178/2002
- HVAC: DM 37/2008, Reg. UE 517/2014, DPR 146/2018
- Disinfestazione: DM 274/1997, Reg. UE 528/2012
- Bar: art. 689 c.p., L. 287/1991
- Pizzeria/Asporto: Reg. UE 1169/2011 art. 44, DM 158/2006
- Arredamento: D.Lgs. 206/2005 art. 128–135, art. 52, art. 59

### 10. KPI misurabili
La sezione `§14` contiene 3–6 KPI. Ognuno ha:
- Baseline (anche "0" o "non misurato")
- Target a 90 giorni espresso in numero o percentuale

Ispezione visiva di §14.

### 11. CTA differenziate
La sezione `§10` elenca per ogni pagina ≥1 CTA primaria col pattern del verticale:
- HVAC, farmacia, disinfestazione → `tel:`
- Estetica, asporto, bar → `wa.me/`
- Arredamento → form

Ispezione visiva di §10.

### 12. Accessibilità
La sezione `§12` dichiara WCAG 2.1 AA come target esplicito e nomina ≥3 criteri verificabili (contrasto, focus, alt, gerarchia heading, aria-label, prefers-reduced-motion).

```
awk '/^## §?12/,/^## §?13/' plans/mozzecane/<slug>.md | grep -E '(WCAG|contrasto|focus|alt|gerarchia|aria-label|prefers-reduced)'
```
Atteso: ≥4 (WCAG + 3 criteri).

### 13. Performance
La sezione `§12` dichiara ≥1 metrica numerica target. Esempi: `LCP < 2,5s`, `peso home < 500 KB`, `CLS < 0,1`, `INP < 200ms`.

```
awk '/^## §?12/,/^## §?13/' plans/mozzecane/<slug>.md | grep -E '(LCP|CLS|INP|< [0-9]+\s?(KB|MB|s|ms))'
```
Atteso: ≥1.

### 14. Lingua italiana
Il piano è interamente in italiano. I soli termini inglesi ammessi sono:
- Nomi propri (Awwwards, Land-book, ecc.)
- Sigle universali (LCP, GDPR, schema.org, WCAG, REA)
- Citazioni di siti esteri
- Termini tecnici sedimentati senza traduzione (cookie, banner, form, link, plugin)

Ispezione visiva. Heuristic: cercare frasi inglesi inattese:
```
grep -E '\b(the|and|with|from|this|that|will|have|been|please)\b' plans/mozzecane/<slug>.md
```
Le occorrenze devono essere tutte in citazioni o nomi propri.

### 15. No marketing-speak
Verifica grep contro lista vietata:
```
grep -iE '(soluzione 360°|user-friendly|all.avanguardia|esperienza unica|rivoluzionario|leader del settore|innovativo|sinergia|best-in-class)' plans/mozzecane/<slug>.md
```
Le occorrenze sono ammesse **solo se** accompagnate da un dato verificabile (numero, fonte, esempio). Altrimenti riformulare.

---

## Esecuzione automatica

Per le voci grep-able (4, 5, 6, 8, 12, 13, 14, 15):
```bash
bash /home/re/freelance-portfolio/tools/check-plan.sh plans/mozzecane/<slug>.md
```

Per le voci a ispezione visiva (1, 2, 3, 7, 9, 10, 11): leggere il piano e confermare.

Un piano in revisione tiene una sezione finale `## Stato checklist` con elenco `- [x]` / `- [ ]` aggiornato a ogni iterazione.
