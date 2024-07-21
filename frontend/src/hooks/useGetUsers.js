import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useServers from "../zustand/useServers";

export default function useGetUsers() {
	const { setUsers, users } = useServers();
	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await fetch(`http://localhost:8600/api/users`, {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data = await res.json();
				console.log("ff");

				if (data.error) throw new Error(data.error);
				setUsers(data);
			} catch (error) {
				toast.error(error.message);
			}
		};
		getUsers();
	}, [setUsers]);

	return { users };
}
