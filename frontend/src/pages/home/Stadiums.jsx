import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Stadiums() {
	return (
		<div className=' py-10  '>
			<h2 className='text-3xl  font-bold text-center text-black mb-6'>
				Moroccan Stadiums
			</h2>
			{/* <Swiper
				loop={true}
				effect='coverflow'
				spaceBetween={30}
				slidesPerView={3}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				coverflowEffect={{
					rotate: 0,
					depth: 50,
					scale: 0.9,
					slideShadows: false,
				}}
				modules={[EffectCoverflow, Autoplay]}
				className='w-[90%] mx-auto'
			>
				<SwiperSlide>
					<div className=' p-6 bg-[#FFDF99] rounded-lg shadow-lg'>
						<h3 className='text-xl font-bold text-center text-black'>
							MOHAMMED V CasaBlanca
						</h3>
						<div className='h-5'></div>
						<img
							src='/src/assets/images/MohammedV.jpeg'
							alt='MohammedV Stadium'
							className='rounded-xl shadow-lg'
						/>
						<p className='mt-2 text-[#3C280D]'>
							The stadium has a seating capacity of 45,891, and is the oldest
							football stadium in Morocco.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className=' p-6 bg-[#FFDF99] rounded-lg shadow-lg'>
						<h3 className='text-xl font-bold text-center text-black'>
							Moulay Abdallah Complex
						</h3>
						<div className='h-5'></div>
						<img
							src='/src/assets/images/RABAT_bas.jpg'
							alt='MohammedV Stadium'
							className='rounded-xl shadow-lg'
						/>
						<p className='mt-2 text-[#3C280D]'>
							RABAT | Moulay Abdallah Complex | Stadium (69.500 seats) & Olympic
							Stadium (21.740 seats)
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className=' p-6 bg-[#FFDF99] rounded-lg shadow-lg'>
						<h3 className='text-xl font-bold text-center text-black'>
							Stade de Marrakech
						</h3>
						<div className='h-5'></div>
						<img
							src='/src/assets/images/Marrakech.jpg'
							alt='MohammedV Stadium'
							className='rounded-xl shadow-lg'
						/>
						<p className='mt-2 text-[#3C280D]'>
							The stadium has a seating capacity of 45,891, and is the oldest
							football stadium in Morocco.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className=' p-6 bg-[#FFDF99] rounded-lg shadow-lg'>
						<h3 className='text-xl font-bold text-center text-black'>
							MOHAMMED V CasaBlanca
						</h3>
						<div className='h-5'></div>
						<img
							src='/src/assets/images/MohammedV.jpeg'
							alt='MohammedV Stadium'
							className='rounded-xl shadow-lg'
						/>
						<p className='mt-2 text-[#3C280D]'>
							The stadium has a seating capacity of 45,891, and is the oldest
							football stadium in Morocco.
						</p>
					</div>
				</SwiperSlide>
			</Swiper> */}
			<div className=' element-center w-[90%] m-auto h-[45vh]  gap-7'>
				<div className='sliderShadow  w-[33.33%] h-full rounded-xl'>
					<div className=' py-4 w-full h-full bg-[#FEE334] px-4  z-10 rounded-xl flex flex-col items-center'>
						<div className='text-xl font-extrabold text-center text-black mb-3 '>
							Stade de Marrakech
						</div>
						<img
							width={400}
							src='/src/assets/images/Marrakech.jpg'
							alt='MohammedV Stadium'
							className='rounded-lg '
						/>
						<div className='m-4 text-center text-[#2c2010] '>
							The stadium has a seating capacity of 45,891, and is the oldest
							football stadium in Morocco.
						</div>
					</div>
				</div>
				<div className='sliderShadow  w-[33.33%] h-full rounded-xl'>
					<div className=' py-4 w-full h-full bg-[#FEE334] px-4  z-10 rounded-xl flex flex-col items-center'>
						<div className='text-xl font-extrabold text-center text-black mb-3 '>
							MOHAMMED V CasaBlanca
						</div>
						<img
							width={400}
							src='/src/assets/images/MohammedV.jpeg'
							alt='MohammedV Stadium'
							className='rounded-lg '
						/>
						<div className='m-4 text-center text-[#2c2010]'>
							The stadium has a seating capacity of 45,891, and is the oldest
							football stadium in Morocco.
						</div>
					</div>
				</div>
				<div className='sliderShadow  w-[33.33%] h-full rounded-xl'>
					<div className=' py-4 w-full h-full bg-[#FEE334]  px-4  z-10 rounded-xl flex flex-col items-center'>
						<div className='text-xl font-extrabold text-center text-black  mb-3'>
							Moulay Abdallah Complex
						</div>
						<img
							width={400}
							src='/src/assets/images/RABAT_bas.jpg'
							alt='MohammedV Stadium'
							className='rounded-lg '
						/>
						<div className='m-4 text-center text-[#2c2010]'>
							RABAT | Moulay Abdallah Complex | Stadium (69.500 seats) & Olympic
							Stadium (21.740 seats)
						</div>
					</div>
				</div>

				{/* <div className='py-3 px-4 bg-[#FFDF99] rounded-lg'>
					<div className='text-xl font-bold text-center text-black'>
						MOHAMMED V CasaBlanca
					</div>
					<img
						src='/src/assets/images/MohammedV.jpeg'
						alt='MohammedV Stadium'
						className='rounded-xl shadow-lg'
					/>
					<p className='mt-2 text-[#3C280D]'>
						The stadium has a seating capacity of 45,891, and is the oldest
						football stadium in Morocco.
					</p>
				</div> */}
				{/* <div className='py-3 px-4 bg-[#FFDF99] rounded-lg'>
					<div className='text-xl font-bold text-center text-black'>
						MOHAMMED V CasaBlanca
					</div>
					<img
						src='/src/assets/images/MohammedV.jpeg'
						alt='MohammedV Stadium'
						className='rounded-xl shadow-lg'
					/>
					<p className='mt-2 text-[#3C280D]'>
						The stadium has a seating capacity of 45,891, and is the oldest
						football stadium in Morocco.
					</p>
				</div> */}
			</div>
			<div className=' mx-auto mt-8 font-semibold cursor-pointer tracking-wider w-fit h-fit rounded-3xl border-2 bg-white border-[#00A448] transiton duration-300 hover:bg-[#00A448] text-[#00A448] hover:text-white px-8 py-2'>
				<Link to='/guide/terrain'>Show More</Link>
			</div>
		</div>
	);
}
