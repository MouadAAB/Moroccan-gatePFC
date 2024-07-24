import React, { useEffect } from "react";
import culturePath from "../../zustand/cultureState";

const Gastronomy = () => {
	const { setPath } = culturePath();
	useEffect(() => {
		setPath(location.pathname);
	}, []);
	return (
		<>
		<title>Gastronomy</title>
			<div className='py-1 bg-[#8d0000]'>
				<div className='relative h-64'>
					<img
						className='w-full h-full object-cover'
						src='/src/assets/images/gastronomiess.jpg'
						alt='Moroccan Stadiums'
					/>
					<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
						<h1 className='text-4xl font-bold text-white'>
							Gastronomie Marocaine
						</h1>
					</div>
				</div>

				<div className='grid grid-cols-3 gap-4  h-fit  p-6'>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>Tajine</div>
						<img
							src='/src/assets/images/tajin.jpeg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Plat traditionnel marocain cuit à l'étouffée, à base de viande,
							légumes et épices, souvent préparé dans un récipient en terre
							cuite, offrant une saveur riche et aromatique.
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>
							Couscous
						</div>
						<img
							src='/src/assets/images/couscous.jpg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Plat emblématique marocain de semoule de blé, accompagné de
							légumes, viande ou poisson, généralement servi avec un bouillon
							parfumé, célébré lors de grandes occasions et repas familiaux.
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>
							Pastilla
						</div>
						<img
							src='/src/assets/images/Pastilla.jpg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Feuilleté marocain sucré-salé, composé de pigeons, amandes et
							épices, enveloppé dans des feuilles de brick croustillantes,
							saupoudré de sucre glace, mêlant textures et saveurs uniques et
							délicieuses.
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>
							Thé à la menthe
						</div>
						<img
							src='/src/assets/images/thee.jpg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Boisson traditionnelle marocaine, mélange de thé vert et feuilles
							de menthe, sucrée et servie chaude, symbole d'hospitalité,
							préparée avec un rituel élégant et convivial.
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>
							Djaj Mhamar
						</div>
						<img
							src='/src/assets/images/djaj.jpg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Poulet rôti mariné aux épices, souvent accompagné d'olives et de
							citron confit, servi avec une sauce onctueuse, dégageant des
							arômes envoûtants et une viande tendre.
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>
							L'ham bi lbarkouk (viande aux pruneaux)
						</div>
						<img
							src='/src/assets/images/lham.jpg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Tajine sucré-salé à base de viande d'agneau ou de bœuf, cuit avec
							des pruneaux, amandes et épices, combinant douceur des fruits et
							saveur des épices.
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>
							Chabakia et m'hencha
						</div>
						<img
							src='/src/assets/images/chabakia.jpg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Pâtisseries marocaines, chabakia est une friture au miel et
							sésame, m'hencha une spirale d'amandes et pâte filo, sucrées,
							croquantes et souvent dégustées pendant le Ramadan.
						</div>
					</div>
					<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
						<div className='font-bold text-black text-xl mt-1 mb-3'>
							Baghrir
						</div>
						<img
							src='/src/assets/images/baghrir.jpg'
							alt='Plat principal'
							className=' rounded-lg '
							width={500}
						/>
						<div className='text-black text-center m-4'>
							Crêpe marocaine légère et aérée, souvent appelée "crêpe mille
							trous", servie chaude avec du beurre fondu et du miel, appréciée
							au petit-déjeuner ou lors des goûters traditionnels.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gastronomy;
