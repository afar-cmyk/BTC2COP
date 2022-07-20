require("../database/mongo.js");
const Divisas = require("../models/Divisa");

exports.handler = async function (event, context, callback) {
  const nuevaDivisa = new Divisas({
    cop: "prueba4",
    btc: "prueba4",
  });

  nuevaDivisa
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
