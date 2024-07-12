import React, { useEffect, useRef, useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import UnderNav from "./UnderNav";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export default function NavBar() {
	// {Rouge} bg-[#C1272D]
	// {Vert} bg-[#007A33]
	// {OR} bg-[#FFD700]
	// {BLUE MAJORELLE} bg-[#4A90E2]
	// {BLANC CASSE} bg-[#F8F8F8]
	// {NOIR} bg-[#333333]
	// {GRIS CLAIR} bg-[#CCCCCC]
	// const [hovering, setHovering] = useState(false);
	// const [currentSelected, setCurrentSelected] = useState();
	// const homeRef = useRef();
	// const markerClickRef = useRef();
	// const markerHoverRef = useRef();

	// const hendleClick = (e) => {
	// 	markerClickRef.current.style.left = e.target.offsetLeft + "px";
	// 	markerClickRef.current.style.width = e.target.offsetWidth + "px";
	// 	setCurrentSelected(e.currentTarget.id);
	// };

	// const hendleHover = (e) => {
	// 	if (e.currentTarget.id != currentSelected) {
	// 		markerHoverRef.current.style.left = e.target.offsetLeft + "px";
	// 		markerHoverRef.current.style.width = e.target.offsetWidth + "px";
	// 		setHovering(true);
	// 		// console.log(e.current.style)
	// 	}
	// };

	// useEffect(() => {
	// 	markerClickRef.current.style.left = homeRef.current.offsetLeft + "px";
	// 	markerClickRef.current.style.width = homeRef.current.offsetWidth + "px";
	// }, []);
	const [worldCup, setWorldCup] = useState(false);
	const [canCup, setCanCup] = useState(true);
	const navBarRef = useRef();
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY  > lastScrollY) {
				// Scrolling down
				setShowNavbar(false);
			} else {
				// Scrolling up
				setShowNavbar(true);
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);
	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		if (window.scrollY > 100) {
	// 			// console.log(navBarRef.current.style);
	// 			navBarRef.current.style.display = "hidden";
	// 		} else {
	// 			navBarRef.current.style.display = "block";
	// 		}
	// 	});
	// }, []);
	return (
		<nav className=' fixed z-50 w-[100vw] shadow-xl'>
			<div ref={navBarRef} className={` ${showNavbar ? "block" : "hidden"}`}>
				<div className='contactBG flex items-center md:justify-between py-1 '>
					<div className='logofont pl-3 md:pl-7 logo text-[#ffffff]  text-lg lg:text-4xl lg:w-[33.33%] w-[50%] cursor-pointer'>
						<Link to='/'>Moroccan Gate</Link>
					</div>
					<div className='hidden lg:inline-flex element-center gap-9 text-[40px] w-[33.33%] '>
						<Tooltip title='World Cup' enterDelay={500} leaveDelay={200} arrow>
							<div
								className={`rounded-[12px]  py-3 px-3 cursor-pointer transition-all duration-300 border-black border-2 ${
									worldCup ? "bg-[#00A448]" : "bg-black"
								}`}
								onClick={() => {
									setWorldCup(true);
									setCanCup(false);
								}}
							>
								<img
									src='/src/assets/images/yalla-vamos.svg'
									alt=''
									width={45}
									className={` transition-all duration-300  ${
										worldCup && "scale-125"
									} `}
								/>
							</div>
						</Tooltip>
						<Tooltip title='CAF' enterDelay={500} leaveDelay={200} arrow>
							<div
								className={`rounded-[12px]  py-1 px-2 cursor-pointer transition-all duration-300 border-black border-2 ${
									canCup ? "bg-[#00A448]" : "bg-black"
								}`}
								onClick={() => {
									setWorldCup(false);
									setCanCup(true);
								}}
							>
								<img
									src='/src/assets/images/file.png'
									alt=''
									width={50}
									className={` transition-all duration-300 scale-80   ${
										canCup && "scale-125"
									} `}
								/>
							</div>
						</Tooltip>
					</div>
					<div className='md:pr-7  pr-3 flex justify-end  items-center text-3xl lg:w-[33.33%] w-[50%] gap-2'>
						<Link
							to='/contact/login'
							className='w-fit h-fit font-semibold text-black bg-white hover:bg-[#02a95c] hover:text-white border-[#02a95c] border-2  fo rounded-md md:rounded-[11px] md:py-[6px] py-1 md:px-3 px-2 md:text-lg text-sm  transition  duration-300 '
						>
							Sign in
						</Link>
						<div className='bg-slate-100  w-[.7px] h-10'></div>
						<MdOutlineLanguage className='hidden lg:block cursor-pointer text-white ' />
						<HiMenu className='lg:hidden cursor-pointer text-white' />
					</div>
				</div>
				<div className='lg:hidden bg-white h-fit element-center gap-2 w-full py-2'>
					<div
						className={` element-center gap-1 logofont px-2 py-1 rounded-lg border-2 border-black cursor-pointer transition-all duration-300 ${
							worldCup ? "bg-[#00A448]" : "bg-white"
						}`}
						onClick={() => {
							setWorldCup(true);
							setCanCup(false);
						}}
					>
						<img
							src='/src/assets/images/yalla-vamos.svg'
							alt=''
							width={30}
							className={`transition-all duration-300  ${
								worldCup && "scale-105 ]"
							} `}
						/>
						World Cup
					</div>
					<div
						className={` element-center gap-1 logofont px-4 py-0 rounded-lg border-2 border-black cursor-pointer transition-all duration-300 ${
							canCup ? "bg-[#00A448]" : "bg-white"
						}`}
						onClick={() => {
							setWorldCup(false);
							setCanCup(true);
						}}
					>
						<img
							src='/src/assets/images/file.png'
							alt=''
							width={30}
							className={`transition-all duration-300 scale-100   ${
								canCup && "scale-110 ]"
							} `}
						/>
						CAF Cup
					</div>
				</div>
			</div>
			<div className='hidden lg:block'>
				<UnderNav />
			</div>
		</nav>
	);
}
