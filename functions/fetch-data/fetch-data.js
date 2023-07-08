const axios = require('axios');

exports.handler = async (event) => {
  try {
    const { url } = event.queryStringParameters;

    const response = await axios.get(`${process.env.REACT_APP_API_URL}${url}`, {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
