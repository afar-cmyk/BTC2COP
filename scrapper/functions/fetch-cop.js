const axios = require("axios").default;

exports.handler = async function () {
  const resCop = await axios.get(`https://${process.env.API_URL}/api/cop`);
  const respuestaCop = resCop.data;

  return {
    statusCode: 200,
    body: JSON.stringify(respuestaCop),
  };
};
