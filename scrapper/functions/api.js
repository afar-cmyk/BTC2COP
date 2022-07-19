// const cop = require("./cop");
// const btc = require("./btc");

exports.handler = async function (event, context) {
  // const prueba = cop.handler();

  return {
    statusCode: 200,
    body: JSON.stringify({
      respuesta: "Aqui va la respuesta de las dos funciones serverless",
    }),
  };
};
