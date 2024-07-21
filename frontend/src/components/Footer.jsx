import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa6";


export default function Footer() {
	return (
		<div className='w-screen h-[40vh] mt-10'>
			<div className='mx-auto border-t-2 border-[#D9D9D9] w-[90%] h-[40vh]  flex justify-center items-center'>
				<div className='w-[40%] h-full  element-center'>
					<img src='/src/assets/imagessaad/ff.png' alt=''
					width={400} />
				</div>

				<div className='w-[25%] h-full  element-center'>
					<div>
						<div className='text-black text-xl font-semibold my-2'>
							Morocccan Guide
						</div>
						<div className='text-[#8C8C8C] '>
							<Link className='hover:text-green-500 transition duration-300 block my-2'>
								Culutre
							</Link>
							<Link className='hover:text-green-500 transition duration-300 block my-2'>
								Gastronomy
							</Link>
							<Link className='hover:text-green-500 transition duration-300 block my-2'>
								Transport
							</Link>
							<Link className='hover:text-green-500 transition duration-300 block my-2'>
								Terrain
							</Link>
						</div>
					</div>
				</div>
				<div className='w-[25%] h-full  element-center'>
					<div>
						<div className='text-black text-xl font-semibold my-2'>
							Competition
						</div>
						<div className='text-[#8C8C8C] '>
							<Link className='hover:text-green-500 transition duration-300 block my-2 '>
								News
							</Link>
							<Link className='hover:text-green-500 transition duration-300 block my-2 '>
								Match & Results
							</Link>
							<Link className='hover:text-green-500 transition duration-300 block my-2 '>
								Videos
							</Link>
							<Link className='hover:text-green-500 transition duration-300 block my-2 '>
								Tickets
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='w-screen bg-slate-100'>
				<div className='mx-auto border-t-2 border-[#D9D9D9] w-[90%] h-[10vh] element-center'>
					<div className='w-[50%] flex justify-start items-center gap-4 '>
						<div className=' cursor-pointer text-3xl text-black rounded-md border-[1px] border-[#D9D9D9] w-fit h-fit py-2 px-2'>
							<FaLinkedinIn />
						</div>
						<div className=' cursor-pointer text-3xl text-black rounded-md border-[1px] border-[#D9D9D9] w-fit h-fit py-2 px-2'>
							<BsGithub />
						</div>
						<div className=' cursor-pointer text-3xl text-black rounded-md border-[1px] border-[#D9D9D9] w-fit h-fit py-2 px-2'>
							<FaInstagram />
						</div>
						<div className=' cursor-pointer text-3xl text-black rounded-md border-[1px] border-[#D9D9D9] w-fit h-fit py-2 px-2'>
							<RiTwitterXLine />
						</div>
					</div>
					<div className='w-[50%] '>
						<div>
							<FaCopyright className='inline' /> Moroccan Gate all rights
							reserved
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
