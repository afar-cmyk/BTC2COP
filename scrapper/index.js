const scraper = require("./scrapper");
const express = require("express");
const app = express();
const port = 5000;

app.get("/", async (req, res) => {
  const datos = await scraper.llamarValores();
  res.send(datos);
});

app.listen(port, () => {
  console.log(`Aplicación BTC en puerto ${port}`);
});
