// require("../database/mongo.js");
const mongoose = require("mongoose");

const connectionString = `mongodb+srv://db_generica:${process.env.DATABASE_PASSWORD}@cluster0.vsv0u.mongodb.net/Divisas?retryWrites=true&w=majority`;

exports.handler = async function (event, context, callback) {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Base de datos conectada!");
    })
    .catch((err) => {
      console.log(err);
    });

  const Valores = require("../models/Valores");

  const nuevosValores = new Valores({
    cop: "prueba7",
    btc: "prueba7",
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
