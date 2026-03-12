const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file://' + path.join(__dirname, 'index.html'), { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  // Force all reveals visible before scrolling
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  });

  const sections = [0, 900, 1800, 2700, 3600, 4500, 5400, 6300];
  for (let i = 0; i < sections.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), sections[i]);
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: `mine-section-${i}.png` });
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: 'mine-full.png', fullPage: true });

  await browser.close();
  console.log('Done');
})();
