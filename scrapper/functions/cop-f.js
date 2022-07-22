const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

exports.handler = async function (event, context) {
  let xpath = '//input[@id="answer"]';

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  await page.goto("https://www.currency.me.uk/convert/usd/cop");

  const [cop] = await page.$x(xpath);
  const copContenido = await cop.getProperty("value");
  const copCrudo = await copContenido.jsonValue();

  await browser.close();

  const tratarValores = (valores) => {
    let convertirNumero = parseFloat(valores);
    return convertirNumero;
  };

  let valorFinal = tratarValores(copCrudo);

  return {
    enumerable: true,
    statusCode: 200,
    body: JSON.stringify(valorFinal),
  };
};
