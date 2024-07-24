import React, { useState, useEffect } from "react";
import axios from "axios";
import culturePath from "../../zustand/cultureState";

const News = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(`https://newsapi.org/v2/everything`, {
					params: {
						q: "football AND (Africa OR Morocco)",
						apiKey: "4b7ee301bb1647ea8c51e5cd5be31e32",
						language: "en",
					},
				});
				setNews(response.data.articles);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching news:", error);
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	const { setPath } = culturePath();
	useEffect(() => {
		setPath(location.pathname);
	}, []);
	return (
		<>
			<title>News</title>
			<div className='bg-gray-100 min-h-screen py-8'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl font-bold mb-8 text-center text-black'>
						Latest Football News
					</h1>
					{loading ? (
						<p className='text-center'>Loading...</p>
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
							{news.map((article, index) => (
								<div
									key={index}
									className='bg-white shadow-lg rounded-lg overflow-hidden'
								>
									{article.urlToImage && (
										<img
											src={article.urlToImage}
											alt={article.title}
											className='w-full h-48 object-cover'
										/>
									)}
									<div className='p-4'>
										<h2 className='text-lg font-bold mb-2'>{article.title}</h2>
										<p className='text-sm text-gray-700 mb-4'>
											{article.description}
										</p>
										<a
											href={article.url}
											target='_blank'
											rel='noopener noreferrer'
											className='text-blue-500 hover:underline'
										>
											Read more
										</a>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default News;
