import React, { useEffect } from "react";
import culturePath from "../../zustand/cultureState";

const Gastronomy = () => {
  const { setPath } = culturePath();
  useEffect(() => {
		setPath(location.pathname);
	}, []);
	return (
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
						légumes et épices, souvent préparé dans un récipient en terre cuite,
						offrant une saveur riche et aromatique.
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
					<div className='font-bold text-black text-xl mt-1 mb-3'>Couscous</div>
					<img
						src='/src/assets/images/couscous.jpg'
						alt='Plat principal'
						className=' rounded-lg '
						width={500}
					/>
					<div className='text-black text-center m-4'>
						Plat emblématique marocain de semoule de blé, accompagné de légumes,
						viande ou poisson, généralement servi avec un bouillon parfumé,
						célébré lors de grandes occasions et repas familiaux.
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
					<div className='font-bold text-black text-xl mt-1 mb-3'>Pastilla</div>
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
						Boisson traditionnelle marocaine, mélange de thé vert et feuilles de
						menthe, sucrée et servie chaude, symbole d'hospitalité, préparée
						avec un rituel élégant et convivial.
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
					<div className='font-bold text-black text-xl mt-1 mb-3'>Djaj Mhamar</div>
					<img
						src='/src/assets/images/djaj.jpg'
						alt='Plat principal'
						className=' rounded-lg '
						width={500}
					/>
					<div className='text-black text-center m-4'>
						Poulet rôti mariné aux épices, souvent accompagné d'olives et de
						citron confit, servi avec une sauce onctueuse, dégageant des arômes
						envoûtants et une viande tendre.
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
						Pâtisseries marocaines, chabakia est une friture au miel et sésame,
						m'hencha une spirale d'amandes et pâte filo, sucrées, croquantes et
						souvent dégustées pendant le Ramadan.
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-fit h-[60vh] bg-[#fdf5e6] p-3 rounded-lg'>
					<div className='font-bold text-black text-xl mt-1 mb-3'>Baghrir</div>
					<img
						src='/src/assets/images/baghrir.jpg'
						alt='Plat principal'
						className=' rounded-lg '
						width={500}
					/>
					<div className='text-black text-center m-4'>
						Crêpe marocaine légère et aérée, souvent appelée "crêpe mille
						trous", servie chaude avec du beurre fondu et du miel, appréciée au
						petit-déjeuner ou lors des goûters traditionnels.
					</div>
				</div>
			</div>

			{/* <section className='w-[90%] mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#fdf5e6] text-black p-6 rounded-lg shadow-lg'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src='/src/assets/images/couscous.jpg'
							alt='Plat principal'
							className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-10'>
						<h2 className='text-3xl font-semibold mb-4'>Couscous</h2>
						<p className='text-lg leading-relaxed'>
							Un plat de semoule servi avec des légumes, de la viande et souvent
							des pois chiches.
						</p>
					</div>
				</div>
			</section>

			<section className='w-[90%] mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#fdf5e6] text-black p-6 rounded-lg shadow-lg'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src='/src/assets/images/Pastilla.jpg'
							alt='Plat principal'
							className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-10'>
						<h2 className='text-3xl font-semibold mb-4'>Pastilla </h2>
						<p className='text-lg leading-relaxed'>
							Une pâtisserie sucrée-salée traditionnellement farcie de pigeon ou
							de poulet, d'amandes et de sucre.
						</p>
					</div>
				</div>
			</section>

			<section className='w-[90%] mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#fdf5e6] text-black p-6 rounded-lg shadow-lg'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src='/src/assets/images/thee.jpg'
							alt='Plat principal'
							className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-10'>
						<h2 className='text-3xl font-semibold mb-4'>Thé à la menthe</h2>
						<p className='text-lg leading-relaxed'>
							La boisson nationale, souvent servie avec des pâtisseries
							marocaines comme les cornes de gazelle.
						</p>
					</div>
				</div>
			</section>

			<section className='w-[90%] mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#fdf5e6] text-black p-6 rounded-lg shadow-lg'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src='/src/assets/images/djaj.jpg'
							alt='Plat principal'
							className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-10'>
						<h2 className='text-3xl font-semibold mb-4'> Djaj Mhamar</h2>
						<p className='text-lg leading-relaxed'>
							Djaj Mhamar est un plat marocain traditionnellement préparé avec
							du poulet mijoté dans une sauce riche et épicée. Le poulet est
							souvent mariné avec des épices telles que le safran, le gingembre,
							le cumin et parfois du paprika, avant d'être cuit lentement avec
							des oignons, des olives, des citrons confits et parfois des
							amandes. Ce plat est apprécié pour ses saveurs complexes et sa
							tendreté, souvent servi avec du pain marocain pour absorber la
							sauce savoureuse.
						</p>
					</div>
				</div>
			</section>

			<section className='w-[90%] mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#fdf5e6] text-black p-6 rounded-lg shadow-lg'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src='/src/assets/images/lham.jpg'
							alt='Plat principal'
							className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-10'>
						<h2 className='text-3xl font-semibold mb-4'>
							L'ham bi lbarkouk (viande aux pruneaux){" "}
						</h2>
						<p className='text-lg leading-relaxed'>
							L'ham bi lbarkouk, également connu sous le nom de "viande aux
							pruneaux" en français, est un plat marocain typique qui marie des
							morceaux de viande, souvent d'agneau ou de poulet, avec des
							pruneaux sucrés et des amandes. Les pruneaux sont généralement
							préalablement trempés pour les ramollir et les rendre plus
							savoureux. Ce plat est traditionnellement assaisonné avec des
							épices telles que le safran, le gingembre, la cannelle et parfois
							du miel pour ajouter une douceur supplémentaire. Il est souvent
							servi lors de grandes occasions familiales et festives au Maroc.
						</p>
					</div>
				</div>
			</section>

			<section className='w-[90%] mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#fdf5e6] text-black p-6 rounded-lg shadow-lg'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src='/src/assets/images/chabakia.jpg'
							alt='Plat principal'
							className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-10'>
						<h2 className='text-3xl font-semibold mb-4'>
							Chabakia et m'hencha
						</h2>
						<p className='text-lg leading-relaxed'>
							La chabakia et la bouchnikha sont deux délicieuses pâtisseries
							marocaines traditionnelles : <br />
							<b>Chabakia : </b> C'est une pâtisserie en forme de fleur étoilée,
							frite et ensuite trempée dans du miel parfumé à la fleur d'oranger
							et saupoudrée de graines de sésame. Elle est connue pour sa saveur
							sucrée et épicée grâce à l'utilisation de cannelle et parfois de
							graines d'anis.
							<br />
							<b>Bouchnikha :</b> Aussi appelée "m'hencha", c'est une pâtisserie
							en forme de serpent ou de spirale, réalisée à partir de pâte
							feuilletée fine enroulée autour d'une farce de fruits secs et
							d'amandes. Elle est également trempée dans du miel parfumé à la
							fleur d'oranger, lui donnant une texture croustillante à
							l'extérieur et moelleuse à l'intérieur.
							<br />
							Ces deux pâtisseries sont souvent préparées lors des fêtes
							religieuses et des célébrations spéciales au Maroc, et sont très
							appréciées pour leur goût unique et leur artisanat délicat.
						</p>
					</div>
				</div>
			</section>

			<section className='w-[90%] mx-auto'>
				<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#fdf5e6] text-black p-6 rounded-lg shadow-lg'>
					<div className='lg:w-1/2 mb-6 lg:mb-0'>
						<img
							src='/src/assets/images/baghrir.jpg'
							alt='Plat principal'
							className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
					<div className='lg:w-1/2 lg:pl-10'>
						<h2 className='text-3xl font-semibold mb-4'>Baghrir</h2>
						<p className='text-lg leading-relaxed'>
							Le baghrir est une crêpe marocaine moelleuse et légère, surnommée
							la "crêpe aux mille trous" pour sa texture poreuse distinctive.
							Préparée avec de la semoule fine et de la farine, elle est cuite
							sur une seule face, créant une surface parsemée de petits trous
							qui absorbent parfaitement le miel et le beurre fondu. Servie
							traditionnellement au petit-déjeuner, cette crêpe est appréciée
							pour sa texture douce et spongieuse, faisant partie intégrante de
							la cuisine marocaine authentique.
						</p>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default Gastronomy;
