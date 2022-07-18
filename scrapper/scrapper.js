const puppeteer = require("puppeteer");

async function llamarValores() {
  let xpath = '//*[@id="quote-page-strip"]/div[3]/div/div[2]/span[1]';
  let COP = "COP=";
  let BTC = "BTC.CB=";
  const URL = (endopoint) => `https://www.cnbc.com/quotes/${endopoint}`;

  const explorador = await puppeteer.launch();
  const pagina = await explorador.newPage();

  await pagina.goto(URL(COP));
  await pagina.waitForXPath(xpath);

  const [cop] = await pagina.$x(xpath);
  const copContenido = await cop.getProperty("textContent");
  const copCrudo = await copContenido.jsonValue();

  await pagina.goto(URL(BTC));
  await pagina.waitForXPath(xpath);

  const [btc] = await pagina.$x(xpath);
  const btcContenido = await btc.getProperty("textContent");
  const btcCrudo = await btcContenido.jsonValue();

  explorador.close();

  const tratarValores = (valores) => {
    let separarComa = valores.split(".");
    let ponerPunto = parseInt(separarComa[0].replace(",", ""));
    return ponerPunto;
  };

  let valorFinal = {
    btc: tratarValores(btcCrudo),
    cop: tratarValores(copCrudo),
  };
  console.log(valorFinal);

  return valorFinal;
}

module.exports = {
  llamarValores,
};
