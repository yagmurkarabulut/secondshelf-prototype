// Screenshot helper: node tools/shot.js <hash> <out.png> [width=390] [height=844] [--full] [--scale=1]
// Serve the repo first: python3 -m http.server 8123
const { chromium } = require('playwright');
(async () => {
  const [hash = '#/home', out = 'shot.png', w = '390', h = '844', ...rest] = process.argv.slice(2);
  const full = rest.includes('--full');
  const scale = +((rest.find(a => a.startsWith('--scale=')) || '--scale=1').split('=')[1]);
  const base = process.env.BASE || 'http://localhost:8123/';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: scale, isMobile: true, hasTouch: true });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(base + hash, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  if (full) {
    // the screen scrolls inside .screen; grow the viewport to its scroll height
    const sh = await page.evaluate(() => { const s = document.querySelector('.screen'); return s ? s.scrollHeight + (document.querySelector('#tabbar').offsetHeight || 0) : 844; });
    await page.setViewportSize({ width: +w, height: sh });
    await page.waitForTimeout(200);
  }
  await page.screenshot({ path: out });
  const fonts = await page.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight));
  console.log(JSON.stringify({ out, errors, fonts: [...new Set(fonts)] }));
  await browser.close();
})();
