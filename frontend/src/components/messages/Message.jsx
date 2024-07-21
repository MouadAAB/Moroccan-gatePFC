// import React from "react";
// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useCovnversations";
// import extractTime from "../../utils/extractTime";

// export default function Message({ mssg }) {
// 	const { authUser } = useAuthContext();
// 	const { selectedConversation } = useConversation();
// 	const fromMe = mssg?.senderId === authUser._id;
//   const chatClassName = fromMe ? 'chat-end' : 'chat-start'
//   const bubbleBgColor = fromMe? 'bg-blue-500' : '';
// 	const profilePicture = fromMe
// 		? authUser.profilePic
// 		: selectedConversation?.profilePic;

//   const extractedTime = extractTime(mssg.createdAt);
// 	return (
// 		<div className={`chat ${chatClassName}`}>
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img src={profilePicture} alt='Tailwind css chat bubble component' />
// 				</div>
// 			</div>
// 			<div className={`chat-bubble text-white ${bubbleBgColor}`}>
// 				{mssg?.message}
// 			</div>
// 			<div className='chat-footer opacity-50 text-xs '>{extractedTime}</div>
// 		</div>
// 	);
// }

import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useServers from "../../zustand/useServers";
import extractTime from "../../utils/extractTime";
import useGetUsers from "../../hooks/useGetUsers";

export default function Message({ mssg, users }) {
	// const { users } = useGetUsers();
	const { authUser } = useAuthContext();
	const { selectedServer } = useServers();
	const fromMe = mssg?.senderId === authUser._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
	const addPic = users.filter((user) => user._id === mssg?.senderId);
	const profilePicture = fromMe ? authUser.profilePic : addPic[0].profilePic;
	console.log(addPic[0].profilePic);
	// console.log(users?.profilePic);
	const extractedTime = extractTime(mssg.createdAt);
	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img src={profilePicture} alt='Tailwind css chat bubble component' />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor}`}>
				{mssg?.message}
			</div>
			<div className='chat-footer opacity-50 text-xs '>{extractedTime}</div>
		</div>
	);
}
