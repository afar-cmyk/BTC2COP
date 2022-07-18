const express = require("express");
const serverless = require("serverless-http");
const scraper = require("../scrapper");

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  const datos = await scraper.llamarValores();
  res.send(datos);
});

app.use("/", router);

module.exports.handler = serverless(app);
