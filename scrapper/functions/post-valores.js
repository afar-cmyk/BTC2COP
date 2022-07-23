const { MongoClient } = require("mongodb");
const axios = require("axios").default;
const moment = require("moment");

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

  const resCop = await axios.get(`https://${process.env.API_URL}/api/cop`);
  const respuestaCop = resCop.data;

  const resBtc = await axios.get(`https://${process.env.API_URL}/api/btc`);
  const respuestaBtc = resBtc.data;

  let fechaActual = moment().format("YYYY-MM-DD HH:mm:ss");

  let datos = {
    fecha: fechaActual,
    cop: respuestaCop["cop"],
    btc: respuestaBtc["btc"],
  };

  const db = await conectarDb();
  const collection = await db.collection("valores");

  await collection.insertOne(datos);

  return {
    statusCode: 200,
    body: JSON.stringify(datos),
  };
};
