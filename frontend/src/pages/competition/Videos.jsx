import React, { useState, useEffect } from "react";
import axios from "axios";
import culturePath from "../../zustand/cultureState";

const API_KEY = "AIzaSyB_-M0D8bPKOPj_q9Gq_Vvnk-XzKvSc07I";
const SEARCH_QUERIES = ["african cup 2025 in english "];

const Videos = () => {
	const [videos, setVideos] = useState([]);
	const [currentVideo, setCurrentVideo] = useState(null);
const { setPath } = culturePath();
useEffect(() => {
	setPath(location.pathname);
}, []);
	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const promises = SEARCH_QUERIES.map((query) =>
					axios.get(
						`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&part=snippet,id&order=date&maxResults=10`
					)
				);
				const responses = await Promise.all(promises);
				const videoData = responses.flatMap((response) =>
					response.data.items.map((item) => ({
						title: item.snippet.title,
						thumbnail: item.snippet.thumbnails.high.url,
						videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
					}))
				);
				setVideos(videoData);
				setCurrentVideo(videoData[0]);
			} catch (error) {
				console.error("Error fetching videos:", error);
			}
		};

		fetchVideos();
	}, []);

	if (!currentVideo) {
		return <div>Loading...</div>;
	}

	return (
		<div className='bg-slate-100 min-h-screen py-8 background'>
			<div className='container mx-auto px-4'>
				<h1 className='text-4xl font-bold mb-8 text-left text-black'>
					Video Highlights
				</h1>
				<div className='flex gap-6'>
					<div className='flex-1'>
						<div className='relative'>
							<iframe
								src={currentVideo.videoUrl}
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								className='w-full h-[470px] rounded-lg shadow-lg video-player'
							></iframe>
						</div>
						<div className='mt-4 text-left text-black text-[30px]'>
							{currentVideo.title}
						</div>
					</div>
					<div className='w-1/4 flex flex-col space-y-4 overflow-y-auto h-[470px] custom-scrollbar'>
						{videos.map((video, index) => (
							<div
								key={index}
								onClick={() => setCurrentVideo(video)}
								className='cursor-pointer'
							>
								<div className='relative h-[145px]'>
									<img
										src={video.thumbnail}
										alt={video.title}
										className='w-full h-full object-cover rounded-lg shadow-lg'
									/>
									<div className='absolute inset-0 bg-black bg-opacity-25 rounded-lg'></div>
									<div className='absolute bottom-0 left-0 p-2 bg-black bg-opacity-75 text-white rounded-b-lg w-full text-center'>
										{video.title}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Videos;
