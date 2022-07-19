const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

exports.handler = async function (event, context) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.goto("https://v3.nuxtjs.org/guide/concepts/server-engine/");

  const title = await page.title();

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "Ok",
      page: {
        title,
      },
    }),
  };
};
