#!/usr/bin/env python3
"""
Iniezione automatica della baseline compliance (v1.2) nei template Mozzecane.

Per ogni template specificato in CONFIG:
1. Inserisce blocco <meta og:*> + Twitter Card + JSON-LD schema.org subito prima di </head>
2. Inserisce cookie banner + script subito prima di </body>
3. Appende blocco CSS compliance-baseline a css/style.css
4. Genera privacy.html e cookie.html via helper

NON tocca:
- footer (ogni template ha struttura diversa, va fatto manualmente)
- claim non-sostenibili (ogni vertical ha fix specifici, vanno fatti manualmente)

Uso: python3 inject-compliance.py
"""

import os
import re
import subprocess
import sys
import json
from pathlib import Path

ROOT = Path("/home/re/freelance-portfolio")
PUBLIC = ROOT / "public"
TOOLS = ROOT / "tools"

# Config: ogni business con metadata necessaria
BUSINESSES = {
    "girasole": {
        "name": "Erboristeria Il Girasole di Reani Paola",
        "address": "Viale della Repubblica 7, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930737",
        "tel_display": "045 7930737",
        "schema_types": ["HealthAndBeautyBusiness", "Store", "LocalBusiness"],
        "extra_schema": {"vatID": "IT03459160234"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap",
        "og_description": "Erboristeria a Mozzecane (VR). Erbe officinali, integratori, cosmetici naturali, consulenza personalizzata. Tel. 045 7930737.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "farmacia": {
        "name": "Farmacia Giovannini della Dott.ssa Paola Securani",
        "address": "Via Bon Brenzoni 2, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930015",
        "tel_display": "045 793 0015",
        "schema_types": ["Pharmacy", "LocalBusiness"],
        "extra_schema": {"foundingDate": "1948"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap",
        "og_description": "Farmacia a Mozzecane (VR), dal 1948. Direttore Tecnico Dott.ssa Paola Securani. Codice Federfarma 106. Tel. 045 793 0015.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "effebi": {
        "name": "Salumificio Effebi di Faccioli P. e Biasetti E. SNC",
        "address": "Via Regina Margherita 9, 37060 Mozzecane (VR)",
        "tel": "+39-045-6340278",
        "tel_display": "045 634 0278",
        "schema_types": ["FoodEstablishment", "Store", "LocalBusiness"],
        "extra_schema": {"vatID": "IT02213990233", "foundingDate": "1990-04-17"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@300;400;600&display=swap",
        "og_description": "Salumificio artigianale a Mozzecane (VR), dal 1990. Soppressa veneta, salame all'aglio, pancetta. Per ristoratori, gastronomie e privati.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "armonia": {
        "name": "Estetica Centro Benessere Armonia di Dalla Brea Raffaella",
        "address": "Via Francesco Miniscalchi 5, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930048",
        "tel_display": "045 793 0048",
        "schema_types": ["BeautySalon", "LocalBusiness"],
        "extra_schema": {},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Raleway:wght@300;400;500&display=swap",
        "og_description": "Centro estetico a Mozzecane (San Zeno). Trattamenti viso, trucco semipermanente, manicure. Prenota: WhatsApp 045 793 0048.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "climaworld": {
        "name": "Clima World Snc di Quaranta Antonio e Antonioli Andrea",
        "address": "Via Carlo Montanari 10, 37060 Mozzecane (VR)",
        "tel": "+39-045-7965268",
        "tel_display": "045 7965268",
        "schema_types": ["Plumber", "HVACBusiness", "LocalBusiness"],
        "extra_schema": {},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        "og_description": "Clima World — impianti idraulici e termoidraulici a Mozzecane e Valeggio sul Mincio. Pronto intervento: 045 7965268.",
        "templates": ["template-a", "template-b"],
    },
    "bottega": {
        "name": "Pizzeria Da Asporto La Bottega Della Pizza Di Tria Davide",
        "address": "Via Roma 7, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930327",
        "tel_display": "045 7930327",
        "schema_types": ["FastFoodRestaurant", "Restaurant"],
        "extra_schema": {"servesCuisine": ["Pizza", "Italian"], "takeaway": True, "acceptsReservations": False, "priceRange": "€"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap",
        "og_description": "Pizza d'asporto a Mozzecane dal 2013-2014. Davide al forno, ingredienti italiani, verdure fresche. Ordina: 045 7930327.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "sfizio": {
        "name": "Lo Sfizio - Pizza d'asporto",
        "address": "Viale della Repubblica, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930582",
        "tel_display": "045 793 0582",
        "schema_types": ["FastFoodRestaurant", "Restaurant"],
        "extra_schema": {"servesCuisine": ["Pizza", "Italian"], "takeaway": True, "priceRange": "€"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap",
        "og_description": "Pizza d'asporto a Mozzecane. Al taglio e intera, aperto Mar-Dom 17-22. Tel. 045 793 0582.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "maracaibo": {
        "name": "Bar Maracaibo",
        "address": "Mozzecane (VR)",
        "tel": "+39-000-0000000",  # [DA CONFERMARE]
        "tel_display": "[da confermare]",
        "schema_types": ["BarOrPub", "LocalBusiness"],
        "extra_schema": {"servesCuisine": ["Italian", "Cocktails"], "priceRange": "€€"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
        "og_description": "Bar Maracaibo a Mozzecane: colazione, aperitivo, cocktail e serata. Eventi privati su prenotazione.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "3dservice": {
        "name": "3D Service di Claudio Zampieri",
        "address": "Via Ferroni Gino 35, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930697",
        "tel_display": "045 7930697",
        "schema_types": ["LocalBusiness"],
        "extra_schema": {"serviceType": ["Pest Control", "Rodent Control", "HACCP Monitoring"]},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        "og_description": "Disinfestazione, derattizzazione, allontanamento volatili a Mozzecane. HACCP per food business. Tel. 045 7930697.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "rbdesign": {
        "name": "RB Design di Roberto Bertolaso",
        "address": "Via Montanari Carlo 33, 37060 Mozzecane (VR)",
        "tel": "+39-045-6340804",
        "tel_display": "045 6340804",
        "schema_types": ["FurnitureStore", "LocalBusiness"],
        "extra_schema": {"priceRange": "€€"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap",
        "og_description": "RB Design — showroom arredamento e interior design a Mozzecane. Roberto Bertolaso. Tel. 045 6340804.",
        "templates": ["template-a", "template-b", "template-c"],
    },
    "rosati": {
        "name": "Pizzeria Trattoria Rosati",
        "address": "Via Caterina Bon Brenzoni 20, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930601",
        "tel_display": "045 793 0601",
        "schema_types": ["Restaurant", "LocalBusiness"],
        "extra_schema": {"servesCuisine": ["Italiana", "Veronese", "Pizza"], "priceRange": "€€", "acceptsReservations": "True"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap",
        "og_description": "Pizzeria Trattoria Rosati a Mozzecane (VR). Pizza nel forno a legna, cucina veronese, pasta fatta in casa. Tel. 045 793 0601.",
        "templates": ["template-b"],
    },
    "balzan": {
        "name": "Balzan Impianti di Balzan Nicola",
        "address": "Via Dante Alighieri 9B, 37060 Mozzecane (VR)",
        "tel": "+39-045-7930309",
        "tel_display": "045 793 0309",
        "schema_types": ["Plumber", "HVACBusiness", "LocalBusiness"],
        "extra_schema": {"priceRange": "€€"},
        "fonts_url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
        "og_description": "Balzan Impianti — Idraulica, riscaldamento, climatizzazione a Mozzecane (VR). Tel. 045 793 0309.",
        "templates": ["template-b", "template-c"],
    },
}


def make_schema_jsonld(biz):
    """Genera JSON-LD schema.org per il business."""
    schema = {
        "@context": "https://schema.org",
        "@type": biz["schema_types"],
        "name": biz["name"].split(" di ")[0].split(" Di ")[0].strip(),
        "legalName": biz["name"],
        "image": [],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": biz["address"].split(",")[0].strip(),
            "postalCode": "37060",
            "addressLocality": "Mozzecane",
            "addressRegion": "VR",
            "addressCountry": "IT",
        },
        "telephone": biz["tel"],
    }
    schema.update(biz.get("extra_schema", {}))
    return json.dumps(schema, indent=2, ensure_ascii=False)


def make_og_block(biz):
    """Genera blocco OG + Twitter Card + Schema.org JSON-LD."""
    name_short = biz["name"].split(" di ")[0].split(" Di ")[0].strip()
    return f'''  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="{name_short} — Mozzecane (VR)">
  <meta property="og:description" content="{biz["og_description"]}">
  <meta property="og:locale" content="it_IT">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{name_short} — Mozzecane (VR)">
  <meta name="twitter:description" content="{biz["og_description"]}">

  <!-- Schema.org -->
  <script type="application/ld+json">
{make_schema_jsonld(biz)}
  </script>

'''


def make_cookie_banner(biz_slug):
    """Genera HTML + JS del cookie banner."""
    return f'''
  <!-- ===== COOKIE BANNER (Garante 10/06/2021 n. 231) ===== -->
  <div id="cookie-banner" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Informativa cookie" hidden>
    <div class="cookie-banner__inner">
      <p class="cookie-banner__text">
        Questo sito utilizza solo cookie tecnici necessari al funzionamento. Eventuali cookie analitici o di profilazione vengono installati solo previo consenso esplicito.
        Per maggiori informazioni leggi la <a href="cookie.html">Cookie policy</a> e la <a href="privacy.html">Privacy policy</a>.
      </p>
      <div class="cookie-banner__actions">
        <button type="button" id="cookie-accept" class="btn btn--primary btn--small">Accetta tutti</button>
        <button type="button" id="cookie-reject" class="btn btn--outline btn--small">Rifiuta</button>
      </div>
    </div>
  </div>
  <script>
    (function () {{
      var banner = document.getElementById('cookie-banner');
      var key = '{biz_slug}-cookie-choice';
      try {{
        if (!localStorage.getItem(key)) banner.hidden = false;
      }} catch (e) {{ banner.hidden = false; }}
      function decide(value) {{
        try {{ localStorage.setItem(key, value); }} catch (e) {{}}
        banner.hidden = true;
      }}
      document.getElementById('cookie-accept').addEventListener('click', function () {{ decide('accepted'); }});
      document.getElementById('cookie-reject').addEventListener('click', function () {{ decide('rejected'); }});
    }})();
  </script>
'''


def update_footer_links(content):
    """Aggiunge link privacy/cookie al footer se non presenti.

    Cerca il pattern '<footer class="footer">' e aggiunge una riga con i link
    privacy/cookie subito prima della chiusura. Idempotente via la classe
    'footer__legal-links'.
    """
    if "footer__legal-links" in content:
        return content

    # Trova il blocco footer
    pattern = re.compile(
        r'(<footer class="footer">[\s\S]*?)(</footer>)',
        re.DOTALL,
    )
    m = pattern.search(content)
    if not m:
        return content

    footer_block = m.group(1)
    footer_end = m.group(2)

    # Aggiungi link privacy/cookie prima della chiusura del primo div container
    legal_links = (
        '\n      <p class="footer__text footer__legal-links" style="margin-top: 0.75rem;">'
        '<a href="privacy.html">Privacy policy</a> &middot; '
        '<a href="cookie.html">Cookie policy</a></p>\n    '
    )
    # Inserisci prima della chiusura del </div> più interno (subito prima di </footer>)
    last_div_close = footer_block.rfind('</div>')
    if last_div_close > 0:
        new_footer = (
            footer_block[:last_div_close]
            + legal_links
            + footer_block[last_div_close:]
        )
        content = content.replace(footer_block + footer_end, new_footer + footer_end, 1)
    return content


def inject_into_html(html_path, biz_slug, biz):
    """Inietta OG/Schema/CookieBanner/Footer-links in un file HTML.

    Sempre idempotente: ogni step controlla se è già stato applicato.
    Ritorna True se ha modificato qualcosa.
    """
    if not html_path.exists():
        print(f"  SKIP (non esiste): {html_path}")
        return False

    content = html_path.read_text()
    original = content
    actions = []

    # 1. Inietta OG/Schema prima di </head>
    if "schema.org" not in content.lower():
        og_block = make_og_block(biz)
        content = content.replace("</head>", og_block + "</head>", 1)
        actions.append("schema/og")

    # 2. Inietta cookie banner prima di </body>
    if "cookie-banner" not in content:
        banner = make_cookie_banner(biz_slug)
        idx = content.rfind("</body>")
        if idx > 0:
            content = content[:idx] + banner + "\n" + content[idx:]
            actions.append("cookie-banner")

    # 3. Aggiungi link privacy/cookie al footer
    if "footer__legal-links" not in content:
        new_content = update_footer_links(content)
        if new_content != content:
            content = new_content
            actions.append("footer-links")

    if content != original:
        html_path.write_text(content)
        print(f"  OK [{','.join(actions)}]: {html_path}")
        return True
    print(f"  SKIP (già completo): {html_path}")
    return False


def append_css_compliance(css_path):
    """Appende il blocco CSS compliance baseline al style.css del template."""
    if not css_path.exists():
        print(f"  SKIP CSS (non esiste): {css_path}")
        return False

    content = css_path.read_text()
    if "COMPLIANCE BASELINE v1.2" in content:
        print(f"  SKIP CSS (già processato): {css_path}")
        return False

    compliance_css = (TOOLS / "compliance-css.css").read_text()
    css_path.write_text(content + "\n" + compliance_css)
    print(f"  OK CSS: {css_path}")
    return True


def gen_legal_pages(template_dir, biz):
    """Genera privacy.html e cookie.html via helper script."""
    nav_logo = f'<a href="index.html" class="nav__logo">{biz["name"].split(" di ")[0].split(" Di ")[0].strip()}</a>'
    cmd = [
        "bash",
        str(TOOLS / "gen-legal-pages.sh"),
        str(template_dir),
        biz["name"],
        biz["address"],
        biz["fonts_url"],
        nav_logo,
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  ERR gen-legal: {result.stderr}")
        return False
    print(f"  OK legal pages: {template_dir}")
    return True


def process_business(slug, biz):
    """Processa tutti i template di un business."""
    print(f"\n=== {slug.upper()} ===")
    biz_dir = PUBLIC / slug
    if not biz_dir.exists():
        print(f"  SKIP (dir non esiste): {biz_dir}")
        return

    for tpl in biz["templates"]:
        tpl_dir = biz_dir / tpl
        if not tpl_dir.exists():
            print(f"  SKIP {tpl} (non esiste)")
            continue

        index_html = tpl_dir / "index.html"
        css_path = tpl_dir / "css" / "style.css"

        print(f"-- {tpl}")
        inject_into_html(index_html, slug, biz)
        append_css_compliance(css_path)
        gen_legal_pages(tpl_dir, biz)


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    for slug, biz in BUSINESSES.items():
        if only and slug != only:
            continue
        process_business(slug, biz)
    print("\n=== DONE ===")


if __name__ == "__main__":
    main()
