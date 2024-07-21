import Message from "../models/message.model.js";
import Server from "../models/server.model.js";
import { gerRecieverSocketId } from "../socket/socket.js";
// import { gerRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = await req.body;
		const { serverId, senderId } = await req.params;

		let server = await Server.findOne({ _id: serverId });

		// console.log(server)
		const newMessage = new Message({
			senderId,
			serverId,
			message,
		});

		if (newMessage) {
			server.messages.push(newMessage._id);
		}

		await Promise.all([newMessage.save(), server.save()]);

		const recieverSocketId = gerRecieverSocketId(serverId);
		if (recieverSocketId) {
			io.to(recieverSocketId).emit("newMessage", newMessage);
		}

		return res.status(200).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller", error.messag);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getMessages = async (req, res) => {
	try {
		const { serverId } = req.params;
		const servers = await Server.findOne({ _id: serverId }).populate(
			"messages"
		);

		if (!servers) {
			res.status(200).json([]);
			return;
		}
		const messages = servers.messages;
		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in sing up controller ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
