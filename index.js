const fs = require("fs");
const { chromium } = require("playwright");
const { Parser } = require("json2csv");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext();
  const urls = [
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&ct=67",
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&page=1&ct=67&cd=blog",
    "https://sakurazaka46.com/s/s46/diary/blog/list?ima=0000&page=2&ct=67&cd=blog",
  ];
  const data = [];
  for (const url of urls) {
    const page = await context.newPage();
    await page.goto(url);

    const pageTitle = await page.locator(".lead");
    const date = await page.locator(".date.wf-a");
    const title = await page.locator(".date-title > .title");
    const titleCount = await pageTitle.count();
    // const move = page.locator(".com-pager.wid1200 > ul > li");
    for (let i = 0; i < titleCount; i++) {
      const text = pageTitle.locator(`nth=${i}`);
      const pageText = await text.textContent();

      const pageDate = date.locator(`nth=${i}`);
      const dateText = await pageDate.textContent();

      const pageTop = title.locator(`nth=${i}`);
      const titleText = await pageTop.textContent();

      data.push({
        date: dateText,
        title: titleText,
        content: pageText,
      });

      // await move.nth(i).click();
    }
    await page.close();
  }

  const parser = new Parser();
  const csv = parser.parse(data);
  fs.writeFileSync("loveLove.csv", csv);
})();
