"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
class SocketConnection {
    constructor(server) {
        this.io = new socket_io_1.Server(server);
    }
    getIo() {
        return this.io;
    }
    socketListener() {
        this.io.on("connection", (socket) => {
            console.log("A user connected");
        });
    }
}
exports.default = SocketConnection;
