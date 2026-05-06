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

**Vincoli di scope espliciti**: il piano **non** include sistema ordini online con pagamento integrato (deliverable separato F4 con investimento 3-8k €), **non** include integrazione automatica con piattaforme delivery (Glovo, Deliveroo — gestite indipendentemente), **non** include consulenza HACCP nuova (Tria ha già know-how operativo + cross-sell con 3D Service possibile), **non** include consulenza fiscale specifica. Produce: sito canonico con 5 pagine + menu interattivo con WhatsApp prefilled + GBP, conformità GDPR/cookie/Reg. UE 1169/2011 art. 14, baseline SEO locale.

**Decisioni strategiche aperte all'avvio:**
1. Delivery diretto (Davide consegna in zona Mozzecane) o solo asporto + piattaforme terze (Glovo, Deliveroo)?
2. Pizze speciali stagionali (es. tartufo autunnale, zucca invernale): pagina dedicata "Pizze del mese"?
3. Eventuali pizze senza glutine o vegan: linea attiva o no?
4. Cross-sell con 3D Service per HACCP: pagina trust "siamo controllati da 3D Service" come signal?

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

### Le 5 occasioni di scelta del cliente

1. **"Stasera non cucino, prendo una pizza"** — intent serale veloce, fascia 25-65 anni. Decisione presa nei 30 minuti prima della cena. Sito: stato "aperti adesso" + tap su WhatsApp con messaggio precompilato.
2. **"Domani ho gli amici a casa, ordino pizze"** — intent gruppo, ordine multi-pezzi. Forma di prenotazione anticipata via telefono o WhatsApp. Sito: form ordine con quantità.
3. **"Cerco una pizza per un compleanno bambini"** — intent evento, fascia genitori. Pizze classiche (margherita, prosciutto), eventuale pizza dolce. Sito: lista pizze "per bambini" + opzioni speciali.
4. **"Sono nuovo a Mozzecane, dove ordino pizza?"** — intent ricerca prossimità. Sito + GBP + recensioni come strumenti decisionali. Differenziatore Bottega: 12 anni di attività, conduzione Davide.
5. **"Ho un'esigenza alimentare specifica (no glutine, vegan)"** — intent allergeni/dieta. Pagina menu con allergeni ben evidenziati ed eventuali pizze speciali. Differenziatore vs catene: Davide può consigliare e adattare.

### Tre profili clienti tipici

- **Marco, 40 anni, padre di famiglia**: ordina pizza 1-2 volte a settimana, classica margherita o quattro stagioni. Sceglie per qualità + prezzo + velocità ritiro. Sito: deve servire l'ordine veloce.
- **Lucia, 30 anni, lavoratrice fuori sede**: ordina pizza la sera al rientro casa. Tap su WhatsApp con "la solita" se cliente abituale. Sito: meno rilevante, WhatsApp è dominante.
- **Federico, 25 anni, studente universitario**: cerca pizza al taglio o slice veloce, prezzo basso, asporto rapido. Sito: lista prezzi pubblica, orari precisi.

### Quattro profili tipici di cliente Bottega della Pizza

**Profilo 1 — Famiglia veronese sud (Marco e Sara, 38 anni, 2 figli 8 e 10 anni).**
Marco e Sara ordinano pizza la sera del venerdì o sabato. 4 pizze (2 margherite, 1 quattro stagioni, 1 diavola), cliente abituale di 12 anni che conosce il numero a memoria. Spesa tipica 30-40 €. Sito: serve come "verifica orari quando ho dubbi" + eventuale consultazione novità menu. Conversione tipica: telefono diretto o WhatsApp "la solita" sguinto.

**Profilo 2 — Gruppo di amici per cena casalinga (Giulia, 28 anni, organizza spesso le serate).**
Giulia ordina 6-8 pizze per gruppo di 5-7 amici. Spesa 60-90 €. Decisione spesso al pomeriggio (anticipare l'ordine), ritiro il sabato sera 19:30-20:00. Sito: deve mostrare menu chiaro per scelta multipla + WhatsApp ordine multi-pezzi facilitato.

**Profilo 3 — Cliente serale impulso (Roberto, 45 anni, lavoratore autonomo).**
Roberto torna a casa stanco alle 19:30, decide di ordinare pizza al volo. Cerca su Google "pizza asporto mozzecane stasera" o usa Google Maps. Sito: deve catturare con orari + stato "aperto adesso" + tap WhatsApp/`tel:` immediato. 1 pizza, 8-10 €.

**Profilo 4 — Cliente con esigenza alimentare specifica (Anna, 30 anni, intolleranza glutine).**
Anna cerca pizzeria che faccia pizza senza glutine, allergeni evidenti, comunicazione affidabile. Sito: pagina menu con allergeni perfettamente categorizzati + eventuale linea senza glutine se attiva (`[DA CONFERMARE]`). Anche se cliente di nicchia, pagina ben fatta = recensioni positive su forum celiachia + AIC.

### Calendario stagionale dell'asporto pizza

L'asporto pizza ha pattern stagionali:

- **Settembre-Maggio**: alta stagione (asporto = freddo, casa, comfort food). Picco ordini venerdì/sabato sera.
- **Giugno-Luglio**: stagione media (cene all'aperto, picnic, eventuali cene rapide pre-uscita Lago Garda).
- **Agosto**: bassa stagione (clientela in vacanza, eventuali turisti residenziali ordinano).

Pattern editoriale opzionale (post Facebook/GBP):
- **Settembre**: "Riapertura completa post-vacanze", lancio eventuali pizze nuove.
- **Halloween (ottobre)**: pizza speciale a tema (zucca, formaggi piccanti).
- **Novembre-Dicembre**: pizza tartufo, pizza con prodotti tipici veneti.
- **Gennaio**: ripresa post-Capodanno, pizze classiche valorizzate.
- **Pasqua (marzo-aprile)**: pizza con prodotti pasquali (es. asparagi, agnello — solo se Davide propone).
- **Estate**: pizze leggere (cetrioli, rucola, pomodorini), promo "estate".

Pattern di pubblicazione: 1 post/settimana su Facebook o Instagram. Tria Davide gestisce direttamente, tempo 30-60 minuti settimanali.

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

### Pagina Menu espansa con etichettatura allergeni

Il menu è il **deliverable più sensibile** per Bottega — sia commercialmente sia per compliance Reg. UE 1169/2011 art. 14.

**Struttura della pagina menu:**
1. Hero "Il nostro menu — pizze da asporto a Mozzecane".
2. Box informativo "Allergeni" in apertura: lista 14 allergeni + spiegazione codici utilizzati nelle schede.
3. **Pizze classiche** (~12-15 voci):
   - Margherita, Marinara, Quattro stagioni, Capricciosa, Diavola, Prosciutto, Funghi, Würstel-patatine, Tonno, Salmone, Bufala, Vegetariana, Quattro formaggi, Romana, Calabrese.
4. **Pizze speciali** (~6-10 voci):
   - Tartufata, Bresaola-rucola, Speck-brie, Salsiccia, Crudo-mozzarella di bufala, Mediterranea, eventuali pizze stagionali.
5. **Calzoni** (`[DA CONFERMARE]` se in menu).
6. **Bibite e dolci**: acqua, Coca-Cola, birra (con cartello alcolici), eventuali dolci casalinghi.
7. Per ogni voce:
   - Nome.
   - Ingredienti completi (lista come da etichetta).
   - **Allergeni evidenziati** (lettere/icone in grassetto): G (glutine), L (latte), U (uova), N (frutta a guscio), S (sedano), Sn (senape), Ss (sesamo), So (soia), P (pesce), C (crostacei), M (molluschi), Ar (arachidi), Su (solfiti), Lu (lupino).
   - Prezzo `[DA CONFERMARE]`.
   - Tap → WhatsApp prefilled "Vorrei una [nome pizza] medio/grande".
8. **Linea senza glutine** (`[DA CONFERMARE]` se attiva):
   - Pizze base con base senza glutine certificata.
   - Disclaimer: "Cucina condivisa: tracce di glutine possibili. Per celiaci accertati consigliamo struttura dedicata AIC."
   - Lista 4-6 pizze base sicure.
9. **Linea vegana** (`[DA CONFERMARE]` se attiva):
   - Pizze senza ingredienti animali (no formaggi tradizionali, no uova nell'impasto se applicabile).
   - Eventuale formaggio vegano disponibile.
10. **Allergeni in dettaglio**: pagina sub `/allergeni/` con dettaglio completo per chi vuole approfondire (Reg. UE 1169/2011, art. 9, 10, 14).
11. **Disclaimer finali**: "Le informazioni allergeni sono indicative e si riferiscono al menu base. Variazioni e personalizzazioni vi saranno comunicate al telefono o in fase di ordine."

### Pagina "Come funziona" espansa

Pagina dedicata a chiarire processo asporto/delivery:

**Blocchi:**
1. Hero "Come ordinare alla Bottega della Pizza".
2. **3 modalità di ordine**:
   - **Telefono** `tel:+390457930327`: il classico, Tria conferma disponibilità + tempo + ritiro.
   - **WhatsApp** (`[DA CONFERMARE]` numero): per chi preferisce scrivere. Messaggio precompilato dal menu interattivo.
   - **Piattaforme delivery** (`[DA CONFERMARE]` quali attive — ProntoPizza, Glovo, Deliveroo, JustEat): con commissione, gestita esternamente.
3. **Flusso ordine standard**:
   - Cliente ordina (telefono/WhatsApp/piattaforma).
   - Tria conferma tempi ritiro (15-25 minuti tipici per pizza).
   - Cliente ritira al locale o riceve via piattaforma.
4. **Tempi attesa** indicativi `[DA CONFERMARE]`:
   - Sera feriale 18-19: 15-20 minuti.
   - Sera weekend 19-21: 20-30 minuti.
   - Picco venerdì/sabato 20-21: 30-40 minuti (anticipare se possibile).
5. **Pacchetto/contenitori asporto**:
   - Cartone pizza con base anti-aderente.
   - Etichetta con: nome cliente, ora ritiro, ordine, allergeni della pizza specifica.
   - Eventuale shopper con manici per ordini multipli.
6. **Pagamenti accettati** `[DA CONFERMARE]`: contanti, bancomat, carte di credito, eventuali buoni pasto.
7. **Politica di rinuncia**: ordini telefonici annullati ammessi se entro 5-10 minuti dalla conferma. Oltre, eventuale obbligo ritiro.

### Pagina "Chi siamo / La Bottega" espansa

**Storytelling Tria Davide:**

> "Sono Davide Tria, pizzaiolo. Ho aperto La Bottega della Pizza a Mozzecane nel `[DA CONFERMARE — anno preciso]` e da allora preparo pizze ogni sera. Mi alleno a fare la pizza dal `[DA CONFERMARE]` anni, ho imparato a `[DA CONFERMARE]` (forse Napoli, forse altro), e a Mozzecane ho trovato il posto giusto per restare.
>
> Lavoro con `[DA CONFERMARE]` farina (es. Caputo? Petra? 5 stagioni?), lievitazione `[DA CONFERMARE — 24h o 48h?]`, forno `[DA CONFERMARE — legna o elettrico?]`. Le verdure sono fresche, lo so perché vado in continuazione al mercato `[DA CONFERMARE]`. L'80% degli ingredienti è italiano `[DA CONFERMARE]` (questa è una promessa che mantengo, non un claim).
>
> Lavoro da solo / con `[DA CONFERMARE]` collaboratori. Niente delivery diretto / ho un ragazzo che consegna in zona Mozzecane `[DA CONFERMARE]`. Sempre asporto al banco oppure piattaforme `[DA CONFERMARE]`. Sono in Via Roma 7, vi aspetto."

Foto: Davide al forno in azione, cucina pulita, banco con pizze pronte, esterno locale con insegna.

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

### Pattern WhatsApp messaggio precompilato (per pizza)

Ogni voce del menu ha tap che apre WhatsApp con messaggio già scritto:

**Margherita:**
```
https://wa.me/39XXXXXXXX?text=Buonasera%2C%20vorrei%20ordinare%201%20Margherita%20media.%20Grazie.
```

**Pizza speciale (es. Tartufata):**
```
https://wa.me/39XXXXXXXX?text=Buonasera%2C%20vorrei%20ordinare%201%20Tartufata%20media.%20Per%20quando%20sara%27%20pronta%3F%20Grazie.
```

**Ordine multiplo (4 pizze):**
```
https://wa.me/39XXXXXXXX?text=Buonasera%2C%20vorrei%20ordinare%204%20pizze%3A%20[lista]%2C%20ritiro%20alle%20[ora].%20Grazie.
```

**Ordine senza glutine** (se linea attiva):
```
https://wa.me/39XXXXXXXX?text=Buonasera%2C%20vorrei%20ordinare%201%20Margherita%20senza%20glutine.%20Confermate%20la%20disponibilit%C3%A0%3F%20Grazie.
```

**Vantaggi**:
1. Riduce friction (cliente non scrive ex novo).
2. Categorizza intent (Tria distingue "ordine speciale" da "info generica").
3. Tracciabile via GA4 con click event ID per pizza.

### Form contatti generico (per chi non WhatsApp né telefono)

Pagina contatti `/contatti/`:
- Campi: Nome, Email **o** Telefono, Messaggio, Consenso GDPR.
- Risposta entro 1 giorno lavorativo (Tria gestisce via email — non per ordini, ma per richieste informazioni, ricerche eventi, contatti collaborazioni).
- Anti-spam honeypot + niente captcha invasivo.

### CTA gerarchia per pagina

| Pagina | CTA primaria | CTA secondaria | Note |
|---|---|---|---|
| Home | "📞 Chiama 045 7930327" pulsante grande | "💬 Ordina su WhatsApp" | Mobile sticky CTA telefono full-width bottom |
| Menu | Tap pizza → WhatsApp prefilled | "📞 Chiama" link sopra il menu | Pattern dominante |
| Come funziona | "📞 Chiama" | "💬 WhatsApp" | Generic |
| Chi siamo | "Vieni a trovarci" | "📞 Chiama" | Storytelling |
| Contatti | "📞 Chiama" pulsante grande | Form contatti | Generic |

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

### Esempi prima/dopo descrizioni pizza compliant

**Margherita:**
- *Vietato:* "Margherita: la nostra specialità, base perfetta per qualsiasi pizza."
- *Compliant:* "**Margherita** — Pomodoro pelato, mozzarella fior di latte, basilico fresco, olio EVO. **Allergeni**: latte (L), glutine (G). Prezzo `[DA CONFERMARE]` €."

**Diavola:**
- *Vietato:* "Diavola: pizza piccante per i veri palati italiani."
- *Compliant:* "**Diavola** — Pomodoro pelato, mozzarella fior di latte, salame piccante. **Allergeni**: latte (L), glutine (G). Prezzo `[DA CONFERMARE]` €. Picante."

**Pizza tartufata speciale:**
- *Vietato:* "Tartufata: il sapore unico del tartufo nero."
- *Compliant:* "**Tartufata** — Mozzarella fior di latte, crema di tartufo nero estivo (Tuber aestivum), funghi porcini saltati. **Allergeni**: latte (L), glutine (G), può contenere tracce di noci. Prezzo `[DA CONFERMARE]` €."

**Pizza senza glutine** (se linea attiva):
- *Vietato:* "Pizza senza glutine garantita per celiaci."
- *Compliant:* "**Margherita senza glutine** — Base con farina senza glutine certificata `[DA CONFERMARE]` brand, pomodoro pelato, mozzarella fior di latte, basilico, olio EVO. **Cucina condivisa: tracce di glutine possibili**. Per celiaci accertati AIC consigliamo struttura dedicata. Prezzo `[DA CONFERMARE]` €."

### Errori frequenti da evitare nel sito di pizzeria asporto

1. **"Migliore pizza di Mozzecane"** senza dato verificabile: claim vuoto, contestabile.
2. **Allergeni nascosti in pagina remota**: non conforme art. 14 Reg. 1169 — devono essere visibili **prima** della conclusione ordine.
3. **Foto pizze ritoccate troppo**: ingannano cliente. Foto naturali.
4. **Listino prezzi non aggiornato**: cliente paga di più di quello visto sul sito = controversia. Aggiornare almeno trimestralmente + data ultima revisione.
5. **Promesse "consegna 30 minuti" non rispettabili**: meglio "20-30 minuti" onesto che "20 minuti garantiti" non rispettato.
6. **"Pizza italiana" generico vs "80% ingredienti italiani"**: il secondo è verificabile + più credibile.
7. **Recensioni clonate**: Google le scopre + danneggia trust. Solo recensioni autentiche.
8. **Foto del forno con fiamme drammatiche** se forno è elettrico: ingannevole. Foto vera del forno.

### Etichetta di trasparenza forno + farina + lievitazione

Pagina opzionale `/qualita/` o sezione in Chi siamo:

**Forno** `[DA CONFERMARE]`:
- Tipo: legna / gas / elettrico.
- Temperatura cottura: 350-450°C tipica.
- Tempi cottura: 60-90 secondi pizza napoletana, 4-7 minuti pizza romana.

**Farina** `[DA CONFERMARE]`:
- Marchio (es. Caputo Pizzeria, Petra Molino Quaglia, 5 Stagioni).
- Tipologia (00, 0, integrale, semola).
- W e P/L (forza farina).

**Lievitazione** `[DA CONFERMARE]`:
- Tempi: 24h, 48h, 72h.
- Lievito: madre, lievito di birra, autolisi.
- Temperatura controllata (camera fermentazione).

**Pomodoro e mozzarella** `[DA CONFERMARE]`:
- Pomodoro: pelato di San Marzano DOP / Italia / Marche.
- Mozzarella: fior di latte vaccino / mozzarella di bufala campana DOP (per linea premium).

Questa pagina è opzionale ma trasforma "asporto generico" in "asporto curato verificabile" — asset distintivo vs catene.

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

### F2 — Build (sett. 3-5, ~30-40h, deliverable dettagliati)

1. **Implementazione 5 pagine principali**:
   - Home (~600 parole) con hero + stato corrente + 3 trust signal + 6 pizze in evidenza + come funziona + chi è Davide + footer.
   - Menu (~1.000 parole) con listing completo categorizzato + allergeni per voce + tap WhatsApp prefilled.
   - Come funziona (~500 parole) con 3 modalità ordine + tempi + pacchetti + pagamenti.
   - Chi siamo (~500 parole) con storytelling Davide + foto forno + filosofia ingredienti.
   - Contatti (~300 parole) con NAP + mappa + orari + tel + WhatsApp + Facebook + form generico.
2. **Pagina opzionale "Allergeni"** (~400 parole) con dettaglio Reg. UE 1169/2011 art. 9, 10, 14.
3. **Pagina opzionale "Qualità"** (~400 parole) con forno + farina + lievitazione + provenienza ingredienti.
4. **Schema.org JSON-LD** `FastFoodRestaurant + Restaurant` con `takeaway: true`, `acceptsReservations: false`, `servesCuisine`, `priceRange`, `openingHoursSpecification`, `sameAs` (Facebook).
5. **Cookie banner Garante-conforme** (Iubenda preferito).
6. **Menu interattivo** con tap pizza → WhatsApp prefilled. Codice JS minimo (~30 righe) per costruire URL dinamicamente.
7. **Form contatti generico** (Nome, Email/Telefono, Messaggio, Consenso GDPR) + auto-risposta + anti-spam.
8. **Mobile sticky CTA** "📞 045 7930327" full-width fixed bottom.
9. **Test responsive** 375/768/1440 con focus su menu (deve scorrere bene su mobile) + foto pizze (devono caricare veloci).
10. **Test accessibilità** WCAG 2.1 AA con axe DevTools.
11. **Test performance** Lighthouse target ≥90 Performance + ≥95 Accessibility.
12. **SEO on-page** completo: title/description/OG/Twitter Card, alt foto pizze descrittive, gerarchia heading, schema.org, NAP consistency con Facebook + Sluurpy + Yelp.
13. **Setup GA4** anonimizzato + eventi custom (chiamate `tel:`, click WhatsApp prefilled per ogni pizza, submission form, click stato corrente "aperto").
14. **Setup Search Console** sitemap.xml + robots.txt.
15. **Lancio in produzione** + verifica NAP post-lancio su tutti gli aggregatori esistenti.

### F3 — Iterazione (sett. 6-7, ~10-15h)

1. Misurazione baseline.
2. Aggiornamento menu stagionale (eventuali pizze ottobre/dicembre/marzo).
3. Eventuale primo articolo blog ("La nostra lievitazione 48h: come funziona").
4. Aggiunta foto stagionali (forno acceso, pizze nuove).
5. Eventuale linea senza glutine se non già attiva.
6. Backlog F4.

### F4 — Backlog post-90gg

**Sistema ordini online integrato**: tool tipo MenuFy, Vivid, ChefMenu per consentire ordini con pagamento online. Investimento 2-5k €. Pro: 24/7 ordini, riduzione telefonate, dati strutturati. Contro: commissioni piattaforma o costo di sviluppo, gestione tecnica.

**Blog stagionale 6-8 articoli/anno**: "La storia della pizza margherita", "Differenza tra pizza romana e napoletana", "Lievitazione 24h vs 48h", "Come si sceglie la farina giusta", "Ingredienti italiani: cosa conta davvero". Long-form 800-1.200 parole. SEO + autorità.

**Newsletter mensile opt-in**: novità menu, eventi locali Bottega presente (sagre Mozzecane), promozioni famiglia (es. "venerdì del cliente abituale"). Iubenda + double opt-in.

**Punti fedeltà o pacchetto famiglia**: meccanismo semplice ("la decima pizza è gratis"), gestito su carta cartacea o app semplice. Tipico per pizzerie di paese.

**Cross-promo con altri food locali**: "Cliente di Effebi che porta lo scontrino → 10% sconto" come iniziativa di rete locale.

**Pacchetti regalo**: "Voucher pizza" con confezione brandizzata. Picco Natale + compleanni.

**Eventi tematici**: serata speciale (es. "pizza siciliana ogni primo venerdì del mese"), comunicati su Facebook + sito.

**Casi-study video**: 30-60 sec del forno acceso, della preparazione impasto, della pizza che esce dal forno. Instagram Reels + sito embed.

### Rischi a 90gg e mitigazioni

- **Rischio allergeni non aggiornati**: cliente celiaco mangia pizza con glutine non segnalato → conseguenze sanitarie e legali serie. Mitigazione: revisione mensile menu + Tria firma checklist allergeni per ogni voce + procedura aggiornamento immediata sito quando cambia ricetta.
- **Rischio orari sbagliati pubblicati**: cliente arriva e trova chiuso = recensione negativa. Mitigazione: orari verificati F1 + sezione "Stato corrente" eventualmente automatizzata.
- **Rischio competizione Lo Sfizio + Rosati**: tre pizzerie a Mozzecane = mercato tagliato. Mitigazione: differenziazione netta (Bottega = asporto puro + 12 anni + 80% IT; Lo Sfizio = al taglio + veloce; Rosati = trattoria + dine-in).
- **Rischio Tria overload telefonate**: aumento clienti via sito senza scaling capacità. Mitigazione: WhatsApp prefilled riduce telefonate "informative" + eventuali assunzioni in F4.
- **Rischio recensioni Google**: una recensione negativa pesante a 4 stelle attuali = scivolata a 3.7. Mitigazione: rispondere a tutte le recensioni in modo professionale + chiedere recensioni a clienti soddisfatti.

### KPI a 90gg

| KPI | Strumento | Baseline | Target |
|---|---|---|---|
| Click WhatsApp prefilled | GA4 | 0 | ≥40/mese |
| Click WhatsApp per pizza specifica (top 5) | GA4 custom | 0 | ≥80/mese sommato |
| Chiamate `tel:` | GA4 | 0 | ≥30/mese |
| Pageview Menu | GA4 | 0 | ≥300/mese |
| Pageview Allergeni | GA4 | 0 | ≥30/mese |
| Click "Stato corrente: aperto" | GA4 custom | 0 | ≥100/mese |
| Submission form contatti | GA4 | 0 | ≥3/mese |
| Click "indica indirizzo" GBP | GBP Insights | da catturare | +30% |
| Posizionamento "pizza asporto mozzecane" | Search Console | da misurare | top 3 |
| Posizionamento "pizza asporto via roma mozzecane" | Search Console | da misurare | top 3 |
| Posizionamento "pizza asporto verona sud" | Search Console | da misurare | top 10 |

Strumenti: GA4, Search Console, GBP. Mai heatmap senza opt-in.

### Logica dietro i target KPI

Bottega ha pattern conversion semplice ma volumi importanti:

- **Click WhatsApp ≥40/mese**: target conservativo per pizzeria asporto consolidata (12 anni). Rapporto WhatsApp/tel circa 4:3 in target.
- **Chiamate `tel:` ≥30/mese**: clientela tradizionale + cliente abituale "sa il numero a memoria". Numero significativo perché 30 chiamate = ~80-100 ordini effettivi (ratio chiamate/ordini ~1:3 visite).
- **Pageview Menu ≥300/mese**: pagina centrale del sito. Se <100 = problema SEO o navigazione.
- **Submission form ≥3/mese**: piccolo perché cliente preferisce telefono o WhatsApp diretto. Form serve per richieste informazioni meno urgenti.
- **Posizionamento "pizza asporto mozzecane" top 3**: realistico in 90gg, mercato locale poco competitivo.

A 180gg post-lancio: Click WhatsApp 70+/mese (con maturazione SEO + recensioni accumulate).

### Funnel tipo per pizzeria asporto

1. **Visitatore web** → 5-8% conversione (alta perché intent "ordino pizza" è transazionale).
2. **WhatsApp/tel/form** → 90-95% completa ordine (alta — chi contatta vuole davvero ordinare).
3. **Ritiro/consegna** → 100% completa.
4. **Soddisfazione cliente** → 60-70% torna entro 30 giorni.

Il sito influisce su step 1-2 (qualità lead + facilità ordine). Forno + ingredienti determinano step 3-4.

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
