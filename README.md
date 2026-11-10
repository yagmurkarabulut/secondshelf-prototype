# SecondShelf prototype

Front-end-only, hi-fi mobile web prototype of **SecondShelf**: households pass on sealed, shelf-stable food through community shelves in cafés.

Interaction Design Project · MID programme · Tallinn University · Kateřina Friedrichová, Yağmur Karabulut, Nino Tsitsishvili

- Spec and rules for Claude Code: [`CLAUDE.md`](CLAUDE.md)
- UI Kit v0.3: [`docs/design-system.md`](docs/design-system.md)
- Open decisions: [`docs/open-questions.md`](docs/open-questions.md)
- Figma exports: [`frames/`](frames/)

Built with Claude Code, screen by screen.

- **Test link (GitHub Pages):** https://yagmurkarabulut.github.io/secondshelf-prototype/
- Component gallery (hidden, for the team): https://yagmurkarabulut.github.io/secondshelf-prototype/#/components
- Moderator menu: add `?mod=1` to the link (phase 3)

## Working on it
- Everything is in one self-contained `index.html` (inline CSS + vanilla JS, hash routing). Tokens are block 1 of the `<style>`; the icon sprite is inlined at the top of `<body>`.
- Screenshots: run `python3 -m http.server 8123` in the repo, then `node tools/shot.js '#/components' out.png 390 844` (Playwright).
