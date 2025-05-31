import express from "express";
import SocketConnection from "./socketConnection";
import http from "http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const socketConnection = new SocketConnection(server);
socketConnection.socketListener();
