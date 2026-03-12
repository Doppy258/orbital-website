const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // Desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://honest-fact-421805.framer.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'target-desktop-full.png', fullPage: true });
  await page.screenshot({ path: 'target-desktop-viewport.png', fullPage: false });

  // Scroll sections
  const sections = [0, 900, 1800, 2700, 3600, 4500, 5400];
  for (let i = 0; i < sections.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), sections[i]);
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: `target-section-${i}.png` });
  }

  await browser.close();
  console.log('Screenshots saved.');
})();
