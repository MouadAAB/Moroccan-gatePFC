// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import useConversation from "../zustand/useCovnversations";

// export default function useGetMessages() {
// 	const [loading, setLoading] = useState(false);
// 	const { messages, setMessages, selectedConversation } = useConversation();

// 	useEffect(() => {
// 		const getMessages = async () => {
// 			setLoading(true);
// 			try {
// 				const res = await fetch(`/api/messages/${selectedConversation?._id}`);
// 				const data = await res.json();

// 				if (data.error) throw new Error(data.error);

// 				setMessages(data);
// 				console.log(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		if (selectedConversation?._id) getMessages();
// 	}, [selectedConversation?._id, setMessages]);

// 	return { loading, messages };
// }

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useServers from "../zustand/useServers";

export default function useGetMessages() {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedServer } = useServers();
	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`http://localhost:8600/api/messages/${selectedServer._id}`,
					{
						method: "GET",
						headers: { "content-type": "application/json" },
					}
				);
				const data = await res.json();

				if (data.error) throw new Error(data.error);
				setMessages(data);
				// console.log(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getMessages();
	}, [selectedServer?._id, setMessages]);

	return { loading, messages };
}
