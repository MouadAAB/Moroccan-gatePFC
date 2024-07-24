// import React, { useEffect } from "react";
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";
// import { TiMessages } from "react-icons/ti";
// import useConversation from "../../zustand/useCovnversations";
// import { useAuthContext } from "../../context/AuthContext";

// export default function MessageContainer() {
// 	const { selectedConversation, setSelectedConversation } = useConversation();

// 	useEffect(() => {
// 		// console.log("tfat");
// 		return () => setSelectedConversation(null);
// 	}, []);
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col '>
// 			{!selectedConversation ? (
// 				<NoChatSelectd />
// 			) : (
// 				<>
// 					<div className='bg-slate-800 px-4 py-2 mb-2'>
// 						<span className='label-text'>To: </span>
// 						<span className='text-gray-900 font-bold'>
// 							{selectedConversation.fullName}{" "}
// 						</span>
// 					</div>
// 					<Messages />
// 					<MessageInput />
// 				</>
// 			)}
// 		</div>
// 	);
// }

// const NoChatSelectd = () => {
// 	const { authUser } = useAuthContext();
// 	return (
// 		<div className='flex items-center justify-center w-full h-full'>
// 			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
// 				<p>Welcome 👋 {authUser.fullName} ❄️</p>
// 				<p>select a chat to start messaging</p>
// 				<TiMessages className='text-3xl md:text-6xl text-center' />
// 			</div>
// 		</div>
// 	)
// };

import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { TiMessages } from "react-icons/ti";
import useServers from "../../zustand/useServers";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useJoinServer from "../../hooks/useJoinServer";
import useGetServers from "../../hooks/useGetServers";

export default function MessageContainer() {
	const { selectedServer, setSelectedServer } = useServers();
	const { authUser } = useAuthContext();
	const { loading, join } = useJoinServer();

	const { servers } = useGetServers();
	useEffect(() => {
		return () => setSelectedServer(null);
	}, []);
	const j = selectedServer?.participants.includes(authUser._id);
	const handleJoin = () => {
		join(selectedServer._id, authUser._id);
	};
	return (
		<div className='md:min-w-[450px] flex flex-col '>
			{!selectedServer ? (
				<NoChatSelectd />
			) : j ? (
				<>
					<Messages />
					<MessageInput />
				</>
			) : (
				<div className='w-full h-full flex items-center justify-center'>
					<button
						className='text-white rounded-3xl bg-[#00A448] p-3'
						onClick={handleJoin}
					>
						{loading ? (
							<div className='loading loading-spinner'></div>
						) : (
							`join ${selectedServer.serverName} server`
						)}
					</button>
				</div>
			)}
		</div>
	);
}

const NoChatSelectd = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ⚽️</p>
				<p>select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
