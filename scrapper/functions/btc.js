const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

exports.handler = async function (event, context) {
  let xpath = '//*[@id="quote-page-strip"]/div[3]/div/div[2]/span[1]';

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.goto("https://www.cnbc.com/quotes/BTC.CB=");

  const [btc] = await page.$x(xpath);
  const btcContenido = await btc.getProperty("textContent");
  const btcCrudo = await btcContenido.jsonValue();

  return {
    statusCode: 200,
    body: JSON.stringify(btcCrudo),
  };
};
