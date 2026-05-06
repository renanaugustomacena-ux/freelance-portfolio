#!/usr/bin/env python3
"""
Aggiunge disclaimer vertical-specific (allergeni, recesso, claim sanitari)
subito prima del <footer> di ogni template Mozzecane.

Idempotente via la classe `legal-disclaimer`.
"""

import re
from pathlib import Path

ROOT = Path("/home/re/freelance-portfolio")
PUBLIC = ROOT / "public"

# Disclaimer per vertical
DISCLAIMERS = {
    "food_takeaway": """
  <!-- ===== DISCLAIMER ALLERGENI / FOOD ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni allergeni" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Allergeni (Reg. UE 1169/2011 art. 14):</strong> Per ordini a distanza, le informazioni sui 14 allergeni (glutine, latte, uova, frutta a guscio, pesce, crostacei, molluschi, soia, sedano, senape, sesamo, solfiti, lupino, arachidi) sono disponibili al momento dell'ordine telefonico. In sede e' esposto il documento allergeni completo. I prezzi indicati sono indicativi e possono variare in base al menu del giorno.</p>
    </div>
  </aside>

""",
    "food_restaurant": """
  <!-- ===== DISCLAIMER ALLERGENI / FOOD ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni allergeni" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Allergeni (Reg. UE 1169/2011):</strong> Per informazioni sui 14 allergeni dei nostri piatti chiedere al personale o consultare il documento esposto in sala. I prezzi del menu pubblicati online sono indicativi e possono variare; il listino aggiornato e' disponibile in sede.</p>
    </div>
  </aside>

""",
    "food_production": """
  <!-- ===== DISCLAIMER ETICHETTATURA / FOOD ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni etichettatura" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Etichettatura (Reg. UE 1169/2011 + Reg. CE 178/2002):</strong> ogni prodotto riporta in etichetta ingredienti, allergeni evidenziati, valori nutrizionali per 100g, lotto, modalita di conservazione, origine carne. Per vendita a distanza (e-commerce, ordini telefonici) le informazioni sono fornite prima della conclusione dell'acquisto. Tracciabilita conforme uno-step-back / uno-step-forward.</p>
    </div>
  </aside>

""",
    "bar": """
  <!-- ===== DISCLAIMER ALCOLICI / BAR ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni alcolici e cookie" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Bevi responsabilmente.</strong> La vendita di bevande alcoliche e' vietata ai minori di 18 anni (art. 689 c.p.). Il consumo di alcol puo' influire sulle capacita di guida (limite legale 0,5 g/L; under 21 e professionali 0,0 g/L). La diffusione musicale in locale e' eseguita ai sensi della convenzione SIAE.</p>
    </div>
  </aside>

""",
    "pharmacy": """
  <!-- ===== DISCLAIMER FARMACEUTICO ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni compliance farmaceutica" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Pubblicita sanitaria:</strong> il sito comunica i servizi della farmacia ai sensi del D.Lgs. 219/2006 (Codice comunitario sui medicinali). Non costituisce pubblicita di farmaci specifici. Per i farmaci OTC/SOP il consiglio del farmacista non sostituisce la visita medica. Codice Federfarma 106.</p>
    </div>
  </aside>

""",
    "herbalist": """
  <!-- ===== DISCLAIMER ERBORISTERIA ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni claim sanitari" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Claim sanitari:</strong> i prodotti erboristici, integratori e cosmetici comunicati sul sito rispettano il Reg. UE 1924/2006 (health claims) e il D.Lgs. 169/2004. Sono ammessi solo claim approvati EFSA. La consulenza personalizzata in negozio non sostituisce il parere medico per problematiche di salute.</p>
    </div>
  </aside>

""",
    "beauty": """
  <!-- ===== DISCLAIMER ESTETICA ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni estetica e cosmetici" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Trattamenti estetici (L. 1/1990 + Reg. UE 1223/2009):</strong> l'attivita di estetista e' attivita non sanitaria. I trattamenti hanno finalita estetica e di benessere e non sostituiscono cure mediche o dermatologiche. Per controindicazioni di natura medica consultare il medico curante. Risultati indicativi, possono variare in base a tipo di pelle, costanza dei trattamenti e stile di vita.</p>
    </div>
  </aside>

""",
    "hvac": """
  <!-- ===== DISCLAIMER HVAC / IDRAULICA ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni regolatorie HVAC" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Conformita installativa:</strong> per ogni impianto rilasciamo dichiarazione di conformita ai sensi del DM 37/2008 con schema impianto e riferimenti normativi. Interventi su climatizzazione conformi al Reg. UE 517/2014 e DPR 146/2018 (F-Gas), con comunicazione al registro telematico. Garanzia legale ai sensi dell'art. 1667 c.c. (2 anni denuncia, 10 anni opere su immobili).</p>
    </div>
  </aside>

""",
    "pest_control": """
  <!-- ===== DISCLAIMER DISINFESTAZIONE ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni biocidi e infestanti" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Servizi disinfestazione (DM 274/1997 + Reg. UE 528/2012):</strong> attivita esercitata da personale formato con autorizzazione regionale/comunale. Utilizziamo esclusivamente prodotti biocidi registrati e autorizzati a uso professionale. I risultati possono variare in funzione di livello di infestazione, struttura, vie d'accesso e comportamenti del committente. Garantiamo l'esecuzione del protocollo, non l'assenza assoluta di parassiti.</p>
    </div>
  </aside>

""",
    "furniture": """
  <!-- ===== DISCLAIMER ARREDAMENTO ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni vendita beni" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Garanzia legale di conformita:</strong> 2 anni dalla consegna ai sensi del Codice del Consumo (D.Lgs. 206/2005, art. 128-135). Per acquisti a distanza diritto di recesso 14 giorni (art. 52). I beni personalizzati su misura sono esclusi dal recesso ai sensi dell'art. 59 c). Per pezzi su misura sono previste tolleranze dimensionali specificate in contratto.</p>
    </div>
  </aside>

""",
    "auto_repair": """
  <!-- ===== DISCLAIMER OFFICINA ===== -->
  <aside class="legal-disclaimer" aria-label="Informazioni officina auto" style="background: rgba(0,0,0,0.04); padding: 1rem; font-size: 0.85rem; line-height: 1.6; text-align: center;">
    <div class="container">
      <p style="margin: 0;"><strong>Garanzia legale lavori:</strong> ai sensi dell'art. 1667 c.c. (2 anni denuncia / 10 anni opere su immobili e 2 anni opere mobili). Le riparazioni eseguite sono documentate da fattura/scontrino con descrizione lavori e ricambi utilizzati. I tempi di consegna comunicati sono indicativi e possono variare in base alla disponibilita ricambi.</p>
    </div>
  </aside>

""",
}

# Mappa business -> tipo disclaimer
BIZ_DISCLAIMERS = {
    "rosati": "food_restaurant",
    "bottega": "food_takeaway",
    "sfizio": "food_takeaway",
    "effebi": "food_production",
    "maracaibo": "bar",
    "farmacia": "pharmacy",
    "girasole": "herbalist",
    "armonia": "beauty",
    "balzan": "hvac",
    "climaworld": "hvac",
    "3dservice": "pest_control",
    "rbdesign": "furniture",
    "sambenini": "auto_repair",
}


def inject_disclaimer(html_path, biz_slug):
    if not html_path.exists():
        return False
    content = html_path.read_text()
    if "legal-disclaimer" in content:
        return False
    disclaimer_type = BIZ_DISCLAIMERS.get(biz_slug)
    if not disclaimer_type:
        return False
    disclaimer_html = DISCLAIMERS[disclaimer_type]
    # Inserisci subito prima di <footer
    pattern = re.compile(r'(\s*)(<footer\b)', re.DOTALL)
    new_content, n = pattern.subn(disclaimer_html + r'\1\2', content, count=1)
    if n == 0:
        return False
    html_path.write_text(new_content)
    return True


def main():
    count = 0
    for biz_slug, disclaimer_type in BIZ_DISCLAIMERS.items():
        biz_dir = PUBLIC / biz_slug
        if not biz_dir.exists():
            continue
        for tpl_dir in sorted(biz_dir.iterdir()):
            if not tpl_dir.is_dir() or not tpl_dir.name.startswith("template-"):
                continue
            html_path = tpl_dir / "index.html"
            if inject_disclaimer(html_path, biz_slug):
                print(f"  OK: {html_path.relative_to(ROOT)}")
                count += 1
            else:
                print(f"  skip: {html_path.relative_to(ROOT)}")
    print(f"\nTotale disclaimer aggiunti: {count}")


if __name__ == "__main__":
    main()
