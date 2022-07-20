const mongoose = require("mongoose");

let password = process.env.DATABASE_PASSWORD;
const connectionString = `mongodb+srv://db_generica:${password}@cluster0.vsv0u.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Base de datos conectada!");
  })
  .catch((err) => {
    console.log(err);
  });
