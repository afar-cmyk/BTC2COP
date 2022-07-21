const { MongoClient } = require("mongodb");

let dbCacheada = null;

async function conectarDb() {
  if (dbCacheada) {
    console.log("Utilizando la base de datos en cache");
    return Promise.resolve(dbCacheada);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI)
      .then((cliente) => {
        let db = cliente.db("Divisas");
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

exports.handler = async function (event, context) {
  let dbCacheada = null;

  async function conectarDb() {
    if (dbCacheada) {
      console.log("Utilizando la base de datos en cache");
      return Promise.resolve(dbCacheada);
    } else {
      return MongoClient.connect(process.env.MONGODB_URI)
        .then((cliente) => {
          let db = cliente.db("Divisas");
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

  const db = await conectarDb();
  const collection = await db.collection("valores");

  const asddd = await collection.find({}).toArray();
  console.log(asddd);
  return {
    statusCode: 200,
    body: JSON.stringify(asddd),
  };
};

// const mongo = require("../Database/mongo");

// exports.handler = async function (event, context) {
//   const db = await mongo.conectarDb();
//   const collection = await db.collection("Divisas");

//   const users = await collection.find({}).toArray();
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       prueba: users,
//     }),
//   };
// };

// // require("../database/mongo.js");

// const { conexionDb, obtenerDb } = require("../database/mongo");

// let baseDatos;

// conexionDb((err) => {
//   if (!err) {
//     console.log(`Conectado a la base de datos!`);
//     baseDatos = obtenerDb();
//   }
// });

// exports.handler = async function (event, context, callback) {
//   let prueba = [];

//   baseDatos
//     .collection("valores")
//     .find()
//     .sort({ cop: 1 })
//     .forEach((pruebas) => pruebas.push(prueba))
//     .then(() => {
//       res.status(200).json(prueba);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "No se pudo obtener la informacion" });
//     });

//   return {
//     statusCode: 200,
//     body: "Se agrego un dato satisfactoriamente!",
//   };
// };
