import React from 'react';

const stadiums = [
  {
    name: "Stade Mohammed V",
    location: "Casablanca",
    capacity: "67,000",
    description: "The Stade Mohammed V is a multi-purpose stadium used mostly for football matches. It is located in the heart of Casablanca.",
    image: "/src/assets/images/MohammedV.jpeg"
  },
  {
    name: "Stade de Marrakech",
    location: "Marrakech",
    capacity: "45,240",
    description: "The Stade de Marrakech is a multi-purpose stadium in Marrakech. It is used primarily for football and hosts national and international matches.",
    image: "/src/assets/images/Marrakech.jpg"
  },
  {
    name: "Stade Adrar",
    location: "Agadir",
    capacity: "45,480",
    description: "The Stade Adrar is a multi-purpose stadium in Agadir. It is used mostly for football matches and hosts various other events.",
    image: "/src/assets/images/stade-adrar.jpg"
  },
  {
    name: "Stade Ibn Batouta",
    location: "Tangier",
    capacity: "45,000",
    description: "The Stade Ibn Batouta is a multi-purpose stadium in Tangier. It is primarily used for football matches and has hosted many international events.",
    image: "/src/assets/images/stade-ibn-batouta.jpg"
  },
];

export default function Terrain() {
  return (
    <div className="min-h-screen bg-[#0F5132]">
      <div className="relative h-64">
        <img className="w-full h-full object-cover" src="/src/assets/images/w3.png" alt="Moroccan Stadiums" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Moroccan Stadiums</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        {stadiums.map((stadium, index) => (
          <div key={index} className="bg-[#F0FFF0] rounded-lg shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{stadium.name}</h2>
              <p className="text-gray-600"><strong>Location:</strong> {stadium.location}</p>
              <p className="text-gray-600"><strong>Capacity:</strong> {stadium.capacity}</p>
              <p className="text-gray-600 mt-4">{stadium.description}</p>
            </div>
            <div className="md:w-1/2 p-4">
              <img className="w-full h-84 object-cover rounded-md mb-4" src={stadium.image} alt={stadium.name} />
            </div>
            <div className="md:w-1/3 p-4">
              <p className="text-gray-600">Additional information or text can go here.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
