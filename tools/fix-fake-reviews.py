#!/usr/bin/env python3
"""
Sostituisce le recensioni fittizie nei template con placeholder onesti
che linkano alle piattaforme reali (Google, Facebook, TripAdvisor).

Strategia conservativa: trasforma ogni card di recensione fittizia in una
"card placeholder" che dichiara apertamente che il testo della recensione
e' un esempio in attesa di sostituzione con citazioni autentiche
autorizzate dal cliente in fase di onboarding F1.
"""

import re
from pathlib import Path

ROOT = Path("/home/re/freelance-portfolio")
PUBLIC = ROOT / "public"

# Marker che identifica testo di recensione fittizia.
# Pattern: "Nome Iniziale." con autore generico.
FAKE_AUTHORS = [
    "Marco R.", "Lucia M.", "Giovanni B.", "Giulia S.", "Andrea P.",
    "Sara T.", "Luca M.", "Anna B.", "Federica L.", "Stefano R.",
    "Paolo N.", "Roberta C.", "Elena M.", "Davide T.", "Laura B.",
    "Stefano G.", "Marina P.", "Roberto B.", "Caterina M.", "Francesco D.",
    "Alberto V.", "Chiara M.", "Daniele B.", "Giorgia P.", "Massimo C.",
    "Silvia R.", "Antonio L.", "Beatrice S.", "Cristian F.", "Eleonora P.",
    "Gianni M.", "Ilaria T.", "Lorenzo G.", "Margherita V.", "Nicola B.",
    "Paola N.", "Riccardo C.", "Simona D.", "Tommaso B.", "Valentina M.",
]


def has_fake_review(content):
    """True se il file contiene una qualsiasi delle review fittizie note."""
    return any(author in content for author in FAKE_AUTHORS)


def replace_review_section(content):
    """Sostituisce il contenuto delle card recensione con un placeholder onesto.

    Mantiene la struttura HTML esistente ma sostituisce TESTO e AUTORE
    con un disclaimer + link alle piattaforme reali.
    """
    # Pattern 1: <p class="...recensioni__text...">TESTO</p>
    text_pattern = re.compile(
        r'(<p class="[^"]*review[^"]*__text[^"]*"[^>]*>|'
        r'<p class="[^"]*recensioni__text[^"]*"[^>]*>|'
        r'<p class="[^"]*testimonianza__text[^"]*"[^>]*>)'
        r'(.*?)'
        r'(</p>)',
        re.DOTALL,
    )

    placeholder_text = (
        "Le recensioni autentiche saranno citate testualmente con autorizzazione "
        "del cliente, oppure linkate direttamente alle piattaforme pubbliche "
        "(Google, Facebook, TripAdvisor) dove sono consultabili da chiunque."
    )

    def text_repl(m):
        return m.group(1) + placeholder_text + m.group(3)

    # Pattern 2: <span/cite class="...author...">AUTORE</span>
    author_pattern = re.compile(
        r'(<(?:span|cite|p) class="[^"]*(?:review|recensioni|testimonianza)[^"]*__author[^"]*"[^>]*>|'
        r'<cite[^>]*>)'
        r'\s*(?:&mdash;|—)?\s*(?:' + "|".join(re.escape(a) for a in FAKE_AUTHORS) + r')\s*'
        r'(</(?:span|cite|p)>)',
        re.DOTALL,
    )

    placeholder_author = "[recensione da raccogliere &mdash; vedi piattaforme pubbliche]"

    def author_repl(m):
        return m.group(1) + placeholder_author + m.group(2)

    # Applica sostituzioni
    has_review_card = bool(re.search(r'(review|recensioni|testimonianza)__(card|text|author)', content))
    if not has_review_card:
        return content, False

    # Sostituisce solo se ci sono autori fittizi
    if not has_fake_review(content):
        return content, False

    new_content = text_pattern.sub(text_repl, content)
    new_content = author_pattern.sub(author_repl, new_content)

    return new_content, new_content != content


def process_file(html_path):
    if not html_path.exists():
        return
    content = html_path.read_text()
    new_content, changed = replace_review_section(content)
    if changed:
        html_path.write_text(new_content)
        print(f"  FIXED: {html_path.relative_to(ROOT)}")
    else:
        if "review" in content.lower() or "recensioni" in content.lower() or "testimonianza" in content.lower():
            print(f"  ok:    {html_path.relative_to(ROOT)} (nessuna review fittizia trovata)")


def main():
    for biz_dir in sorted(PUBLIC.iterdir()):
        if not biz_dir.is_dir() or biz_dir.name in ("shared", "personal-resources", "portfolio"):
            continue
        for tpl_dir in sorted(biz_dir.iterdir()):
            if not tpl_dir.is_dir():
                continue
            process_file(tpl_dir / "index.html")
    print("\nDONE.")


if __name__ == "__main__":
    main()
