import React from 'react';
import 'tailwindcss/tailwind.css';

const evolutionItems = [
  {
    year: "1976",
    title: "African cup",
    description: "One of Africa's most successful national football teams, Morocco won the 1976 African Cup of Nations.",
    image: "/src/assets/images/1976.jpg",
  },
  {
    year: "1986",
    title: "World cup",
    description: "MOROCCO became the first African team to finish top of a group at a World Cup and the first African team to reach the knockout stages.",
    image: "/src/assets/images/1986.jpeg",
  },
  {
    year: "2022",
    title: "World cup QATAR",
    description: "Morocco defied all expectations at the 2022 FIFA World Cup, topping their group containing Croatia, Canada and Belgium. Morocco also eliminated Spain and Portugal to become the first African team to reach the semi-finals of the World Cup.",
    image: "/src/assets/images/2022.jpeg",
  },
];

const EvolutionSection = () => {
  return (
    <div 
      className=" py-10 " 
      style={{
        backgroundImage: 'url("/src/assets/images/11.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Notre histoire</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {evolutionItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-64 object-cover" src={item.image} alt={item.title} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.year}</h3>
                <h4 className="text-xl font-semibold text-gray-600 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvolutionSection;
