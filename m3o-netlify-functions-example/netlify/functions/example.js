const { API_KEY } = process.env;

const m3o = require("@m3o/m3o-node");

exports.handler = async function (event, context) {
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "no api key" }),
    };
  }

  let body = JSON.parse(event.body);

  try {
    let response = await new m3o.Client({ token: API_KEY }).call(
      // @todo change this to the actual endpoint you want to call
      "file",
      "List",
      body
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    if (e && e.response && e.response.data && e.response.data.Detail) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: e.response.data.Detail }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "something went wrong" }),
    };
  }
};
