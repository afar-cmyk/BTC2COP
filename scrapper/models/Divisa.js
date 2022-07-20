const { model, Schema } = require("mongoose");

const esquemaDivisas = new Schema({
  cop: String,
  btc: String,
});

const Divisas = model("Divisas", esquemaDivisas);

module.exports = Divisas;
