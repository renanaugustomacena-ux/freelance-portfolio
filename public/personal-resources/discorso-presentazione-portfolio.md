# Piano — Discorso di presentazione per colloquio (Italiano, ~5–7 min)

## Contesto

Renan Augusto Macena, IT junior autodidatta, area Verona. Ha costruito da solo un portfolio di 10 piattaforme SaaS B2B per PMI venete (cartella `macena-tools-lavoro/`). Nessun progetto è in produzione presso clienti con partita IVA. Serve un **pitch parlato per colloquio**, lungo 5–7 minuti (~1000 parole), tono **neutro-professionale (voi)**, **onestà piena** sullo stato dei progetti.

L'obiettivo non è vendere prodotti finiti: è raccontare il lavoro fatto in solitaria — ampiezza tecnica, consapevolezza normativa italiana, capacità di apprendimento autodidatta — per essere assunto come junior dev in azienda dove poter portare a maturità almeno una di quelle basi.

## Struttura (7 sezioni)

1. Apertura — chi sono, da dove vengo, perché questi progetti
2. I 10 progetti — una riga di pitch ciascuno (problema + stack + cliente)
3. Invarianti tecniche condivise — cosa hanno in comune
4. Conformità normativa italiana — GDPR, FatturaPA, NIS2, Piano 4.0/5.0, CSRD, ecc.
5. Stato onesto — cosa funziona, cosa manca, cosa è realistico
6. Cosa porto in azienda — competenze, attitudine, autonomia
7. Chiusura — apertura al dialogo

---

## Bozza completa del discorso

### 1. Apertura

> Buongiorno. Mi chiamo Renan Augusto Macena, sono un IT junior autodidatta e lavoro nella zona di Verona. Negli ultimi mesi ho dedicato il mio tempo, da solo, senza un team e senza budget, a costruire un portfolio di dieci piattaforme software B2B pensate per le piccole e medie imprese del Veneto.
>
> Voglio essere chiaro fin dall'inizio: non sono prodotti che oggi posso vendere chiavi in mano a un cliente con partita IVA. Sono però dieci sistemi solidi nelle fondamenta — ognuno affronta un problema reale che ho visto vivere alle aziende del territorio, ognuno è scritto con uno stack tecnologico moderno, ognuno è documentato fino al rispetto della normativa italiana di settore.

### 2. I dieci progetti, in un giro veloce

> Vi do una panoramica, una riga per progetto.
>
> **SmartERP** è un ERP cloud multi-tenant per piccole e medie imprese manifatturiere. Backend in NestJS su Node 20, frontend Next.js 14, PostgreSQL con Redis e BullMQ per i job asincroni.
>
> **FatturaFlow** copre la fatturazione elettronica italiana end-to-end: emissione FatturaPA versione 1.2.2, dialogo con il Sistema di Interscambio, conservazione decennale a norma. Django 5 con DRF e Celery, frontend React.
>
> **TraceVino** è tracciabilità del vino con controllo qualità basato su modelli AI on-edge — pensato per le cantine veronesi, dalla Valpolicella al Soave. FastAPI asincrono, React, modelli TFLite.
>
> **LogiTrack** non è un SaaS classico: è un kit per freelancer, una piattaforma con due verticali — Logistica, per i trasportatori e gli spedizionieri del Quadrante Europa, e Rifiuti, per la gestione RENTRI, l'Albo Gestori Ambientali categorie 4-5-8 e la macchina a stati del FIR. Va forkato per cliente. Stack: Go 1.26 con Gin, frontend Vue 3, MongoDB.
>
> **CyberGuard** è uno strumento di cybersecurity puramente difensivo, con copertura GDPR e NIS2 — quest'ultima recepita in Italia dal D.Lgs. 138/2024. Backend in Rust con Actix-web e sqlx, frontend SvelteKit, Elasticsearch per la ricerca sui log.
>
> **FactoryMind** è IoT industriale e calcolo OEE, pensato per le aziende che vogliono accedere agli incentivi di Piano Transizione 4.0 e 5.0. Express con MQTT.js, broker Mosquitto, serie temporali su InfluxDB.
>
> **TeamFlow** è HR e payroll all'italiana: CCNL, contributi INPS, denunce UNIEMENS versione 4.13, modello F24 Entratel. Rails 7.1 in modalità API con Sidekiq, frontend Vue 3 con Pinia, PostgreSQL con Row-Level Security per l'isolamento tra tenant.
>
> **HelpDeskAI** è un helpdesk multi-tenant con assistente RAG basato su LangChain, costruito sul modello ITIL 4. FastAPI sul backend, Next.js davanti, ChromaDB come vector store.
>
> **GreenMetrics** è reporting di sostenibilità ed energia secondo la direttiva CSRD e gli standard ESRS E1, allineato a Piano 5.0. Go con Fiber, frontend SvelteKit, serie temporali su TimescaleDB con dashboard Grafana.
>
> **AgriVigna**, infine, è viticoltura di precisione — questa volta mobile, app React Native con Expo, pensata per i vigneti del territorio veronese. Backend FastAPI, broker MQTT per le centraline in campo.

### 3. Invarianti tecniche condivise

> Tutti e dieci i progetti condividono la stessa ossatura, e per me questa è la parte più importante.
>
> Multi-tenancy a tre livelli: filtro nel repository, guard nel middleware, e — dove possibile — isolamento a livello di database. TeamFlow, per esempio, usa Row-Level Security di Postgres.
>
> Autenticazione JWT con algoritmo esplicitamente fissato — mai `alg:none` — token di accesso a quindici minuti e refresh rotanti. Password hashate con bcrypt.
>
> Log strutturati in JSON, OpenTelemetry per il tracing distribuito, endpoint `/api/health` e `/api/ready` su ogni backend. Container non-root, immagine base distroless o alpine, build multi-stage.
>
> E poi schemi canonici condivisi tra i dieci progetti: `Money` rappresentato come centesimi interi più valuta ISO-4217 — mai numeri in virgola mobile per il denaro — timestamp RFC 3339 in UTC, errori in formato RFC 7807 ProblemDetails, eventi in CloudEvents 1.0.

### 4. Conformità normativa italiana

> Ogni progetto ha una propria sezione di compliance, con citazioni verificate contro le fonti primarie: normattiva.it, eur-lex.europa.eu, AgID, Agenzia delle Entrate, INPS, MASAF.
>
> I regimi coperti vanno dal GDPR — Regolamento UE 2016/679 e D.Lgs. 196/2003 — alla fatturazione elettronica del D.Lgs. 127/2015, dalla NIS2 del D.Lgs. 138/2024 al Piano Transizione 4.0 e 5.0, dalla CSRD Direttiva UE 2022/2464 al TUIR per il payroll, fino al Regolamento CE 178/2002 articolo 18 per la tracciabilità alimentare.
>
> Non sono citazioni copiate da un blog: sono riferimenti puntuali, con data di accesso, perché un cliente italiano serio le verifica.

### 5. Stato onesto

> Ora la parte onesta. Nessuno di questi dieci progetti è oggi un prodotto pronto per essere venduto a un cliente pagante. Manca il battle-testing in campo, mancano deployment Kubernetes reali — i manifesti che ho scritto sono placeholder — manca il contratto firmato con un design partner.
>
> Quello che c'è, però, è il fondamento. Ogni progetto è un monorepo con `docker-compose.yml` funzionante, ogni progetto ha una pipeline GitHub Actions con lint, test, build Docker, scansioni Trivy e Gitleaks, ogni progetto ha un documento di playbook commerciale-tecnico — il `MODUS_OPERANDI.md` — da almeno tredicimila parole.
>
> Ho fatto passare il portfolio attraverso un audit interno di consolidamento che ha verificato i dieci progetti su quattro assi: consolidamento, sicurezza, test, conformità italiana. Il risultato è stato zero progetti bloccati, quattro pass pieni, sei pass con osservazioni — tutte non-bloccanti e tracciate.

### 6. Cosa porto in azienda

> Cosa offro concretamente a un'azienda.
>
> Ampiezza di stack reale: ho scritto codice in Python, Go, Rust, TypeScript, Ruby e Node, su domini diversi e non solo su tutorial. Consapevolezza della normativa italiana, che nel mercato veneto è un vantaggio specifico. Capacità di apprendimento autodidatta accelerata: questo portfolio è la prova che imparo costruendo, non aspettando un corso. E lavoro autonomo end-to-end — backend, frontend, infrastruttura, documentazione, sicurezza — perché finora ho dovuto coprire tutti i ruoli da solo.

### 7. Chiusura

> Quello che cerco è un'azienda dove poter trasformare questa base in qualcosa di vendibile e mantenibile davvero, dentro un team. Se questa è una conversazione che vi interessa, possiamo entrare nei dettagli di qualunque dei dieci progetti — sono qui per rispondere.

---

## Note operative per la consegna

### Ritmo e tempi

- 800–1100 parole effettive → ~5–7 minuti a 150–170 parole/minuto
- Pause forti dopo le sezioni 3, 5 e 7
- Sezione 2 (i dieci progetti) è la più densa: leggerla con calma, non sparare la lista

### Personalizzazione pre-colloquio

Prima di ogni colloquio, identificare quale dei 10 progetti è più affine al business dell'azienda target, e dilatare quella riga di 30–40 secondi extra (un esempio concreto del problema, una decisione tecnica difesa, un trade-off accettato).

### Domande probabili dopo il pitch — risposte preparate

- *"Quale è il più maturo?"* → onestamente quello con la pipeline più completa e lo schema più chiuso (probabilmente SmartERP o FatturaFlow). Citare evidenza specifica, non auto-promozione.
- *"Hai clienti reali?"* → No. Ho identificato un primo design partner target nella logistica veronese, ma non c'è contratto.
- *"Quanto ci hai messo?"* → essere preciso. Non gonfiare. Mesi di lavoro full-time in autoapprendimento.
- *"Cosa rifaresti diversamente?"* → mi concentrerei su 2–3 progetti e li porterei in produzione, invece di costruirne 10 a metà. Imparo questo proprio oggi.
- *"Lavori bene in team?"* → essere onesti: finora il team non c'è stato. È una capacità che voglio sviluppare in azienda.

### Cose da NON dire

- Non promettere date di consegna sui progetti per sembrare più avanti di quanto non si sia
- Non gonfiare ruoli ("ho gestito un team" — non è vero)
- Non citare numeri di clienti, MRR o fatturato che non esistono
- Non nominare a freddo prospect non firmati come se fossero clienti
- Non usare il nome di Verona/Veneto come retorica vuota: usarlo solo dove c'è una scelta tecnica concreta legata al territorio (cantine in TraceVino, Quadrante Europa in LogiTrack, vigneti in AgriVigna, manifatturiero in SmartERP)

---

## File di riferimento nel repository

- `CLAUDE.md` — tabella dei 10 progetti con stack, porte e comandi (fonte primaria di verità per le righe di pitch)
- `consolidation-reports/FINAL-REPORT.md` — verdetti dell'audit interno per progetto (4 PASS, 6 PASS-WITH-NOTES)
- `consolidation-reports/SHARED-SCHEMAS.md` — schemi canonici cross-project citati nella sezione 3
- `consolidation-reports/per-project/<nome>-italian-compliance.md` — citazioni normative verificate per ciascun progetto
- `<progetto>/docs/MODUS_OPERANDI.md` — playbook commerciale e tecnico per progetto (≥13 000 parole ciascuno)

---

## Verifica end-to-end

1. **Cronometro**: leggere il discorso ad alta voce con timer. Deve restare in 5–7 minuti senza accelerare. Se sfora, accorciare la sezione 2 (lista progetti), non le altre.
2. **Test del non-tecnico**: provare la sezione 1 + sezione 7 davanti a una persona non-IT. Se non capisce "cosa risolvi per chi", riscrivere l'apertura.
3. **Coerenza con i docs**: per ciascuno dei 10 progetti, aprire il rispettivo `MODUS_OPERANDI.md` e verificare che la riga di pitch sia coerente con il documento. Se nel pitch suona meglio dei docs, riallineare verso il basso.
4. **Madrelingua**: far rileggere a un italiano madrelingua per concordanze, ritmo e naturalità del registro "voi".
5. **Mock interview**: simularne uno con un amico in cui poniate le 5 domande probabili sopra. Tempo della risposta a ogni domanda: ≤ 60 secondi.
