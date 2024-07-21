import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import culturePath from "../../zustand/cultureState";

const Culture = () => {
	const { setPath } = culturePath();
	const sectionsRef = useRef([]);
	const sectionRef = useRef();
	const linksRef = useRef([]);
	const [activeLink, setActiveLink] = useState(null);
	const sections = [
		"Artisanat et Métiers d'Art",
		"Architecture et Sites Historiques",
		"Festivals",
		"Littérature et Poésie",
		"Vêtements Traditionnels",
		"Sports et Jeux Traditionnels",
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = sectionRef.current.scrollTop;
			sectionsRef.current.forEach((section, index) => {
				const offset = section.offsetTop - sectionRef.current.offsetTop - 100;
				const height = section.offsetHeight;
				const id = section.getAttribute("id");

				if (scrollPosition >= offset && scrollPosition < offset + height) {
					setActiveLink(id);
				}
			});
		};

		sectionRef.current.addEventListener("scroll", handleScroll);
		return () => {
			// sectionRef.current.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const location = useLocation();
	useEffect(() => {

		setPath(location.pathname);
	},[]);
	return (
		<>
			<div className=' flex'>
				<div className=' relative w-[15%]  flex items-center '>
					<nav className='gap-4  flex flex-col   w-full   '>
						{sections.map((section, idx) => (
							<a
								// style={{ "--main-color": ` ${colors[idx]}` }}
								key={idx}
								href={`#${section}`}
								className={`${
									activeLink === section ? `active bg-[#6C946F]` : ""
								} relative py-5 px-3 text-black font-[600]  `}
								ref={(el) => (linksRef.current[idx] = el)}
							>
								{section}
							</a>
						))}
					</nav>
				</div>
				<div className=' w-[85%] overflow-auto h-[84vh]' ref={sectionRef}>
					<section
						ref={(el) => (sectionsRef.current[0] = el)}
						id="Artisanat et Métiers d'Art"
						className='cult w-full h-fit bg-[#6C946F] pt-16 pb-8 flex flex-col gap-5'
					>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={400}
									src='/src/assets/images/Zellige.jpg'
									alt='Description de la photo 1'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Zellige
								</div>
								<p className='text-lg leading-normal '>
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
						</div>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={700}
									src='/src/assets/images/Tapis.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Tapis berbères
								</div>
								<p className='text-lg leading-normal '>
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
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Cuir.jpg'
									alt='Description de la photo 3'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Travail du cuir
								</div>
								<p className='text-lg leading-normal '>
									Produits artisanaux comme les babouches (chaussures
									traditionnelles) et les sacs. Savoir-faire ancestral transmis
									de génération en génération. Transformation de peaux en cuir
									souple et durable, utilisant des techniques traditionnelles.
									Découpe, teinture, gaufrage et couture pour créer des objets
									uniques. Production variée : sacs, poufs, chaussures,
									babouches, ceintures, bijoux et articles de décoration.
									Symbole de l'artisanat marocain, admiré pour sa qualité, sa
									beauté et son authenticité.
								</p>
							</div>
						</div>
					</section>
					<section
						ref={(el) => (sectionsRef.current[1] = el)}
						id='Architecture et Sites Historiques'
						className='w-full h-fit bg-[#6C946F] pt-16 pb-8 flex flex-col gap-5'
					>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/BenYoussef.jpeg'
									alt='Description de la photo 1'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Medersa Ben Youssef
								</div>
								<p className='text-lg leading-normal '>
									Une ancienne école coranique à Marrakech avec une architecture
									impressionnante. Joyau architectural saadien à Marrakech, la
									médersa Ben Youssef fut autrefois la plus grande école
									coranique d'Afrique du Nord. Construite au XIVe siècle, elle
									fascine aujourd'hui par ses motifs géométriques, ses
									sculptures en stuc et ses zellige colorés. Cour principale aux
									bassins et fontaine, salle de prière décorée, cellules
									d'étudiants et bibliothèque riche en manuscrits composent ce
									havre de savoir. Témoin de l'histoire et de la culture
									marocaines, la médersa offre une vue imprenable sur la médina
									depuis son toit-terrasse. Incontournable pour tout visiteur de
									Marrakech.
								</p>
							</div>
						</div>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Kasbah.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Kasbah des Oudayas
								</div>
								<p className='text-lg leading-normal '>
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
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/volubilis.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Volubilis
								</div>

								<p className='text-lg leading-normal '>
									Des ruines romaines bien préservées situées près de Meknès.
									Splendides vestiges romains au Maroc, Volubilis offre un
									voyage dans le temps. Ancienne capitale de la Maurétanie
									Tingitane, elle dévoile ses arcs de triomphe, mosaïques
									raffinées et maisons patriciennes, classés au patrimoine
									mondial de l'UNESCO. Promenez-vous sur le Decumanus Maximus,
									admirez l'Arc de Caracalla et plongez dans l'histoire
									fascinante de cette cité antique. Une immersion inoubliable
									dans la Rome impériale.
								</p>
							</div>
						</div>
					</section>

					<section
						ref={(el) => (sectionsRef.current[2] = el)}
						id='Festivals'
						className='w-full h-fit bg-[#6C946F] pt-16 pb-8 flex flex-col gap-5'
					>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/moussem-tantan.jpg'
									alt='Description de la photo 1'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Moussem de Tan-Tan
								</div>
								<p className='text-lg leading-normal '>
									Un festival annuel célébrant les traditions nomades, inscrit
									au patrimoine culturel immatériel de l'UNESCO. Festival nomade
									annuel au Maroc, le Moussem de Tan-Tan rassemble tribus
									sahariennes pour célébrer leur culture. Cavalcades, spectacles
									de musique et de danse, artisanat traditionnel rythment cet
									événement unique, inscrit au patrimoine immatériel de
									l'UNESCO. Une immersion vibrante dans les traditions nomades
									du Sahara.
								</p>
							</div>
						</div>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Festival-Gnaoua.png'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Festival Gnaoua d'Essaouira
								</div>
								<p className='text-lg leading-normal '>
									Un festival de musique qui attire des artistes du monde
									entier. Mélodies envoûtantes et rythmes ancestraux résonnent à
									Essaouira chaque été lors du Festival Gnaoua. Au fil des
									scènes, maîtres Gnaouas et artistes du monde entier célèbrent
									la culture Gnaoua et créent des fusions musicales uniques. Un
									rendez-vous incontournable pour les amateurs de musique et
									d'atmosphères festives.
								</p>
							</div>
						</div>
					</section>

					<section
						ref={(el) => (sectionsRef.current[3] = el)}
						id='Littérature et Poésie'
						className='w-full h-fit bg-[#6C946F] pt-16 pb-8 flex flex-col gap-5'
					>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/SEFRIOUI.jpg'
									alt='Description de la photo 1'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Ahmed Sefrioui
								</div>
								<p className='text-lg leading-normal '>
									Auteur de romans et nouvelles sur la vie au Maroc. Ahmed
									Sefrioui (1915-2004) : Écrivain marocain pionnier de la
									littérature francophone, Ahmed Sefrioui est célèbre pour son
									roman autobiographique "La Boîte à Merveilles", ode à son
									enfance dans la médina de Fès. Figure emblématique de la
									littérature maghrébine, il explore dans ses œuvres les thèmes
									de l'enfance, de la tradition et de l'identité culturelle. Son
									style poétique, empreint de spiritualité, restitue la magie et
									la beauté de la vie marocaine. Conservateur du musée Batha à
									Fès, Sefrioui a également contribué à la préservation du
									patrimoine culturel marocain. Son œuvre, traduite en plusieurs
									langues, continue d'inspirer les générations futures.
								</p>
							</div>
						</div>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Fatima-Mernissi.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Fatema Mernissi
								</div>
								<p className='text-lg leading-normal '>
									Écrivaine et sociologue connue pour ses œuvres sur la
									condition féminine au Maroc. Fatima Mernissi (1940-2015) :
									Féroce féministe et écrivaine marocaine, Mernissi a bousculé
									les stéréotypes de genre et les interprétations patriarcales
									de l'Islam. Ses écrits explorent la sexualité, le mysticisme
									et la place des femmes dans la société musulmane. Figure du
									féminisme islamique, elle a plaidé pour l'égalité et
									l'émancipation des femmes musulmanes. Son héritage inspire
									encore aujourd'hui.
								</p>
							</div>
						</div>

						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Tahar.jpg'
									alt='Description de la photo 3'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Tahar Ben Jelloun
								</div>
								<p className='text-lg leading-normal '>
									Auteur et poète renommé, lauréat du prix Goncourt. Tahar Ben
									Jelloun : Écrivain franco-marocain, prix Goncourt 1985. Œuvres
									explorant identité, immigration, amour et sexualité. Défenseur
									des droits humains et de la liberté d'expression. Style fluide
									et accessible, mêlant autobiographie et fiction. Figure
									majeure de la littérature francophone.
								</p>
							</div>
						</div>
					</section>

					<section
						ref={(el) => (sectionsRef.current[4] = el)}
						id='Vêtements Traditionnels'
						className='w-full h-fit bg-[#6C946F] pt-16 pb-8 flex flex-col gap-5'
					>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Djellaba.jpg'
									alt='Description de la photo 1'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Djellaba
								</div>
								<p className='text-lg leading-normal '>
									Une robe longue à capuche portée par les hommes et les femmes.
									Vêtement traditionnel ample et à capuche, la djellaba
									symbolise l'identité marocaine. Portée au quotidien ou pour
									des occasions spéciales, elle se distingue par son confort et
									ses décorations artisanales.
								</p>
							</div>
						</div>

						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Caftans.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Caftan
								</div>
								<p className='text-lg leading-normal '>
									Une robe traditionnelle souvent portée lors des mariages et
									des célébrations. Vêtement traditionnel emblématique du Maroc,
									le caftan est une longue tunique ample, souvent richement
									décorée. Porté lors de cérémonies et occasions spéciales, il
									symbolise l'élégance et le raffinement de la culture
									marocaine. Sa confection soignée et ses motifs élaborés en
									font un véritable trésor du patrimoine artisanal marocain.
								</p>
							</div>
						</div>

						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/babouche.jpg'
									alt='Description de la photo 3'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Babouches
								</div>
								<p className='text-lg leading-normal '>
									Chaussures traditionnelles en cuir. Chaussons en cuir souple à
									bout fermé, les babouches sont un incontournable de la culture
									marocaine. Appréciées pour leur confort et leur style
									intemporel, elles se portent aussi bien à la maison qu'à
									l'extérieur. Leur fabrication artisanale et leurs déclinaisons
									variées en font un accessoire de mode unique et authentique.
								</p>
							</div>
						</div>
					</section>

					<section
						ref={(el) => (sectionsRef.current[5] = el)}
						id='Sports et Jeux Traditionnels'
						className='w-full h-fit bg-[#6C946F] pt-16 pb-8 flex flex-col gap-5'
					>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Fantasia.jpg'
									alt='Description de la photo 1'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Fantasia
								</div>
								<p className='text-lg leading-normal '>
									Une démonstration équestre spectaculaire où des cavaliers
									habillés en costumes traditionnels tirent en l'air avec des
									fusils. Spectacle équestre traditionnel du Maroc, la Fantasia
									est une représentation de charges de cavalerie simulées,
									accompagnées de tirs de fusil à poudre et de musique. Symbole
									de la bravoure et de l'habileté des cavaliers, elle se déroule
									généralement lors de fêtes et célébrations. La Fantasia est
									une tradition vivante qui attire chaque année de nombreux
									visiteurs, admirant la beauté des chevaux, la précision des
									cavaliers et la richesse du folklore marocain.
								</p>
							</div>
						</div>

						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Dama.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Jeu de dames marocain
								</div>
								<p className='text-lg leading-normal '>
									Un jeu de société traditionnel. Stratégie et convivialité sur
									un plateau de 64 cases. Tradition vivante rassemblant les
									générations, il se joue avec 16 pions chacun, selon des règles
									et un vocabulaire uniques.
								</p>
							</div>
						</div>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Dama.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Jeu de dames marocain
								</div>
								<p className='text-lg leading-normal '>
									Un jeu de société traditionnel. Stratégie et convivialité sur
									un plateau de 64 cases. Tradition vivante rassemblant les
									générations, il se joue avec 16 pions chacun, selon des règles
									et un vocabulaire uniques.
								</p>
							</div>
						</div>
						<div className='w-[85%] h-[35%] element-center gap-4 bg-[#e9d9b2] mx-auto rounded-2xl text-black py-2 px-2'>
							<div className='w-[30%] element-center'>
								<img
									width={500}
									src='/src/assets/images/Dama.jpg'
									alt='Description de la photo 2'
									className='  rounded-2xl '
								/>
							</div>
							<div className='w-[70%]'>
								<div className='text-3xl font-bold mb-4 text-center'>
									Jeu de dames marocain
								</div>
								<p className='text-lg leading-normal '>
									Un jeu de société traditionnel. Stratégie et convivialité sur
									un plateau de 64 cases. Tradition vivante rassemblant les
									générations, il se joue avec 16 pions chacun, selon des règles
									et un vocabulaire uniques.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Culture;
