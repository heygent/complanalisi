from pathlib import Path


PAGES_DIR = Path(__file__).parent / "pages"


for page in PAGES_DIR.glob("*.md"):
    with page.open() as f:
