import mongoose from "mongoose";

const serverSchema = new mongoose.Schema(
	{
		serverName: {
			type: "string",
			required: true,
		},

		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],

		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
	},
	{ timestamps: true }
);

const Server = mongoose.model("Server", serverSchema);
export default Server;
