import React, { useState } from "react";
import { Link } from "react-router-dom";
import eventsData from "../../../eventsData";

export default function Events() {
	const [selectedEvent, setSelectedEvent] = useState(null);
	const handleImageClick = (event) => {
		setSelectedEvent(event);
	};

	const displayedEvents = eventsData.slice(0, 3);
	return (
		<>
			<div className='container' >
				<div className='font-bold text-center text-3xl text-black'>
					Upcoming Events
				</div>
				<div className='element-center gap-3 my-8'>
					{displayedEvents.map((ev) => (
						<div className='relative cursor-pointer w-full h-64 group transition-transform duration-300 transform'>
							<img
								src={ev.image}
								alt={ev.name}
								className='rounded-lg w-full h-64 object-cover'
							/>
							<div className='backdrop-filter backdrop-blur-md   opacity-0 transition-all duration-700 bg-[#000] bg-opacity-15 ease-in-out group-hover:opacity-100  rounded-t-lg w-full h-16 inset-y-0 absolute text-white font-semibold text-xl element-center'>
								{ev.name}
							</div>
							<div className='backdrop-filter backdrop-blur-md   opacity-0 transition-all duration-700 bg-[#000] bg-opacity-15 ease-in-out group-hover:opacity-100  rounded-b-lg w-full h-16 inset-y-[75%] absolute element-center'>
								<div className='font-normal cursor-pointer  w-fit h-fit rounded-3xl  bg-[#00A448]  transition duration-300  text-[#fff]  px-3 py-2'>
									<Link to={"/events"}>Join Event ({ev.participants})</Link>
								</div>
							</div>
						</div>
					))}
					<div className=''>
						<img src='' alt='' />
					</div>
				</div>
				<div className='mx-auto mt-8 font-semibold cursor-pointer tracking-wider w-fit h-fit rounded-3xl border-2 bg-white border-[#00A448] transition duration-300 hover:bg-[#00A448] text-[#00A448] hover:text-white px-4 py-2'>
					<Link to='/events'>Show More</Link>
				</div>
			</div>
		</>
	);
}
