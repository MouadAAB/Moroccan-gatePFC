import Server from "../models/server.model.js";

export const getServers = async (req, res) => {
	try {
		const servers = await Server.find();

		if (!servers) {
			res.status(400).json({ message: "not servers found" });
			return;
		}

		res.status(200).json(servers);
	} catch (error) {
		console.log("Error in sing up controller ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const joinServer = async (req, res) => {
	try {
		const { serverId , userId } = await req.params;
		// console.log(serverId, userId);
		
		const serv = await Server.findOne({_id :serverId});
		// console.log(serv);
		
		const exists = serv.participants.includes(
			(participant) => participant === userId
		);
		// console.log(exists);

		if (exists) {
			res.status(400).json({ message: "participants already exists" });
			return;
		}

		serv.participants.push(userId);
		await serv.save();

		res.status(200).json(serv);
	} catch (error) {
		console.log("Error in sing up controller ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
