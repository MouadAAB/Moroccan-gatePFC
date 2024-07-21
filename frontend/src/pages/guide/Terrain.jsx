import React, { useEffect } from "react";
import culturePath from "../../zustand/cultureState";

const stadiums = [
	{
		name: "Stade Mohammed V",
		location: "Casablanca",
		capacity: "67,000",
		description:
			"The Stade Mohammed V is a multi-purpose stadium used mostly for football matches. It is located in the heart of Casablanca.",
		image: "/src/assets/images/MohammedV.jpeg",
	},
	{
		name: "Stade de Fès",
		location: "Fès",
		capacity: "22,000",
		description:
			"Le Stade de Fès est un stade moderne situé dans la ville historique de Fès. Utilisé principalement pour les matchs de football, il offre également des installations pour d'autres événements sportifs et culturels.",
		image: "/src/assets/images/StadeFez.jpg",
	},
	{
		name: "Stade de Marrakech",
		location: "Marrakech",
		capacity: "45,000",
		description:
			"Situé à Marrakech, ce stade est un centre majeur pour le sport et le divertissement. Il est utilisé pour les matchs de football, les concerts et divers événements culturels, offrant une vue panoramique sur les montagnes de l'Atlas.",
		image: "/src/assets/images/StadeMarrakech.jpeg",
	},
	{
		name: "Stade d’Agadir",
		location: "Agadir",
		capacity: "45,000",
		description:
			"Le Stade d'Agadir est un stade multifonctionnel situé dans la ville côtière d'Agadir. Il est principalement utilisé pour les matchs de football et est réputé pour son architecture moderne et son emplacement en bord de mer.",
		image: "/src/assets/images/StadeAgadir.jpeg",
	},
	{
		name: "Stade de Tanger",
		location: "Tanger",
		capacity: "45,000",
		description:
			"Le Stade de Tanger est un complexe sportif moderne situé à Tanger. Il est utilisé pour les matchs de football et autres événements sportifs, offrant des installations de qualité pour les spectateurs et les joueurs.",
		image: "/src/assets/images/StadeTanger.jpg",
	},
	{
		name: "Complexe Moulay Abdellah",
		location: "Rabat",
		capacity: "45,000",
		description:
			"Le Complexe Moulay Abdellah à Rabat est un important centre sportif utilisé principalement pour les matchs de football. Il est situé dans la capitale et joue un rôle clé dans le sport national marocain.",
		image: "/src/assets/images/ComplexeMoulayAbdellah.jpg",
	},
];

export default function Terrain() {
	const { setPath } = culturePath();
	useEffect(() => {
		setPath(location.pathname);
	}, []);
	return (
		<>
			{/* <div className='min-h-screen bg-[#0F5132]'>
				<div className='relative h-64'>
					<img
						className='w-full h-full object-cover'
						src='/src/assets/images/w3.png'
						alt='Moroccan Stadiums'
					/>
					<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
						<h1 className='text-4xl font-bold text-white'>Moroccan Stadiums</h1>
					</div>
				</div>

				<div className='container mx-auto'>
					{stadiums.map((stadium, index) => (
						<div
							key={index}
							className='bg-[#F0FFF0] rounded-lg  my-8 element-center'
						>
							<div className=''>
								<img
								width={600}
									className=' rounded-md mb-4'
									src={stadium.image}
									alt={stadium.name}
								/>
							</div>
							<div className=''>
								<h2 className='text-2xl font-bold text-gray-800 mb-2'>
									{stadium.name}
								</h2>
								<p className='text-gray-600'>
									<strong>Location:</strong> {stadium.location}
								</p>
								<p className='text-gray-600'>
									<strong>Capacity:</strong> {stadium.capacity}
								</p>
								<p className='text-gray-600 mt-4'>{stadium.description}</p>
							</div>
						</div>
					))}
				</div>
			</div> */}
			<div className='min-h-screen w-[100vw] bg-[#0F5132]'>
				<div className='relative h-64'>
					<img
						className='w-full h-full object-cover'
						src='/src/assets/images/w3.png'
						alt='Moroccan Stadiums'
					/>
					<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
						<h1 className='text-4xl font-bold text-white'>Moroccan Stadiums</h1>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-4  h-fit  p-6'>
					{stadiums.map((stadium, index) => (
						<div
							key={index}
							className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'
						>
							<div className='font-bold text-black text-xl mt-1 mb-3'>
								{stadium.name}
							</div>
							<img
								src={stadium.image}
								alt={stadium.name}
								className=' rounded-lg my-2'
								width={500}
							/>
							{/* <div className='md:w-1/2 p-4'>
								<p className='text-gray-600'>
									<strong>Location:</strong> {stadium.location}
								</p>
								<p className='text-gray-600'>
									<strong>Capacity:</strong> {stadium.capacity}
								</p>
							</div> */}
							<div className='w-full  text-black  my-2'>
								<div className=''>
									<span className=' font-semibold '>Location : </span>
									{stadium.location}
								</div>
								<div className=''>
									<span className=' font-semibold '>Location : </span>
									{stadium.capacity}
								</div>
							</div>
							<div className='text-black  w-full my-2'>
								Plat traditionnel marocain cuit à l'étouffée, à base de viande,
								légumes et épices, souvent préparé dans un récipient en terre
								cuite, offrant une saveur riche et aromatique.
							</div>
						</div>
					))}
				</div>
			</div>
			{/* {stadiums.map((stadium, index) => (
				<div key={index} className='grid grid-cols-3 gap-4  h-fit  p-6'>
					<div className='md:w-1/2 p-4'>
						<h2 className='text-2xl font-bold text-gray-800 mb-2'>
							{stadium.name}
						</h2>
						<p className='text-gray-600'>
							<strong>Location:</strong> {stadium.location}
						</p>
						<p className='text-gray-600'>
							<strong>Capacity:</strong> {stadium.capacity}
						</p>
						<p className='text-gray-600 mt-4'>{stadium.description}</p>
					</div>
					<div className='md:w-1/2 p-4'>
						<img
							className='w-full h-84 object-cover rounded-md mb-4'
							src={stadium.image}
							alt={stadium.name}
						/>
					</div>
					<div className='md:w-1/3 p-4'>
						<p className='text-gray-600'>
							Additional information or text can go here.
						</p>
					</div>
				</div>
			))} */}
		</>
	);
}
