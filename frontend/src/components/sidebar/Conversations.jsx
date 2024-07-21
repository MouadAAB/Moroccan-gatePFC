// import React from "react";
// import Conversation from "./Conversation";
// import useGetConversations from "../../hooks/useGetConversations";

// export default function () {
// 	const { loading, conversations } = useGetConversations();

// 	const displayConversations = () => {
// 		return conversations.map((conv,idx) => <Conversation key={conv._id} conversation={conv} lastIndex={idx === conversations.length - 1} />);
// 	};
// 	// console.log("conversations: ", conversations);
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			{loading ? (
// 				<span className='laoding laoding-spinner mx-auti'></span>
// 			) : (
// 				displayConversations()
// 			)}
// 		</div>
// 	);
// }

import React from "react";
import useGetServers from "../../hooks/useGetServers";
import Conversation from "./Conversation";

export default function () {
	const { loading, servers } = useGetServers();
	const displayServers = () => {
		return servers.map((server, idx) => (
			<Conversation
				key={server._id}
				server={server}
				lastIndex={idx === servers.length - 1}
			/>
		));
	};

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{loading ? (
				<span className='laoding laoding-spinner mx-auti'></span>
			) : (
				displayServers()
			)}
		</div>
	);
}
