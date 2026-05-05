# Piano di intervento — La Bottega della Pizza

**Cliente:** Pizzeria Da Asporto La Bottega Della Pizza Di Tria Davide
**Vertical:** Asporto pizza (pizzeria d'asporto, no dine-in)
**Data piano:** 2026-05-05
**Versione:** 1.0
**Riferimenti:** [`_metodologia.md`](./_metodologia.md), [`_references.md`](./_references.md), [`_checklist-definition-of-done.md`](./_checklist-definition-of-done.md)

---

## §1 Sintesi esecutiva

La Bottega della Pizza è una pizzeria d'asporto gestita da Tria Davide in Via Roma 7, 37060 Mozzecane (VR), telefono 045 7930327. Attiva da 12+ anni, con 80% di prodotti italiani e uso di verdure fresche. Presente sui canali aggregatori (Yelp, Sluurpy, TripAdvisor, ProntoPizza, MenuPizza) e con pagina Facebook ufficiale `facebook.com/labottegadellapizza.it`. Nessun sito proprio.

Il template "Impasto D'Oro" (Template A — dark, premium) è coerente con un posizionamento "asporto curato" ma manca di funzionalità ordine telefonico/WhatsApp ottimizzato e di etichettatura allergeni Reg. UE 1169/2011 obbligatoria per asporto.

**Tre interventi prioritari:**

1. **Conformità etichettatura allergeni**: per asporto, l'art. 14 Reg. UE 1169/2011 impone l'informazione allergeni a distanza prima della conclusione dell'ordine — il sito deve esporli per ogni pizza.
2. **Flusso ordine ottimizzato**: tap su `tel:` o WhatsApp con messaggio precompilato che include la lista pizze. Riduzione frizione massima per intent serale "ordino e ritiro".
3. **Differenziazione vs Lo Sfizio + Rosati**: tre pizzerie a Mozzecane. Bottega = asporto curato + 12 anni di attività + ingredienti italiani 80%. Da raccontare come asset distintivo.

**Risultato a 90gg:**

| Dimensione | Stato attuale | Stato a +90gg |
|---|---|---|
| Presenza online | Facebook + aggregatori | Sito canonico + GBP + WhatsApp ordini |
| Conversione | Telefono | tel + WhatsApp + ordine via menu interattivo |
| Fiducia | Senza claim, dati incompleti | Lista ingredienti + allergeni + 12 anni + 80% italiano |
| Conformità | Nessuna | GDPR + cookie + Reg. UE 1169/2011 art. 14 |
| Posizionamento | Disperso | Top 3 "pizza asporto mozzecane" |

**Stima ore complessive:** 50-65 ore in 7-8 settimane.

---

## §2 Dati verificati e da confermare

| Campo | Valore proposto | Fonte / stato |
|---|---|---|
| Ragione sociale | Pizzeria Da Asporto La Bottega Della Pizza Di Tria Davide | Yelp, Sluurpy, TripAdvisor |
| Forma giuridica | Ditta individuale (probabile) | `[DA CONFERMARE]` |
| P.IVA | `[DA CONFERMARE]` | — |
| Codice fiscale | `[DA CONFERMARE]` | — |
| Numero REA | `[DA CONFERMARE]` Verona | — |
| Indirizzo | Via Roma 7, 37060 Mozzecane (VR) | Yelp |
| Telefono | +39 045 7930327 | Yelp + Sluurpy |
| Email | `[DA CONFERMARE]` | — |
| PEC | `[DA CONFERMARE]` | — |
| Anno apertura | "12+ anni" (dal 2013-2014 circa) | Facebook |
| Sito attuale | inesistente | conferma negativa |
| Google Business Profile | `[DA CONFERMARE]` | — |
| Facebook ufficiale | https://www.facebook.com/labottegadellapizza.it/ | Facebook |
| Instagram | `[DA CONFERMARE]` | — |
| Orari | `[DA CONFERMARE]` (tipici asporto sera: 18-22 forse + pranzo weekend) | — |
| Listino pizze completo | `[DA CONFERMARE]` (presente su Sluurpy/MenuPizza, da estrarre) | — |
| Allergeni per pizza | `[DA CONFERMARE]` (responsabilità Tria come gestore) | — |
| Modalità asporto | ritiro al locale + delivery `[DA CONFERMARE]` (ProntoPizza lo lista come delivery; verificare se diretto o via piattaforma) | — |
| Piattaforme delivery | `[DA CONFERMARE]` (ProntoPizza, Glovo, Deliveroo, JustEat?) | — |
| Recensioni Google | `[DA CONFERMARE]` | — |
| Foto disponibili | nessuna | servizio fotografico (forno, pizze, locale) |
| Logo vettoriale | `[DA CONFERMARE]` | — |

---

## §3 Contesto e diagnosi del template attuale

Tre varianti: **Template A "Impasto D'Oro"** (dark, premium — base), **Template B "Forno Aperto"** (light, casual), **Template C "Margherita"** (bold, tricolore).

Template A perché:
1. Dark + premium = pizza curata, non chain.
2. Più completo strutturalmente.

### Cosa funziona
1. HTML semantico, `tel:` wired, tipografia coerente.

### Cosa non regge
1. **Allergeni assenti** — obbligo Reg. UE 1169/2011.
2. **Listino prezzi senza data ultima verifica**.
3. **Schema.org `FastFoodRestaurant` / `Restaurant` con `takeaway: true` assente**.
4. **Modalità ordine non ottimizzata** (no WhatsApp prefilled).

### Cosa va ripensato
1. **Architettura ordine** (vedi §7).
2. **Etichettatura allergeni a livello pizza** (vedi §11.d).

---

## §4 Audit dello stato attuale

HTML semantico OK. Skip-link da aggiungere. Schema.org assente. OG assenti.

Performance: font moderni, CSS 4 file.

Lacune contenuto: allergeni, ingredienti dettagliati, orari precisi, modalità asporto vs delivery, marchi farine, lievitazione tempi.

---

## §5 Identità verbale e di marca

### Tono
**Casual ma curato, niente folklore.** Voce di Tria Davide pizzaiolo. Concretezza: ingredienti, lievitazione, forno.

### Formalità
**"Tu"** — asporto serale è informale.

### Cinque parole-chiave ammesse
1. **Asporto** (specifico, non "consegna a domicilio" generico).
2. **Forno** (con tipo: legna? elettrico? `[DA CONFERMARE]`).
3. **Lievitazione** (tempi specifici).
4. **Ingredienti italiani** (80% dichiarato).
5. **Verdure fresche** (dichiarate).

### Cinque da evitare
1. **Pizza gourmet** se non è davvero gourmet.
2. **Esperienza autentica** vuoto.
3. **Tradizione napoletana** se non è verificata.
4. **Migliore pizza di Mozzecane** senza dato.
5. **Innovativo** vietato.

### Esempi prima→dopo

**Hero:**
- *Prima:* "La pizza che ami a casa tua"
- *Dopo:* "Pizza da asporto a Mozzecane dal `[DA CONFERMARE — anno]`. 80% ingredienti italiani, verdure fresche, cottura a `[DA CONFERMARE]` °C. Ordina al 045 7930327."

**CTA:**
- *Prima:* "Ordina ora"
- *Dopo:* "Chiama 045 7930327 / Ordina su WhatsApp"

### Trattamento del nome
**"La Bottega della Pizza"** intero. **"La Bottega"** abbreviato in tono colloquiale. **"Davide"** come voce.

---

## §6 Posizionamento competitivo locale

### Concorrenti
1. **Lo Sfizio Mozzecane** — concorrente diretto asporto.
2. **Pizzeria Trattoria Rosati Mozzecane** — concorrente parziale (ha asporto + dine-in).
3. **Pizzerie Villafranca / Valeggio** — overlap geografico.
4. **Catene delivery (Glovo, Deliveroo)** — funnel concorrente.

### Cosa fa Bottega meglio
1. **12 anni di attività**: longevità.
2. **80% ingredienti italiani**: claim verificabile.
3. **Verdure fresche**: differenziatore vs catene.
4. **Conduzione titolare** (Davide al forno).

### Tabella

| Asse | Bottega | Lo Sfizio | Rosati | Catene delivery |
|---|---|---|---|---|
| Modello | Asporto puro | Asporto + al taglio | Trattoria + asporto | Aggregatore |
| Esperienza | Tria al forno | `[DA CONFERMARE]` | Famiglia Rosati | Click |
| Differenziatore | 12 anni + 80% IT | `[DA CONFERMARE]` | Forno legna + cucina | Comodità |

Posizionamento: **"La Bottega della Pizza: pizza da asporto a Mozzecane dal `[DA CONFERMARE]`. Davide al forno, 80% ingredienti italiani, verdure fresche."**

---

## §7 Architettura informativa proposta

### Mappa pagine (5)
| Pagina | URL | CTA |
|---|---|---|
| Home | `/` | tel + WhatsApp |
| Menu | `/menu/` | tel + WhatsApp con prefilled |
| Come funziona | `/come-funziona/` | tel |
| Chi siamo | `/chi-siamo/` | Visita |
| Contatti | `/contatti/` | tel + form |

### Diagramma flusso
```
[Google "pizza asporto mozzecane"]
        ↓
[Home] — orari + tel + WhatsApp
        ↓
[Menu interattivo] — tap su pizza → WhatsApp prefilled "Vorrei una Margherita"
        ↓
[Conferma telefonica e ritiro al locale]
```

---

## §8 Contenuti core per pagina

### Home

1. **Hero**: foto del forno acceso o pizza appena uscita. Titolo "La Bottega della Pizza". Sottotitolo (vedi §5). Doppia CTA "Chiama 045 7930327" + "Ordina su WhatsApp".
2. **Stato corrente**: "Aperti adesso" / "Aperti dalle [ora]" condizionale `[DA CONFERMARE]` orari.
3. **Tre prove fiducia**: "12+ anni a Mozzecane", "80% ingredienti italiani", "Verdure fresche".
4. **Pizze in evidenza**: 6 pizze (Margherita, Marinara, 4 stagioni, Diavola, Capricciosa, una specialità) con foto, prezzo, allergeni in badge.
5. **Come funziona**: 3 step (Scegli → Chiama / WA → Ritira).
6. **Chi è Davide**: 80 parole.
7. **Footer** con NAP, P.IVA, allergeni completi, privacy.

### Menu (`/menu/`)
- Listino completo: Pizze classiche / Pizze speciali / Calzoni / Bibite.
- Per ogni pizza: nome, ingredienti, allergeni codificati (lettere o icone), prezzo `[DA CONFERMARE]`.
- Box "Allergeni" Reg. UE 1169/2011 con i 14 allergeni elencati.
- CTA per ogni voce: tap → WhatsApp prefilled.

### Come funziona
- Modalità asporto solo ritiro al locale `[DA CONFERMARE]`.
- Eventuale delivery diretto / piattaforme `[DA CONFERMARE]`.
- Orari ricezione ordini.
- Tempi attesa.
- Packaging.
- Allergeni etichettati su packaging (obbligo art. 14 Reg. 1169).

### Chi siamo
- Foto Davide al forno.
- Storia 12 anni `[DA CONFERMARE]` data esatta.
- Filosofia: ingredienti italiani, verdure fresche, lievitazione.

### Contatti
- Mappa, NAP, orari `[DA CONFERMARE]`, tel + WhatsApp + Facebook link.
- Pagamenti accettati `[DA CONFERMARE]`.

---

## §9 SEO locale

### Keyword
- Principale: **"pizza asporto mozzecane"**, **"pizza da asporto mozzecane"**.
- Secondarie: "pizzeria via Roma mozzecane", "asporto pizza verona sud", "pizza forno mozzecane".

### GBP setup
- Categoria: `Pizzeria d'asporto` o `Fast food restaurant`.
- Attributo `takeaway: true`.
- Foto: 8+ (forno, pizze, banco).
- Servizi: asporto, eventuale delivery.

### Schema.org
```json
{
  "@context": "https://schema.org",
  "@type": ["FastFoodRestaurant", "Restaurant"],
  "name": "La Bottega della Pizza",
  "legalName": "Pizzeria Da Asporto La Bottega Della Pizza Di Tria Davide",
  "address": {"@type": "PostalAddress", "streetAddress": "Via Roma 7", "postalCode": "37060", "addressLocality": "Mozzecane", "addressRegion": "VR", "addressCountry": "IT"},
  "telephone": "+39 045 793 0327",
  "servesCuisine": ["Pizza", "Italian"],
  "takeaway": true,
  "acceptsReservations": false,
  "priceRange": "€",
  "sameAs": ["https://www.facebook.com/labottegadellapizza.it/"]
}
```

### Title/H1/meta
- `<title>`: `La Bottega della Pizza — Asporto Mozzecane (VR) | Via Roma 7`
- `<meta description>`: `Pizza d'asporto a Mozzecane dal [DA CONFERMARE]. Davide al forno, 80% ingredienti italiani. Ordina: 045 7930327 / WhatsApp.`

---

## §10 Conversione: CTA, contatti, form

### Gerarchia
| Pagina | Primaria | Secondaria |
|---|---|---|
| Home | tel | WhatsApp |
| Menu | WhatsApp prefilled | tel |
| Contatti | tel | WA + form |

### Pattern
- **`tel:+390457930327`**
- **WhatsApp Business** `[DA CONFERMARE]` numero. Prefilled: "Buonasera, vorrei ordinare:".
- Sticky CTA mobile.

### Form
Generico, sobrio: Nome, Telefono, Messaggio, consenso GDPR.

### Microcopy
- "Ordina su WhatsApp" → wa.me con messaggio precompilato.

---

## §11 Conformità: GDPR, cookie, regole settoriali

### §11.a Privacy

Conforme **Reg. UE 2016/679 GDPR**.

- **Titolare**: Pizzeria Da Asporto La Bottega Della Pizza Di Tria Davide, P.IVA `[DA CONFERMARE]`, Via Roma 7, 37060 Mozzecane (VR).
- **Email privacy**: `[DA CONFERMARE]`.
- **Basi giuridiche** (art. 6): consenso (form), esecuzione contratto (ordini), legittimo interesse (sicurezza), obbligo legale (registri fiscali).
- **Categorie dati**: contatto (form, WhatsApp), ordini (telefono, WhatsApp).
- **Conservazione**: 24 mesi richieste, 10 anni fiscale.
- **Diritti** (art. 15-22 GDPR).

### §11.b Cookie banner

Conforme **Provv. Garante 10 giugno 2021 n. 231**.

### §11.c Imprint

```
Pizzeria Da Asporto La Bottega Della Pizza Di Tria Davide
Via Roma 7, 37060 Mozzecane (VR)
P.IVA [DA CONFERMARE] · REA Verona [DA CONFERMARE]
SCIA somministrazione [DA CONFERMARE]
Tel. 045 7930327 · Email [DA CONFERMARE] · PEC [DA CONFERMARE]
```

### §11.d Sezione settoriale: pizzeria asporto

**Reg. UE 1169/2011 (FIC) — Allergeni**

Per asporto:
- Art. 44: obbligo segnalazione allergeni anche per somministrazione.
- **Art. 14 vendita a distanza**: per ordini telefonici / WhatsApp / sito, il consumatore deve poter conoscere gli allergeni **prima** della conclusione dell'ordine. Implicazione: il sito deve esporre allergeni per ogni pizza, nel menu.
- **14 allergeni**: glutine, crostacei, uova, pesce, arachidi, soia, latte, frutta a guscio, sedano, senape, sesamo, anidride solforosa, lupino, molluschi.
- **Etichetta sul packaging asporto**: nome prodotto, allergeni, lotto/data, ragione sociale e indirizzo.

**DM 158/2006** — Trasporto alimenti caldi/freddi:
- Per asporto al locale: responsabilità termica del cliente.
- Per delivery diretto: contenitori isotermici, tempi consegna.
- Per piattaforme terze (Glovo/Deliveroo): contratto con piattaforma definisce responsabilità.

**SCIA somministrazione (L. 287/1991, D.Lgs. 59/2010)**: presupposto, non sul sito.

**Differenza asporto / delivery diretto / piattaforma**:
- Asporto: ritiro al locale, no consegna.
- Delivery diretto: ristorante consegna a casa.
- Piattaforma: terza parte consegna.

Il sito deve dichiarare quale modalità è offerta.

**Forniture di alcolici per asporto**: se la Bottega vende birra/vino in asporto, divieto vendita ai minori (art. 689 c.p.) e cartello informativo.

---

## §12 Accessibilità e prestazioni

### WCAG 2.1 AA

1. **Contrasto** ≥4,5:1 (tema dark).
2. **Focus visibile**.
3. **Alt descrittivi** per foto pizze (es. `alt="Pizza Margherita con mozzarella di bufala"`).
4. **Gerarchia heading**.
5. **Aria-label** per icone.
6. **`prefers-reduced-motion`** rispettato.
7. **Skip link**.
8. **Form accessibili**.
9. **Navigazione tastiera**.
10. **Tabella menu** con `<th>` corretti.

### Performance — target

| Metrica | Target |
|---|---|
| LCP | < 2,5s |
| CLS | < 0,1 |
| INP | < 200ms |
| Peso home | < 500 KB |
| Peso fonts | < 100 KB |
| Peso CSS critico inline | < 14 KB |

### Tecniche
- Foto pizze WebP/AVIF, max 200KB.
- CSS critico inline.
- JS `defer`.

### Misurazione
- Lighthouse, PageSpeed, Schema Validator, axe.

Vietato Hotjar/Clarity senza opt-in.

---

## §13 Riferimenti ispirazionali

1. **[REF-ristorazione-03] — Cutler & Co.** ([cutlerandco.com.au](https://cutlerandco.com.au)) — Doppia CTA hero. *§8 + §10*.
2. **[REF-ristorazione-05] — The Clove Club** ([thecloveclub.com](https://thecloveclub.com)) — Menu espandibile. *§8*.
3. **[REF-ristorazione-08] — Berberè Verona** ([berberepizza.it](https://www.berberepizza.it/locali/verona/)) — Listino pubblico + prenotazione. *§6 + §8*.
4. **[REF-ristorazione-10] — Haven Coffee + Kitchen** ([haven-annecy.fr](https://haven-annecy.fr)) — Asporto separato. *§7 + §10*.
5. **[REF-ristorazione-13] — Vittoria Pizzeria** ([vittoriapizza.com](https://vittoriapizza.com)) — Menu griglia 3 colonne. *§8*.
6. **[REF-ristorazione-09] — Wild Ginger** ([wildginger.net](https://wildginger.net)) — Tono editoriale. *§5*.
7. **[REF-asporto-01] — Domino's Italia** ([dominos.it](https://www.dominos.it)) — Ordinazione mobile-first. *§10*.
8. **[REF-asporto-02] — Pizzerie Mozzecane PG** ([paginegialle.it](https://www.paginegialle.it/veneto/mozzecane/pizzerie.html)) — Concorrenza locale. *§6*.
9. **[REF-asporto-03] — ProntoPizza Mozzecane** ([prontopizza.it](https://www.prontopizza.it/pizzerie/Mozzecane)) — Aggregatore concorrente. *§9*.
10. **[REF-ristorazione-16] — Sluurpy Bottega** ([sluurpy.it](https://www.sluurpy.it/mozzecane/ristorante/190153/pizzeria-da-asporto-la-bottega-della-pizza-di-tria-davide)) — Verifica NAP. *§2*.

---

## §14 Roadmap di implementazione e KPI

### F1 — Fondamenta (sett. 1-2, ~10h)

1. **Onboarding 75 minuti** — chiarire `[DA CONFERMARE]`: P.IVA, REA, email, PEC, SCIA, anno apertura preciso, orari, listino completo aggiornato 2026, allergeni per pizza, modalità asporto/delivery, piattaforme attive (Glovo/Deliveroo/JustEat/ProntoPizza), tipo di forno, lievitazione tempi, marchio farina, GBP attiva, foto autorizzate.
2. **Visura camerale**.
3. **Bozza testi 5 pagine** + listino completo con allergeni.
4. **Setup GBP**.
5. **Privacy/cookie**.
6. **Servizio fotografico** (forno, pizze, locale, Davide). 200-400€.

### F2 — Build (sett. 3-5, ~30-40h)

1. 5 pagine + menu interattivo con WhatsApp prefilled.
2. Schema.org + OG.
3. Cookie banner Garante.
4. Test responsive, a11y, performance.
5. SEO on-page.
6. GA4 + Search Console.
7. Lancio.

### F3 — Iterazione (sett. 6-7, ~10-15h)

1. Misurazione baseline.
2. Aggiornamento menu stagionale.
3. Backlog F4.

### KPI a 90gg

| KPI | Strumento | Baseline | Target |
|---|---|---|---|
| Click WhatsApp prefilled | GA4 | 0 | ≥40/mese |
| Chiamate `tel:` | GA4 | 0 | ≥30/mese |
| Pageview Menu | GA4 | 0 | ≥300/mese |
| Posizionamento "pizza asporto mozzecane" | Search Console | da misurare | top 3 |

Strumenti: GA4, Search Console, GBP. Mai heatmap senza opt-in.

---

## Appendice A — Domande aperte

### A.1 Identità
- P.IVA, REA, PEC, email.
- SCIA somministrazione numero.
- Forma giuridica.

### A.2 Storia
- Anno apertura preciso (12+ anni dal 2013-14?).
- Storia di Tria Davide.
- Numero collaboratori.

### A.3 Forno e lievitazione
- Tipo forno (legna / elettrico / gas).
- Tempo lievitazione impasto.
- Marchio farina.
- Origine pomodoro, mozzarella.

### A.4 Listino e allergeni
- Listino completo aggiornato.
- Allergeni per pizza (responsabilità Davide).
- Eventuali pizze senza glutine, vegan.

### A.5 Asporto e delivery
- Solo asporto al locale o anche delivery diretto?
- Piattaforme terze attive (Glovo/Deliveroo/JustEat/ProntoPizza)?
- Orari ricezione ordini.
- Tempi attesa medi.

### A.6 Operatività
- Orari settimanali esatti.
- Chiusure settimanali / stagionali.
- Pagamenti (contante, bancomat, carta, buoni pasto).

### A.7 Recensioni e social
- GBP attiva.
- Facebook ufficiale (verificato: labottegadellapizza.it).
- Instagram?

### A.8 Foto
- Logo SVG.
- Foto disponibili.
- Servizio fotografico.

### A.9 SEO/dominio
- Dominio: `labottegadellapizza-mozzecane.it`.
- Hosting, account Google.

### A.10 Budget
- Scadenza target.
- Budget foto.

---

## Decisioni e revisioni

### v1.0 — 2026-05-05
- Prima stesura. Indirizzo + telefono + Facebook + 12+ anni verificati.
- Compliance Reg. UE 1169/2011 art. 14 + DM 158/2006 esplicitate.
- Menu interattivo con WhatsApp prefilled come differenziatore conversion.
- 10 riferimenti popolati.

---

## Stato checklist

- [x] 1-15 (verifica con `tools/check-plan.sh`)
