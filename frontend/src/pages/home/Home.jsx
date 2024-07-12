import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Matches from "./Matches";
import NewsSlider from "./NewsSlider";
import Stadiums from "./Stadiums";
import Can_groups from "./Can_groups";
import EvolutionSection from "./EvolutionSection";
import FlagsMove from "./flags";
import History from "./History";

export default function Home() {
	return (
		<div>
			<title>Home</title>

			<div className='ssbg h-[80vh] flex bg-[#fefefe]'>
				<Matches />
				<NewsSlider />
			</div>
			<Stadiums />

			<Can_groups />
			<div>
				<FlagsMove />
			</div>
			<div>
				<History />
			</div>
			{/* <div className='App'>
				<EvolutionSection />
			</div> */}

			<div className='bg-white py-10'>
				<h2 className='text-3xl font-bold text-center mb-6'>Latest News</h2>
				<div className='flex justify-center gap-6'>
					<div className='bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]'>
						<h3 className='text-xl font-bold'>News Item 1</h3>
						<p className='mt-2'>Details about news item 1.</p>
					</div>
					<div className='bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]'>
						<h3 className='text-xl font-bold'>News Item 2</h3>
						<p className='mt-2'>Details about news item 2.</p>
					</div>
					<div className='bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]'>
						<h3 className='text-xl font-bold'>News Item 3</h3>
						<p className='mt-2'>Details about news item 3.</p>
					</div>
				</div>
			</div>

			<div className='bg-white py-10'>
				<h2 className='text-3xl font-bold text-center mb-6'>Upcoming Events</h2>
				<div className='flex justify-center gap-6'>
					<div className='bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]'>
						<h3 className='text-xl font-bold'>Event 1</h3>
						<p className='mt-2'>Details about event 1.</p>
					</div>
					<div className='bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]'>
						<h3 className='text-xl font-bold'>Event 2</h3>
						<p className='mt-2'>Details about event 2.</p>
					</div>
					<div className='bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]'>
						<h3 className='text-xl font-bold'>Event 3</h3>
						<p className='mt-2'>Details about event 3.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
