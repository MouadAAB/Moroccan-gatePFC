import React, { useEffect } from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";
import culturePath from "../../zustand/cultureState";

export default function Chat() {
	const { setPath } = culturePath();
	useEffect(() => {
		setPath(location.pathname);
	}, []);
	return (
		<>
		<title>Events</title>
			<div className='element-center h-[87vh] w-full  chatBg'>
				<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
					<SideBar />
					<MessageContainer />
				</div>
			</div>
		</>
	);
}
