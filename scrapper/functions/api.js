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

// const chromium = require("chrome-aws-lambda");
// const puppeteer = require("puppeteer-core");

// exports.handler = async function (event, context) {
//   let xpath = '//*[@id="quote-page-strip"]/div[3]/div/div[2]/span[1]';
//   let COP = "COP=";
//   let BTC = "BTC.CB=";
//   const URL = (endopoint) => `https://www.cnbc.com/quotes/${endopoint}`;

//   const explorador = await puppeteer.launch({
//     args: chromium.args,
//     defaultViewport: chromium.defaultViewport,
//     executablePath:
//       process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
//     headless: chromium.headless,
//     ignoreHTTPSErrors: true,
//   });

//   const pagina = await explorador.newPage();

//   await pagina.goto(URL(COP));
//   await pagina.waitForXPath(xpath);

//   const [cop] = await pagina.$x(xpath);
//   const copContenido = await cop.getProperty("textContent");
//   const copCrudo = await copContenido.jsonValue();

//   await pagina.goto(URL(BTC));
//   await pagina.waitForXPath(xpath);

//   const [btc] = await pagina.$x(xpath);
//   const btcContenido = await btc.getProperty("textContent");
//   const btcCrudo = await btcContenido.jsonValue();

//   await explorador.close();

//   const tratarValores = (valores) => {
//     let separarComa = valores.split(".");
//     let ponerPunto = parseInt(separarComa[0].replace(",", ""));
//     return ponerPunto;
//   };

//   let valorFinal = {
//     btc: tratarValores(btcCrudo),
//     cop: tratarValores(copCrudo),
//   };
//   console.log(valorFinal);

//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       btc: tratarValores(btcCrudo),
//       cop: tratarValores(copCrudo),
//     }),
//   };
// };
