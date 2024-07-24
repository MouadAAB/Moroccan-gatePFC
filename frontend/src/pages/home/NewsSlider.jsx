import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function NewsSlider() {
	return (
		<div className=' w-[75%] h-full   rounded-2xl px-3 py-8'>
			<div className='h-full    '>
				<Swiper
					speed={1000}
					loop={true}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					modules={[Autoplay, Navigation]}
					className='mySwiper w-full h-full bg-white text-center rounded-2xl'
				>
					{/* <SwiperSlide className='container'>
						<div className='relative '>
							<img
								src='/src/assets/imagessaad/morocco.jpg'
								alt=''
								className='   w-full h-full '
							/>
							<div className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white'>
								<h2 className='px-4 py-2 text-2xl text-left font-bold'>
									Les groupes de qualification <br /> pour la CAN TotalEnergies{" "}
									<br /> CAF Maroc 2025
								</h2>
								<button className='bg-[#FBB117] hover:bg-[#F0FFF0] text-[#0F5132] font-bold py-2 px-4 rounded'>
									<a href='/competition/groupstages'>Voir Plus</a>
								</button>
							</div>
						</div>
					</SwiperSlide> */}
					<SwiperSlide className='container relative slid1BG'>
							<div className='absolute top-1/2 left-1/3 transform -translate-y-1/2 text-white'>
								<div className='px-4 py-2 text-2xl text-center font-bold'>
									Les groupes de qualification <br /> pour la CAN TotalEnergies{" "}
									<br /> CAF Maroc 2025
								</div>
								<button className='bg-[#FBB117] hover:bg-[#F0FFF0] text-[#0F5132] font-bold py-2 px-4 rounded'>
									<Link to='/competition/groupstages'>Voir Plus</Link>
								</button>
							</div>
					</SwiperSlide>
					{/* <SwiperSlide>
						<div className='relative '>
							<img
								src='/src/assets/imagessaad/MAROC.jpg'
								alt=''
								className='rounded-lg  w-full h-full'
							/>
							<div className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white'>
								<h2 className='px-4 py-2 text-2xl text-left font-bold'>
									Bienvenu aux traditions <br /> et la culture marocaines
									<br />à découvrir !!!
								</h2>
								<div></div>

								<button className='bg-[#FBB117] hover:bg-[#F0FFF0] text-[#0F5132] font-bold py-2 px-4 rounded'>
									<a href='/guide/culture'>Voir Plus</a>
								</button>
							</div>
						</div>
					</SwiperSlide> */}
				</Swiper>
			</div>
		</div>
	);
}
