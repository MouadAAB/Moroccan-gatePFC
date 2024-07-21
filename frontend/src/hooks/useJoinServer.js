import { useState } from "react";
import toast from "react-hot-toast";
import useServers from "../zustand/useServers";

export default function useJoinServer() {
	const [loading, setLoading] = useState(false);
	const { setSelectedServer } = useServers();
	const join = async (serverId, userId) => {
		setLoading(true);
		try {
			const res = await fetch(
				`http://localhost:8600/api/servers/join/${serverId}/${userId}`,
				{
					method: "POST",
					headers: { "content-type": "application/json" },
				}
			);

			const data = await res.json();
			if (data.error) throw new Error(data.error);
			setSelectedServer(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { join, loading };
}
