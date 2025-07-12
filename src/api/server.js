import { createServer } from "node:http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: { origin: "*" },
});

let cars = [];

io.on("connection", (socket) => {
	console.log("cliente entrou:", socket.id);

	socket.on("car:list", () => {
		socket.emit("car:list", cars);
	});

	socket.on("car:add", (car) => {
		const newCar = { ...car, id: crypto.randomUUID() };
		cars.push(newCar);

		io.emit("car:new", newCar);
	});
});

httpServer.listen(4000, () => {
	console.log("WebSocket http://localhost:4000");
});
