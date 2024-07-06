import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import "swiper/css/autoplay";
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoSection from './videos';
import EvolutionSection from './EvolutionSection';
import FlagsMove from './flags';


import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <div className='lg:pt-[15vh] pt-[21vw] bg-[#F0FFF0] '>
      <title>Home</title>
      
      <div className='w-[100vw] h-[100vh] flex'>
	
        <div className='w-[28%] h-[82%] px-4 py-5'>
          <div className='w-[2%] h-[5%]'></div>


		  
		<div className='matches w-full h-full bg-white rounded-2xl shadow-2xl'>
  <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-bold text-3xl tracking-normal text-white p-3">
    Matchweek
  </div>
  <div className="p-4 overflow-auto h-96">
    <div className="flex flex-col gap-4">
	<span className="text-gray-500 text-center">28 Jan 20:00 gmt</span>

      <div className="flex justify-between items-center bg-[#f0f0f0] p-4 rounded-lg shadow-sm">
		
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Egy</span>
          <img src="/src/assets/images/egypt-flag.png" alt="Egypt Flag" className="w-6 h-6" />
        </div>
        <span className="text-gray-500">vs</span>
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/Ethiopia-flag.png" alt="Ethiopia Flag" className="w-6 h-6" />
          <span className="font-semibold text-lg">Eth</span>
        </div>
        <a href="/match-game" className="text-[#234F1E] hover:text-[#00A448]"><i className="fas fa-arrow-right"></i></a>
      </div>

	  <div className="flex justify-between items-center bg-[#f0f0f0] p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Mar</span>
          <img src="/src/assets/images/Flag_of_Morocco.png" alt="Egypt Flag" className="w-6 h-4" />
        </div>
        <span className="text-gray-500">vs</span>
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/Benin.png" alt="Ethiopia Flag" className="w-6 h-4" />
          <span className="font-semibold text-lg">Ben</span>
        </div>
        <a href="/match-game" className="text-[#234F1E] hover:text-[#00A448]"><i className="fas fa-arrow-right"></i></a>
      </div>
	  <span className="text-gray-500 text-center">28 Jan 20:00 gmt</span>

	  <div className="flex justify-between items-center bg-[#f0f0f0] p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Ang</span>
          <img src="/src/assets/images/Angola.png" alt="Egypt Flag" className="w-6 h-4" />
        </div>
        <span className="text-gray-500">vs</span>
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/Algeria.png" alt="Ethiopia Flag" className="w-6 h-4" />
          <span className="font-semibold text-lg">Alg</span>
        </div>
        <a href="/match-game" className="text-[#234F1E] hover:text-[#00A448]"><i className="fas fa-arrow-right"></i></a>
      </div>

	  <div className="flex justify-between items-center bg-[#f0f0f0] p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Cha</span>
          <img src="/src/assets/images/Chad.png" alt="Egypt Flag" className="w-6 h-4" />
        </div>
        <span className="text-gray-500">vs</span>
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/Cameroon.png" alt="Ethiopia Flag" className="w-6 h-4" />
          <span className="font-semibold text-lg">Cam</span>
        </div>
        <a href="/match-game" className="text-[#234F1E] hover:text-[#00A448]"><i className="fas fa-arrow-right"></i></a>
      </div>

	  <span className="text-gray-500 text-center">28 Jan 20:00 gmt</span>

	  <div className="flex justify-between items-center bg-[#f0f0f0] p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Gab</span>
          <img src="/src/assets/images/Gabon.png" alt="Egypt Flag" className="w-6 h-4" />
        </div>
        <span className="text-gray-500">vs</span>
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/Ghana.png" alt="Ethiopia Flag" className="w-6 h-4" />
          <span className="font-semibold text-lg">Gna</span>
        </div>
        <a href="/match-game" className="text-[#234F1E] hover:text-[#00A448]"><i className="fas fa-arrow-right"></i></a>
      </div>

	  


      
      
      <div className="flex justify-between items-center bg-[#f0f0f0] p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Egy</span>
          <img src="/src/assets/images/egypt-flag.png" alt="Egypt Flag" className="w-6 h-6" />
        </div>
        <span className="text-gray-500">vs</span>
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/Ethiopia-flag.png" alt="Ethiopia Flag" className="w-6 h-6" />
          <span className="font-semibold text-lg">Eth</span>
        </div>
        <a href="/match-game" className="text-[#234F1E] hover:text-[#00A448]"><i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</div>





        </div>
        <div className='w-[72%] h-full'>
          <div className='w-[3%] h-[3%]'></div>
          <div className='h-[75%] mt-[3%] mx-[4%]'>
            <Swiper
              speed={1000}
              loop={true}
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper w-full h-full bg-white text-center rounded-xl'
            >
              <SwiperSlide>
                <div className="relative">
                  <img src="/src/assets/images/CAF1.jpg" alt="" className="rounded-lg brightness-50 shadow-lg " />
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white">
                    <h2 className="px-4 py-2 text-2xl text-left font-bold">Les groupes de qualification <br /> pour la CAN TotalEnergies <br /> CAF Maroc 2025</h2>
                    <button className="bg-[#FBB117] hover:bg-[#F0FFF0] text-[#0F5132] font-bold py-2 px-4 rounded">
					<a href="/competition/groupstages">
                      Voir Plus
					  </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative ">
                  <img src="/src/assets/images/culturehomepage.jpg" alt="" className="rounded-lg brightness-50 shadow-lg " />
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white">
                    <h2 className="px-4 py-2 text-2xl text-left font-bold">Bienvenu aux traditions <br /> et la culture marocaines <br />à découvrir !!! </h2>
					<div></div>
                    {/*<p className="text-lg">Bienvenu aux traditions et la culture marocaines à découvrir !!!</p>*/}
                    <button className="bg-[#FBB117] hover:bg-[#F0FFF0] text-[#0F5132] font-bold py-2 px-4 rounded">
						<a href="/guide/culture">
                      Voir Plus
					  </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative">
                  <img src="/src/assets/images/w3.png" alt="" className="rounded-lg brightness-50 shadow-lg" />
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white">
                    <h2 className="px-4 py-2 text-2xl text-left font-bold ">À la découverte des stades marocains : <br /> Un voyage à travers l'histoire <br /> et la passion du football</h2>
                    <button className="bg-[#FBB117] hover:bg-[#F0FFF0] text-[#0F5132] font-bold py-2 px-4 rounded">
						<a href="/guide/terrain">
						Voir Plus
						</a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
			  <SwiperSlide>
                <div className="relative">
                  <img src="/src/assets/images/w3.png" alt="" className="rounded-lg brightness-50 shadow-lg" />
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white">
                    <h2 className="px-4 py-2 text-2xl font-bold ">Nos Terrain</h2>
                    <p className="text-lg">Decouvrir les Terrain de Maroc et savoir plus D'informations.</p>
                    <button className="bg-[#FBB117] hover:bg-[#F0FFF0] text-[#0F5132] font-bold py-2 px-4 rounded">
						<a href="/guide/terrain">
						Voir Plus
						</a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
	  
    
      <div className="bg-white py-10 bg-gradient-to-r from-[#0F5132] to-[#0F5132]">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Moroccan Stadiums</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className='w-[90%] mx-auto'
        >
          <SwiperSlide>
            <div className=" p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">MOHAMMED V CasaBlanca</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/MohammedV.jpeg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">The stadium has a seating capacity of 45,891, and is the oldest football stadium in Morocco.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">Moulay Abdallah Complex</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/RABAT_bas.jpg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">RABAT | Moulay Abdallah Complex | Stadium (69.500 seats) & Olympic Stadium (21.740 seats)</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">Stade de Marrakech</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/Marrakech.jpg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">The stadium has a seating capacity of 45,891, and is the oldest football stadium in Morocco.</p>
            </div>
          </SwiperSlide>
		  <SwiperSlide>
            <div className=" p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">MOHAMMED V CasaBlanca</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/MohammedV.jpeg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">The stadium has a seating capacity of 45,891, and is the oldest football stadium in Morocco.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


	  <h4 className="text-3xl font-bold text-center text-black m-4 mb-6">Les groupes de qualification pour la CAN TotalEnergies CAF Maroc 2025 dévoilés</h4>
	  <p className="text-2xl text-center text-xs text-[#234F1E] m-4 mb-6">Le tirage au sort des éliminatoires de la Coupe d'Afrique des Nations TotalEnergies CAF, Maroc 2025, a eu lieu jeudi à Johannesburg. <br />

48 pays africains tenteront de se qualifier pour la 35e édition de la compétition biennale africaine dans le but de détrôner la Côte d'Ivoire de l'entraîneur Emerse Fae en tant que roi du continent.<br />

Fae - l'un des deux assistants du tirage au sort avec la légende marocaine Marouane Chamakh - a vu son équipe placée dans un groupe délicat alors qu'elle tentait de défendre son titre.<br />
La Côte d'Ivoire est championne en titre après avoir battu le Nigeria 2-1 en finale de la compétition sportive phare du continent à Abidjan plus tôt cette année.<br />
Les Éléphants ont été placés dans le groupe G où ils affronteront les anciens champions de la Zambie, de la Sierra Leone et du Tchad.<br />
Le Maroc, hôte, a été placé dans le groupe B.<br />
Les Lions de l'Atlas affronteront le Gabon, la République centrafricaine et le Lesotho.<br />
Le Maroc abordera cette campagne de qualification avec moins de pression puisqu'il est déjà assuré de participer à la compétition à domicile.<br />
Le trophée tant convoité sera remis en jeu avec le début des éliminatoires de la prochaine CAN TotalEnergies CAF qui se déroulera dans le pays d'Afrique du Nord.<br />
Les qualifications débuteront en septembre 2024 et se termineront en novembre 2024.<br />
Le premier et le deuxième des onze (11) groupes qui n'impliquent pas le Maroc, hôte du tournoi, obtiendront leur qualification pour la compétition.<br />
La Coupe d'Afrique des Nations TotalEnergies CAF est le plus grand événement sportif d'Afrique et le prochain championnat se tiendra du 21 décembre 2025 au 18 janvier 2026.<br /> <br />
 <hr />
<b> Groupes: </b> </p>


{/*------------------------------------------------------------------------------------- */}	  
<div className="flex flex-wrap m-7 ">
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe A
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Tunisia.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Tunisia</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Madagascar-Flag.jpg" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Madagascar</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Flag_Comoros.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Comoros</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Gambia.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Gambia</span>
          </div>
        </div>
        
       
      </div>
    </div>
  </div>

  
  
  {/* Group B */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe B
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Flag_of_Morocco.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Morocco</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Gabon.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Gabon</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Central-Africa-Republic.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg text-xs">Central Africa Republic</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Lesotho.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Lesotho </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Group C */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe C
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/egypt-flag.png" alt="Egypt Flag" className="w-8 h-8" />
            <span className="font-semibold text-lg">Egypt</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Cape-Verde.jpeg" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Cape Verde</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Mauritania.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Mauritania</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Botswana.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Botswana</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Group D */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe D
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Nigeria.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Nigeria</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Benin.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Benin </span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Libya.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg"> Libya</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Rwanda.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Rwanda</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  {/* Group E */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe E
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Algeria.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Algeria</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Equatorial-Guinea.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg text-xs">Equatorial Guinea</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Togo.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Togo</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Liberia.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Liberia</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Group F */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe F
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Ghana.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Ghana</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Angola.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Angola</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Sudan.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Sudan</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Niger.png" alt="Egypt Flag" className="w-8 h-6" />
            <span className="font-semibold text-lg">Niger</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Group G */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe G
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Cote-d'Ivoire.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Cote d'Ivoire</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Zambia.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Zambia</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Sierra-Leone.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Sierra Leone</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Chad.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Chad</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Group H */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe H
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/DR-Congo.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">DR Congo</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Guinea.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Guinea</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Tanzania.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Tanzania</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Ethiopia.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Ethiopia</span>
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* Group I */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe I
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Mali.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Mali</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Mozambique.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Mozambique</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Guinea-Bissau.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Guinea Bissau</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Eswatini.png" alt="Egypt Flag" className="w-8 h-6" />
            <span className="font-semibold text-lg">Eswatini</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Group J */}
  <div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe J
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
	  <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Cameroon.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Cameroon</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Namibia.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Namibia</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Kenya.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Kenya</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Zimbabwe.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Zimbabwe</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    {/* Group K */}
	<div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe K
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
       <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/South-Africa.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">South Africa</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Uganda.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Uganda</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Congo.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Congo</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/South-Sudan.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">South Sudan</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    {/* Group L */}
	<div className="matches w-[200px] h-[270px] bg-[#8d0000] rounded-2xl shadow-2xl m-4">
    <div className="bg-gradient-to-r from-[#234F1E] to-[#234F1E] rounded-2xl text-center font-sans font-normal text-2xl tracking-normal text-white p-1">
      Groupe L
    </div>
    <div className="p-3 overflow-auto h-90">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Senegal.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Senegal</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Burkina-Faso.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Burkina Faso</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Malawi.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Malawi</span>
          </div>
        </div>
		<div className="flex justify-between items-center bg-[#f0f0f0] p-2 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/Burundi.png" alt="Egypt Flag" className="w-8 h-5" />
            <span className="font-semibold text-lg">Burundi</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/*----------------------------------------------------------------------*/}






	  {/* ----------------------------------
	  <div className=" py-10 bg-[#000000]">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Moroccan Stadiums</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className='w-[90%] mx-auto'
        >
          <SwiperSlide>
            <div className="bg-gray-200 p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">MOHAMMED V CasaBlanca</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/MohammedV.jpeg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">The stadium has a seating capacity of 45,891, and is the oldest football stadium in Morocco.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">Moulay Abdallah Complex</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/RABAT_bas.jpg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">RABAT | Moulay Abdallah Complex | Stadium (69.500 seats) & Olympic Stadium (21.740 seats)</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">Stade de Marrakech</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/Marrakech.jpg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">The stadium has a seating capacity of 45,891, and is the oldest football stadium in Morocco.</p>
            </div>
          </SwiperSlide>
		  <SwiperSlide>
            <div className="bg-gray-200 p-6 bg-[#FBB117] rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-center">MOHAMMED V CasaBlanca</h3>
			  <div className="h-5"></div>
              <img src="/src/assets/images/MohammedV.jpeg" alt="MohammedV Stadium" className="rounded-xl shadow-lg" />
              <p className="mt-2 text-[#3C280D]">The stadium has a seating capacity of 45,891, and is the oldest football stadium in Morocco.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

---------------- */}

	  {/* -------------------------------------------------- */}


{/*<div className="w-full h-[31px] bg-[#ffffff] flex justify-center items-center space-x-2 animate-scroll ">
  <img src="/src/assets/images/Tunisia.png" alt="Tunisia Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Madagascar-Flag.jpg" alt="Madagascar Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Flag_Comoros.png" alt="Comoros Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Gambia.png" alt="Gambia Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Flag_of_Morocco.png" alt="Morocco Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Gabon.png" alt="Gabon Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Central-Africa-Republic.png" alt="Central Africa Republic Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Lesotho.png" alt="Lesotho Flag" className="w-8 h-5" />
  <img src="/src/assets/images/egypt-flag.png" alt="Egypt Flag" className="w-8 h-8" />
  <img src="/src/assets/images/Cape-Verde.jpeg" alt="Cape Verde Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Mauritania.png" alt="Mauritania Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Botswana.png" alt="Botswana Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Nigeria.png" alt="Nigeria Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Benin.png" alt="Benin Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Libya.png" alt="Libya Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Rwanda.png" alt="Rwanda Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Algeria.png" alt="Algeria Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Equatorial-Guinea.png" alt="Equatorial Guinea Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Togo.png" alt="Togo Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Liberia.png" alt="Liberia Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Ghana.png" alt="Ghana Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Angola.png" alt="Angola Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Sudan.png" alt="Sudan Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Niger.png" alt="Niger Flag" className="w-8 h-6" />

  <img src="/src/assets/images/Cote-d'Ivoire.png" alt="Cote d'Ivoire Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Zambia.png" alt="Zambia Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Sierra-Leone.png" alt="Sierra Leone Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Chad.png" alt="Chad Flag" className="w-8 h-5" />
  <img src="/src/assets/images/DR-Congo.png" alt="DR Congo Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Guinea.png" alt="Guinea Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Tanzania.png" alt="Tanzania Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Ethiopia.png" alt="Ethiopia Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Mali.png" alt="Mali Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Mozambique.png" alt="Mozambique Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Guinea-Bissau.png" alt="Guinea-Bissau Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Eswatini.png" alt="Eswatini Flag" className="w-8 h-6" />
  <img src="/src/assets/images/Cameroon.png" alt="Cameroon Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Namibia.png" alt="Namibia Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Kenya.png" alt="Kenya Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Zimbabwe.png" alt="Zimbabwe Flag" className="w-8 h-5" />
  <img src="/src/assets/images/South-Africa.png" alt="South Africa Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Uganda.png" alt="Uganda Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Congo.png" alt="Congo Flag" className="w-8 h-5" />
  <img src="/src/assets/images/South-Sudan.png" alt="South Sudan Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Senegal.png" alt="Senegal Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Burkina-Faso.png" alt="Burkina Faso Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Malawi.png" alt="Malawi Flag" className="w-8 h-5" />
  <img src="/src/assets/images/Burundi.png" alt="Burundi Flag" className="w-8 h-5" />
  
</div>*/}






<div >
            
<FlagsMove />
</div>







	  <div >
            
            <VideoSection />
        </div>
		<div className="App">
      <EvolutionSection />
    </div>
      
      <div className="bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>
        <div className="flex justify-center gap-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]">
            <h3 className="text-xl font-bold">News Item 1</h3>
            <p className="mt-2">Details about news item 1.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]">
            <h3 className="text-xl font-bold">News Item 2</h3>
            <p className="mt-2">Details about news item 2.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]">
            <h3 className="text-xl font-bold">News Item 3</h3>
            <p className="mt-2">Details about news item 3.</p>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
        <div className="flex justify-center gap-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]">
            <h3 className="text-xl font-bold">Event 1</h3>
            <p className="mt-2">Details about event 1.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]">
            <h3 className="text-xl font-bold">Event 2</h3>
            <p className="mt-2">Details about event 2.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-[30%]">
            <h3 className="text-xl font-bold">Event 3</h3>
            <p className="mt-2">Details about event 3.</p>
          </div>
        </div>
      </div>
	  <div className='w-full h-[160px]'>
          <div className='w-[3%] h-[3%]'></div>
          <div className='h-[75%] mt-[3%] mx-[-1%]'>
            <Swiper
              speed={1000}
              loop={true}
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper w-full h-full bg-white text-center rounded-xl'
            >
              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="/src/assets/images/sponsor10.jpg" alt="" className="rounded-lg shadow-lg " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img src="/src/assets/images/sponsor10.jpg" alt="" className="rounded-lg shadow-lg " />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </div>
  );
}
