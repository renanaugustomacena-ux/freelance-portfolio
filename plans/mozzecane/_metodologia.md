# Metodologia condivisa — Piani Mozzecane

Questo documento contiene il boilerplate metodologico citato da tutti i 12 piani in `plans/mozzecane/<slug>.md`. Lo scopo è evitare ripetizione: ogni piano fa riferimento alle sezioni qui invece di copiarle.

---

## 1. Glossario di acronimi e riferimenti normativi

### Generali

- **GDPR** — Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio del 27 aprile 2016, relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali.
- **Provv. Garante 10 giugno 2021 n. 231** — Linee guida cookie e altri strumenti di tracciamento del Garante per la protezione dei dati personali (banner cookie, scroll-as-consent vietato, equivalenza accetta/rifiuta).
- **Codice della Privacy** — D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
- **WCAG 2.1 AA** — Web Content Accessibility Guidelines, livello AA (target di conformità minimo per tutti i piani).
- **LCP** — Largest Contentful Paint (Core Web Vitals).
- **CLS** — Cumulative Layout Shift.
- **INP** — Interaction to Next Paint.
- **GBP** — Google Business Profile.
- **SCIA** — Segnalazione Certificata di Inizio Attività.
- **REA** — Repertorio Economico Amministrativo (Camera di Commercio).
- **PEC** — Posta Elettronica Certificata (obbligatoria per imprese).
- **NAP** — Name, Address, Phone (consistenza tra GBP, sito, directory locali).

### Settore farmacia

- **D.Lgs. 219/2006** — Codice comunitario sui medicinali per uso umano. Articoli 113–127 disciplinano la pubblicità.
- **Reg. UE 1924/2006** — Indicazioni nutrizionali e sulla salute (health claims) fornite sui prodotti alimentari. Lista chiusa di claim approvati EFSA.
- **Federfarma** — federazione delle farmacie italiane (categoria, non ente regolatore).

### Settore erboristeria

- **D.Lgs. 169/2004** — Disciplina degli integratori alimentari.
- **Reg. UE 1924/2006** — vedi sopra.
- **Reg. CE 1223/2009** — vedi settore estetica.

### Settore estetica

- **Reg. UE 1223/2009** — Regolamento sui prodotti cosmetici. Disciplina i claim ammissibili (no funzioni terapeutiche).
- **L. 1/1990** — Disciplina dell'attività di estetista (qualifica professionale, ambito).

### Settore alimentare (salumifici, ristorazione, asporto)

- **Reg. UE 1169/2011** (FIC) — Fornitura di informazioni sugli alimenti ai consumatori. Allergeni (14 categorie), etichettatura, vendita a distanza (art. 14).
- **Reg. CE 178/2002** — Tracciabilità alimentare (one-step-back / one-step-forward).
- **Reg. CE 852/2004** — Igiene dei prodotti alimentari (HACCP).
- **DM 158/2006** — Requisiti igienico-sanitari trasporto alimenti caldi/freddi.

### Settore HVAC/Idraulica

- **DM 37/2008** — Riordino delle disposizioni in materia di attività di installazione degli impianti all'interno degli edifici. Lettera A (elettrici), B (idrici, gas, climatizzazione), ecc. Dichiarazione di conformità obbligatoria.
- **Reg. UE 517/2014** + **DPR 146/2018** — F-Gas: patentino frigorista, registro telematico FGAS.
- **Art. 1667 c.c.** — Garanzia per difformità e vizi dell'opera (denunzia 2 anni / azione 1 anno dalla denunzia / 10 anni per immobili compimento).

### Settore disinfestazione

- **DM 274/1997** — Regolamento attività di pulizie, disinfezione, disinfestazione, derattizzazione e sanificazione.
- **Reg. UE 528/2012** — Mercato e uso dei biocidi.
- **D.Lgs. 152/2006** — Norme in materia ambientale (smaltimento rifiuti speciali).

### Settore somministrazione (bar, ristorazione)

- **L. 287/1991** + **D.Lgs. 59/2010** — Disciplina della somministrazione di alimenti e bevande, SCIA.
- **Art. 689 c.p.** — Somministrazione di bevande alcoliche a minori (divieto, cartello informativo).
- **SIAE** — Società Italiana Autori ed Editori (musica diffusa, dehors).

### Settore arredamento / vendita beni

- **Codice del Consumo (D.Lgs. 206/2005)** — art. 128–135 (garanzia legale di conformità), art. 52 (diritto di recesso 14 giorni), art. 59 (eccezioni al recesso, lettera c per beni personalizzati).

---

## 2. Baseline GDPR e cookie (universale)

Tutti i siti devono implementare:

### Cookie banner conforme a Provv. Garante 10 giugno 2021
- **Prima visita**: nessun cookie non strettamente tecnico viene installato.
- **Pulsanti**: "Accetta tutto" e "Rifiuta tutto" devono essere ugualmente visibili (stessa dimensione, stesso peso visivo, stessa posizione gerarchica).
- **No scroll-as-consent**: il consenso non si forma dallo scrolling, dal click su elementi della pagina diversi dal banner, dalla chiusura della finestra.
- **No pre-flag**: i checkbox per categorie di cookie facoltativi sono di default *non* selezionati.
- **Granularità**: l'utente può rifiutare per categorie (statistici, marketing, profilazione, ecc.).
- **Persistenza**: la scelta deve essere rispettata per almeno 6 mesi prima di chiedere di nuovo.
- **Cookie policy estesa**: link nel banner che porta alla pagina dedicata.

### Privacy policy (pagina dedicata)
- Titolare del trattamento: ragione sociale + P.IVA (verificate).
- Base giuridica per ogni finalità (art. 6 GDPR).
- Categorie di dati raccolti.
- Periodo di conservazione per categoria.
- Diritti dell'interessato (art. 15–22 GDPR).
- DPO se nominato (di norma non obbligatorio per piccole imprese).
- Modalità di contatto per esercitare i diritti.

### Form di contatto
- Checkbox di consenso esplicito *non* pre-selezionato per finalità diverse dalla risposta alla richiesta (es. newsletter).
- Link alla privacy policy nel form.
- Conferma del consenso (timestamp) memorizzata lato server o nel servizio email.

### Imprint legale (footer di ogni pagina)
- Ragione sociale.
- P.IVA / Codice Fiscale.
- Numero REA.
- Indirizzo sede legale.
- Email di contatto.
- (Per attività regolamentate) numero di iscrizione albo / autorizzazione.

---

## 3. Esclusioni vincolanti

I seguenti elementi sono **vietati** in ogni piano:

### Foto stock
- Vietato: Unsplash, Pexels, Shutterstock, iStock, Adobe Stock, Pixabay, Freepik per immagini di prodotto, ambiente, team o lavorazione.
- Ammesso: icone vettoriali generiche (Phosphor, Heroicons, Tabler) per simbologia interfaccia.
- Ammesso: pattern decorativi astratti (CSS, SVG generato) come decorazione di sfondo.
- Lacuna foto = riga "raccolta foto / servizio fotografico locale" nel §14 roadmap.

### Recensioni e testimonial
- Vietato: nomi inventati, recensioni paraphrasate, recensioni di amici/conoscenti senza Google Review pubblica.
- Ammesso: recensioni reali pubblicate su Google Maps / TripAdvisor / Facebook citate testualmente, con nome pubblico, data, e screenshot di backup conservato fuori dal repo.
- Ammesso: testimonial scritti su richiesta del titolare, con consenso firmato a essere pubblicati, archiviato.

### Lorem ipsum e filler
- Vietato: testo placeholder ("lorem ipsum", "Lorem ipsum dolor", "the quick brown fox", "sample text", "your text here").
- Ammesso: tag esplicito `[CONTENUTO DA RACCOGLIERE]` o `[DA SCRIVERE: <oggetto, vincoli>]` come segnaposto nella stesura del piano (mai nel deliverable finale al cliente).

### Marketing-speak
- Vietato senza specifico verificabile: "soluzione 360°", "user-friendly", "all'avanguardia", "esperienza unica", "rivoluzionario", "leader del settore", "innovativo", "sinergia", "best-in-class".
- Ammesso quando supportato da numero, fonte, o esempio concreto: "leader nel comune di Mozzecane per recensioni Google su categoria pizzeria (47 recensioni, media 4.6 al [data])".

### Dati di contatto e prezzi
- Vietato: numeri di telefono inventati o "plausibili", indirizzi mail inventati, prezzi euro stimati senza fonte, certificazioni numerate senza numero verificato.
- Ammesso: tag `[DA CONFERMARE — chiedere al cliente]` o omissione totale del campo.

### SLA, garanzie, certificazioni
- Vietato: "Intervento entro X minuti", "Garanzia su tutti i lavori", "100% soddisfatto o rimborsato", "Tempi di risposta entro Y ore" senza una policy interna scritta che lo confermi.
- Ammesso: formulazione condizionale ("interveniamo nel più breve tempo possibile"), o numero specifico solo se il cliente conferma per iscritto la SLA.

---

## 4. Processo di ricerca riferimenti

Per ogni vertical:

1. **Query iniziali** (8–10): mix italiano e inglese (vedi pattern nel meta-plan §"Research methodology").
2. **WebSearch** per ognuna, raccogliere ~10 candidati per query.
3. **Filtro pre-fetch**: scartare aggregatori (Wix templates, Squarespace gallery), competitor diretti dell'utente nelle stesse categorie (per evitare conflitti), siti con TLD sospetti (.tk, .ml, ecc.).
4. **WebFetch** sui ~20–30 candidati superstiti per estrarre lezioni concrete.
5. **Soglia di ammissione**: ≥3 dei 6 criteri di qualità soddisfatti (vedi meta-plan).
6. **Catalogazione**: ogni voce ammessa entra in `_references.md` con ID stabile `[REF-<vertical>-<NN>]`, usando il template YAML.
7. **Top-8 inline per piano**: scegliere voci con ≥6 criteri soddisfatti **e** applicabilità diretta a una decisione presa nelle sezioni 5–10 del piano in stesura.

Aggiornamento `data_accesso` ogni volta che la voce viene ri-verificata (siti chiudono, redirect, ecc.).

---

## 5. Processo di verifica dati cliente

Per ogni business:

1. **Tentativo 1 — Google Business Profile**: ricerca `"<nome business>" Mozzecane site:google.com/maps` o equivalente. Se trovato: catturare URL, NAP, orari, recensioni (numero + media), foto pubbliche.
2. **Tentativo 2 — Camera di Commercio Verona / visura**: ricerca `"<nome business>" Mozzecane partita iva`. Se non aperto sul web: tag P.IVA come `[DA CONFERMARE — richiedere visura al cliente]`.
3. **Tentativo 3 — Facebook ufficiale**: ricerca `"<nome business>" Mozzecane site:facebook.com`. Se trovato: catturare URL, ultimo post (data), follower, info contatto pubblicate.
4. **Tentativo 4 — PagineGialle / TuttoCittà**: solo come secondaria; se contraddice GBP, vince GBP.
5. **Tentativo 5 — Sito attuale del cliente** (se esiste): solo come *seconda* fonte; mai unica.
6. **Tentativo 6 — Albi e registri di settore**: Federfarma per farmacie, Albo Imprese Artigiane per HVAC/disinfestazione, ecc.

Esiti:
- **Verificato**: cella in §2 contiene il valore + URL fonte.
- **Lacuna**: cella in §2 contiene `[DA CONFERMARE — chiedere al cliente: <domanda specifica>]`.
- **Conflitto**: cella in §2 contiene il valore preferito + nota `[CONFLITTO — GBP: X / Facebook: Y / verificare con il cliente]`.

---

## 6. Pattern UX italiani vincolanti

### Contatti
- **`tel:` link** con prefisso internazionale (`+39`) sempre, anche per numeri italiani, su tutti i numeri visibili.
- **`wa.me/` link** per WhatsApp Business, con numero in formato internazionale senza spazi (es. `https://wa.me/390457930048`), e parametro `text=` con messaggio precompilato in italiano.
- **`mailto:` link** per email, con eventuale `?subject=` precompilato.
- **`maps.google.com/?q=<indirizzo+codificato>`** per "Indica indirizzo" / "Apri in Google Maps".

### Orari
- Formato italiano: `Lun – Dom: 12:00 – 15:00 / 18:00 – 22:00` (trattino lungo "–", non "-"; due punti, non punti).
- Indicare giorni di chiusura in evidenza (`<strong>` o equivalente).
- Indicare chiusure stagionali (es. `Chiuso in agosto: 1 – 20 ago`).

### Numeri di telefono
- Formato visualizzato: `045 793 0601` (gruppi 3-3-4 per fissi VR, 3-3-4 o 3-2-2 per cellulari).
- Formato in `tel:`: `+390457930601` (senza spazi, con prefisso).

### Forme di cortesia
- "Voi" (formale plurale, comune in Veneto per il pubblico generico): default ammesso.
- "Tu" (informale): ammesso solo se il tono del business lo giustifica (estetica, bar giovani).
- "Lei" (formale singolare): pesante per piccole attività, evitare salvo eccezione.

### Festività e periodi
- Riferimenti a "stagione fiere Verona" (Vinitaly aprile, Fieracavalli novembre, ecc.) ammessi se rilevanti.
- "Ferragosto", "Pasqua", "Natale" ammessi senza spiegazione.
- "Black Friday" ammesso ma non per servizi locali tradizionali.

---

## 7. Schema.org per LocalBusiness — tipi mappati

| Vertical | `@type` consigliato | Sottotipi rilevanti |
|---|---|---|
| Pizzeria/Trattoria (Rosati) | `Restaurant` + `LocalBusiness` | `servesCuisine`, `acceptsReservations`, `menu`, `priceRange` |
| Asporto pizza (Bottega, Sfizio) | `FastFoodRestaurant` o `Restaurant` con `hasMenu` | `acceptsReservations: false`, `takeaway: true` |
| Bar/Aperitivi (Maracaibo) | `BarOrPub` + `LocalBusiness` | `servesCuisine`, `priceRange` |
| Salumificio (Effebi) | `FoodEstablishment` + `Store` | `acceptedPaymentMethod`, `priceRange` |
| Erboristeria (Girasole) | `HealthAndBeautyBusiness` + `Store` | — |
| Farmacia (Giovannini) | `Pharmacy` + `LocalBusiness` | `medicalSpecialty`, `availableService` |
| Estetica (Armonia) | `BeautySalon` + `LocalBusiness` | `availableService` (singoli trattamenti come `Service`) |
| HVAC/Idraulica (Balzan, Clima World) | `Plumber` + `HVACBusiness` + `LocalBusiness` | `areaServed`, `serviceType` |
| Disinfestazione (3D Service) | `LocalBusiness` (no tipo specifico più ristretto) | `areaServed`, `serviceType: PestControl` |
| Arredamento (RB Design) | `FurnitureStore` + `LocalBusiness` | `priceRange`, `paymentAccepted` |

Proprietà obbligatorie per *tutti*: `name`, `address` (PostalAddress completo), `telephone`, `openingHoursSpecification`, `geo` (latitudine, longitudine), `image`, `url`, `sameAs` (URL social ufficiali).

---

## 8. KPI baseline — universali e per vertical

### Universali (3 minimi per ogni piano)
1. **Chiamate da `tel:`** — UTM o link tracking. Baseline: 0 (sito non esiste / no tracking). Target 90gg: ≥10/mese.
2. **Click WhatsApp** — link `wa.me/` con UTM. Baseline: 0. Target 90gg: ≥15/mese (verticali consumer); ≥5/mese (verticali B2B).
3. **Impression Google Business Profile** — GBP Insights. Baseline: corrente al lancio. Target 90gg: +30% rispetto a baseline.

### Specifici per vertical (suggeriti)
- **Ristorazione/Bar**: prenotazioni dirette via form/WA, fotocopertina aggiornata mensilmente.
- **Asporto**: ordini ricevuti via WhatsApp/telefono (cliente li traccia manualmente).
- **HVAC/Idraulica**: richieste preventivo da form, chiamate emergenza notturna.
- **Disinfestazione**: richieste sopralluogo gratuito.
- **Farmacia**: consultazione orari turni, click "indica indirizzo".
- **Erboristeria/Estetica**: prenotazione consulenza/trattamento via WA.
- **Salumificio**: contatti per ordini ingrosso (B2B), pagine prodotto più visitate.
- **Arredamento**: richieste preventivo, downloadlistino se reso disponibile.

---

## 9. Strumenti di misurazione

- **Google Analytics 4** con anonimizzazione IP attiva (`anonymize_ip: true`) e consenso preventivo.
- **Google Search Console** — verifica proprietà, monitoraggio query, errori indicizzazione.
- **Google Business Profile Insights** — chiamate, click direzioni, click sito, query di ricerca.
- **PageSpeed Insights** / **Lighthouse** — performance e accessibilità (manuale, periodico).
- **Schema Markup Validator** — verifica schema.org valido.
- **Wave** o **axe DevTools** — accessibilità (manuale, periodico).

**Vietato senza opt-in esplicito**: Hotjar, Clarity, FullStory, qualsiasi heatmap/replay.
**Vietato per tutti i piani**: Facebook Pixel di base (senza consenso categoria marketing); remarketing tag.

---

## 10. Format dei deliverable interni

- Tutti i piani in **markdown puro**, no HTML annidato salvo `<details>`/`<summary>` per blocchi richiudibili lunghi.
- Heading: `#` per titolo piano, `##` per le 14 sezioni, `###` per sub-sezioni (4.1, 4.2, 11.d, ecc.).
- Tabelle: markdown standard, allineamento numerico a destra dove rilevante.
- Codice: blocchi triple-backtick con linguaggio (`yaml`, `html`, `css`, `bash`).
- Immagini: solo riferimenti a file locali (`./img/...`) o URL esterni autorizzati; mai blob inline.
- Lunghezza riga: senza limite hard, ma preferenza per riga semantica (una frase per riga) nei paragrafi narrativi.

---

## 11. Versionamento e tracciamento decisioni

- I piani vivono in `git`: ogni revisione dà luogo a un commit con messaggio `plans(<slug>): <change>`.
- Le decisioni rilevanti (es. cambio di tono, nuova fonte normativa) si annotano in fondo al piano sotto `## Decisioni e revisioni`.
- Quando una voce `[DA CONFERMARE]` è risolta dal cliente, si aggiorna il piano e si aggiunge nota di conferma con data.
