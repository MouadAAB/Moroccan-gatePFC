// import React, { useState } from 'react'
// import toast from 'react-hot-toast';
// import useConversation from '../zustand/useCovnversations';

// export default function useSendMessage() {
//   const [loading, setLoading] = useState(false);
//   const {messages, setMessages, selectedConversation} = useConversation();

//   const sendMessage = async(message) => {

//     setLoading(true);
//     try {
// 			// console.log(JSON.stringify({ message }));
// 			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
// 						method: "POST",
// 						headers: { "Content-Type": "application/json" },
// 						body: JSON.stringify({ message }),
// 					});

// 			const data = await res.json();
// 			if(data.error) throw new Error(data.error)

// 			await setMessages([...messages, data]);
// 		} catch (error) {
//         toast.error(error.message);
//     }finally {
//         setLoading(false);
//     }
//   }

//   return { sendMessage, loading };
// }

import React, { useState } from "react";
import toast from "react-hot-toast";
import useServers from "../zustand/useServers";
import { useAuthContext } from "../context/AuthContext";
// import useConversation from "../zustand/useCovnversations";

export default function useSendMessage() {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedServer } = useServers();
	const { authUser } = useAuthContext();
	const sendMessage = async (message) => {
		setLoading(true);
		// console.log(selectedServer);
		try {
			const res = await fetch(
				`http://localhost:8600/api/messages/send/${selectedServer?._id}/${authUser._id}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ message }),
				}
			);
			const data = await res.json();
			if (data.error) throw new Error(data.error);
			// console.log(res);

			await setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, sendMessage };
}
