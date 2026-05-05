# Libreria riferimenti — Mozzecane Templates Uplift

Catalogo curato di siti di riferimento per ognuno dei 12 verticali. Ogni voce ha un ID stabile `[REF-<vertical>-<NN>]` citabile dai piani.

**Totale atteso a regime:** 350–400 voci uniche. Stato attuale: in popolamento.

**Schema voce:**
```yaml
[REF-<vertical>-<NN>]
nome: <Nome del sito o dell'attività>
url: https://...
tipologia: concorrente_diretto | pari_verticale_fuori_area | cross_vertical
curatela: awwwards | land-book | siteinspire | lapa | httpster | onepagelove | cssda | search | -
data_accesso: AAAA-MM-GG
lezioni:
  - L1: <una riga, concreta>
  - L2: ...
  - (3-5 lezioni)
applicabilita:
  - <slug-business>: <una riga: dove nel piano applicare la lezione>
note: <opzionale>
```

---

## Vertical: ristorazione (Rosati, Bottega della Pizza, Lo Sfizio — pizzeria/trattoria/asporto)

```yaml
[REF-ristorazione-01]
nome: Tenuta Centoporte
url: https://tenutacentoporte.it
tipologia: pari_verticale_fuori_area
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: storytelling territoriale (Salento, vigna) come architettura informativa primaria — la pagina "Il Luogo" precede quella "Menu"
  - L2: tipografia editoriale (serif display + sans neutro) per dare gravitas alla tradizione
  - L3: foto reali dell'ambiente, non stock; foto del proprietario nominato e raccontato
  - L4: sezione "Eventi" che converte aperitivo/cena tematica in motivo di prima visita
applicabilita:
  - rosati: §5 (identità verbale, narrativa familiare) e §8 (pagina "La Nostra Storia")
  - bottega-della-pizza: §8 (raccontare il forno e gli impasti, non solo elencare pizze)
note: italiano, ottimo benchmark per il tono editoriale serio senza essere pretenzioso

[REF-ristorazione-02]
nome: Landini Brothers
url: https://landinibrothers.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: bilanciamento tra fotografia sepia/heritage e immagini contemporanee, per dire "siamo storici ma vivi"
  - L2: navigazione semplificata: Home / Menu / Story / Reservations / Contact — cinque voci, niente di più
  - L3: prenotazione in evidenza nel header su tutte le pagine
applicabilita:
  - rosati: §7 (architettura informativa) — ridurre il numero di pagine, mettere "Storia" subito dopo Menu
  - effebi: §5 (heritage italiano senza essere kitsch)
note: gestito su Squarespace, validazione che template semplici reggono se la fotografia è curata

[REF-ristorazione-03]
nome: Cutler & Co.
url: https://cutlerandco.com.au
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: hero photo composta (vino, tavolo, ospiti) — non singolo piatto, ma scena
  - L2: posizione, orari e contatto immediatamente sotto il fold senza cliccare
  - L3: doppia CTA hero — "Reserve" e "View Menu"
applicabilita:
  - rosati: §10 (gerarchia CTA hero) — usare due CTA primarie, non una sola
  - bottega-della-pizza: §8 (foto-scena del forno, non solo della pizza isolata)
note: minimal e funzionale; modello per progetti con budget foto contenuto

[REF-ristorazione-04]
nome: Sarma
url: https://sarmarestaurant.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: hero a carosello fotografico full-screen ma con CTA fisso sopra
  - L2: feature-set completo (team, gift cards, menu toggle pranzo/cena, reservations) ben gerarchizzato
  - L3: pagina "Team" con foto ambientate, non headshot
applicabilita:
  - rosati: §8 (pagina "Chi siamo" con la famiglia Rosati, ambientata in cucina/sala)
  - armonia: §8 (team estetiste come motivo di fiducia)
note: ambizioso, utile per benchmark di "tutto il possibile" anche se Rosati non avrà tutto

[REF-ristorazione-05]
nome: The Clove Club
url: https://thecloveclub.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: minimalismo con grafica vegetale animata (idle motion, prefers-reduced-motion rispettato)
  - L2: prenotazione in alto a destra fissa, sempre visibile
  - L3: menu espandibile in-page invece che PDF download
applicabilita:
  - rosati: §10 (sticky CTA "Prenota" anche su mobile)
  - bottega-della-pizza: §8 (menu espandibile, no PDF — Italian small biz scarica raramente)
note: micro-interazioni curate, ottimo per ispirare moderazione

[REF-ristorazione-06]
nome: Brasserie Blanc
url: https://brasserieblanc.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: storytelling sulla provenienza e sostenibilità degli ingredienti come prova di fiducia
  - L2: gestione multi-location con location selector all-top
  - L3: voucher/buoni regalo come revenue secondario
applicabilita:
  - rosati: §6 (raccontare ingredienti locali del veronese — solo se vero, non fabbricato)
  - effebi: §6 (narrativa filiera corta del veneto)
note: scala più grande, ma il modello "filiera" è applicabile anche al ristorante familiare

[REF-ristorazione-07]
nome: The Black Swan Oldstead
url: https://blackswanoldstead.co.uk
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: presentazione "magazine-style" con caricamento veloce
  - L2: "Book Now" sticky e accesso menu in massimo 1 click
  - L3: blog/eventi che alimentano SEO sul lungo periodo
applicabilita:
  - rosati: §9 (SEO locale via contenuti stagionali — menù autunnale, sagra zucca veronese, ecc.)
note: validazione che blog rimane utile per ristorante anche piccolo, se i contenuti sono brevi

[REF-ristorazione-08]
nome: Berberè Verona
url: https://www.berberepizza.it/locali/verona/
tipologia: concorrente_diretto
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: pagina dedicata per ogni location all'interno di un dominio brand più grande
  - L2: "prenota online" via form integrato, no telefonata richiesta
  - L3: listino prezzi pubblicato in chiaro (no "consultare il menu in sede")
applicabilita:
  - rosati: §6 (concorrente locale veronese, modello da osservare e differenziare — Rosati è familiare, Berberè è chain)
  - bottega-della-pizza: §6 (idem)
note: concorrente Verona — utile per posizionamento §6, da non imitare 1:1

[REF-ristorazione-09]
nome: Wild Ginger
url: https://wildginger.net
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: layout spazioso, pochi elementi, niente carosello hero
  - L2: titoli editoriali (no "Welcome to our restaurant"), prima persona singolare/plurale
  - L3: foto cibo con sfondo neutro, non scenografato eccessivamente
applicabilita:
  - rosati: §5 (tono editoriale, niente "Benvenuti nel nostro ristorante" — bandito)
note: utile per chi vuole "less is more" senza apparire vuoto

[REF-ristorazione-10]
nome: Haven Coffee + Kitchen (Annecy)
url: https://haven-annecy.fr
tipologia: cross_vertical
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: tipografia mista grande (titoli enormi) + testo lungo per storytelling
  - L2: gallery interattiva piatti con prezzi inline, no PDF
  - L3: prenotazione + take-away come due flussi separati con bottoni distinti
applicabilita:
  - rosati: §10 (separare CTA "Prenota tavolo" e "Asporto" — sono due intenti diversi)
  - bottega-della-pizza: §10 (CTA primaria asporto, secondaria contatto)
note: sito francese, eccellente esempio di hospitality moderna

[REF-ristorazione-11]
nome: Paput Menorca
url: https://paputmenorca.com
tipologia: cross_vertical
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: branding territoriale fortissimo (Menorca) come asset — storytelling del luogo
  - L2: galleria menu fotografica con didascalie brevi, no descrizioni lunghe
  - L3: lingua doppia (catalano/inglese) ben gestita, switcher in alto
applicabilita:
  - rosati: §5 (territorialità veronese come asset, ma senza esagerare in folklore)
note: utile per validare che "piccolo + locale" si vende meglio di "internazionale generico"

[REF-ristorazione-12]
nome: FARMform
url: https://farmform.be
tipologia: cross_vertical
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: storytelling sulla filiera (azienda agricola → tavola)
  - L2: tipografia ibrida serif/sans con interlinea ampia
  - L3: form contatto con campo "tipo richiesta" che instrada la conversione
applicabilita:
  - effebi: §8 (raccontare la stagionatura come la pagina FARMform racconta la coltivazione)
  - rosati: §6 (filiera ingredienti — solo se documentabile)
note: belga, applicabile per qualsiasi food business che rivendica autenticità

[REF-ristorazione-13]
nome: Vittoria Pizzeria
url: https://vittoriapizza.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: branding tradizionale italiano senza scivolare in "Italianissimo" stereotipato
  - L2: menu suddiviso in 3 colonne — Antipasti / Pizze / Dolci — senza scroll
  - L3: orari diversi giorni della settimana visualizzati come tabella, non testo
applicabilita:
  - rosati: §8 (orari come tabella, dato il conflitto attuale tra fonti — chiarezza prima)
  - bottega-della-pizza: §8 (menu griglia 3 colonne)
note: pizzeria italiana, replicabile

[REF-ristorazione-14]
nome: Prashad
url: https://prashad.co.uk
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: la storia di famiglia in evidenza nella home, non nascosta nel "About"
  - L2: prenotazione e cookbook come due CTA primarie complementari
  - L3: certificazioni (vegan award, Michelin Bib Gourmand) come trust badge in posizione fissa
applicabilita:
  - rosati: §3-§5 (la "famiglia Rosati" come asset narrativo principale, se il cliente lo conferma)
note: ristorante familiare, modello rispettoso di "patrimonio di famiglia come marketing"

[REF-ristorazione-15]
nome: King Restaurant NYC
url: https://kingrestaurant.nyc
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: cucina italo-francese — modello di cross-tradizione raccontato senza ambiguità
  - L2: hero con video silenzioso (mute autoplay) — micro-interazione cucina che lavora
  - L3: footer con "joining our team" come canale recruiting
applicabilita:
  - rosati: §8 (footer "lavora con noi" — se il cliente ha turnover servizio sala)
note: video hero applicabile solo se Rosati ha materiale girato in cucina; altrimenti foto fisse

[REF-ristorazione-16]
nome: Sluurpy
url: https://www.sluurpy.it/mozzecane/ristorante/107692/pizzeria-e-trattoria-rosati
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: aggregatore Italia che già lista Rosati con menu prezzi (74/100, 1.067 voti)
  - L2: contiene prezzi pubblici parzialmente sovrapposti al template — fonte di verifica
  - L3: cattura traffico SEO che il sito di Rosati oggi non capta
applicabilita:
  - rosati: §2 (fonte di verifica prezzi/orari/recensioni) e §9 (recuperare quel traffico SEO con sito proprio)
note: NON da imitare — è da spodestare con sito proprio del cliente
```
---

## Vertical: hvac-idraulica (Balzan, Clima World)

```yaml
[REF-hvac-idraulica-01]
nome: SPS Plumbers
url: https://www.spsplumbers.com.au
tipologia: pari_verticale_fuori_area
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: posizionamento "Multi-Award Winning Plumbing Company" + "Over 20 Dedicated Years" in evidenza hero — credibilità per longevità
  - L2: focus su "Customer Experience & Quality Workmanship" come due valori, non lista di servizi
  - L3: galleria foto + video lavori come prova oggettiva — non testimonial scritti
  - L4: SEO locale aggressivo sulle keyword "plumber + city"
applicabilita:
  - balzan: §3-§5 (positioning longevità "dal 1990" se confermato) e §8 (galleria lavori reali)
  - clima-world: §5 (positioning differenziato vs Balzan, evitando "due aziende uguali")
note: Awwwards Nominee, australiano, modello replicabile per piccola impresa familiare con storia

[REF-hvac-idraulica-02]
nome: Edwards Plumbing
url: https://edwardsplumbingllc.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: foto del team padre-figlio in evidenza hero — fiducia immediata
  - L2: CTA multiple ("Schedule Service" + "Free Estimate") strategicamente posizionate
  - L3: numero telefono e zona servita prominenti
  - L4: sezione recensioni clienti + coupon per conversione
applicabilita:
  - balzan: §3 (foto Balzan Nicola + eventuale famiglia/team) e §10 (doppia CTA "Preventivo" + "Pronto Intervento")
note: Squarespace, conferma che template semplici funzionano se la fotografia umanizza

[REF-hvac-idraulica-03]
nome: Circle Plumbing and Heating
url: https://circleplumbingandheating.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: video del team al lavoro sopra il fold — autenticità, non foto stock
  - L2: recensioni Google e Facebook integrate ad alta visibilità
  - L3: navigazione singola menu, design pulito
applicabilita:
  - balzan: §8 (eventuale video corto del team durante un intervento — se autorizzato)
note: validazione che "less is more" funziona anche su HVAC

[REF-hvac-idraulica-04]
nome: Aspen Mountain Plumbing
url: https://aspenmtnplumbing.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: CTA contestuale "We are open" — pattern dinamico aperto/chiuso, applicabile in italiano
  - L2: foto famiglia + widget recensioni sopra il fold
  - L3: form lead capture con upload foto del problema ("Send us your plumbing issue with images")
applicabilita:
  - balzan: §10 (form preventivo con campo upload foto) — innovativo per riduzione frizione preventivi
  - clima-world: §10 (idem)
note: Webflow, modello tecnicamente avanzato ma replicabile; il form-with-photo è il differenziatore chiave

[REF-hvac-idraulica-05]
nome: Carter Services
url: https://carterservices.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: bottoni cliccabili e icone servizi grandi — orientamento rapido
  - L2: prominenza "1.700+ reviews 4,9/5" come trust signal numerico
  - L3: CTA dirette con enfasi sociale
applicabilita:
  - balzan: §6 (numero recensioni e media come prova quantitativa, se Balzan ha reviews su GBP)
note: scala più grande di Balzan, ma il principio "trust by numbers" si applica

[REF-hvac-idraulica-06]
nome: Mr. Rooter
url: https://www.mrrooter.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: pagine dedicate per ogni località servita — SEO locale aggressivo
  - L2: accesso rapido info servizio + contatti
  - L3: gestione multi-area come funzione strategica
applicabilita:
  - balzan: §9 (creare landing dedicate "Idraulico Villafranca", "Idraulico Valeggio sul Mincio" — 6-7 pagine zona servita)
  - clima-world: §9 (idem)
note: chain americana, ma il pattern "una pagina per zona" funziona per piccole imprese italiane con catchment esteso

[REF-hvac-idraulica-07]
nome: Sanders Home Services
url: https://sandershomeservices.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: carosello scorrevole di lavori completati con foto reali
  - L2: chat interattiva per pre-qualificare richieste
  - L3: video brand prominente come storytelling visivo
applicabilita:
  - balzan: §8 (galleria lavori recenti — il template ha già 3 case-study; serve espanderli a 6-8 con foto reali)
note: carosello ammesso solo se le foto sono buone; altrimenti meglio una galleria griglia

[REF-hvac-idraulica-08]
nome: Lion Home Service
url: https://www.lionhomeservice.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: campo dedicato "emergency service" con orari estesi visibili
  - L2: foto team + automezzi come trust badge unico
  - L3: messaggistica "always available" senza promettere tempi impossibili
applicabilita:
  - balzan: §10 (banner pronto intervento — riformulare "60 minuti" come "appena possibile, 24/7")
  - clima-world: §10 (idem)
note: pattern emergency americano replicabile italiano; chiave è non promettere SLA non rispettabili

[REF-hvac-idraulica-09]
nome: Parklane Plumbing
url: https://parklaneplumbing.com.au
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: credenziali industria e tessere associative in evidenza
  - L2: 20+ anni di esperienza come asset principale del positioning
  - L3: branding professionale coerente cross-pages
applicabilita:
  - balzan: §3-§5 (DM 37/08 abilitazione + Federazione Artigiani — se confermati — come trust badge fissi)
note: Webflow, modello B2B/professionale che può ispirare anche piccole imprese italiane

[REF-hvac-idraulica-10]
nome: Integrity Home Solutions
url: https://homeofintegrity.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: pannello accessibilità prominente — segnale di cura del cliente disabile
  - L2: gestione di multipli servizi (AC, idraulica, elettricità) con UI chiara
  - L3: foto team consistenti
applicabilita:
  - balzan: §12 (accessibilità non come compliance ma come segnale di qualità)
  - clima-world: §6 (positioning multi-servizio — verificare se Clima World fa anche sanitario)
note: il pannello accessibilità "WCAG widget" è discutibile (overlay accessibility tools sono criticati); meglio costruire accessibilità nel sito che aggiungere un widget

[REF-hvac-idraulica-11]
nome: Hazlett Plumbing LLC
url: https://getplumbinghelp.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: menu minimale (5 voci) riduce frizione di navigazione
  - L2: foto originali dei lavori, no stock
  - L3: video hero che dimostra qualità senza saturare
applicabilita:
  - balzan: §7 (semplificare le 7 sezioni del template attuale a 5 pagine: Home, Servizi, Pronto Intervento, Lavori, Contatti)
note: Wix, validazione che ogni piattaforma può funzionare se il contenuto è curato

[REF-hvac-idraulica-12]
nome: Half Moon Plumbing
url: https://halfmoonplumbing.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: enfasi sulle qualifiche professionali nel copy
  - L2: pagine servizi ben organizzate per categoria
  - L3: branding coerente cross-elementi
applicabilita:
  - balzan: §8 (organizzazione delle pagine servizi: idraulica / riscaldamento / climatizzazione / caldaie / bagni — il template attuale ha già 6 servizi, validare che la gerarchia regge)
note: WordPress; modello standard di settore replicabile

[REF-hvac-idraulica-13]
nome: PagineGialle Balzan Impianti
url: https://www.paginegialle.it/mozzecane-vr/impianti-idraulici/balzan-impianti-balzan-nicola
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: presenza Balzan già esistente su PagineGialle — fonte di verifica NAP
  - L2: consente review monitoring locale
  - L3: link ufficiale che il sito proprio dovrà superare in posizionamento per "idraulico mozzecane"
applicabilita:
  - balzan: §2 (fonte verifica NAP) e §9 (recuperare traffico SEO)
note: NON da imitare — è da spodestare con sito proprio

[REF-hvac-idraulica-14]
nome: TuttoSuItalia Idraulici Mozzecane
url: http://idraulici.tuttosuitalia.com/veneto/verona/mozzecane
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: directory italiana che lista Balzan e altri concorrenti locali
  - L2: dati spesso obsoleti — sito proprio aggiornato regolarmente lo batte
  - L3: utile per ricerca concorrenza locale §6
applicabilita:
  - balzan: §6 (mappare concorrenti diretti Mozzecane/dintorni)
  - clima-world: §6 (idem)
note: NON da imitare; fonte secondaria per analisi concorrenza
```
---

## Vertical: erboristeria (Girasole)

```yaml
[REF-erboristeria-01]
nome: Lapiantaggine
url: https://www.lapiantaggine.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: catalogo prodotti per categoria di esigenza (immunità, sonno, digestione) invece che alfabetica
  - L2: schede prodotto con bagni di scientific evidence (riferimenti EFSA, no claim terapeutici)
  - L3: blog con articoli evergreen su ingredienti naturali
applicabilita:
  - girasole: §8 (architettura prodotti) e §9 (SEO via blog)

[REF-erboristeria-02]
nome: Apothecary & Co.
url: https://apothecaryandco.com
tipologia: cross_vertical
curatela: land-book
data_accesso: 2026-05-05
lezioni:
  - L1: griglia prodotti con tassonomia "per esigenza"
  - L2: blocco "consulenza personale" con disclaimer "non sostituisce parere medico"
  - L3: footer con health claims compliance text
applicabilita:
  - girasole: §8 (pagina Prodotti) e §11.d (disclaimer)
  - farmacia-giovannini: §8 (modello disclaimer)

[REF-erboristeria-03]
nome: Inerboristeria.com
url: http://www.inerboristeria.com
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: aggregatore italiano che lista Girasole (verificato)
  - L2: fonte verifica NAP
  - L3: catchment SEO da spodestare con sito proprio
applicabilita:
  - girasole: §2 e §9

[REF-erboristeria-04]
nome: Erboristeria Magentina
url: https://www.erboristeriamagentina.it
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: storytelling centenario (1880) sull'azienda — heritage
  - L2: foto piante reali, non stock floreali generici
  - L3: distinzione netta integratore / cosmetico / fitoterapico nei filtri
applicabilita:
  - girasole: §3-§5 (heritage Reani Paola e narrativa di ricerca naturale)

[REF-erboristeria-05]
nome: Specchiasol
url: https://www.specchiasol.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: pagina "consulenza" con prenotazione appuntamento — modello da adattare
  - L2: riferimenti normativi visibili (Reg. UE 1924/2006) come trust
applicabilita:
  - girasole: §8 (pagina Consulenza con Paola Reani)

[REF-erboristeria-06]
nome: Bottega Verde
url: https://www.bottegaverde.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: catalogo "per famiglia di ingrediente" (es. lavanda, calendula)
  - L2: prodotti con etichette ben fotografate
applicabilita:
  - girasole: §8 (visualizzazione famiglie ingredienti)

[REF-erboristeria-07]
nome: Erbamea
url: https://www.erbamea.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: distinzione tisane / integratori / cosmetici come tabs di alto livello
  - L2: certificazioni bio in evidenza con loghi ufficiali
applicabilita:
  - girasole: §7 (architettura informativa)

[REF-erboristeria-08]
nome: Aboca
url: https://www.aboca.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: copy molto attento ai claim — modello di linguaggio EFSA-compliant
  - L2: ricerca per disturbo (acidità, sonno, ecc.) ben gestita
applicabilita:
  - girasole: §5 (linguaggio claim-compliant)
  - farmacia-giovannini: §11-bis

[REF-erboristeria-09]
nome: ImpresaItalia Girasole
url: https://www.impresaitalia.info/ik01206078/erboristeria-il-girasole-di-reani-paola/mozzecane.aspx
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda Girasole con P.IVA verificata 03459160234 (1 dipendente, ditta individuale)
  - L2: fonte di verifica diretta dei dati anagrafici
applicabilita:
  - girasole: §2 (verifica P.IVA, forma giuridica, dipendenti)

[REF-erboristeria-10]
nome: Erboristeria del Garda Desenzano
url: https://www.facebook.com/ilgirasolerboristeria/
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: piccola erboristeria locale lago di Garda — modello di prossimità geografica
  - L2: presenza Facebook attiva con post stagionali
applicabilita:
  - girasole: §6 (concorrenza zona Garda, in espansione)
```

---

## Vertical: farmacia (Giovannini)

```yaml
[REF-farmacia-01]
nome: Awwwards Pharmacy Template (wCopilot)
url: https://www.awwwards.com/sites/pharmacy
tipologia: pari_verticale_fuori_area
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: bilanciamento funzionalità + estetica per online pharmacy
  - L2: e-commerce + navigation menu + responsive
  - L3: typography come elemento di design
applicabilita:
  - farmacia-giovannini: §3-§4 (riferimento pattern moderno per template)

[REF-farmacia-02]
nome: Federfarma Verona
url: https://www.federfarmaverona.it/farmacia/farmacia-giovannini-della-dott-ssa-paola-securani/?code=106
tipologia: aggregatore_settoriale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda ufficiale Federfarma di Giovannini — fonte normativa
  - L2: struttura standard farmacie (orari, turni, codice)
  - L3: link da cui i clienti raggiungono la farmacia
applicabilita:
  - farmacia-giovannini: §2 (verifica) e §9 (citation building Federfarma)

[REF-farmacia-03]
nome: Regione Veneto Farmacia Giovannini
url: https://salute.regione.veneto.it/farmacie/farmacia-giovannini-della-dottssa-paola-securani
tipologia: aggregatore_settoriale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda ufficiale Regione Veneto — fonte autoritativa
  - L2: standard di disclosure normativo
  - L3: presenza certificata
applicabilita:
  - farmacia-giovannini: §2 (verifica autorità)

[REF-farmacia-04]
nome: Farmadon Mozzecane
url: https://www.farmadon.it/farmacia-di-turno-a-mozzecane/giovannini-dr-a-paola-securani
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: aggregatore turni di guardia ASL — modello di funzione utile
  - L2: il sito Giovannini deve avere blocco turni di guardia auto-aggiornato (pattern da [REF-farmacia-04])
applicabilita:
  - farmacia-giovannini: §8 (turni di guardia automatici) e §9

[REF-farmacia-05]
nome: PharmAround Giovannini
url: https://web.pharmaround.it/farmacie/mozzecane/giovannini-della-dr-a-paola-securani/17073
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: aggregatore farmacie con prenotazione servizi
  - L2: estensione possibile per Giovannini (e-prescription, prenotazione tampone)
applicabilita:
  - farmacia-giovannini: §10 (CTA prenotazione servizi)

[REF-farmacia-06]
nome: Farmacia Sant'Elena Verona
url: https://www.farmaciasantelenaverona.it
tipologia: concorrente_diretto
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: farmacia veronese con sito proprio — riferimento locale comparativo
  - L2: struttura tipica: home / servizi / orari / chi siamo / contatti
  - L3: blog farmacista con articoli salute
applicabilita:
  - farmacia-giovannini: §6 (positioning vs altre farmacie veronesi) e §9 (blog model)

[REF-farmacia-07]
nome: Boots UK
url: https://www.boots.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: catalogo OTC ben categorizzato senza scivolare in claim terapeutici
  - L2: pagina "Pharmacy services" come modello di servizio comunicato
applicabilita:
  - farmacia-giovannini: §8 (struttura "Servizi" categorizzata)

[REF-farmacia-08]
nome: Farmacia Comunale Bologna
url: https://www.farmaciecomunalibologna.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: rete di farmacie con prenotazione test diagnostici online
  - L2: pagina "salute pubblica" con campagne informative ASL
applicabilita:
  - farmacia-giovannini: §8 (pagina Servizi con prenotazione tamponi/test)

[REF-farmacia-09]
nome: Farmaè
url: https://www.farmae.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: e-commerce farmaceutico italiano — esempio di compliance GDPR + farmaceutica
  - L2: gestione cookie particolarmente attenta (categoria sanitaria)
applicabilita:
  - farmacia-giovannini: §11 (GDPR sanitario) e §11-bis

[REF-farmacia-10]
nome: Subframe Pharmacy Examples
url: https://www.subframe.com/tips/pharmacy-website-design-examples
tipologia: gallery
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: 25 esempi pharmacy design — riferimento ampio per ispirazione
  - L2: pattern moderni (chatbot AI, prescription upload, drone delivery) — non tutti applicabili a farmacia singola Mozzecane
applicabilita:
  - farmacia-giovannini: §13 (riferimento per ispirazione)
```

---

## Vertical: estetica (Armonia)

```yaml
[REF-estetica-01]
nome: Eight Five Zero Salon
url: https://eightfivezerosalon.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: minimalismo + immagini hero grandi + parallax discreto
  - L2: sticky header con CTA prenotazione
applicabilita:
  - armonia: §8 (Home con foto del centro), §10 (sticky CTA)

[REF-estetica-02]
nome: Salon Safari
url: https://salonsafari.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: one-page con prenotazione online
  - L2: testimonial in carosello — discutibile, meglio statici
applicabilita:
  - armonia: §7 (valutare one-page vs multi-page)

[REF-estetica-03]
nome: Jo Hansford
url: https://johansford.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: design centrato + dark color scheme
  - L2: e-commerce prodotti integrato
applicabilita:
  - armonia: §3 (eventuale palette dark in alternativa a Template A "Seta")

[REF-estetica-04]
nome: Muse Salon and Spa
url: https://musesalonandspa.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: parallax + grayscale photo per sofisticazione
  - L2: presentazione team con foto ambientate
applicabilita:
  - armonia: §8 (pagina Team con Raffaella Dalla Brea)

[REF-estetica-05]
nome: DBK Salon
url: https://dbksalon.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: prenotazione 24/7 integrata in pagina
  - L2: Instagram feed integrato
  - L3: recensioni ospiti in evidenza
applicabilita:
  - armonia: §10 (booking system) e §8 (Instagram embed)

[REF-estetica-06]
nome: Gloss Salon
url: https://glosssalon.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: full-width hero + warm neutral tones
  - L2: booking integrato front-and-center
applicabilita:
  - armonia: §3 (Template A "Seta" è coerente con questo pattern light/warm)

[REF-estetica-07]
nome: Drybar
url: https://drybar.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: visual style menu — trattamenti come "esperienze nominate"
  - L2: branding playful ma professionale
applicabilita:
  - armonia: §8 (listino come "trattamenti narrati", non lista neutra)

[REF-estetica-08]
nome: Bottega Veneta Beauty
url: https://www.bottegaveneta.com/beauty
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: lusso senza esagerazione — tipografia pulita, foto editoriali
  - L2: copy limitato ma denso
applicabilita:
  - armonia: §5 (tono editoriale per Estetica Armonia)

[REF-estetica-09]
nome: Spa Lab WordPress (Awwwards Nominee)
url: https://www.awwwards.com/sites/spa-lab-beauty-salon-wordpress-theme
tipologia: pari_verticale_fuori_area
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: template specifico hair salon / wellness / yoga
  - L2: layout adattabile a centro estetico singolo
applicabilita:
  - armonia: §3 (riferimento template baseline)

[REF-estetica-10]
nome: PagineGialle Armonia Mozzecane
url: http://www.paginegialle.it/mozzecane-vr/istituiti-di-bellezza/centro-benessere-armonia
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda Armonia su PagineGialle — fonte verifica NAP
  - L2: presenza già esistente da spodestare con sito proprio
applicabilita:
  - armonia: §2 e §9
```

---

## Vertical: salumificio (Effebi)

```yaml
[REF-salumificio-01]
nome: Salumificio Mottolini (Awwwards Nominee)
url: https://www.awwwards.com/sites/salumificio-mottolini
tipologia: pari_verticale_fuori_area
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: storytelling "una fetta di Italia" — narrativa territoriale forte
  - L2: layout orizzontale e fullscreen — distintivo (uso con cautela)
  - L3: design ADOK Studio (Italia)
applicabilita:
  - effebi: §3-§5 (territorialità Veneto come asset)

[REF-salumificio-02]
nome: Salumificio Faccioli
url: https://www.salumificiofaccioli.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: famiglia salumifici Faccioli (omonima al socio Effebi — `[DA CONFERMARE]` se è la stessa famiglia o solo cognome comune)
  - L2: catalogo prodotti con foto editoriale del salume
applicabilita:
  - effebi: §6 (positioning, eventuale relazione famigliare da chiarire)

[REF-salumificio-03]
nome: Salumificio Menatti Valtellina
url: https://www.menatti.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: bresaola IGP — modello compliance DOP/IGP comunicato
  - L2: sito multilingua (italiano + inglese)
  - L3: pagina "Tradizione" + pagina "Filiera" separate
applicabilita:
  - effebi: §5 (tradizione veneta) e §8 (filiera ingredienti)

[REF-salumificio-04]
nome: Salumificio Santoro
url: https://www.salumificiosantoro.com
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: blog editoriale con articoli su DOP / IGP / abbinamenti
  - L2: foto allevamento + lavorazione che racconta filiera
applicabilita:
  - effebi: §8 (pagina "La nostra produzione")

[REF-salumificio-05]
nome: Assica - Associazione Industriali Carni
url: https://www.assica.it
tipologia: aggregatore_settoriale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: lista prodotti DOP/IGP italiani — riferimento normativo
  - L2: fonte autoritativa per claim
applicabilita:
  - effebi: §11-bis (verifica DOP/IGP applicabili)

[REF-salumificio-06]
nome: Salumi Italiani
url: https://www.salumi-italiani.it
tipologia: aggregatore_settoriale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: 21 DOP + 16 IGP categorizzati con specifiche di produzione
  - L2: glossario tecnico salumi tradizionali
applicabilita:
  - effebi: §11-bis (verifica conformità DOP/IGP per "Soppressa Veneta")

[REF-salumificio-07]
nome: Eccellenze Italiane Effebi
url: https://www.eccellenzeitaliane.com/unbound/salumificio-effebi-di-faccioli-e-biasetti-snc/3182862
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda Effebi su aggregatore eccellenze
  - L2: positioning "eccellenza" da rivendicare con sostanza
applicabilita:
  - effebi: §2 (fonte verifica) e §6 (positioning)

[REF-salumificio-08]
nome: ReportAziende Effebi
url: https://www.reportaziende.it/salumificio_effebi_di_faccioli_p_e_biasetti_e_snc_vr_02213990233
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda con dati anagrafici verificati Effebi (P.IVA 02213990233)
  - L2: data fondazione 17 aprile 1990
applicabilita:
  - effebi: §2 (verifica anagrafica)

[REF-salumificio-09]
nome: Salumificio Ferrari
url: https://www.salumificiferrari.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: pagina prodotti con etichetta visibile e allergeni
  - L2: navigazione "per ricetta" (es. ricette del baccalà alla vicentina)
applicabilita:
  - effebi: §8 (pagina prodotti con allergeni)

[REF-salumificio-10]
nome: MASAF Elenco DOP IGP
url: https://www.masaf.gov.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/2090
tipologia: aggregatore_settoriale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: elenco ufficiale Ministero — fonte autoritativa per claim
  - L2: aggiornato annualmente
applicabilita:
  - effebi: §11-bis (verifica)
```

---

## Vertical: asporto (sub-vertical of ristorazione, riusato per Bottega/Sfizio)

I piani di Bottega della Pizza e Lo Sfizio riusano i [REF-ristorazione-*] sopra (in particolare 03, 05, 08, 13, 16). Riferimenti aggiuntivi specifici asporto:

```yaml
[REF-asporto-01]
nome: Domino's Italia
url: https://www.dominos.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: ordinazione mobile-first con tracking dell'ordine
  - L2: pattern "ordina in 2 minuti" replicabile in scala piccola
applicabilita:
  - bottega-della-pizza: §10 (form ordine veloce)
  - lo-sfizio: §10

[REF-asporto-02]
nome: Pasta Mozzecane (PagineGialle)
url: https://www.paginegialle.it/veneto/mozzecane/pizzerie.html
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: lista pizzerie Mozzecane — concorrenza locale visibile
  - L2: utile per analisi §6 di Bottega/Sfizio
applicabilita:
  - bottega-della-pizza: §6
  - lo-sfizio: §6

[REF-asporto-03]
nome: ProntoPizza Mozzecane
url: https://www.prontopizza.it/pizzerie/Mozzecane
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: aggregatore ordini pizza Mozzecane — diretto concorrente come funnel
  - L2: il sito proprio deve assorbire questo traffico
applicabilita:
  - bottega-della-pizza: §9 (recuperare traffico)
  - lo-sfizio: §9
```

---

## Vertical: bar (Maracaibo)

```yaml
[REF-bar-01]
nome: Mùn Rooftop Cocktail Bar (Awwwards HM)
url: https://www.awwwards.com/sites/mun-rooftop-cocktail-bar
tipologia: pari_verticale_fuori_area
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: design immersivo "lunar mood" — atmosfera come asset principale
  - L2: foto serale del locale dominante
applicabilita:
  - maracaibo: §3-§5 (atmosfera Mozzecane post-aperitivo)

[REF-bar-02]
nome: Dante NYC
url: https://dante-nyc.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: foto cocktail editoriali su sfondo minimal
  - L2: menu cocktail come elemento centrale, non secondario
applicabilita:
  - maracaibo: §8 (menu cocktail come pagina dedicata)

[REF-bar-03]
nome: Sunday Vinyl
url: https://www.sundayvinyl.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: tono intimo + casual gestito col design
  - L2: home page racconta esperienza, non lista servizi
applicabilita:
  - maracaibo: §5 (tono editoriale)

[REF-bar-04]
nome: Attaboy
url: https://attaboy.us
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: estetica minimalista per cocktail bar speakeasy
  - L2: copy laconico ma potente
applicabilita:
  - maracaibo: §5 (laconico, no marketing-speak)

[REF-bar-05]
nome: A Bar Called Gemma (Awwwards inspiration)
url: https://www.awwwards.com/inspiration/cocktail-menu-a-bar-called-gemma
tipologia: cross_vertical
curatela: awwwards
data_accesso: 2026-05-05
lezioni:
  - L1: presentazione menu cocktail come collezione editoriale
  - L2: descrizioni ingredienti senza marketing fluff
applicabilita:
  - maracaibo: §8 (pagina menu)

[REF-bar-06]
nome: BentoBox Best Bar Websites 2024
url: https://www.getbento.com/blog/best-bar-website-design
tipologia: gallery
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: 30+ esempi bar design — galleria di pattern
  - L2: pattern comuni: sticky CTA prenotazione, foto serali
applicabilita:
  - maracaibo: §13 (galleria di ispirazione)

[REF-bar-07]
nome: SiteBuilderReport Bar Websites
url: https://www.sitebuilderreport.com/inspiration/bar-websites
tipologia: gallery
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: galleria curata di bar websites
  - L2: pattern conversione: ora aperto, eventi, prenotazione
applicabilita:
  - maracaibo: §13

[REF-bar-08]
nome: Bar Centrale Mozzecane (Facebook)
url: https://www.facebook.com/people/Bar-Maracaibo/100070532438538/
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: presenza Facebook esistente di Maracaibo da estendere a sito proprio
applicabilita:
  - maracaibo: §2 (fonte verifica) e §9
```

---

## Vertical: disinfestazione (3D Service)

```yaml
[REF-disinfestazione-01]
nome: Rentokil Italia
url: https://www.rentokil.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: catalogo per parassita (insetti, roditori, volatili) — modello di IA
  - L2: pagina "settori serviti" (HORECA, alimentare, condomini, residenze)
  - L3: form preventivo con parassita preselezionato
applicabilita:
  - 3d-service: §7-§8 (architettura per parassita) e §10 (form preventivo)

[REF-disinfestazione-02]
nome: Anticimex Italia
url: https://www.anticimex.com/it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: focus su HACCP e settore food
  - L2: certificazioni in evidenza (ISO 9001, settore biocidi)
applicabilita:
  - 3d-service: §11.d (HACCP cross-sell con Effebi/Rosati)

[REF-disinfestazione-03]
nome: Colt Disinfestazioni
url: https://www.coltdisinfestazioni.it
tipologia: pari_verticale_fuori_area
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: pagina "Allontanamento volatili" tecnica e dettagliata
  - L2: case-study con foto before/after
applicabilita:
  - 3d-service: §8 (pagina servizi specializzati)

[REF-disinfestazione-04]
nome: 3D Service GuidaPulizie
url: https://www.guidapulizie.it/aziende/3d-service-di-claudio-zampieri
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda 3D Service Mozzecane — fonte verifica
  - L2: titolare Claudio Zampieri (`[DA CONFERMARE]` corrisponde al portfolio Renan)
applicabilita:
  - 3d-service: §2

[REF-disinfestazione-05]
nome: PagineGialle 3D Service
url: https://www.paginegialle.it/mozzecane-vr/disinfestazione/3-d-service-di-zampieri-claudio
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda PagineGialle 3D Service — fonte NAP
applicabilita:
  - 3d-service: §2 e §9

[REF-disinfestazione-06]
nome: Solvis Pest Control Marketing
url: https://solvismedia.com/pest-control-digital-marketing/
tipologia: gallery
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: 8% conversion rate elite pest control
  - L2: trust signals + DNI call tracking come differenziatore
applicabilita:
  - 3d-service: §10 (trust signals) e §14 (KPI conversione)

[REF-disinfestazione-07]
nome: BlueCorona Pest Control
url: https://www.bluecorona.com/digital-marketing/pest-control/
tipologia: gallery
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: pattern lead-gen pest control
  - L2: settori serviti come navigazione primaria
applicabilita:
  - 3d-service: §7 (architettura)

[REF-disinfestazione-08]
nome: Marketing 360 Pest Control
url: https://www.marketing360.com/pest-control-website-design
tipologia: gallery
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: design pulito + form preventivo + recensioni
  - L2: immagini autentiche tecnico al lavoro
applicabilita:
  - 3d-service: §8 (foto reale operatore in DPI)
```

---

## Vertical: arredamento (RB Design)

```yaml
[REF-arredamento-01]
nome: Rimadesio
url: https://www.rimadesio.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: design Made in Italy presentato come asset di prodotto
  - L2: configuratore interattivo per personalizzazione
  - L3: 90 paesi serviti — scala internazionale ben raccontata
applicabilita:
  - rb-design: §5 (Made in Italy come positioning)

[REF-arredamento-02]
nome: LAGO Design
url: https://www.lago.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: mobili su misura come categoria primaria
  - L2: galleria progetti realizzati per cliente
applicabilita:
  - rb-design: §8 (galleria progetti realizzati)

[REF-arredamento-03]
nome: Mohd
url: https://shop.mohd.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: 40.000 prodotti brand designer — scala enorme
  - L2: gestione filtri per ambiente (cucina, soggiorno, camera)
applicabilita:
  - rb-design: §7 (architettura per ambiente)

[REF-arredamento-04]
nome: Archiproducts
url: https://www.archiproducts.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: 305.000 prodotti, 3.500 brand
  - L2: showroom Bari come spazio fisico raccontato online
applicabilita:
  - rb-design: §8 (showroom Mozzecane raccontato)

[REF-arredamento-05]
nome: Interni Online
url: https://www.internionline.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: artigianato italiano + design heritage internazionale
  - L2: pagina "esperienza tailored" con consulenza personale
applicabilita:
  - rb-design: §5 (positioning artigianato)

[REF-arredamento-06]
nome: ARHome
url: https://www.arhome.it
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: arredamenti design Made in Italy
  - L2: navigazione semplice per categoria mobile
applicabilita:
  - rb-design: §3 (Template A pattern semplice)

[REF-arredamento-07]
nome: PagineGialle RB Design
url: https://www.paginegialle.it/mozzecane-vr/arredamenti/bertolaso-roberto
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda RB Design Mozzecane verificata
  - L2: phone 045 6340804, indirizzo Via Montanari Carlo 33
applicabilita:
  - rb-design: §2

[REF-arredamento-08]
nome: iCRIBIS RB Design
url: https://www.icribis.com/it/scheda-azienda/VR278118_RB_DESIGN_DI_ROBERTO_BERTOLASO
tipologia: aggregatore_locale
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: scheda RB Design con REA VR-278118
  - L2: ditta individuale
applicabilita:
  - rb-design: §2 (verifica anagrafica)

[REF-arredamento-09]
nome: MobiliDesignOccasioni
url: https://www.mobilidesignoccasioni.com
tipologia: cross_vertical
curatela: search
data_accesso: 2026-05-05
lezioni:
  - L1: outlet design — modello promozionale
applicabilita:
  - rb-design: §10 (eventuale sezione "occasioni")
```

---

## Cross-vertical: schema.org / local SEO patterns

<!-- Popolato durante la stesura di ogni piano §9 -->

---

## Cross-vertical: GDPR / cookie banner conformi al Garante 2021

<!-- Popolato durante la stesura di ogni piano §11 -->
