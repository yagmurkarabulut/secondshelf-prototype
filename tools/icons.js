// Renders icon.svg to the PNG app icons: node tools/icons.js
const { chromium } = require('playwright'); const fs = require('fs');
(async () => {
  const svg = fs.readFileSync('icon.svg', 'utf8');
  const b = await chromium.launch();
  for (const s of [180, 512]) {
    const p = await b.newPage({ viewport: { width: s, height: s } });
    await p.setContent(`<style>*{margin:0}svg{width:${s}px;height:${s}px;display:block}</style>${svg}`);
    await p.screenshot({ path: `icon-${s}.png` });
  }
  await b.close();
})();
