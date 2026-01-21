import { Client, Users } from "node-appwrite";
import { routes } from "./index.js"; // <-- compiled JS import

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  const users = new Users(client);

  // Example Appwrite SDK call
  try {
    const response = await users.list();
    log(`Total users: ${response.total}`);
  } catch (err) {
    error("Could not list users: " + err.message);
  }

  // 🔥 Router
  if (req.method === "GET" && req.path === "/ping") {
    return routes.ping({ req, res });
  }

  if (req.method === "GET" && req.path === "/health") {
    return routes.health({ req, res });
  }

  if (req.method === "POST" && req.path === "/auth") {
    return routes.auth({ req, res });
  }

  return res.json({ error: "Not Found" }, 404);
};
