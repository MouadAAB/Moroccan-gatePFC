import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
// import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Autoplay, EffectFade } from "swiper/modules";

export default function History() {
	return (
		<div className=' py-10 w-screen h-fit '>
			<h2 className='text-3xl font-bold text-center text-black mb-6'>
				Notre History
			</h2>
			<Swiper
				loop={true}
				// effect='coverflow'
				// effect={"flip"}
				effect={"fade"}
				// spaceBetween={30}
				// slidesPerView={3}
				// grabCursor={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
				}}
				// coverflowEffect={{
				// 	rotate: 0,
				// 	depth: 50,
				// 	scale: 0.9,
				// 	slideShadows: false,
				// }}
				modules={[EffectFade, Autoplay]}
				className='w-[50%] '
			>
				<SwiperSlide>
					<div className='relative '>
						<img
							width={300}
							src='/src/assets/imagessaad/wp_m_01.jpg'
							alt=''
							className='rounded-xl'
						/>
						<div className='absolute w-[500px] h-60 flex flex-col justify-center gap-1 bg-[#FEDD03] top-[35%] left-60 '>
							<div className='text-black font-extrabold font-sans text-2xl px-5'>
								1986
							</div>
							<div className='text-black text-xl font-semibold px-5'>
								World cup
							</div>
							<div className='text-black font-normal text-lg  px-5 '>
								MOROCCO became the first African team to finish top of a group
								at a World Cup and the first African team to reach the knockout
								stages.
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative '>
						<img
							width={300}
							src='/src/assets/imagessaad/wp_m_01.jpg'
							alt=''
							className='rounded-xl z-50'
						/>
						<div className='absolute w-[500px] h-60 flex flex-col justify-center gap-1 bg-[#FEDD03] top-[35%] left-60 '>
							<div className='text-black font-extrabold font-sans text-2xl  px-5'>
								1976
							</div>
							<div className='text-black text-xl font-semibold px-5'>
								African cup
							</div>
							<div className='text-black font-normal text-lg px-5'>
								One of Africa's most successful national football teams, Morocco
								won the 1976 African Cup of Nations.
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative '>
						<img
							width={300}
							src='/src/assets/imagessaad/wp_m_01.jpg'
							alt=''
							className='rounded-xl'
						/>
						<div className='absolute w-[500px] h-60 flex flex-col justify-center bg-[#FEDD03] gap-1 top-[35%] left-60 '>
							<div className='text-black font-extrabold font-sans text-2xl px-5 '>
								2022
							</div>
							<div className='text-black text-xl  font-semibold px-5'>
								World cup QATAR
							</div>
							<div className='text-black font-normal text-lg px-5'>
								Morocco defied all expectations at the 2022 FIFA World Cup,
								topping their group containing Croatia, Canada and Belgium.
								Morocco also eliminated Spain and Portugal to become the first
								African team to reach the semi-finals of the World Cup.
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide>
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
				</SwiperSlide> */}
				{/* <SwiperSlide>
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
				</SwiperSlide> */}
				{/* <SwiperSlide>
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
				</SwiperSlide> */}
			</Swiper>
		</div>
	);
}
