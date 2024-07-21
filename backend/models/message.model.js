import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		serverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Server",
			required: true,
		},

		message: {
			type: "string",
			required: true,
		},
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
