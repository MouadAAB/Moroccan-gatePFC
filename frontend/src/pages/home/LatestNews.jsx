import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LatestNews = () => {
	const [latestNews, setLatestNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchLatestNews = async () => {
			try {
				const response = await axios.get("https://newsapi.org/v2/everything", {
					params: {
						q: "football AND (Africa OR Morocco)",
						apiKey: "4b7ee301bb1647ea8c51e5cd5be31e32",
						language: "en",
						pageSize: 4,
					},
				});
				setLatestNews(response.data.articles);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching latest news:", error);
				setLoading(false);
			}
		};

		fetchLatestNews();
	}, []);

	return (
		<div className='container mx-auto'>
			<h2 className='text-2xl font-bold my-4 text-center text-black'>Latest News</h2>
			{loading ? (
				<p className='text-center'>Loading...</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
					{latestNews.map((newsItem, index) => (
						<div key={index} className='bg-white p-4 rounded-lg shadow-md'>
							{newsItem.urlToImage && (
								<img
									src={newsItem.urlToImage}
									alt={newsItem.title}
									className='w-full h-48 object-cover mb-4'
								/>
							)}
							<h3 className='text-lg font-bold mb-2'>{newsItem.title}</h3>
							<p className='text-sm text-gray-700 mb-4'>
								{newsItem.description}
							</p>
							<a href={newsItem.url} className='text-blue-500 hover:underline'>
								Read more
							</a>
						</div>
					))}
				</div>
			)}
			<div className='mx-auto mt-8 font-semibold cursor-pointer tracking-wider w-fit h-fit rounded-3xl border-2 bg-white border-[#00A448] transition duration-300 hover:bg-[#00A448] text-[#00A448] hover:text-white px-4 py-2'>
				<Link to='/competition/news'>Show More</Link>
			</div>
		</div>
	);
};

export default LatestNews;
