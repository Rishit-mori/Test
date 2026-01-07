"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
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
