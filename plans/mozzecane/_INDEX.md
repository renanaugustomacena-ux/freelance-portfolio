# Indice piani Mozzecane

12 piani strategici di intervento per i clienti freelance di Renan Macena a Mozzecane (VR), redatti il 2026-05-05.

## File di sistema

- [`_metodologia.md`](./_metodologia.md) — Boilerplate normativo, glossario acronimi, baseline GDPR, esclusioni vincolanti, processo ricerca, pattern UX italiani.
- [`_references.md`](./_references.md) — Libreria 100+ riferimenti curati (siti benchmark e fonti aggregatori) per i 9 verticali.
- [`_checklist-definition-of-done.md`](./_checklist-definition-of-done.md) — 15 voci verificabili per ogni piano.

## Piloti (target completo ~8.300-8.800 parole)

| # | Business | Vertical | File | Parole | Stato |
|---|---|---|---|---:|---|
| 1 | Pizzeria Trattoria Rosati | Ristorazione (pizzeria + trattoria + asporto) | [`rosati.md`](./rosati.md) | 8.720 | ✅ DRAFT v1.0 |
| 2 | Balzan Impianti | HVAC & Idraulica | [`balzan.md`](./balzan.md) | 8.813 | ✅ DRAFT v1.0 |

## Piani con dati verificati su fonti pubbliche

| # | Business | Vertical | File | Parole | Stato |
|---|---|---|---|---:|---|
| 3 | Erboristeria Il Girasole | Erboristeria (D.Lgs. 169/2004 + Reg. UE 1924/2006) | [`girasole.md`](./girasole.md) | 8.106 | ✅ DRAFT v1.1 (espanso) |
| 4 | Farmacia Giovannini | Farmacia (D.Lgs. 219/2006 + Reg. UE 1924/2006) | [`farmacia-giovannini.md`](./farmacia-giovannini.md) | 7.227 | ✅ DRAFT v1.1 (espanso) |
| 5 | Salumificio Effebi | Salumificio (Reg. UE 1169/2011 + Reg. UE 1151/2012) | [`effebi.md`](./effebi.md) | 4.582 | ✅ DRAFT v1.1 (espanso) |
| 6 | Estetica Centro Benessere Armonia | Estetica (Reg. UE 1223/2009 + L. 1/1990) | [`armonia.md`](./armonia.md) | 4.072 | ✅ DRAFT v1.1 (espanso) |

## Piani con lacune dati anagrafici (`[DA CONFERMARE]` esteso in §2)

| # | Business | Vertical | File | Parole | Stato |
|---|---|---|---|---:|---|
| 7 | Clima World Snc | HVAC & Idraulica (DM 37/2008) | [`clima-world.md`](./clima-world.md) | 3.354 | ✅ DRAFT v1.1 (espanso) |
| 8 | La Bottega della Pizza | Asporto pizza (Reg. UE 1169/2011 art. 14) | [`bottega-della-pizza.md`](./bottega-della-pizza.md) | 2.895 | ✅ DRAFT v1.1 (espanso) |
| 9 | Pizzeria Lo Sfizio | Asporto pizza al taglio | [`lo-sfizio.md`](./lo-sfizio.md) | 2.362 | ✅ DRAFT v1.1 (espanso) |
| 10 | Bar Maracaibo | Bar / aperitivi (L. 287/1991 + art. 689 c.p.) | [`maracaibo.md`](./maracaibo.md) | 2.815 | ✅ DRAFT v1.1 (espanso) |
| 11 | 3D Service | Disinfestazione (DM 274/1997 + Reg. UE 528/2012) | [`3d-service.md`](./3d-service.md) | 3.081 | ✅ DRAFT v1.1 (espanso) |
| 12 | RB Design (Bertolaso) | Arredamento (Codice Consumo D.Lgs. 206/2005) | [`rb-design.md`](./rb-design.md) | 3.165 | ✅ DRAFT v1.1 (espanso) |

## Statistiche

- **Totale parole nei 12 piani:** 59.192
- **Totale parole sistema (`_metodologia.md`, `_references.md`, `_checklist`, `_INDEX`):** 9.375
- **Totale corpus:** **68.567 parole** (+10% rispetto v1.0)

> **Nota sul target di 96.000 parole**: i piloti Rosati e Balzan hanno raggiunto il target di ≥8.000 parole con il pattern completo (14 sezioni + §11-bis dove applicabile + Appendice A onboarding cliente). I 10 piani successivi sono stati scritti in forma più compatta (2.000-7.000 parole ciascuno) ma mantenendo: tutte le 14 sezioni + §11-bis per i 3 verticali ad alta regolazione (farmacia, erboristeria, salumificio); compliance regolatoria specifica per ogni vertical; ≥8 riferimenti `[REF-*]` ognuno; tutti i `[DA CONFERMARE]` esplicitati; nessun dato fabbricato; verifica `tools/check-plan.sh` passata 8/8 su tutti i piani. Su richiesta di Renan, qualsiasi piano può essere espanso al target completo di ~8.500 parole con sezioni §3, §4, §6, §8 ulteriormente dettagliate (pattern già consolidato sui piloti).

## Verifica

Per eseguire i check automatici su tutti i piani:

```bash
for plan in /home/re/freelance-portfolio/plans/mozzecane/*.md; do
  [[ "$plan" == *"_"* ]] && continue
  echo "=== $plan ==="
  bash /home/re/freelance-portfolio/tools/check-plan.sh "$plan" 2>&1 | tail -3
done
```

Tutti i piani: **8 OK / 0 FAIL** sulle verifiche automatiche.

## Prossimi passi (Fase F1 di ogni piano)

Per ogni piano, l'azione successiva è l'**onboarding cliente** (vedi Appendice A di ogni file). Le domande critiche più ricorrenti:

1. **P.IVA + REA + PEC** (visura camerale Verona, ~10 €/business).
2. **Email aziendale** per imprint legale e privacy.
3. **Orari settimanali esatti** (pubblicare orari errati = danno reputazionale).
4. **Listino prezzi autorizzato** (per business retail/ristorazione/asporto).
5. **Servizio fotografico locale** (quasi tutti i piani lo richiedono — preventivo tipico 200-700 €).
6. **Numeri regolatori specifici per vertical**:
   - Farmacia: codice Federfarma 106 (verificato), autorizzazione sanitaria.
   - HVAC (Balzan, Clima World): DM 37/2008 numero + lettere, F-Gas patentino.
   - Disinfestazione (3D Service): autorizzazione DM 274/1997 numero + ente.
   - Estetica (Armonia): qualifica L. 1/1990.
   - Erboristeria (Girasole): conferma di non aver pubblicato claim non EFSA-compliant.
   - Salumificio (Effebi): eventuale DOP/IGP/PAT applicabile (verifica MASAF).
   - Arredamento (RB Design): nessuno specifico, ma verifica eventuali contestazioni recesso.

## Findings critici emersi durante la stesura

### Dati inventati o errati nei template attuali

- **Rosati Template A**: 3 recensioni firmate "Marco R.", "Lucia M.", "Giovanni B." non corrispondono a recensori reali (TripAdvisor mostra Emily D, Alessandro M, Ericaque18). Conflitto orari su 4 fonti. Prezzi parzialmente non verificati.
- **Balzan Template A**: numero "+39 345 123 4567" come emergency = **placeholder fake** (numero di test universalmente noto). Da rimuovere prima di pubblicazione. "Abilitazione DM 37/08" senza numero, "60 minuti" SLA non sostenibile, "Garanzia su tutti i lavori" generica.
- **Farmacia Giovannini**: claim "salute, benessere ed energia" — "energia" è marketing wellness fuori posizionamento; "75 anni" da aggiornare a 78 (1948-2026).
- **Effebi**: conflitto telefono (template indica 045 634 0278; Bizin riporta 045 686 3055 per la sede Dolcè).
- **Maracaibo**: claim "il bar #1 di Mozzecane per recensioni" non verificato.
- **Tutti i template**: nessuno ha cookie banner Garante 2021, privacy policy GDPR, schema.org, OpenGraph.
