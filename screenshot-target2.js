const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('https://honest-fact-421805.framer.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));

  // Get full page height
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Page height:', bodyHeight);

  // Capture each ~900px section at full resolution
  const numSections = Math.ceil(bodyHeight / 900);
  for (let i = 0; i < numSections; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 900);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: `target-hd-${i}.png` });
  }

  // Also grab nav area close up
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 300));

  // Clip nav
  await page.screenshot({ path: 'target-nav.png', clip: { x: 0, y: 0, width: 1440, height: 80 } });

  // Clip hero text area
  await page.screenshot({ path: 'target-hero-text.png', clip: { x: 300, y: 200, width: 840, height: 400 } });

  await browser.close();
  console.log('Done. Sections:', numSections);
})();
