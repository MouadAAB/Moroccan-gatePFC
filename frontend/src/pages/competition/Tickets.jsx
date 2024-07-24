import React, { useState, useEffect } from "react";
import culturePath from "../../zustand/cultureState";

const matches = [
	{
		id: 1,
		teams: "Morocco vs Egypt",
		date: "2024-07-15",
		location: "Stadium A",
		weather: "Sunny",
		info: "Details about the match.",
	},
	{
		id: 2,
		teams: "Algeria vs Tunisia",
		date: "2024-07-16",
		location: "Stadium B",
		weather: "Cloudy",
		info: "Details about the match.",
	},
	{
		id: 3,
		teams: "Nigeria vs Ghana",
		date: "2024-07-17",
		location: "Stadium C",
		weather: "Rainy",
		info: "Details about the match.",
	},
	{
		id: 4,
		teams: "Cameroon vs Ivory Coast",
		date: "2024-07-18",
		location: "Stadium D",
		weather: "Windy",
		info: "Details about the match.",
	},
	{
		id: 5,
		teams: "Senegal vs Mali",
		date: "2024-07-19",
		location: "Stadium E",
		weather: "Hot",
		info: "Details about the match.",
	},
];

const Tickets = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedMatch, setSelectedMatch] = useState(matches[0]);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? matches.length - 4 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === matches.length - 4 ? 0 : prevIndex + 1
		);
	};

	const handleMatchClick = (match) => {
		setSelectedMatch(match);
	};

	useEffect(() => {
		setSelectedMatch(matches[currentIndex]);
	}, [currentIndex]);
	const { setPath } = culturePath();
	useEffect(() => {
		setPath(location.pathname);
	}, []);
	return (
		<>
		<title>Tickets</title>
			<div className='tickets-container p-4 bg-gray-100 min-h-screen'>
				<div className='top-nav flex justify-end mb-4'>
					<button
						onClick={handlePrevClick}
						className='arrow-button bg-gray-300 p-2 rounded hover:bg-gray-400'
					>
						&#8592;
					</button>
					<button
						onClick={handleNextClick}
						className='arrow-button bg-gray-300 p-2 rounded hover:bg-gray-400 ml-2'
					>
						&#8594;
					</button>
				</div>
				<div className='matches-grid grid grid-cols-4 gap-4 mb-4'>
					{matches.slice(currentIndex, currentIndex + 4).map((match) => (
						<button
							key={match.id}
							onClick={() => handleMatchClick(match)}
							className={`match-button p-4 bg-white border rounded shadow hover:bg-gray-200 ${
								selectedMatch.id === match.id ? "bg-gray-200" : ""
							}`}
						>
							{match.teams}
						</button>
					))}
				</div>
				{selectedMatch && (
					<div className='match-details bg-white p-6 rounded shadow-lg'>
						<h2 className='text-2xl font-bold mb-2'>{selectedMatch.teams}</h2>
						<p className='mb-1'>Date: {selectedMatch.date}</p>
						<p className='mb-1'>Location: {selectedMatch.location}</p>
						<p className='mb-1'>Weather: {selectedMatch.weather}</p>
						<p className='mb-1'>Info: {selectedMatch.info}</p>
						<button className='buy-ticket-button mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
							Acheter votre ticket maintenant !!
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Tickets;
