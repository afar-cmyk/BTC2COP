const axios = require("axios").default;

exports.handler = async function () {
  const resBtc = await axios.get(`https://${process.env.API_URL}/api/btc`);
  const respuestaBtc = resBtc.data;

  return {
    statusCode: 200,
    body: JSON.stringify(respuestaBtc),
  };
};
