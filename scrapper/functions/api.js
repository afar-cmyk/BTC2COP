require("../database/mongo.js");

exports.handler = async function (event, context, callback) {
  const Valores = require("../models/Valores");

  const nuevosValores = new Valores({
    cop: "prueba6",
    btc: "prueba6",
  });

  nuevosValores
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    statusCode: 200,
    body: "Se agrego un dato satisfactoriamente!",
  };
};
