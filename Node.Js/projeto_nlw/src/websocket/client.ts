import { io } from "../http";

io.on("connect", (socket) => {
  socket.on("client_fist_access", (params) => {
    console.log(params);
  });
});