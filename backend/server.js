import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import authRouter from "./routers/auth.router.js";
import serverRouter from "./routers/server.router.js";
import messageRouter from "./routers/message.router.js";
import usersRouter from "./routers/users.router.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";
// const cors=require("cors");

const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/servers", serverRouter);
app.use("/api/users", usersRouter);

server.listen(PORT, () => {
	connectToMongoDB();
	console.log("server listening on port", PORT);
});
