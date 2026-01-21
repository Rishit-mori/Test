process.env.APPWRITE_FUNCTION_API_ENDPOINT = "https://cloud.appwrite.io/v1";
process.env.APPWRITE_FUNCTION_PROJECT_ID = "demo-project";
process.env.APPWRITE_API_KEY = "test-api-key";

const handler = require('../dist/index.js').default;

const req = {
  method: "GET",
  path: "/ping",
  headers: {},
  body: ""
};

const res = {
  text: (msg, status = 200) => {
    console.log("RESPONSE TEXT:", msg);
    return { status, body: msg };
  },
  json: (obj, status = 200) => {
    console.log("RESPONSE JSON:", JSON.stringify(obj, null, 2));
    return { status, body: obj };
  }
};

const log = console.log;
const error = console.error;

(async () => {
  await handler({ req, res, log, error });
})();
