const { model, Schema } = require("mongoose");

const esquemaValores = new Schema({
  cop: String,
  btc: String,
});

const Valores = model("Valores", esquemaValores);

module.exports = Valores;
