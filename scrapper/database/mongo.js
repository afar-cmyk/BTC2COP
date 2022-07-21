const { MongoClient } = require("mongodb");

let dbCacheada = null;

async function conectarDb() {
  if (dbCacheada) {
    console.log("Utilizando la base de datos en cache");
    return Promise.resolve(dbCacheada);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI)
      .then((cliente) => {
        let db = cliente.db("NOMBREBASEDATOS");
        console.log("Nueva conexion a la base de datos");
        dbCacheada = db;
        return dbCacheada;
      })
      .catch((error) => {
        console.log("Error en la conexion!");
        console.log(error);
      });
  }
}

module.exports = {
  conectarDb,
};

// const { MongoClient } = require("mongodb");

// let dbActual;

// module.exports = {
//   conexionDb: (callback) => {
//     MongoClient.connect(
//       `mongodb+srv://db_generica:${process.env.DATABASE_PASSWORD}@cluster0.vsv0u.mongodb.net/Divisas?retryWrites=true&w=majority`
//     )
//       .then((valores) => {
//         dbActual = valores.db();
//         return callback();
//       })
//       .catch((err) => {
//         console.log(err);
//         return callback(err);
//       });
//   },
//   obtenerDb: () => dbActual,
// };

// const mongoose = require("mongoose");

// let password = process.env.DATABASE_PASSWORD;
// const connectionString = `mongodb+srv://db_generica:${password}@cluster0.vsv0u.mongodb.net/Divisas?retryWrites=true&w=majority`;

// mongoose
//   .connect(connectionString)
//   .then(() => {
//     console.log("Base de datos conectada!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
