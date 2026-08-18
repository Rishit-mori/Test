import { Server } from "socket.io";
import { Server as HttpServer } from "http";

class SocketConnection {
  private io: Server;

  constructor(server: HttpServer) {
    this.io = new Server(server);
  }

  public getIo() {
    return this.io;
  }
  public socketListener() {
    this.io.on("connection", (socket) => {
      console.log("A user connected");
    });
  }
  public disconnectListener() {
    this.io.on("disconnect", (socket) => {
      console.log("A user disconnected");
    });
  }
  public emitEvent(event: string, data: any) {
    this.io.emit(event, data);
  }
}

export default SocketConnection;

console.log("hello world");