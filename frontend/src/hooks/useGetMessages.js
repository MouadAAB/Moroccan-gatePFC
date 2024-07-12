import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useCovnversations";

export default function useGetMessages() {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation?._id}`);
				const data = await res.json();

				if (data.error) throw new Error(data.error);

				setMessages(data);
				console.log(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { loading, messages };
}