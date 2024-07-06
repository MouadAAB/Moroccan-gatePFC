import React from "react";

const Culture = () => {
	return (
		<div className='py-1 bg-[#F0FFF0]'>
			<div className='relative h-64'>
				<img
					className='w-full h-full object-cover'
					src='/src/assets/images/culturee.jpg'
					alt='Moroccan Stadiums'
				/>
				<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<h1 className='text-4xl font-bold text-white'>Culture Marocaine</h1>
				</div>
			</div>

			<section className='w-[90%] mx-auto'>
				<div className='mb-10'>
					<p className='text-lg text-center leading-relaxed'>
						La culture marocaine est riche et diversifiée, mêlant des influences
						berbères, arabes, et européennes. Découvrez ci-dessous quelques
						aspects fascinants de notre culture.
					</p>
				</div>
				<div className=' bg-[#cbeef3] p-6 rounded-lg shadow-lg'>
					<h1 className='text-3xl font-semibold mb-4 text-center'>
						Artisanat et Métiers d'Art
					</h1>
					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Zellige
							</h2>
							<p className='text-lg leading-relaxed'>
								Mosaïques de céramique utilisées pour décorer les murs et les
								fontaines. Mosaïque d'art marocain aux fragments de faïence
								colorés, taillés à la main selon des motifs géométriques.
								Savoir-faire ancestral perpétuant des techniques de façonnage,
								d'émaillage et de cuisson pour des pièces uniques. Motifs
								inspirés de la nature et de l'art islamique, étoiles, rosaces,
								arabesques et formes abstraites. Revêtements muraux intérieurs
								et extérieurs, apportant une touche de couleur vibrante et de
								raffinement. Symbole de la culture marocaine, reflétant son
								identité, son patrimoine, sa beauté et sa valeur artisanale.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Zellige.jpg'
								alt='Description de la photo 1'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#FAF0E6] text-black p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Tapis.jpg'
								alt='Description de la photo 2'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Tapis berbères
							</h2>
							<p className='text-lg leading-relaxed'>
								Fabriqués à la main avec des motifs et des couleurs distincts.
								Tissage ancestral marocain riche en histoire et en culture.
								Motifs géométriques et symboliques variés, souvent inspirés de
								la nature et de la vie quotidienne. Réalisés à la main avec de
								la laine de mouton naturelle, teintée avec des colorants
								végétaux. Pièces uniques qui reflètent l'identité et le
								savoir-faire des tribus berbères.
							</p>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center '>
								Travail du cuir
							</h2>
							<p className='text-lg leading-relaxed'>
								Produits artisanaux comme les babouches (chaussures
								traditionnelles) et les sacs. Savoir-faire ancestral transmis de
								génération en génération. Transformation de peaux en cuir souple
								et durable, utilisant des techniques traditionnelles. Découpe,
								teinture, gaufrage et couture pour créer des objets uniques.
								Production variée : sacs, poufs, chaussures, babouches,
								ceintures, bijoux et articles de décoration. Symbole de
								l'artisanat marocain, admiré pour sa qualité, sa beauté et son
								authenticité.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Cuir.jpg'
								alt='Description de la photo 3'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>
				</div>

				{/*-----------------------------------------2------------------------------------ */}
				<div className='w-[2%] h-[20px]'></div>
				<div className=' bg-[#9c6644] p-6 rounded-lg shadow-lg'>
					<h1 className='text-3xl font-semibold mb-4 text-center text-white '>
						Architecture et Sites Historiques
					</h1>
					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Medersa Ben Youssef{" "}
							</h2>
							<p className='text-lg leading-relaxed'>
								Une ancienne école coranique à Marrakech avec une architecture
								impressionnante. Joyau architectural saadien à Marrakech, la
								médersa Ben Youssef fut autrefois la plus grande école coranique
								d'Afrique du Nord. Construite au XIVe siècle, elle fascine
								aujourd'hui par ses motifs géométriques, ses sculptures en stuc
								et ses zellige colorés. Cour principale aux bassins et fontaine,
								salle de prière décorée, cellules d'étudiants et bibliothèque
								riche en manuscrits composent ce havre de savoir. Témoin de
								l'histoire et de la culture marocaines, la médersa offre une vue
								imprenable sur la médina depuis son toit-terrasse.
								Incontournable pour tout visiteur de Marrakech.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/BenYoussef.jpeg'
								alt='Description de la photo 1'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#FAF0E6] text-black p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Kasbah.jpg'
								alt='Description de la photo 2'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Kasbah des Oudayas
							</h2>
							<p className='text-lg leading-relaxed'>
								Une forteresse historique à Rabat avec des jardins andalous.
								Vigie fortifiée du XIIe siècle à Rabat, la Kasbah des Oudayas
								offre un havre de paix aux visiteurs. Anciennement fief des
								pirates et palais royal alaouite, elle dévoile un dédale de
								ruelles bleutées, jardins andalous et vue imprenable sur
								l'océan. Musée des bijoux, artisanat local et panoramas
								somptueux complètent ce joyau architectural, classé au
								patrimoine mondial de l'UNESCO. Une immersion inoubliable dans
								l'histoire et la culture marocaines.
							</p>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center '>
								Jemaa el-Fna
							</h2>
							<p className='text-lg leading-relaxed'>
								La célèbre place de Marrakech, animée par des conteurs, des
								musiciens et des marchands. Coeur vibrant de Marrakech, la place
								Jemaa el-Fna pulse au rythme des acrobates, charmeurs de
								serpents et conteurs. Inscrite au patrimoine de l'UNESCO, elle
								offre un spectacle fascinant de traditions ancestrales et de vie
								quotidienne marocaine. Dès le lever du soleil aux lueurs
								nocturnes, laissez-vous emporter par la magie de ses échoppes,
								senteurs d'épices et saveurs locales. Une expérience sensorielle
								inoubliable.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/jemaalefna.jpg'
								alt='Description de la photo 3'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#FAF0E6] text-black p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/volubilis.jpg'
								alt='Description de la photo 2'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Volubilis
							</h2>
							<p className='text-lg leading-relaxed'>
								Des ruines romaines bien préservées situées près de Meknès.
								Splendides vestiges romains au Maroc, Volubilis offre un voyage
								dans le temps. Ancienne capitale de la Maurétanie Tingitane,
								elle dévoile ses arcs de triomphe, mosaïques raffinées et
								maisons patriciennes, classés au patrimoine mondial de l'UNESCO.
								Promenez-vous sur le Decumanus Maximus, admirez l'Arc de
								Caracalla et plongez dans l'histoire fascinante de cette cité
								antique. Une immersion inoubliable dans la Rome impériale.
							</p>
						</div>
					</div>
				</div>

				{/*-------------------------------------3---------------------------------------- */}
				<div className='w-[2%] h-[20px]'></div>
				<div className=' bg-[#ddb892] p-6 rounded-lg shadow-lg'>
					<h1 className='text-3xl font-semibold mb-4 text-center'>Festivals</h1>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Moussem de Tan-Tan{" "}
							</h2>
							<p className='text-lg leading-relaxed'>
								Un festival annuel célébrant les traditions nomades, inscrit au
								patrimoine culturel immatériel de l'UNESCO. Festival nomade
								annuel au Maroc, le Moussem de Tan-Tan rassemble tribus
								sahariennes pour célébrer leur culture. Cavalcades, spectacles
								de musique et de danse, artisanat traditionnel rythment cet
								événement unique, inscrit au patrimoine immatériel de l'UNESCO.
								Une immersion vibrante dans les traditions nomades du Sahara.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/moussem-tantan.jpg'
								alt='Description de la photo 1'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#FAF0E6] text-black p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Festival-Gnaoua.png'
								alt='Description de la photo 2'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Festival Gnaoua d'Essaouira
							</h2>
							<p className='text-lg leading-relaxed'>
								Un festival de musique qui attire des artistes du monde entier.
								Mélodies envoûtantes et rythmes ancestraux résonnent à Essaouira
								chaque été lors du Festival Gnaoua. Au fil des scènes, maîtres
								Gnaouas et artistes du monde entier célèbrent la culture Gnaoua
								et créent des fusions musicales uniques. Un rendez-vous
								incontournable pour les amateurs de musique et d'atmosphères
								festives.
							</p>
						</div>
					</div>
				</div>
				{/*--------------------------------------4--------------------------------------- */}
				<div className='w-[2%] h-[20px]'></div>
				<div className=' bg-[#CCCCCC] p-6 rounded-lg shadow-lg'>
					<h1 className='text-3xl font-semibold mb-4 text-center'>
						Littérature et Poésie
					</h1>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Ahmed Sefrioui
							</h2>
							<p className='text-lg leading-relaxed'>
								Auteur de romans et nouvelles sur la vie au Maroc. Ahmed
								Sefrioui (1915-2004) : Écrivain marocain pionnier de la
								littérature francophone, Ahmed Sefrioui est célèbre pour son
								roman autobiographique "La Boîte à Merveilles", ode à son
								enfance dans la médina de Fès. Figure emblématique de la
								littérature maghrébine, il explore dans ses œuvres les thèmes de
								l'enfance, de la tradition et de l'identité culturelle. Son
								style poétique, empreint de spiritualité, restitue la magie et
								la beauté de la vie marocaine. Conservateur du musée Batha à
								Fès, Sefrioui a également contribué à la préservation du
								patrimoine culturel marocain. Son œuvre, traduite en plusieurs
								langues, continue d'inspirer les générations futures.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/SEFRIOUI.jpg'
								alt='Description de la photo 1'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#FAF0E6] text-black p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Fatima-Mernissi.jpg'
								alt='Description de la photo 2'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Fatema Mernissi
							</h2>
							<p className='text-lg leading-relaxed'>
								Écrivaine et sociologue connue pour ses œuvres sur la condition
								féminine au Maroc. Fatima Mernissi (1940-2015) : Féroce
								féministe et écrivaine marocaine, Mernissi a bousculé les
								stéréotypes de genre et les interprétations patriarcales de
								l'Islam. Ses écrits explorent la sexualité, le mysticisme et la
								place des femmes dans la société musulmane. Figure du féminisme
								islamique, elle a plaidé pour l'égalité et l'émancipation des
								femmes musulmanes. Son héritage inspire encore aujourd'hui.
							</p>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4'>Tahar Ben Jelloun</h2>
							<p className='text-lg leading-relaxed'>
								Auteur et poète renommé, lauréat du prix Goncourt. Tahar Ben
								Jelloun : Écrivain franco-marocain, prix Goncourt 1985. Œuvres
								explorant identité, immigration, amour et sexualité. Défenseur
								des droits humains et de la liberté d'expression. Style fluide
								et accessible, mêlant autobiographie et fiction. Figure majeure
								de la littérature francophone.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Tahar.jpg'
								alt='Description de la photo 3'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>
				</div>

				{/*--------------------------------------4--------------------------------------- */}
				<div className='w-[2%] h-[20px]'></div>
				<div className=' bg-[#E0CDA9] p-6 rounded-lg shadow-lg'>
					<h1 className='text-3xl font-semibold mb-4 text-center'>
						Vêtements Traditionnels
					</h1>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Djellaba
							</h2>
							<p className='text-lg leading-relaxed'>
								Une robe longue à capuche portée par les hommes et les femmes.
								Vêtement traditionnel ample et à capuche, la djellaba symbolise
								l'identité marocaine. Portée au quotidien ou pour des occasions
								spéciales, elle se distingue par son confort et ses décorations
								artisanales.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Djellaba.jpg'
								alt='Description de la photo 1'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#FAF0E6] text-black p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Caftans.jpg'
								alt='Description de la photo 2'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Caftan
							</h2>
							<p className='text-lg leading-relaxed'>
								Une robe traditionnelle souvent portée lors des mariages et des
								célébrations. Vêtement traditionnel emblématique du Maroc, le
								caftan est une longue tunique ample, souvent richement décorée.
								Porté lors de cérémonies et occasions spéciales, il symbolise
								l'élégance et le raffinement de la culture marocaine. Sa
								confection soignée et ses motifs élaborés en font un véritable
								trésor du patrimoine artisanal marocain.
							</p>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4'>Babouches</h2>
							<p className='text-lg leading-relaxed'>
								Chaussures traditionnelles en cuir. Chaussons en cuir souple à
								bout fermé, les babouches sont un incontournable de la culture
								marocaine. Appréciées pour leur confort et leur style
								intemporel, elles se portent aussi bien à la maison qu'à
								l'extérieur. Leur fabrication artisanale et leurs déclinaisons
								variées en font un accessoire de mode unique et authentique.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/babouche.jpg'
								alt='Description de la photo 3'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>
				</div>
				{/*-------------------------------------3---------------------------------------- */}
				<div className='w-[2%] h-[20px]'></div>
				<div className=' bg-[#370028] p-6 rounded-lg shadow-lg'>
					<h1 className='text-3xl font-semibold mb-4 text-center text-white'>
						Sports et Jeux Traditionnels
					</h1>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-black text-white p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Fantasia{" "}
							</h2>
							<p className='text-lg leading-relaxed'>
								Une démonstration équestre spectaculaire où des cavaliers
								habillés en costumes traditionnels tirent en l'air avec des
								fusils. Spectacle équestre traditionnel du Maroc, la Fantasia
								est une représentation de charges de cavalerie simulées,
								accompagnées de tirs de fusil à poudre et de musique. Symbole de
								la bravoure et de l'habileté des cavaliers, elle se déroule
								généralement lors de fêtes et célébrations. La Fantasia est une
								tradition vivante qui attire chaque année de nombreux visiteurs,
								admirant la beauté des chevaux, la précision des cavaliers et la
								richesse du folklore marocain.
							</p>
						</div>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Fantasia.jpg'
								alt='Description de la photo 1'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
					</div>

					<div className='flex flex-col lg:flex-row items-center mb-10 bg-[#FAF0E6] text-black p-6 rounded-lg shadow-lg'>
						<div className='lg:w-1/2'>
							<img
								src='/src/assets/images/Dama.jpg'
								alt='Description de la photo 2'
								className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='lg:w-1/2'>
							<h2 className='text-3xl font-semibold mb-4 text-center'>
								Jeu de dames marocain
							</h2>
							<p className='text-lg leading-relaxed'>
								Un jeu de société traditionnel. Stratégie et convivialité sur un
								plateau de 64 cases. Tradition vivante rassemblant les
								générations, il se joue avec 16 pions chacun, selon des règles
								et un vocabulaire uniques.
							</p>
						</div>
					</div>
				</div>
				{/*----------------------------------------------------------------------------- */}
				<div className='w-[2%] h-[20px]'></div>

				<div className='mb-10'>
					<h2 className='text-3xl font-semibold mb-4'>Vidéos</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						<div className='w-full h-64 bg-gray-200 rounded-lg shadow-lg'>
							<iframe
								src='https://www.youtube.com/embed/DU7i9jeQ9js'
								title='Description de la vidéo 1'
								className='w-full h-full rounded-lg'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>
						<div className='w-full h-64 bg-gray-200 rounded-lg shadow-lg'>
							<iframe
								src='https://www.youtube.com/embed/videoID2'
								title='Description de la vidéo 2'
								className='w-full h-full rounded-lg'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>
						<div className='w-full h-64 bg-gray-200 rounded-lg shadow-lg'>
							<iframe
								src='https://www.youtube.com/embed/QipIufCH3rw'
								title='Description de la vidéo 3'
								className='w-full h-full rounded-lg'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Culture;

// import React from "react";

// export default function Culture() {
// 	return (
// 		<div className='flex justify-center items-center h-screen w-screen'>
// 			Culture
// 		</div>
// 	);
// }
