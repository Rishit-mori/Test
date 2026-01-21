export const routes = {
  ping: async ({ req, res }) => res.text("Pong"),

  health: async ({ req, res }) => res.json({ status: "healthy" }),

  auth: async ({ req, res }) => {
    const { token } = JSON.parse(req.body || "{}");
    if (!token) return res.json({ error: "Token required" }, 400);
    return res.json({ authenticated: true });
  }
};