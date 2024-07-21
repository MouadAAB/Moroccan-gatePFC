import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Matches from "./Matches";
import NewsSlider from "./NewsSlider";
import Stadiums from "./Stadiums";
import Can_groups from "./Can_groups";
import FlagsMove from "./flags";
import History from "./History";
import Events from "./Events";
import LatestNews from "./LatestNews";
import culturePath from "../../zustand/cultureState";

export default function Home() {
	const { setPath } = culturePath();
	useEffect(() => {
		setPath(location.pathname);
	}, []);
	return (
		<div className=''>
			<title>Home</title>
				<div className=' h-[80vh] flex bg-[#fefefe]'>
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

			<div className=' py-10'>
				<div>
					<LatestNews />
				</div>
			</div>
			<div className='container mx-auto my-3'>
				<Events />
			</div>
		</div>
	);
}
