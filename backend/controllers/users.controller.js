import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
	try {
		const users = await User.find();

		if (!users) {
			res.status(200).json([]);
			return;
		}
        // console.log(users)
		res.status(200).json(users);
	} catch (error) {
		console.log("Error in sing up controller ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
