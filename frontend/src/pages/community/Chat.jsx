import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";

export default function Chat() {
	return (
		<div className='element-center h-[85vh] w-full bg-black contactBG'>
			<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
				<SideBar />
				<MessageContainer />
			</div>
		</div>
	);
}
