const express = require("express");
const app = express();
app.use(express.json());
// ✅ Express routes
app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});
app.post("/auth", (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ error: "Token required" });
    }
    res.json({ authenticated: true });
});
// ❌ DO NOT app.listen()
// 🔥 Appwrite adapter
module.exports = async ({ req, res }) => {
    return new Promise((resolve) => {
        app(req, res);
        res.on("finish", resolve);
    });
};
