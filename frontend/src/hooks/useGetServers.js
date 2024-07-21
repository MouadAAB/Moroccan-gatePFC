// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// export default function useGetConversations() {
// 	const [loading, setLoading] = useState(false);
// 	const [conversations, setConversations] = useState([]);

// 	useEffect(() => {
// 		const getConversations = async () => {
// 			setLoading(true);

// 			try {
// 				const res = await fetch("/api/users");
// 				const data = await res.json();

// 				if (data.error) {
// 					throw new Error(data.error);
// 				}

// 				setConversations(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		getConversations();
// 	}, [setConversations]);

// 	return { loading, conversations };
// }

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetServers() {
	const [loading, setLoading] = useState(false);
	const [servers, setServers] = useState([]);
	useEffect(() => {
		const getServers = async () => {
			setLoading(true);
			try {
				const res = await fetch(`http://localhost:8600/api/servers`, {
					method: "GET",
					headers: { "content-type": "application/json" },
				});
				const data = await res.json();

				console.log("aa");
				if (data.error) throw new Error(data.error);
				// console.log(data)
				setServers(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getServers();
	}, [setServers]);

	return { loading, servers };
}
