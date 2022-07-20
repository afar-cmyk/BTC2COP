require("../database/mongo.js");
const Divisas = require("../models/Divisa");

exports.handler = async function (event, context, callback) {
  const nuevaDivisa = new Divisas({
    cop: "prueba",
    btc: "prueba",
  });

  nuevaDivisa
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });

  return callback(null);
};
