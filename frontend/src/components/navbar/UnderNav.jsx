import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { SiTheconversation } from "react-icons/si";
import { BiSolidConversation } from "react-icons/bi";

export default function UnderNav() {
	const [showPopUp, setShowPopUp] = useState(false);
	const handlePopUp = () => {
		setShowPopUp(!showPopUp);
	};
	return (
		<>
			<div className='underNav  bg-slate-100 text-zinc-500 element-center gap-[50px] '>
				<Link
					to='/'
					className='relative  text-base  font-bold hover:text-[#00A448]  py-3 px-3   cursor-pointer group'
				>
					<span>Home</span>
				</Link>
				<span className='relative  text-base font-bold hover:text-[#00A448]   py-3 px-3 cursor-pointer group'>
					Moroccan Guide
					<MdArrowDropDown className='inline text-2xl' />
					<div className='tooText invisible absolute text-center top-[100%] font-normal left-0 right-0 bg-[#00A448]  rounded-[6px] text-white  transition-opacity duration-500 ease-linear  group-hover:visible group-hover:opacity-100 r z-50'>
						<Link
							to='/guide/culture'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							Culture
						</Link>
						<Link
							to='/guide/gastronomy'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							Gastronomy
						</Link>
						{/* <Link
							to='/guide/hotels'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							hotels & hostels
						</Link> */}
						<Link
							to='/guide/transport'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							Transport
						</Link>
						<Link
							to='/guide/terrain'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							terrain
						</Link>
					</div>
				</span>
				<span className='relative  text-base font-bold hover:text-[#00A448]  py-3 px-3 cursor-pointer group'>
					Competition
					<MdArrowDropDown className='inline text-2xl' />
					<div className='tooText invisible absolute text-center top-[100%] font-normal left-0 right-0 bg-[#00A448]  rounded-[6px] text-white  transition-opacity duration-500 ease-linear  group-hover:visible group-hover:opacity-100 r z-50'>
						<Link
							to='/competition/news'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							News
						</Link>
						<Link
							to='/competition/groupstages'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							Match & Results
						</Link>
						<Link
							to='/competition/videos'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							Videos
						</Link>
						<Link
							to='/competition/tickets'
							className='block py-3 hover:underline hover:scale-110 transition duration-200'
						>
							Tickets
						</Link>
					</div>
				</span>
				<Link
					to='/events'
					className='relative   text-base font-bold hover:text-[#00A448]  py-3 px-3 cursor-pointer group'
				>
					Events
				</Link>
				{/* <Link
					className='relative  text-base font-bold hover:text-[#00A448] border-slate-100  py-3 px-3 cursor-pointer group'
					onClick={handlePopUp}
				>
					Contact Us
				</Link> */}
				<div
					className={`${
						!showPopUp ? "hidden" : ""
					}   absolute w-[33%] h-fit  inset-y-36 rounded-2xl z-10 bg-white`}
				>
					<div className='w-full flex justify-end items-center  h-fit rounded-3xl py-2 pr-2 '>
						<IoClose
							className=' text-3xl  hover:bg-slate-200  rounded-full cursor-pointer'
							onClick={handlePopUp}
						/>
					</div>
					<div className='w-full flex flex-col items-center justify-center gap-4  text-black mb-7'>
						<div className='font-extrabold text-2xl '>Contact Us</div>
						<div className='w-[70%] text-center '>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
						</div>
						<div className='w-full'>
							{/* <label>Contact Us</label> */}
							<input
								type='text'
								className='block bg-white outline-none bg-transparent border-b-2 border-black p-1 w-[82%] my-3 mx-auto'
								placeholder='votre nom'
							/>
							<input
								type='text'
								className='block bg-white outline-none bg-transparent border-b-2 border-black p-1 w-[82%] my-3 mx-auto'
								placeholder='votre email'
							/>
							<input
								type='text'
								className='block bg-white outline-none bg-transparent border-b-2 border-black p-1 w-[82%] my-3 mx-auto'
								placeholder='message'
							/>
						</div>
						<div className='py-3 px-5 bg-amber-300 rounded-md cursor-pointer'>
							Submit
						</div>
					</div>
				</div>
			</div>
			<div
				className={`${
					!showPopUp ? "hidden " : ""
				} absolute w-[100vw] h-screen bg-opacity-50 bg-black`}
				onClick={handlePopUp}
			></div>
			<div
				className='cursor-pointer inset-y-[700px] hover:scale-110 transition duration-200 text-3xl inset-x-[1350px] rounded-full bg-[#FEDD03] text-black w-fit h-fit py-3 px-3 z-40 fixed '
				onClick={handlePopUp}
			>
				<BiSolidConversation />
			</div>
		</>
	);
}
