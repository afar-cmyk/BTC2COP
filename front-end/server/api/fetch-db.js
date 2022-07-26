import { MongoClient } from 'mongodb'

export default async function fetchDb () {

  let dbCacheada = null;

  async function conectarDb() {
    if (dbCacheada) {
      console.log("Utilizando la base de datos en cache");
      return Promise.resolve(dbCacheada);
    } else {
      return MongoClient.connect(process.env.MONGODB_URI)
        .then((cliente) => {
          let db = cliente.db("Divisas");
          dbCacheada = db;
          console.log('Conexion exitosa a la base de datos!')
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
  const listarValores = await collection.find({}).sort({ _id: -1 }).limit(1).toArray();

    return {
    statusCode: 200,
    body: listarValores,
  };

}
