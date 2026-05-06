#!/usr/bin/env bash
# Genera privacy.html + cookie.html per un template Mozzecane
# Uso: gen-legal-pages.sh <template_dir> <ragione_sociale> <address> <fonts_css>
# Esempio: gen-legal-pages.sh public/girasole/template-a "Erboristeria Il Girasole di Reani Paola" "Viale della Repubblica 7, 37060 Mozzecane (VR)" "https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap"

set -e

TEMPLATE_DIR="$1"
NAME="$2"
ADDRESS="$3"
FONTS_URL="$4"
NAV_LOGO_HTML="$5"  # HTML del logo per la nav

if [ -z "$TEMPLATE_DIR" ] || [ -z "$NAME" ] || [ -z "$ADDRESS" ]; then
  echo "Usage: $0 <template_dir> <name> <address> [fonts_url] [nav_logo_html]"
  exit 1
fi

# Default nav logo se non specificato
if [ -z "$NAV_LOGO_HTML" ]; then
  NAV_LOGO_HTML="<a href=\"index.html\" class=\"nav__logo\">$(echo "$NAME" | cut -d' ' -f1-2)</a>"
fi

# Default fonts se non specificato
if [ -z "$FONTS_URL" ]; then
  FONTS_URL="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
fi

cat > "$TEMPLATE_DIR/privacy.html" << EOF
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Informativa privacy di $NAME ai sensi del Reg. UE 2016/679 (GDPR).">
  <meta name="robots" content="noindex">
  <title>Privacy Policy &mdash; $NAME</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="$FONTS_URL" rel="stylesheet">
  <link rel="stylesheet" href="../../shared/css/reset.css">
  <link rel="stylesheet" href="../../shared/css/utilities.css">
  <link rel="stylesheet" href="../../shared/css/components.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="nav">
    <div class="container nav__inner">
      $NAV_LOGO_HTML
      <ul class="nav__links">
        <li><a href="index.html">Torna alla home</a></li>
      </ul>
    </div>
  </nav>

  <main class="container" style="padding: 8rem 1rem 4rem; max-width: 800px;">
    <h1 style="font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1rem;">Privacy Policy</h1>
    <p style="font-size: 0.88rem; opacity: 0.7; margin-bottom: 2.5rem;">Ultimo aggiornamento: bozza in attesa di onboarding cliente.</p>

    <div style="line-height: 1.8;">
      <p style="margin-bottom: 1.25rem;"><strong>Bozza informativa privacy</strong> ai sensi del <strong>Regolamento UE 2016/679 (GDPR)</strong> e del <strong>D.Lgs. 196/2003</strong> (Codice Privacy) come modificato dal D.Lgs. 101/2018. Contenuti definitivi e dati identificativi (P.IVA, REA, email contatto privacy) saranno completati dopo l'onboarding del cliente.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">1. Titolare del trattamento</h2>
      <p style="margin-bottom: 1.25rem;">$NAME, $ADDRESS. P.IVA, REA e PEC: <em>da inserire dopo onboarding</em>. Email contatto privacy: <em>da inserire</em>.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">2. Tipologia di dati raccolti</h2>
      <p style="margin-bottom: 1.25rem;">Dati di contatto forniti volontariamente (nome, telefono, email) tramite form di contatto, prenotazione o richiesta preventivo. Dati di navigazione raccolti automaticamente limitatamente all'uso di cookie tecnici e, previo consenso, di cookie analitici anonimizzati.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">3. Finalita e base giuridica</h2>
      <p style="margin-bottom: 0.5rem;"><strong>a)</strong> Riscontro a richieste di contatto e preventivo &mdash; base giuridica: art. 6.1.b GDPR (esecuzione di misure precontrattuali).</p>
      <p style="margin-bottom: 0.5rem;"><strong>b)</strong> Adempimenti fiscali, contabili e di settore previsti dalla normativa applicabile &mdash; base giuridica: art. 6.1.c GDPR (obbligo legale).</p>
      <p style="margin-bottom: 1.25rem;"><strong>c)</strong> Statistiche aggregate sull'uso del sito previo consenso &mdash; base giuridica: art. 6.1.a GDPR (consenso).</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">4. Conservazione</h2>
      <p style="margin-bottom: 1.25rem;">I dati di contatto sono conservati per il tempo strettamente necessario alla gestione della richiesta e comunque non oltre 24 mesi. I dati fiscali sono conservati per 10 anni come previsto dalla normativa. I dati di navigazione, ove raccolti previo consenso, sono conservati per 14 mesi in forma anonimizzata.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">5. Diritti dell'interessato</h2>
      <p style="margin-bottom: 1.25rem;">Lei ha diritto di accedere ai propri dati, chiederne la rettifica, la cancellazione, la limitazione del trattamento, la portabilita, e di opporsi al trattamento (artt. 15&ndash;22 GDPR). Per esercitare tali diritti scriva a: <em>indirizzo email da inserire dopo onboarding</em>. Ha inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">www.garanteprivacy.it</a>).</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">6. Cookie</h2>
      <p style="margin-bottom: 1.25rem;">L'uso dei cookie e' disciplinato dalla <a href="cookie.html">Cookie policy</a>, redatta ai sensi del Provvedimento del Garante del 10 giugno 2021 n. 231.</p>
    </div>

    <p style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid currentColor; opacity: 0.7;"><a href="index.html">&larr; Torna alla home</a></p>
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__col">
        <p class="footer__text">&copy; 2026 $NAME &mdash; $ADDRESS</p>
        <p class="footer__text"><a href="index.html">Home</a> &middot; <a href="privacy.html">Privacy</a> &middot; <a href="cookie.html">Cookie</a></p>
      </div>
    </div>
  </footer>
</body>
</html>
EOF

cat > "$TEMPLATE_DIR/cookie.html" << EOF
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Cookie policy di $NAME ai sensi del Provv. Garante 10/06/2021 n. 231.">
  <meta name="robots" content="noindex">
  <title>Cookie Policy &mdash; $NAME</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="$FONTS_URL" rel="stylesheet">
  <link rel="stylesheet" href="../../shared/css/reset.css">
  <link rel="stylesheet" href="../../shared/css/utilities.css">
  <link rel="stylesheet" href="../../shared/css/components.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="nav">
    <div class="container nav__inner">
      $NAV_LOGO_HTML
      <ul class="nav__links">
        <li><a href="index.html">Torna alla home</a></li>
      </ul>
    </div>
  </nav>

  <main class="container" style="padding: 8rem 1rem 4rem; max-width: 800px;">
    <h1 style="font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1rem;">Cookie Policy</h1>
    <p style="font-size: 0.88rem; opacity: 0.7; margin-bottom: 2.5rem;">Conforme al Provvedimento del Garante del 10 giugno 2021 n. 231.</p>

    <div style="line-height: 1.8;">
      <p style="margin-bottom: 1.25rem;">Questa pagina descrive i cookie utilizzati dal sito di $NAME. La presente informativa e' redatta ai sensi del <strong>Provvedimento del Garante per la protezione dei dati personali del 10 giugno 2021 n. 231</strong> (Linee guida cookie e altri strumenti di tracciamento).</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">Cosa sono i cookie</h2>
      <p style="margin-bottom: 1.25rem;">I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">Cookie utilizzati</h2>
      <p style="margin-bottom: 0.5rem;"><strong>Cookie tecnici di sessione:</strong> necessari al funzionamento del sito (memorizzazione della preferenza di accettazione cookie). Non richiedono consenso.</p>
      <p style="margin-bottom: 1.25rem;"><strong>Cookie di terze parti:</strong> al momento il sito non utilizza cookie analitici o di profilazione di terze parti. Eventuali cookie aggiuntivi (Google Analytics, pixel social) saranno installati solo previo consenso esplicito tramite il banner cookie.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">Gestione del consenso</h2>
      <p style="margin-bottom: 1.25rem;">Al primo accesso al sito viene mostrato un banner che consente di <strong>accettare</strong> o <strong>rifiutare</strong> i cookie non tecnici, con pari prominenza dei due pulsanti. Lo scorrimento della pagina non equivale ad accettazione. La scelta dell'utente e' memorizzata localmente per 6 mesi.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">Come modificare le impostazioni</h2>
      <p style="margin-bottom: 1.25rem;">Per modificare la propria scelta e' possibile cancellare la memoria locale del proprio browser e ricaricare la pagina, oppure utilizzare le impostazioni native del browser per gestire o disattivare i cookie.</p>

      <h2 style="font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.75rem;">Trattamento dei dati personali</h2>
      <p style="margin-bottom: 1.25rem;">Per il trattamento dei dati personali raccolti tramite cookie e altri strumenti, si rimanda alla <a href="privacy.html">Privacy policy</a> del sito.</p>
    </div>

    <p style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid currentColor; opacity: 0.7;"><a href="index.html">&larr; Torna alla home</a></p>
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__col">
        <p class="footer__text">&copy; 2026 $NAME &mdash; $ADDRESS</p>
        <p class="footer__text"><a href="index.html">Home</a> &middot; <a href="privacy.html">Privacy</a> &middot; <a href="cookie.html">Cookie</a></p>
      </div>
    </div>
  </footer>
</body>
</html>
EOF

echo "Created: $TEMPLATE_DIR/privacy.html + cookie.html"
