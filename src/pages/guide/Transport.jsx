import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const transportOptions = [
  {
    name: "Transports Publics",
    description: "Le Maroc dispose d'un réseau de transport public bien développé comprenant des bus, des taxis, et des trains. Le réseau ferroviaire, géré par l'ONCF, est l'un des moyens les plus efficaces pour voyager entre les grandes villes.",
    image: "/src/assets/images/oncf.jpg",
    link: "https://www.oncf.ma/",
    linkText: "Visitez le site de l'ONCF"
  },
  {
    name: "Compagnies Aériennes",
    description: "Le Maroc est également desservi par plusieurs compagnies aériennes nationales et internationales. Royal Air Maroc est la principale compagnie aérienne marocaine, offrant des vols vers de nombreuses destinations à travers le monde.",
    image: "/src/assets/images/royalairmaroc.jpg",
    link: "https://www.royalairmaroc.com/",
    linkText: "Visitez le site de Royal Air Maroc"
  },
  {
    name: "Uber",
    description: "Les Ubers sont largement disponibles au Maroc, offrant des options de transport pratique pour les déplacements urbains et interurbains.",
    image: "/path/to/taxi-photo.jpg",
    link: "https://www.uber.com/",
    linkText: "Visitez le site d'Uber"
  },
  {
    name: "InDrive",
    description: "Indrive offre des services de location de voitures au Maroc, avec une large gamme de véhicules disponibles pour répondre à vos besoins de déplacement.",
    image: "/src/assets/images/inDrive.jpg",
    link: "https://www.indrive.ma/",
    linkText: "Visitez le site d'Indrive"
  },
  {
    name: "Alsa",
    description: "Alsa opère des services de transport en autobus au Maroc, couvrant divers itinéraires pour faciliter les voyages interurbains.",
    image: "/path/to/alsa-photo.jpg",
    link: "https://www.alsa.ma/",
    linkText: "Visitez le site d'Alsa"
  },
  {
    name: "Cars",
    description: "Les services de cars au Maroc offrent une alternative économique et pratique pour les voyages longue distance à travers le pays.",
    image: "/path/to/cars-photo.jpg",
    link: "https://www.examplecars.ma/",
    linkText: "Visitez le site des cars"
  }
];

const Transport = () => {
  const [selectedTransport, setSelectedTransport] = useState(transportOptions[0]);

  return (
    <div className="min-h-screen flex bg-[#ffffff]">
        
      <aside className="w-1/4 bg-[#012a4a] shadow-lg p-6">
      <div className='w-[3%] h-[3%]'></div>
        <h2 className="text-2xl font-bold mb-14 text-[#ffffff] text-center">Moyens de Transport</h2>
        <ul>
          {transportOptions.map((option, index) => (
            <li key={index} className="mb-2">
              <button
                onClick={() => setSelectedTransport(option)}
                className={`w-full text-center p-2 rounded-md ${selectedTransport.name === option.name ? 'bg-[#89c2d9]' : 'bg-gray-100'}`}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-6">
      <div className='w-[3%] h-[3%]'></div>
        <div className="bg-[#012a4a] rounded-lg shadow-lg p-6">
            <div className="flex justify-center">
                <img className="w-84 h-64 object-cover rounded-md mb-4" src={selectedTransport.image} alt={selectedTransport.name} />
            </div>          
            <h3 className="text-2xl text-[#ffffff] text-center font-bold mb-2">{selectedTransport.name}</h3>

          <p className="text-[#ffffff] mb-4">{selectedTransport.description}</p>
          <a
            href={selectedTransport.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f9c74f] hover:underline"
          >
            {selectedTransport.linkText}
          </a>
        </div>
      </main>
    </div>
  );
};

export default Transport;