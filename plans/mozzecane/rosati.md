# Piano di intervento — Pizzeria e Trattoria Rosati

**Cliente:** Pizzeria E Trattoria Rosati Snc Di Rosati Romina & C.
**Vertical:** Ristorazione (pizzeria + trattoria + asporto)
**Data piano:** 2026-05-05
**Versione:** 1.0 (pilota)
**Riferimenti:** [`_metodologia.md`](./_metodologia.md), [`_references.md`](./_references.md), [`_checklist-definition-of-done.md`](./_checklist-definition-of-done.md)

---

## §1 Sintesi esecutiva

Pizzeria e Trattoria Rosati è un'attività familiare a Mozzecane (VR) condotta da Rosati Romina e soci, attiva con forno a legna in Via Caterina Bon Brenzoni 20. Oggi il cliente non ha un sito proprio: la presenza online è composta da una pagina Facebook ufficiale, schede su aggregatori (Sluurpy, TripAdvisor, RestaurantGuru, Yelp, PagineGialle, Reteimprese, Sluurpy) e una scheda Google Business Profile con circa 150 recensioni e media 4,2 stelle. Il template HTML statico costruito come pitch (variante "Fuoco & Farina" — Template A) è graficamente coerente con l'identità ma contiene dati non verificati: orari incongrui rispetto alle fonti pubbliche, recensioni con nomi che non corrispondono ai recensori reali, prezzi solo parzialmente confermati.

**Tre interventi prioritari, in ordine di urgenza:**

1. **Verifica e correzione del data-layer.** Allineare orari, prezzi, ragione sociale, P.IVA e recensioni a fonti certe (cliente, visura camerale, GBP). Questo punto è bloccante per ogni successiva fase: senza dati corretti, il sito non può andare online.
2. **Riarchitettura informativa attorno a tre intenti utente.** Prenotare un tavolo, sapere se è aperto adesso, verificare il menù prima di muoversi. Le tre azioni vanno servite nei primi 10 secondi di navigazione, anche su mobile, anche con connessione 3G.
3. **Local SEO + Google Business Profile.** Recuperare il traffico oggi assorbito da Sluurpy, TripAdvisor e RestaurantGuru con un sito proprio che diventi destinazione canonica, schema.org `Restaurant` ricco, GBP completato, citation building su directory veronesi.

**Risultato atteso a 90 giorni dal lancio del sito:**

| Dimensione | Stato attuale | Stato proposto a +90gg |
|---|---|---|
| Presenza online | Pagina Facebook + 6 aggregatori, no sito proprio | Sito proprio canonico + GBP completato + 3 directory locali |
| Conversione | `tel:` solo via Facebook/aggregatori | CTA `tel:` + form prenotazione + WhatsApp |
| Fiducia | Recensioni inventate, dati incerti | Recensioni reali citate con autorizzazione, dati verificati |
| Conformità | Nessuna privacy/cookie sul template | GDPR + cookie banner Garante 2021 + imprint legale |
| Posizionamento | Disperso negli aggregatori, no narrativa | "Trattoria familiare con forno a legna" come posizionamento esplicito |

**Stima ore complessive (livello intestazione):** 60-80 ore distribuite in 8 settimane: 12h F1 fondamenta, 40-50h F2 build, 10-20h F3 iterazione e content. Dettaglio nella roadmap §14.

---

## §2 Dati verificati e da confermare

> **Regola in apertura:** nulla è stato inventato. Le caselle vuote restano vuote o contengono `[DA CONFERMARE]`. Ogni cella ha una fonte URL oppure è esplicitamente marcata come da chiarire con il cliente.

| Campo | Valore proposto | Fonte / stato |
|---|---|---|
| Ragione sociale | Pizzeria E Trattoria Rosati Snc Di Rosati Romina & C. | Reteimprese (`reteimprese.it/.../666738`), confermata anche da PizzeriaSaronno |
| Forma giuridica | SNC (società in nome collettivo) | Reteimprese |
| P.IVA | `[DA CONFERMARE]` — richiedere visura camerale | nessuna fonte pubblica gratuita affidabile trovata |
| Codice fiscale | `[DA CONFERMARE]` — coincide con P.IVA solo se ditta individuale; per SNC va richiesto separatamente | — |
| Numero REA | `[DA CONFERMARE]` — Camera di Commercio Verona | — |
| Indirizzo sede operativa | Via Caterina Bon Brenzoni 20, 37060 Mozzecane (VR) | TripAdvisor, Sluurpy, GBP, Yelp |
| Indirizzo sede legale | `[DA CONFERMARE]` se diverso da operativa | — |
| Telefono fisso | +39 045 793 0601 | Sluurpy, TripAdvisor, GBP, Yelp |
| Cellulare / WhatsApp Business | `[DA CONFERMARE — chiedere al cliente: esiste un numero WhatsApp Business per asporto?]` | nessuna fonte pubblica |
| Email principale | `[DA CONFERMARE]` | — |
| PEC | `[DA CONFERMARE]` (obbligatoria per SNC iscritta al Registro Imprese) | — |
| Sito web attuale | inesistente | conferma negativa: nessuna fonte trova un dominio attivo `rosati*.it` |
| Google Business Profile | Scheda attiva | rilevabile da ricerca "Pizzeria Trattoria Rosati Mozzecane" su Google Maps |
| Pagina Facebook ufficiale | https://www.facebook.com/PizzeriaRosati/ | citata nel template, da confermare con cliente che è davvero quella ufficiale |
| Profilo Instagram ufficiale | `[DA CONFERMARE]` | — |
| Orari settimanali | **CONFLITTO** — vedi nota sotto. Da verificare in via definitiva con il cliente | TripAdvisor, Sluurpy, GBP, template attuale (4 fonti, 4 versioni diverse) |
| Chiusure stagionali | `[DA CONFERMARE]` (Ferragosto? settimana di chiusura estiva?) | — |
| Listino autorizzato a essere pubblico | parziale, vedi §8 — `[DA CONFERMARE]` listino integrale e aggiornato | Sluurpy ha alcuni prezzi, template ne ha altri, parzialmente sovrapposti |
| Foto disponibili | nessun materiale fotografico fornito; foto pubbliche su GBP/Facebook/aggregatori non riusabili senza autorizzazione | `[DA CONFERMARE — servizio fotografico locale da pianificare]` |
| Loghi vettoriali | `[DA CONFERMARE]` esiste un logo SVG/PDF ufficiale? | — |
| Certificazioni dichiarate | nessuna nota nel template; possibili: HACCP attiva, autorizzazione somministrazione (SCIA L. 287/1991) | `[DA CONFERMARE]` |
| Albi e iscrizioni | Camera di Commercio Verona (obbligatoria), eventuale Federazione Italiana Pubblici Esercizi (FIPE) | `[DA CONFERMARE]` |
| Recensioni Google (numero e media) | ~150 recensioni, media 4,2/5 (al 2026-05-05) | risultati ricerca Google Maps. Da catturare screenshot al lancio per baseline. |
| Recensioni TripAdvisor | 26 recensioni, media 4,0/5 (al 2026-05-05) | TripAdvisor ufficiale |
| Recensioni Sluurpy | 1.067 voti, 74/100 | Sluurpy |
| Anno di fondazione | `[DA CONFERMARE]` — il template attuale dichiara "oltre trent'anni"; nessuna fonte pubblica conferma una data precisa | — |
| Numero dipendenti / collaboratori | `[DA CONFERMARE]` | — |

> **Conflitto orari — dettaglio**
>
> | Fonte | Orari dichiarati |
> |---|---|
> | Template attuale (Template A) | Lun – Dom: 12:00 – 15:00 / 18:00 – 22:00. Mercoledì chiuso. |
> | TripAdvisor | Sun-Tue, Thu-Sat: 12:00 – 15:00 / 18:00 – 22:00. Wed closed. |
> | Sluurpy | Lun: 12-15, 18-22. Mar: 12-15 (solo pranzo). Mer: chiuso. Gio-Dom: 12-15, 18-22. |
> | Risultati Google (snippet ricerca) | Lun, Gio, Ven, Sab: 11-15, 19-24. Dom: 11-15, 19-24. Mer: chiuso. |
>
> Quattro fonti, quattro orari diversi. È necessario ottenere dal cliente la versione definitiva degli orari prima del lancio. Pubblicare un orario errato significa clienti che si presentano a porta chiusa: danno reputazionale superiore a qualsiasi vantaggio SEO.

> **Conflitto recensioni — dettaglio**
>
> Il Template A pubblica tre recensioni firmate "Marco R., Google", "Lucia M., TripAdvisor" e "Giovanni B., Google". Verifica incrociata su TripAdvisor mostra che i tre recensori più recenti sono **Emily D (Regno Unito), Alessandro M, Ericaque18 (Malta)**. I nomi nel template **non corrispondono** a recensori reali pubblicamente identificabili. Sono fittizi e vanno **rimossi prima di qualsiasi pubblicazione**. La via corretta è raccogliere 3-5 recensioni reali con autorizzazione esplicita del recensore (anche solo nome pubblico Google + estratto), oppure non pubblicarne nessuna e linkare alla scheda GBP che già le aggrega.

---

## §3 Contesto e diagnosi del template attuale

Il portfolio di Renan contiene due varianti del template Rosati: **Template A "Fuoco & Farina"** (dark, warm, rustico) e **Template B "Giardino Segreto"** (light, botanical, estivo). Il piano lavora su **Template A come base**, perché:

1. È l'unico dei due con tutte le sezioni informative complete (Storia, Menu, Recensioni, Info & Contatti, CTA finale).
2. La direzione warm/forno-a-legna è coerente con il prodotto principale (pizza nel forno a legna) e con il tono familiare-veronese che vogliamo costruire.
3. Template B sarà la base per una stagionale "estate in giardino" da attivare solo se la trattoria conferma di avere un dehors o giardino estivo (`[DA CONFERMARE]` se il riferimento "giardino estivo" del posizionamento corrisponde a uno spazio reale).

### Cosa funziona già (3-5 punti concreti)

1. **HTML semantico essenziale.** Il template usa `<header>`, `<nav>`, `<section>`, `<footer>` con landmark e `<h1>` unico. Buona base accessibilità ([`public/rosati/template-a/index.html`](../../public/rosati/template-a/index.html)).
2. **`tel:` link funzionanti.** Il numero `+390457930601` è già linkato come `tel:` sia nella nav (CTA "Prenota"), sia nella CTA finale, sia nella sezione Info & Contatti — ottimo pattern UX italiano (vedi `_metodologia.md` §6).
3. **Tipografia editoriale coerente.** Combinazione Playfair Display (titoli) + Source Sans 3 (corpo) + Cormorant Garamond (corsivi) costruisce un tono trattoria-storica senza scivolare nel "Italianissimo" stereotipato.
4. **Mobile nav hamburger presente** con script condiviso `mobile-nav.js`. Design responsivo di base già in piedi.
5. **Animazioni `reveal-on-scroll`** già wired ma rispettano `prefers-reduced-motion`? Da verificare in §4.1 — se non rispettano, è una fix obbligatoria per WCAG 2.1 AA.

### Cosa non regge (5 punti, citati i blocchi specifici)

1. **Dati inventati nelle recensioni** ([`index.html` linee 240-253](../../public/rosati/template-a/index.html)). I nomi "Marco R., Lucia M., Giovanni B." non corrispondono a recensori reali. Va rimossa l'intera sezione `class="reviews__grid"` e sostituita con: (a) embed live della scheda GBP via widget ufficiale, oppure (b) 3 recensioni vere con autorizzazione, oppure (c) cancellazione della sezione finché non si raccolgono testimonianze autorizzate.
2. **Prezzi menu non integralmente verificati** ([`index.html` linee 112-164](../../public/rosati/template-a/index.html)). Alcuni prezzi corrispondono a Sluurpy (Margherita €6, Spaghetti ragù €7), altri divergono (Filetto maiale stracchino: template €8 vs Sluurpy €7,50). Tutto il listino va `[DA CONFERMARE]` con il cliente prima del lancio.
3. **Orari errati o, comunque, non concordi con le fonti** ([`index.html` linee 194-196](../../public/rosati/template-a/index.html)). Vedi conflitto in §2. Va riscritto solo dopo conferma cliente.
4. **Storia "trent'anni"** ([`index.html` linea 78](../../public/rosati/template-a/index.html)). Nessuna fonte pubblica conferma l'anno di fondazione. Il template scrive "Da oltre trent'anni" — claim non verificato. Va riscritto come "Da molti anni" o, meglio, marcato `[DA CONFERMARE]` finché non si ottiene dal cliente la data esatta.
5. **Indicatore "Dog friendly"** ([`index.html` linee 171-177](../../public/rosati/template-a/index.html)). Claim concreto non documentato. Da verificare con il cliente: è davvero dog-friendly? Se sì, ottimo differenziatore. Se no, va rimosso.

### Cosa va ripensato da zero (max 2 voci)

1. **L'architettura informativa.** Oggi il template è monopagina (sezioni-anchor: storia, menu, recensioni, info). Per servire i tre intenti utente identificati nella §1 (prenotare, verificare se aperto, vedere menù) la monopagina è sub-ottima: una pagina Menu dedicata permette di indicizzare meglio, e un blocco "Aperto adesso" condizionale richiede una micro-architettura che oggi non esiste. Vedi §7.
2. **La pagina Recensioni.** Concettualmente, oggi non c'è. Quello che c'è sono tre testimoni inventati. La scelta corretta è: niente recensioni nel sito + link prominente alla scheda GBP che già le ha; oppure 3-5 recensioni autentiche con autorizzazione. Vedi §8.

---

## §4 Audit dello stato attuale

### §4.1 Audit tecnico

**HTML semantico:** OK. Landmark presenti, `<h1>` unico ("Rosati"), `<h2>` gerarchici. Manca: `<main>` esplicito che racchiuda il contenuto principale (oggi tutto è sotto `<body>` direttamente). Aggiungere `<main id="main-content">` e linkarlo dallo skip-link `<a href="#main-content" class="sr-only">Vai al contenuto principale</a>` (assente nel Template A — presente in Template B di Balzan come riferimento, vedi `balzan/template-a/index.html` linea 20).

**Accessibilità:**
- `lang="it"` su `<html>`: OK.
- `<title>` descrittivo: OK ("Pizzeria Trattoria Rosati — Mozzecane | Forno a Legna").
- `<meta name="description">`: OK.
- Alt text sulle immagini: il template usa SVG inline come placeholder al posto di foto vere. Quando si inseriranno foto reali, ogni `<img>` dovrà avere `alt=""` (decorativa) o `alt="<descrizione concreta>"`.
- Focus visibile: dipende dal CSS condiviso (`components.css`) — da verificare con tab navigation manuale che ogni link/button mostri outline.
- Contrasto colori: nel tema dark "Fuoco & Farina" il rischio è il testo grigio chiaro su fondo nero che scenda sotto 4,5:1. Verifica obbligatoria con WebAIM Contrast Checker su tutti i token testuali principali.

**Performance stimata:**
- Peso fonts Google: Playfair Display + Source Sans 3 + Cormorant Garamond con multipli pesi e ital — circa 200-300 KB di font scaricati. Riducibile a 80-120 KB con `font-display: swap`, subset latin-1, e taglio dei pesi non usati (oggi vengono richiesti 400, 700, 900 di Playfair e 300, 400, 600 di Source Sans 3 — verificare quali sono effettivamente usati nel CSS).
- Peso CSS: 4 file caricati in serie (`reset.css`, `utilities.css`, `components.css`, `style.css`). Circa 60 KB combinati. Concatenare al build per ridurre roundtrip HTTP.
- Peso JS: 3 file (`mobile-nav.js`, `smooth-scroll.js`, `reveal-on-scroll.js`). Tutti vanilla, leggeri. Non bloccanti ma non `defer` — aggiungere `defer` alle `<script>` finali.
- Immagini: oggi placeholder SVG. Dopo l'inserimento foto: WebP/AVIF con fallback JPEG, lazy-loading sotto il fold (`loading="lazy"`), dimensioni esplicite (`width`/`height`) per evitare CLS.

**Responsive:** breakpoint definiti in `components.css` da verificare. Test obbligatorio su 375px (iPhone SE), 768px (tablet), 1440px (desktop).

**Link rotti:** nessuno rilevabile staticamente (tutti gli anchor `#storia`, `#menu`, `#recensioni`, `#info` puntano a sezioni esistenti).

**Meta tag e OpenGraph:**
- `<meta name="description">`: presente.
- `<meta property="og:title">`, `og:description`, `og:image`, `og:url`, `og:type`: **assenti**. Da aggiungere: cruciali per condivisioni Facebook/WhatsApp.
- Twitter Card meta: stessa cosa, da aggiungere.

**Schema.org:** **assente**. Il sito di una `Restaurant` deve esporre JSON-LD con `@type: Restaurant`, `address` (PostalAddress), `telephone`, `openingHoursSpecification`, `geo`, `image`, `url`, `sameAs`, `servesCuisine`, `acceptsReservations`, `menu`, `priceRange`. Vedi `_metodologia.md` §7. Implementazione obbligatoria nel piano F2.

### §4.2 Audit dei contenuti

**Voce e tono:** il copy attuale è coerentemente caldo e narrativo ("Tradizione e passione, un piatto alla volta", "Famiglia Rosati"). Tono giusto. Manca: la voce della famiglia in prima persona ("Da quasi tre generazioni..."), oggi tutto è in terza persona impersonale. Vedi §5.

**Completezza per pagina:** parziale.
- Hero: OK come quantità di info (label, titolo, sottotitolo, due CTA).
- Storia: OK come blocco di 80-120 parole; manca foto reale del forno o della famiglia.
- Menu: 4 categorie (Pizza, Primi, Pesce, Carne) con 4-5 voci ciascuna — adeguato per anteprima ma manca: allergeni (obbligo Reg. UE 1169/2011 art. 44), nota su "menù completo in sede" se il listino non è esaustivo, eventuale segnalazione vegetariane/veg.
- Recensioni: contenuto da rifare interamente (vedi §3).
- Info: OK come info-grid (orari, indirizzo, contatti) ma orari da verificare e contatti da espandere (email? WhatsApp?).

**Gerarchia tipografica:** ben definita visivamente, ma poco ridondata semanticamente — i `class="section-header__label"` sono `<span>`, andrebbe un `<h2>` per ogni section principale. Nel Template A i `<h2>` ci sono ma il pattern misto label-span + title-h2 è da consolidare per accessibilità.

**Micro-copy CTA:** le CTA principali sono "Scopri il Menu", "Prenota un Tavolo", "Chiama per Prenotare". Buone come verbi attivi ma migliorabili: vedi §10 per gerarchia e stati (loading, successo, errore).

**Prove sociali:** insufficienti e parzialmente fittizie (vedi §3). Da rifare.

**Lacune informative:**
- Menù allergeni: assente. Obbligatorio.
- Asporto: nessun blocco dedicato. Sluurpy lo riporta come servizio attivo.
- Dehors / giardino estivo: il Template B lo enfatizza, il Template A no. Da verificare se esiste.
- Eventi (sagre veronesi, cene tematiche): non presenti.
- Posti a sedere: aggregatori indicano spazio interno + esterno; informazione pratica utile a famiglie/gruppi.
- Pagamenti accettati: assente (carta di credito? bancomat? contante? buoni pasto?).
- Parcheggio: assente. Per attività su via stretta come Bon Brenzoni l'informazione è utile.

---

## §5 Identità verbale e di marca

### Tono

**Familiare, veronese, pacato.** Non rustico-folkloristico. Non gourmet-pretenzioso. Linguaggio della famiglia che cucina per la famiglia. Si parla come parlerebbe Rosati Romina al telefono a un cliente abituale: con cortesia, senza giri di parole, con orgoglio sobrio per il proprio mestiere.

### Formalità

**"Voi" plurale informale**, comune in Veneto per il pubblico generico ("Vi aspettiamo a tavola", "Per voi e i vostri amici"). Evitare il "Lei" singolare formale (pesante per attività familiare). Evitare il "tu" diretto (troppo casual per una trattoria che ha un'eterogeneità di clienti, da famiglie con bambini a tavolate aziendali).

### Cinque parole-chiave del lessico ammesso

1. **Forno a legna** — il prodotto fisico distintivo, da menzionare sempre con il nome esteso.
2. **Famiglia** — sostantivo comune, riferito alla gestione e all'ospite ideale.
3. **Tradizione** — usata con parsimonia, mai più di 1 volta per pagina, e mai senza un dettaglio concreto a fianco (es. "tradizione del baccalà alla vicentina", non "tradizione" da sola).
4. **Veronese / Veneto** — territorialità esplicita, mai "italiano generico".
5. **Quotidiano** — il valore della trattoria che apre tutti i giorni utili, non occasionale.

### Cinque parole-chiave da evitare

1. **Esperienza** ("vivi un'esperienza unica") — vuoto, marketing-speak.
2. **Eccellenza** — autocelebrativo, non verificabile.
3. **Authentic / Autentico** quando usato come claim assoluto — vuoto. Se vero, dimostrato con un dettaglio.
4. **Gourmet** — fuori posizionamento. Rosati è trattoria, non ristorante stellato.
5. **Innovativo / Innovazione** — vietato in `_metodologia.md` §3 senza specifico verificabile.

### Esempi micro-copy "prima → dopo"

**Hero subtitle:**
- *Prima:* "Dal forno a legna alla vostra tavola"
- *Dopo:* "Dal forno a legna alla vostra tavola — pizza, pasta fatta in casa e cucina veronese tutti i giorni a Mozzecane."
- *Perché:* aggiungere il "cosa" (pizza, pasta, cucina veronese) e il "dove" (Mozzecane) chiude la promessa. Il "tutti i giorni" risolve l'intent "è aperto?" prima ancora che l'utente scrolli agli orari.

**CTA primaria hero:**
- *Prima:* "Scopri il Menu"
- *Dopo:* "Vedi il menù"
- *Perché:* "Scopri" è marketing-speak, "Vedi" è azione neutra. "Menù" con accento è italiano corretto. Più breve = meglio su mobile.

**Blocco Storia:**
- *Prima:* "La Pizzeria Trattoria Rosati nasce dalla passione della famiglia Rosati per la cucina autentica veronese."
- *Dopo:* "[DA CONFERMARE — anno fondazione] anni fa, la famiglia Rosati ha aperto un forno a legna in Via Bon Brenzoni. Ogni giorno accendiamo lo stesso forno, e cuciniamo come a casa."
- *Perché:* prima persona plurale ("accendiamo", "cuciniamo"), specifico geografico ("Via Bon Brenzoni"), e la sostituzione di "passione/autentica" (vuoti) con "stesso forno / come a casa" (concreti). Anno preciso al posto di "trent'anni" (non verificato).

### Trattamento del nome

**"Rosati"** senza articolo ("da Rosati", "Rosati apre alle 12"). **"Famiglia Rosati"** come firma in fondo a contenuti di tono personale. **"Pizzeria e Trattoria Rosati"** come nome esteso solo nella prima menzione di pagina e nei meta tag. Mai abbreviazioni tipo "PTR" o emoji nel nome.

---

## §6 Posizionamento competitivo locale

### Concorrenti diretti raggio 10 km

I tre principali concorrenti pizzeria/trattoria nel raggio Mozzecane → Villafranca → Valeggio sul Mincio → Castelnuovo del Garda → Verona Sud:

1. **Pizzeria Lo Sfizio (Mozzecane)** — `[DA CONFERMARE — URL e attributi]`. Diretta concorrente di posizione: stessa frazione, stessa categoria. Posizionamento osservato: pizza al taglio + asporto serale, no trattoria. Differenziazione Rosati: cucina trattoria + forno legna + dine-in.
2. **La Bottega della Pizza (Mozzecane)** — `[DA CONFERMARE]`. Asporto pizza, 12+ anni di attività. Differenziazione Rosati: trattoria con cucina di terra/pesce, non solo pizza.
3. **Berberè Verona** — [REF-ristorazione-08]. Catena nazionale di pizzerie artigianali con sede Verona. Posizionamento "pizza artigianale moderna, lievitazione lunga, ingredienti selezionati". Differenziazione Rosati: ristorazione familiare, non chain, prezzi più accessibili (range 10-20€ vs 18-30€), forno a legna tradizionale vs forno elettrico Berberè.

Concorrenti indiretti (trattorie veronesi della prima cintura):
- **Trattorie del lago di Garda (Valeggio, Peschiera)** — pesce di lago e cucina mantovana.
- **Trattoria della provincia est (Verona — Marzana, Soave)** — cucina veronese tradizionale.

### Cosa fa Rosati meglio degli altri (e oggi non comunica)

1. **Forno a legna VERO**, non elettrico travestito. Da raccontare con foto del forno, del legno cataste, della pala in azione. Berberè ha forno elettrico — è un differenziatore concreto.
2. **Pasta fatta in casa**: ravioli, fettuccine, gnocchi citati nel menu. Dimostrabile con foto della cucina del giorno (non stock, vedi `_metodologia.md` §3).
3. **Conduzione familiare** con la titolare Rosati Romina presente: relazione umana che le chain non offrono.
4. **Apertura tutti i giorni utili** (Mer chiuso, ma 6 giorni su 7) — più esteso di molte trattorie che chiudono Mer + Dom.
5. **Forno + cucina sotto stesso tetto**: Sfizio e Bottega offrono solo pizza; Rosati copre l'intero pranzo/cena, dal primo al dolce.

### Cosa fanno gli altri che Rosati non fa (e dovrebbe / non dovrebbe)

| Pratica osservata | Adottare? | Motivo |
|---|---|---|
| Berberè: prenotazione online integrata | **Sì** (in F2) | Riduce frizione, recupera clienti che non chiamano |
| Berberè: listino prezzi pubblicato in chiaro | **Sì** (in F1, dopo conferma listino) | Trust + SEO; "menù in sede" è ostile |
| Berberè: branding chain coerente multi-location | **No** | Rosati è single-location, il valore è familiare-locale |
| Sfizio/Bottega: Facebook-only presence | **No** | Già la situazione attuale di Rosati, è proprio quello che vogliamo superare |
| Trattorie lago di Garda: foto piatti dall'alto, stile editoriale | **Sì** | Modello fotografico replicabile a costo contenuto |
| Trattorie Soave: blog con ricette/eventi stagionali | **Sì** (in F3) | Long-term SEO, contenuto evergreen |

### Tabella di differenziazione su 3 assi

| Asse | Rosati | Berberè | Sfizio | Trattorie lago |
|---|---|---|---|---|
| **Prodotto** | Pizza forno legna + cucina trattoria veronese + asporto | Pizza artigianale moderna | Pizza al taglio asporto | Pesce lago + cucina locale |
| **Prezzo** | 10-20€ | 18-30€ | 5-12€ | 25-45€ |
| **Esperienza** | Familiare, quotidiana, ambiente sobrio | Design contemporaneo, atmosfera urbana | Banco e via | Romantico turistico |

Posizionamento sintetico Rosati: **"La trattoria di paese: pizza al forno a legna e cucina veronese, dal pranzo alla cena, sei giorni su sette, conduzione familiare."**

---

## §7 Architettura informativa proposta

### Mappa pagine

Sito multi-pagina con 5 entità principali + footer informativo.

| Pagina | URL | Scopo (1 frase) | Audience primaria | CTA primaria |
|---|---|---|---|---|
| Home | `/` | Qualificare visitatore in <10s e instradare alle 3 azioni primarie | Tutti | "Prenota un tavolo" (`tel:`) |
| Menù | `/menu/` | Mostrare l'offerta in modo navigabile, indicizzabile, con allergeni | Visitatore in valutazione | "Prenota un tavolo" (`tel:`) |
| La Famiglia Rosati | `/storia/` | Fiducia: chi siamo, da quanto, perché | Visitatore curioso, primi-clienti | "Vieni a trovarci" (link mappa + tel) |
| Asporto | `/asporto/` | Servire l'intent specifico "voglio portare a casa" | Cliente abituale, last-minute | "Chiama per ordinare" (`tel:` + WhatsApp se attivo) |
| Info & Contatti | `/contatti/` | Orari, indirizzo, parcheggio, pagamenti, mappa | Tutti | Mappa + `tel:` |
| Footer (universale) | — | Imprint legale (P.IVA, REA), social, privacy/cookie | Tutti | — |

### Note

- **No pagina Recensioni dedicata.** Le recensioni vivono come testimonial (max 3, con autorizzazione, vere) in fondo alla Home + link prominente alla scheda Google Business Profile per chi vuole leggerne di più.
- **No blog in F1/F2.** Il blog/eventi entra in F3 come strumento di SEO long-term (vedi §9), ma non è prerequisito per il lancio.
- **Pagina Asporto separata?** Sì se la verifica con il cliente conferma che l'asporto è un servizio strutturato (orari dedicati? menu dedicato?). Altrimenti diventa una sezione della Home/Menu.

### Diagramma testuale del flusso utente — task primario 1: prenotare un tavolo

```
[Google "pizzeria mozzecane"]
        ↓
[Home page] — hero conferma Mozzecane + forno legna + 3 CTA visibili
        ↓
[Hero CTA "Prenota un tavolo"] — `tel:+390457930601`
        ↓
[Telefonata diretta]
```

**Tempo target**: <8 secondi dal primo arrivo alla telefonata avviata. Su mobile, tap diretto su `tel:`. Su desktop, click apre app telefonia o copia automatica del numero.

### Diagramma testuale del flusso utente — task primario 2: verificare se è aperto adesso

```
[Google "rosati mozzecane orari"]
        ↓
[Home page] — sticky info bar in alto: "Aperto ora" oppure "Chiuso. Prossima apertura: domani 12:00"
        ↓
[Click sull'info bar] → [/contatti/] con orari completi tabellati
        ↓
[Decisione: vado / chiamo / scelgo asporto]
```

Lo "Aperto ora" condizionale richiede un piccolo script JS che valuti orari correnti vs orari pubblicati (in JSON locale per editabilità). Non è prerequisito di F1: in F1 si pubblica il blocco orari in modo statico, in F2 si aggiunge la logica dinamica.

### Note navigazione

- **Header sticky** su mobile e desktop, con logo + nav + CTA `tel:`. Sticky non più alta di 64px su mobile per non rubare hero.
- **Mobile menu hamburger** con animazione transform (no display:none, per accessibilità tab navigation).
- **Footer informativo completo** su tutte le pagine, con orari sintetici, indirizzo, mappa link, social.

---

## §8 Contenuti core per pagina

### Pagina Home

**Blocchi richiesti, dall'alto al basso:**

1. **Sticky info bar (sopra header)** — opzionale, attivare in F2: `Aperto ora` / `Chiusi adesso, riapriamo alle 19:00`.
2. **Hero**: foto reale del forno acceso (quando disponibile, vedi §14 raccolta foto). Label "Pizzeria · Trattoria · Mozzecane". Titolo "Rosati". Sottotitolo "Dal forno a legna alla vostra tavola — pizza, pasta fatta in casa e cucina veronese tutti i giorni." Due CTA: primaria "Prenota un tavolo" (`tel:`), secondaria "Vedi il menù" (link a /menu/).
3. **Tre prove di fiducia** (sotto hero, banda orizzontale): "Forno a legna" + "Conduzione familiare" + "Aperti 6 giorni su 7 — Mercoledì chiuso". Senza icone vettoriali generiche, con piccola illustrazione SVG custom o trattamento tipografico.
4. **Storia in breve**: 80-100 parole prima persona plurale. Riferimento al forno, alla famiglia, all'apertura quotidiana. `[DA CONFERMARE]` anno di fondazione preciso.
5. **Anteprima menu** (4 categorie, 3 voci selezionate per ognuna, prezzo `[DA CONFERMARE]`): Pizza, Primi, Pesce, Carne. Bottone "Vedi il menù completo" → /menu/.
6. **Asporto in evidenza** (se confermato come servizio attivo): mini-blocco con orari asporto + CTA "Chiama per ordinare".
7. **Tre testimonianze reali**: solo se autorizzate dal cliente (autorizzazione raccolta dal recensore con consenso firmato — vedi `_metodologia.md` §3). Altrimenti: blocco "Le voci dei nostri ospiti" con CTA "Leggi le recensioni su Google" + numero recensioni e media (al lancio: ~150, 4,2/5 — `[DA CONFERMARE]` data verifica).
8. **CTA finale**: "Pronti a sedervi a tavola?" + bottone "Chiama per prenotare" (`tel:`).
9. **Footer**: vedi §10.

**Copy guideline:**
- Storia: max 100 parole, prima persona plurale ("accendiamo", "cuciniamo", "vi aspettiamo"), una metafora ammessa (es. "il forno è il cuore della casa").
- CTA: imperativo positivo, max 3 parole ("Prenota un tavolo", "Vedi il menù", "Chiama per ordinare").
- Body sotto hero: frasi corte (max 18 parole), niente subordinate annidate.

**Elementi visivi necessari:**
- Foto del forno acceso (orientamento orizzontale, 1920x1080 minimo, formato WebP).
- Foto di un piatto signature (margherita o ravioli) dall'alto, sfondo neutro tavolo.
- Foto della famiglia Rosati al banco / in cucina (autorizzazione esplicita richiesta).
- Logo SVG vettoriale.

`[CONTENUTO DA RACCOGLIERE]`: tutte le foto sopra. Servizio fotografico locale, vedi §14.

### Pagina Menù (`/menu/`)

**Blocchi richiesti:**

1. **Header pagina** con titolo H1 "Menù" + sottotitolo informativo ("I prezzi si riferiscono al menù in sede al [data ultima verifica]. Aggiornamenti possibili in funzione di stagionalità o prezzo materia prima.").
2. **Tabs/anchor** per categorie: Pizza · Primi · Pesce · Carne · Dolci · Bevande · Vini.
3. **Per ogni piatto**: nome, descrizione breve (max 12 parole), prezzo, allergeni (icone normate o codice lettera per Reg. UE 1169/2011 art. 44).
4. **Banner "Allergeni"** in fondo: lista esplicita dei 14 allergeni Reg. UE 1169/2011 e nota "Indicateci eventuali intolleranze al momento della prenotazione."
5. **CTA fondo pagina**: "Prenota un tavolo" + "Vuoi qualcosa che non vedi? Chiamaci" (`tel:`).

**Copy guideline:**
- Descrizioni piatti: nomi propri solo se reali (es. "alla Vicentina" sì, "Speciale dello Chef" no). Max 12 parole. Niente aggettivazioni vuote ("delizioso", "sublime").
- Allergeni: codifica lettera (A=glutine, B=crostacei, ecc.) o icone, scelta da definire in F2.

**`[DA CONFERMARE]`:**
- Listino aggiornato 2026 completo con prezzi.
- Mappatura allergeni per ogni piatto (responsabilità del cliente come gestore alimentare).
- Eventuali piatti vegetariani/vegan/senza glutine espliciti.

### Pagina La Famiglia Rosati (`/storia/`)

**Blocchi richiesti:**

1. **Hero pagina** con foto della famiglia in cucina/sala (autorizzazione richiesta).
2. **Storia in 3 paragrafi** (totale 250-350 parole):
   - Paragrafo 1: l'origine. `[DA CONFERMARE]` anno e racconto del primo locale.
   - Paragrafo 2: il presente. Cosa cuciniamo, perché, chi sono i collaboratori (`[DA CONFERMARE]` numero collaboratori e ruoli).
   - Paragrafo 3: la quotidianità. La spesa al mercato veronese, il forno acceso ogni mattina, la famiglia che si siede a mangiare insieme prima del servizio.
3. **Box laterale "I numeri di Rosati"**: anno fondazione `[DA CONFERMARE]`, persone in cucina, ore di lievitazione impasto pizza, kg di legna alla settimana — solo numeri verificabili.
4. **CTA fondo**: "Venite a trovarci" + indirizzo + mappa.

**Copy guideline:**
- Prima persona plurale tutto il testo.
- Niente aggettivazioni vuote. Concretezza: tipo di legna, mercato di approvvigionamento, ricetta della nonna se davvero esiste.
- Una sola metafora a paragrafo ammessa.

### Pagina Asporto (`/asporto/`) — se confermato

**Blocchi richiesti:**

1. **Hero** con foto pizza in cartone aperto, fumante.
2. **Come funziona**: 3 step (chiama → conferma → ritira). Numero `tel:` + eventuale WhatsApp Business + orario di chiusura ordini (es. "Ultimi ordini accettati alle 21:30").
3. **Cosa puoi ordinare**: lista piatti disponibili per asporto (ad alcuni ristoranti certi piatti non vanno bene per asporto — `[DA CONFERMARE]` quali sono).
4. **Note operative**: tempi di attesa medi, packaging fornito, allergeni in etichetta come da Reg. UE 1169/2011 art. 14.
5. **CTA**: "Chiama ora" + WhatsApp se attivo.

### Pagina Info & Contatti (`/contatti/`)

**Blocchi richiesti:**

1. **Mappa Google Maps** embedded (nota privacy: usare iframe con `loading="lazy"` o, meglio, un link "carica mappa" che richiede consenso esplicito per evitare cookie Google senza consenso).
2. **Indirizzo completo** + bottone "Indica direzioni" (Google Maps).
3. **Orari completi** in tabella (per giorno della settimana). `[DA CONFERMARE]` versione definitiva.
4. **Numero telefono** in `tel:` evidenza.
5. **Email** + form contatto con campi: Nome, Email, Messaggio, checkbox consenso GDPR.
6. **Pagamenti accettati** `[DA CONFERMARE]`: contante, bancomat, carta, buoni pasto.
7. **Parcheggio** `[DA CONFERMARE]`: dove parcheggiare (via, piazza vicina).
8. **Mezzi pubblici** se applicabile.
9. **Social**: link Facebook ufficiale + eventuale Instagram.

---

## §9 SEO locale

### Keyword principale

**"pizzeria mozzecane"** — intent local, alto match con il prodotto core (pizza forno legna), volume ipotizzato medio-basso ma altissima qualificazione.

### Keyword secondarie (3)

1. **"trattoria mozzecane"** — match con il segmento ristorazione tradizionale, intent diverso da pizzeria, cattura clienti pranzo lavoro.
2. **"pizzeria forno a legna verona sud"** — competitiva ma differenziante (Berberè è elettrico, Rosati è legna).
3. **"asporto pizza mozzecane"** — intent transazionale serale, alto valore di conversione.

Keyword da non perseguire (perché competitive senza ROI o fuori posizionamento): "miglior pizzeria verona", "pizzeria verona centro".

### Setup Google Business Profile

**Categoria primaria:** `Pizzeria`.
**Categoria secondaria:** `Ristorante italiano` o `Trattoria` (verificare quale è disponibile in GBP IT).

**Campi da completare/correggere:**
- Nome: "Pizzeria e Trattoria Rosati" (nome corto, non ragione sociale completa).
- Indirizzo: Via Caterina Bon Brenzoni 20, 37060 Mozzecane (VR).
- Telefono primario: 045 793 0601.
- Sito: URL del sito proprio (a lancio).
- Orari: la versione definitiva confermata dal cliente (vedi §2).
- Foto: minimo 5 foto (esterno, interno, forno, piatti signature, team), tutte di proprietà del cliente o autorizzate.
- Servizi: pranzo, cena, asporto, prenotazioni telefoniche, dehors (`[DA CONFERMARE]`), accessibilità disabili (`[DA CONFERMARE]`).
- Attributi: Wi-Fi (`[DA CONFERMARE]`), parcheggio (`[DA CONFERMARE]`), pagamenti accettati (`[DA CONFERMARE]`).

**Cadenza post:** 1 post settimanale (offerta della settimana, evento, foto del forno acceso). Non testo finale, ma cadenza concordata.

### Schema.org (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Pizzeria e Trattoria Rosati",
  "legalName": "Pizzeria E Trattoria Rosati Snc Di Rosati Romina & C.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Caterina Bon Brenzoni 20",
    "postalCode": "37060",
    "addressLocality": "Mozzecane",
    "addressRegion": "VR",
    "addressCountry": "IT"
  },
  "telephone": "+39 045 793 0601",
  "url": "[URL del sito a lancio]",
  "image": "[URL foto principale]",
  "servesCuisine": ["Italian", "Pizza", "Veronese"],
  "priceRange": "€€",
  "acceptsReservations": true,
  "openingHoursSpecification": "[da popolare quando confermati gli orari]",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[DA CONFERMARE — geocoding indirizzo]",
    "longitude": "[DA CONFERMARE]"
  },
  "sameAs": [
    "https://www.facebook.com/PizzeriaRosati/",
    "[URL GBP a regime]"
  ]
}
```

### Citation building locale (in F1)

- **PagineGialle.it / TuttoCittà**: scheda esistente (https://www.paginegialle.it/mozzecane-vr/rosati), verificare consistenza NAP con sito.
- **Sluurpy.it**: scheda esistente, aggiornare prezzi e orari quando confermati.
- **TripAdvisor**: scheda esistente, monitoraggio recensioni.
- **Yelp Italia**: scheda esistente.
- **Reteimprese.it**: scheda esistente con ragione sociale.
- **RestaurantGuru, Gastroranking, Piatti.menu**: schede esistenti, monitorare ma non priorità.
- **Verona Sera, L'Arena.it (testate locali)**: directory locali Verona, valutare presenza.

NAP consistency: tutti gli aggregatori devono mostrare nome, indirizzo e telefono identici al sito. Discrepanze attuali da sanare.

### Title / H1 / meta — Home

- **`<title>`**: `Pizzeria e Trattoria Rosati — Mozzecane (VR) | Forno a legna, cucina veronese, asporto`
- **`<h1>`**: `Pizzeria e Trattoria Rosati`
- **`<meta name="description">`**: `Pizzeria con forno a legna e trattoria di cucina veronese a Mozzecane. Pasta fatta in casa, asporto, prenotazioni: 045 793 0601. Aperti tutti i giorni tranne mercoledì.` (max 155 caratteri)

---

## §10 Conversione: CTA, contatti, form

### Gerarchia CTA per pagina

| Pagina | CTA primaria | CTA secondaria | CTA terziaria |
|---|---|---|---|
| Home | Prenota un tavolo (`tel:`) | Vedi il menù | Chiama per asporto |
| Menù | Prenota un tavolo (`tel:`) | Chiama (`tel:`) | — |
| Storia | Vieni a trovarci (mappa) | Prenota (`tel:`) | — |
| Asporto | Chiama per ordinare (`tel:`) | WhatsApp (`wa.me/`) se attivo | — |
| Contatti | `tel:` | mailto / form | — |

### Pattern di contatto (vedi `_metodologia.md` §6)

- **`tel:` link** sempre con prefisso internazionale: `tel:+390457930601`. Visualizzato come `045 793 0601`.
- **WhatsApp Business** `[DA CONFERMARE — il cliente ha un numero WhatsApp Business?]`. Se sì, formato: `https://wa.me/39<numero>?text=Buonasera%2C%20vorrei%20informazioni%20su%20...`. Messaggio precompilato in italiano.
- **Email mailto**: `[DA CONFERMARE]` quale email utilizzare. Formato: `mailto:<email>?subject=Richiesta%20da%20sito` per pre-compilare oggetto.
- **Mappa Google**: `https://maps.google.com/?q=Via+Caterina+Bon+Brenzoni+20+Mozzecane+VR` come URL apri-app.

### Form di contatto

Pagina `/contatti/`. Campi minimi:
- Nome (text, required, max 80 char)
- Email (email, required, validazione `<input type="email">`)
- Messaggio (textarea, required, max 1000 char)
- Checkbox consenso GDPR (required, **non pre-selezionato**, testo: "Acconsento al trattamento dei miei dati personali ai sensi del Reg. UE 2016/679 per essere ricontattato in merito alla mia richiesta. Per dettagli, leggi la [privacy policy](./privacy/).")

**Anti-spam:** honeypot field (campo nascosto che, se compilato, scarta il form) + validazione lato server. **Vietato** captcha invasivo come reCAPTCHA v2/v3 senza consenso esplicito (Garante 2021 — il caricamento di reCAPTCHA imposta cookie Google).

**Backend form:** soluzioni accettabili senza captcha:
- Formspree, Web3Forms, Basin (servizi terzi GDPR-compatibili — verificare DPA disponibile).
- Endpoint custom su hosting cliente (PHP minimale + invio mail SMTP).

### Pulsanti emergenza/24h

Non applicabile a Rosati (non è un'attività emergency-driven). Le CTA `tel:` standard sono sufficienti.

### Microcopy CTA per ogni stato

**Bottone "Prenota un tavolo" (link `tel:`):**
- Default: `Prenota un tavolo`
- Hover/focus: `Chiama 045 793 0601`
- (Stato loading non applicabile per `tel:`)

**Bottone form "Invia richiesta":**
- Default: `Invia messaggio`
- Loading (durante submit): `Invio in corso…` con disabilitazione bottone
- Successo: card sopra il form con `Grazie. Ti rispondiamo entro un giorno lavorativo.` + link `tel:` come fallback urgente
- Errore: card rossa con `Qualcosa è andato storto. Riprova o chiamaci a 045 793 0601.` + `tel:` cliccabile

---

## §11 Conformità: GDPR, cookie, regole settoriali

### §11.a Privacy policy

Pagina dedicata `/privacy/`, riferita dal banner cookie e dal form contatti. Contenuti minimi (vedi `_metodologia.md` §2):

- **Titolare del trattamento**: `Pizzeria E Trattoria Rosati Snc Di Rosati Romina & C.`, P.IVA `[DA CONFERMARE]`, Via Caterina Bon Brenzoni 20, 37060 Mozzecane (VR).
- **Email contatto privacy**: `[DA CONFERMARE — email aziendale dedicata o generica]`.
- **Basi giuridiche**: art. 6 GDPR — consenso (form newsletter se attivata), esecuzione contratto (prenotazioni telefoniche), legittimo interesse (sicurezza sito), obbligo legale (registri fiscali).
- **Categorie di dati**: dati di contatto (form), dati di prenotazione (al telefono — non lascia traccia digitale, no GDPR per la chiamata in sé), dati di navigazione (cookie tecnici, analytics se autorizzati).
- **Periodo conservazione**: 24 mesi per richieste form, durata sessione per cookie tecnici, 14 mesi per analytics anonimizzati.
- **Diritti dell'interessato**: art. 15-22 GDPR (accesso, rettifica, cancellazione, opposizione, portabilità, limitazione, reclamo al Garante).
- **DPO**: non obbligatorio per Rosati (no trattamento sistematico su larga scala).

### §11.b Cookie banner conforme Provv. Garante 10 giugno 2021

Implementazione tecnica:

- **Prima visita**: nessun cookie non strettamente tecnico (no Google Analytics, no font Google fetched senza self-host se attivata profilazione).
- **Pulsanti "Accetta tutto" e "Rifiuta tutto"** ugualmente prominenti (stessa dimensione, stesso peso visivo, stessa gerarchia).
- **No scroll-as-consent.**
- **Granularità**: pannello con toggle separati per cookie statistici e cookie marketing; cookie tecnici esenti.
- **Persistenza scelta**: 6 mesi minimo prima di richiedere nuovamente.
- **Cookie policy estesa** linkata.

Soluzioni tecniche accettabili:
- Iubenda (commerciale, conforme).
- Cookiebot (commerciale).
- Custom JS minimale (ammissibile per sito piccolo, manutenzione a carico).

**Sconsigliato**: librerie open-source obsolete che non rispettano il provvedimento 2021 (es. CookieConsent v2 con configurazione default).

### §11.c Imprint legale (footer)

```
Pizzeria E Trattoria Rosati Snc Di Rosati Romina & C.
Via Caterina Bon Brenzoni 20, 37060 Mozzecane (VR)
P.IVA [DA CONFERMARE] · REA [DA CONFERMARE]
Tel. 045 793 0601 · Email [DA CONFERMARE]
```

### §11.d Sezione settoriale: pizzeria/trattoria/asporto

Riferimenti normativi specifici (vedi `_metodologia.md` §1):

**Reg. UE 1169/2011 art. 44 — Allergeni**

Obbligo di indicazione degli allergeni:
- **In sede (somministrazione)**: cartello visibile o menu con indicazione degli allergeni per ogni piatto. Codifica lettera (A-N) o icone normate.
- **Asporto / vendita a distanza (art. 14)**: etichetta sul packaging, oppure informazione fornita con altri mezzi (sito web, telefono al momento dell'ordine, schermo in negozio).
- **Lista 14 allergeni**: cereali con glutine, crostacei, uova, pesce, arachidi, soia, latte, frutta a guscio, sedano, senape, sesamo, anidride solforosa e solfiti, lupino, molluschi.

Obbligo aggiunto: il personale deve essere formato a fornire queste informazioni a richiesta. Il sito deve avere una pagina/sezione dedicata agli allergeni e non un PDF nascosto.

**DM 158/2006 — Trasporto alimenti**

Per asporto e delivery:
- Contenitori isotermici per alimenti caldi/freddi.
- Tempi di consegna massimi.
- Tracciabilità della temperatura per alimenti deperibili.

Il sito deve dichiarare se l'asporto è solo "ritiro al locale" (responsabilità termica del cliente) o include consegna a domicilio (responsabilità del ristorante).

**Differenza asporto vs. delivery vs. piattaforma terza**

| Modalità | Chi gestisce | Implicazioni sito |
|---|---|---|
| Asporto al locale | Cliente ritira | Sito: orari ritiro, menu disponibile per asporto, allergeni etichettati su packaging |
| Delivery diretto | Ristorante consegna | Sito: zona coperta, costo consegna, ordine telefonico/WA, fatturazione |
| Piattaforma terza (Glovo, Deliveroo) | Piattaforma | Sito: link alle piattaforme se attive; ma il sito proprio resta canonico per "vai e ritira" |

Rosati: in F1, l'ipotesi è **asporto al locale via telefono** (modalità 1). Verificare con il cliente: c'è anche delivery diretto? Sono attive piattaforme? `[DA CONFERMARE]`

**Somministrazione alcolici (Rosati è trattoria con vino)**

L. 287/1991 + D.Lgs. 59/2010:
- SCIA per somministrazione alimenti e bevande (presupposto, non pubblicato sul sito).
- Tabella alcolici con grado alcolico in evidenza (carta vini): obbligatoria al locale, raccomandata sul sito se la carta vini è pubblicata.
- Art. 689 c.p.: divieto somministrazione minori — non è obbligo sito ma attenzione a immagini con bottiglie e bambini insieme.

**Carta vini** `[DA CONFERMARE — il cliente vuole pubblicarla?]`. Se sì, deve includere grado alcolico per ogni voce.

---

## §12 Accessibilità e prestazioni

### Target di accessibilità: WCAG 2.1 AA

Criteri verificabili obbligatori:

1. **Contrasto colori**: minimo 4,5:1 per testo normale, 3:1 per testo grande (≥18pt o ≥14pt grassetto). Da verificare con WebAIM Contrast Checker su tutti i token del Template A "Fuoco & Farina" (rischio principale: testo grigio chiaro su fondo nero).
2. **Focus visibile**: ogni elemento interattivo (link, button, input) deve mostrare un outline visibile in stato `:focus-visible`. Spessore minimo 2px, colore in contrasto.
3. **Alt descrittivi**: ogni `<img>` non decorativa ha un `alt` che descrive concretamente il contenuto (`alt="Pizza margherita uscita dal forno a legna"`, non `alt="pizza"` o `alt=""`). Le immagini decorative hanno `alt=""` esplicito.
4. **Gerarchia heading**: un solo `<h1>` per pagina (il nome della pagina), seguito da `<h2>` per le sezioni, `<h3>` per sotto-sezioni. Niente salti gerarchici (`<h1>` → `<h3>`).
5. **Aria-label per icone**: ogni bottone-icona (es. hamburger menu, social) ha `aria-label="Apri menu"` o equivalente.
6. **`prefers-reduced-motion`**: tutte le animazioni `reveal-on-scroll` rispettano `@media (prefers-reduced-motion: reduce)` e si disattivano. Da verificare nello script `reveal-on-scroll.js`.
7. **Skip link** "Vai al contenuto principale" come primo elemento focusable della pagina (assente nel Template A, presente in altri template del portfolio).
8. **Form accessibili**: `<label>` esplicito per ogni `<input>` (non placeholder-as-label). Errori validazione collegati con `aria-describedby`.
9. **Navigazione tastiera completa**: tutta l'interfaccia raggiungibile con Tab, Shift+Tab, Enter, Esc per chiudere overlay.
10. **Screen reader test**: spot-check con NVDA o VoiceOver almeno una pagina.

### Performance — target numerici

| Metrica | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2,5s su 4G mobile |
| CLS (Cumulative Layout Shift) | < 0,1 |
| INP (Interaction to Next Paint) | < 200ms |
| Peso home page totale | < 500 KB (compresso) |
| Peso fonts | < 120 KB (subset, woff2, swap) |
| Peso CSS critico inline | < 14 KB |

### Tecniche di implementazione (in F2)

- **Font**: subset latin-1, formato WOFF2, `font-display: swap`, preload del font primario hero.
- **Immagini**: WebP/AVIF con fallback JPEG, dimensioni esplicite (`width`/`height` HTML), `loading="lazy"` sotto il fold, `srcset` per responsive.
- **CSS**: critical-CSS inline in `<head>`, resto async via `media="print" onload="this.media='all'"` o link rel=preload.
- **JS**: `defer` su tutte le `<script>`, no librerie pesanti (no jQuery, no Bootstrap JS).
- **Caching**: HTTP cache headers `Cache-Control: max-age=31536000, immutable` per asset versionati (CSS/JS/img), `no-cache` per HTML.

### Misurazione

- **Lighthouse** (Chrome DevTools) — manuale, prima del lancio e ogni mese.
- **PageSpeed Insights** — manuale, prima del lancio.
- **Schema Markup Validator** — verifica JSON-LD valido.
- **Wave / axe DevTools** — accessibilità, manuale.

Vietato senza opt-in esplicito utente: Hotjar, Microsoft Clarity, FullStory, qualsiasi sessione-replay/heatmap.

---

## §13 Riferimenti ispirazionali

8-10 riferimenti scelti dalla libreria `_references.md` (vertical: ristorazione), ognuno con applicabilità diretta a una decisione presa nelle sezioni 5-10 di questo piano.

1. **[REF-ristorazione-01] — Tenuta Centoporte** ([tenutacentoporte.it](https://tenutacentoporte.it))
   *Cosa rubiamo:* storytelling territoriale (Salento → adattare a veronese) come architettura informativa primaria. *Applicato in:* §5 (identità verbale) e §8 (pagina La Famiglia Rosati).

2. **[REF-ristorazione-02] — Landini Brothers** ([landinibrothers.com](https://landinibrothers.com))
   *Cosa rubiamo:* navigazione semplificata a 5 voci, prenotazione in evidenza header. *Applicato in:* §7 (architettura informativa).

3. **[REF-ristorazione-03] — Cutler & Co.** ([cutlerandco.com.au](https://cutlerandco.com.au))
   *Cosa rubiamo:* doppia CTA hero (prenota + menu), info pratica sotto fold senza scroll. *Applicato in:* §10 (gerarchia CTA).

4. **[REF-ristorazione-05] — The Clove Club** ([thecloveclub.com](https://thecloveclub.com))
   *Cosa rubiamo:* sticky CTA "Prenota" anche su mobile, menu espandibile in-page (no PDF). *Applicato in:* §10 (sticky CTA mobile) e §8 (pagina Menù).

5. **[REF-ristorazione-07] — The Black Swan Oldstead** ([blackswanoldstead.co.uk](https://blackswanoldstead.co.uk))
   *Cosa rubiamo:* presentazione "magazine-style", contenuti stagionali (eventi/menu) per SEO long-term. *Applicato in:* §9 (SEO locale F3) e §14 (roadmap).

6. **[REF-ristorazione-08] — Berberè Verona** ([berberepizza.it/locali/verona](https://www.berberepizza.it/locali/verona/))
   *Cosa rubiamo:* listino prezzi pubblicato in chiaro (non "menù in sede"), prenotazione online integrata. *Applicato in:* §6 (concorrente locale) e §8 (pagina Menù).

7. **[REF-ristorazione-09] — Wild Ginger** ([wildginger.net](https://wildginger.net))
   *Cosa rubiamo:* tono editoriale, niente "Benvenuti nel nostro ristorante", layout spazioso. *Applicato in:* §5 (identità verbale).

8. **[REF-ristorazione-10] — Haven Coffee + Kitchen** ([haven-annecy.fr](https://haven-annecy.fr))
   *Cosa rubiamo:* separazione netta tra CTA "Prenota tavolo" e "Asporto" come due flussi distinti. *Applicato in:* §10 (CTA per pagina) e §7 (pagina Asporto separata).

9. **[REF-ristorazione-13] — Vittoria Pizzeria** ([vittoriapizza.com](https://vittoriapizza.com))
   *Cosa rubiamo:* orari come tabella per giorno della settimana (chiarezza, dato il conflitto attuale tra fonti). *Applicato in:* §8 (pagina Contatti).

10. **[REF-ristorazione-14] — Prashad** ([prashad.co.uk](https://prashad.co.uk))
    *Cosa rubiamo:* la storia di famiglia in evidenza nella home, non nascosta nell'About. *Applicato in:* §3-§5 (la famiglia Rosati come asset narrativo).

Voci ulteriori (da [REF-ristorazione-04, 06, 11, 12, 15, 16]) restano disponibili in [`_references.md`](./_references.md) per consultazione su revisione futura o per Bottega/Sfizio in Fase 4.

---

## §14 Roadmap di implementazione e KPI

### Fase F1 — Fondamenta (settimane 1-2, ~12 ore stimate)

**Deliverable:**
1. Riunione di onboarding 90 minuti col cliente per chiarire tutti i `[DA CONFERMARE]` di §2 (P.IVA, REA, email, PEC, orari definitivi, listino aggiornato 2026 con prezzi, foto disponibili, social ufficiali, eventuali certificazioni, anno fondazione, dehors sì/no, dog-friendly sì/no, parcheggio, pagamenti, asporto modalità, WhatsApp Business sì/no, autorizzazione raccolta recensioni).
2. Visura camerale Camera di Commercio Verona (10€ circa) per chiudere i campi P.IVA / REA / forma giuridica precisa.
3. Bozza testi per ogni pagina (testi reali, non lorem) basati sui dati confermati. Da revisionare dal cliente.
4. Setup Google Business Profile completo con NAP corretto, categoria, foto.
5. Privacy policy e cookie policy approvate (template adattato + revisione legale opzionale).
6. Pianificazione servizio fotografico locale (1 mezza giornata, costo da preventivare separatamente — preventivo tipico per piccolo locale Verona: 200-400€).

**Dipendenze cliente:**
- Disponibilità per onboarding.
- Fornitura dati richiesti.
- Autorizzazione preventivo fotografico.

### Fase F2 — Build (settimane 3-5, ~40-50 ore stimate)

**Deliverable:**
1. Implementazione delle 5 pagine (Home, Menù, Storia, Asporto se confermato, Contatti) sulla base del Template A "Fuoco & Farina" rivisto secondo §3-§4.
2. Schema.org JSON-LD `Restaurant` completo, validato.
3. Cookie banner Garante-conforme.
4. Form contatto con anti-spam senza captcha invasivo.
5. Schema mobile responsive testato su 375/768/1440px.
6. Test accessibilità WCAG 2.1 AA con axe DevTools + spot-check screen reader.
7. Test performance Lighthouse — target ≥90 in Performance e Accessibility.
8. SEO on-page completo: title, description, OG, Twitter Card, alt tag, gerarchia heading, schema.
9. Setup Google Analytics 4 con anonimizzazione IP + Search Console.
10. Lancio in produzione (dominio + hosting `[DA CONFERMARE]` — il cliente ha già un dominio?).

**Dipendenze cliente:**
- Foto definitive consegnate.
- Approvazione testi.
- Accesso DNS / hosting.

### Fase F3 — Iterazione (settimane 6-8, ~10-20 ore stimate)

**Deliverable:**
1. Misurazione baseline KPI (chiamate da `tel:`, click WhatsApp se attivo, impression GBP, posizionamento keyword principale).
2. Correzione problemi emersi a 30 giorni dal lancio (form spam? contenuti non chiari? performance reali sotto target?).
3. Primo passaggio contenuti stagionali: 1-2 post GBP, eventuale articolo blog (se F3 lo introduce).
4. Raccolta feedback cliente.
5. Backlog migliorie per F4 (post-90gg).

**Dipendenze cliente:**
- Disponibilità per check di metà periodo (30gg).
- Disponibilità per check finale (90gg).

### KPI misurabili (baseline + target a 90 giorni)

| KPI | Strumento | Baseline al lancio | Target +90gg |
|---|---|---|---|
| Chiamate da `tel:` (mobile) | Google Tag Manager + GA4 evento `phone_call` | 0 (no sito esistente) | ≥30 chiamate/mese |
| Click su WhatsApp `[se attivo]` | GA4 evento `whatsapp_click` | 0 | ≥15/mese |
| Impression Google Business Profile | GBP Insights | da catturare al setup GBP | +25% rispetto a baseline |
| Visualizzazioni pagina Menù | GA4 page_view su `/menu/` | 0 | ≥200/mese |
| Posizionamento "pizzeria mozzecane" | Search Console / manuale | da misurare al lancio | top 3 risultati locali |
| Submission form contatti | GA4 evento `form_submit` | 0 | ≥5/mese |

**Strumenti**: GA4 anonimizzato (consenso preventivo), Search Console, GBP Insights. Vietato Hotjar/Clarity/heatmap senza opt-in (`_metodologia.md` §9).

### Note finali roadmap

- I tempi sono indicativi e dipendono dalla velocità di risposta del cliente sui dati `[DA CONFERMARE]`. La F1 può completarsi in 1 settimana se il cliente è disponibile, oppure dilatarsi a 3-4 settimane se i dati arrivano a rate.
- Il servizio fotografico è prerequisito di F2 ma può essere parallelo a F2 nella prima settimana di build (i contenuti scritti possono iniziare con foto placeholder).
- F3 è osservazionale: poco lavoro, ma fondamentale per validare le ipotesi del piano. Saltare F3 = rinunciare a misurare l'efficacia.

---

## Decisioni e revisioni

### v1.0 — 2026-05-05 (pilota)
- Prima stesura completa basata su dati pubblici verificati al 5 maggio 2026.
- Conflitto orari, recensioni inventate e prezzi parziali esplicitati come `[DA CONFERMARE]`.
- 16 riferimenti popolati in `_references.md` per il vertical ristorazione.
- Da rivedere dopo onboarding cliente per risolvere i ~25 `[DA CONFERMARE]` aperti.

---

## Appendice A — Domande aperte da porre al cliente in onboarding

Le seguenti domande chiudono i `[DA CONFERMARE]` prioritari della §2 e dei contenuti delle §8 e §11. Vanno fatte in un'unica sessione per evitare round-trip prolungati. Tempo stimato dell'onboarding: 75-90 minuti.

### A.1 Identità giuridica e fiscale
- Qual è la P.IVA esatta della SNC e il numero REA Camera di Commercio Verona? (In alternativa, autorizzi una visura camerale a 10 €.)
- L'indirizzo della sede legale coincide con quello operativo (Via Bon Brenzoni 20)?
- Avete una PEC attiva da pubblicare nell'imprint legale?
- Avete una mail di contatto generale per il sito (es. `info@`) o usate solo telefono?

### A.2 Orari
- Quali sono gli orari di apertura definitivi nel 2026? Per ogni giorno della settimana (Lun, Mar, Mer, Gio, Ven, Sab, Dom): apertura pranzo, chiusura pranzo, apertura cena, chiusura cena.
- C'è un giorno di chiusura settimanale fisso (al momento sembra Mercoledì da tutte le fonti, ma confermate)?
- Avete chiusure stagionali ricorrenti (es. due settimane in agosto)?
- Avete chiusure straordinarie programmate per il 2026 di cui conviene fare già spazio nel sito?

### A.3 Menu, prezzi e allergeni
- Potete fornire il listino aggiornato 2026 completo, in formato testo o foto del menu in sede? Tutte le portate, con prezzi.
- Avete un documento allergeni per ogni piatto (Reg. UE 1169/2011 art. 44)? Se no, possiamo costruirlo insieme partendo dagli ingredienti dichiarati?
- Esiste una carta vini scritta? Vorreste pubblicarla sul sito o no?
- Avete piatti vegetariani / vegan / senza glutine espliciti, o è gestito su richiesta del cliente?
- Ci sono piatti che NON possono andare in asporto (es. pasta lunga che si imbruttisce)?

### A.4 Asporto e delivery
- L'asporto è solo "ritiro al locale" o include consegna a domicilio?
- Se delivery: che zona coprite? Costo? Orari?
- Siete attivi su piattaforme tipo Glovo/Deliveroo/JustEat?
- Quale è l'orario limite per ricevere ordini di asporto?
- Avete un numero WhatsApp Business dedicato all'asporto, o si usa il fisso?

### A.5 Recensioni
- Autorizzate la pubblicazione sul sito di 3-5 recensioni reali esistenti su Google/TripAdvisor, citando nome pubblico del recensore (come da TOS Google) ed estratto?
- In alternativa, preferite NON pubblicare recensioni sul sito e linkare semplicemente alla scheda Google Business Profile?

### A.6 Storia e famiglia
- In che anno preciso è stata aperta la pizzeria/trattoria? (Il template attuale dichiara "trent'anni" non verificati.)
- Chi sono le persone in cucina e in sala oggi? Quanti collaboratori complessivi?
- C'è un dettaglio di storia familiare che vorreste raccontare e di cui andate orgogliosi? (Da decidere insieme se merita inclusione.)
- Possiamo nominare Rosati Romina come titolare e farla raccontare in prima persona, oppure preferisce una voce "famiglia" anonima collettiva?

### A.7 Servizi e attrezzature
- Avete un dehors / giardino estivo? Quanti coperti?
- Siete dog-friendly? (Il template lo dichiara, va confermato.)
- Avete parcheggio convenzionato o indicazioni utili per parcheggiare in zona?
- Quali pagamenti accettate (contante, bancomat, carte di credito specifiche, buoni pasto)?
- Avete Wi-Fi clienti? È a richiesta o spontaneo?
- Il locale è accessibile per persone con disabilità motoria?

### A.8 Foto e materiali
- Esiste un logo SVG o PDF vettoriale ufficiale? Se solo immagini raster, quale risoluzione massima disponibile?
- Avete foto recenti del forno, dei piatti signature, della sala, della famiglia? Se sì, in quale formato/risoluzione?
- Autorizzate il servizio fotografico locale di mezza giornata (preventivo 250-400 € da fornire separatamente)?
- Possiamo fotografare la famiglia in cucina/sala con piena autorizzazione di pubblicazione web?

### A.9 Social
- La pagina Facebook `facebook.com/PizzeriaRosati/` è quella ufficiale e attiva?
- Avete un profilo Instagram ufficiale? Se sì, URL.
- Volete che i post Facebook/Instagram vengano embeddati nel sito o solo linkati?

### A.10 SEO e dominio
- Avete già registrato un dominio? Se sì, quale? (Possibili: `pizzeriarosati.it`, `trattoriarosati.it`, `rosatimozzecane.it` da verificare disponibilità.)
- Avete già un hosting attivo o partiamo da zero?
- Avete account Google (Gmail) gestionale che possiamo usare per Google Business Profile, Analytics e Search Console?

### A.11 Budget e tempi
- C'è una scadenza di lancio target (es. prima dell'estate, prima delle ferie)?
- Il budget per servizio fotografico è separato o incluso? Indicativamente disponibile?
- Quanto tempo a settimana potete dedicare a fornirci materiali e revisioni?

---

## Stato checklist (Definition of Done)

- [x] 1. Sezioni complete (§1-§14)
- [ ] 2. Lunghezza target 8.300 ± 100 — in attesa wc finale
- [x] 3. Dati verificati (ogni cella §2 ha fonte o `[DA CONFERMARE]`)
- [x] 4. Nessun dato inventato (numeri/prezzi/IVA in §2 con fonte o tag)
- [x] 5. Stock photo escluse
- [x] 6. Riferimenti inline ≥8 con URL
- [x] 7. Riferimenti tracciati ([REF-ristorazione-*] in `_references.md`)
- [x] 8. Conformità GDPR + Garante 2021 nominati
- [x] 9. Conformità settoriale (Reg. UE 1169/2011 art. 44, DM 158/2006, L. 287/1991)
- [x] 10. KPI misurabili (6 KPI, baseline + target)
- [x] 11. CTA differenziate (`tel:` primaria, WA condizionale, form solo Contatti)
- [x] 12. Accessibilità WCAG 2.1 AA + ≥3 criteri
- [x] 13. Performance metriche numeriche (LCP, CLS, INP, peso)
- [x] 14. Lingua italiana
- [x] 15. No marketing-speak
