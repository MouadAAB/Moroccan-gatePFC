// import React, { useState } from "react";
// import useConversation from "../../zustand/useCovnversations";
// import { useSocketContext } from "../../context/SocketContext";

// export default function Conversation({ conversation, lastIndex }) {
// 	const {selectedConversation, setSelectedConversation} = useConversation();
// 	const selected = (selectedConversation?._id === conversation._id);
// 	const {onlineUsers} = useSocketContext();
// 	const isOnline = onlineUsers.includes(conversation._id);
// 	return (
// 		<>
// 			<div
// 				className={`felx gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
// 					selected ? "bg-sky-500" : ""
// 				}`}
// 				onClick={() => setSelectedConversation(conversation)}
// 			>
// 				<div className={`avatar  ${isOnline? 'online': ''}`}>
// 					<div className='w-12 rounded-full'>
// 						<img src={conversation.profilePic} alt='user avatar' />
// 					</div>
// 				</div>
// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
// 						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
// 			</div>
// 			{!lastIndex && <div className='divider my-0 py-0 h-1' />}
// 		</>
// 	);
// }

import React, { useState } from "react";
import useServers from "../../zustand/useServers";
import { useAuthContext } from "../../context/AuthContext";

export default function Conversation({ server, lastIndex }) {
	const { selectedServer, setSelectedServer } = useServers();
	const selected = selectedServer?._id === server._id;
	const { authUser } = useAuthContext();
	const handleClick = () => {
		setSelectedServer(server);
	};
	return (
		<>
			<div
				className={`flex items-center gap-2  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
					selected ? "bg-sky-500" : ""
				}`}
				onClick={handleClick}
			>
				<div className={`avatar `}>
					<div className='w-12 rounded-full'>
						<img src={`/images/${server.img}`} alt='' />
					</div>
				</div>
				<div className='font-bold text-gray-200'>{server.serverName}</div>
			</div>
			{!lastIndex && <div className='divider my-0 py-0 h-1' />}
		</>
	);
}
