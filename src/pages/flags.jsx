import React from 'react';
import 'tailwindcss/tailwind.css';

const flags = [
  "/src/assets/images/Tunisia.png",
  "/src/assets/images/Madagascar-Flag.jpg",
  "/src/assets/images/Flag_Comoros.png",
  "/src/assets/images/Gambia.png",
  "/src/assets/images/Flag_of_Morocco.png",
  "/src/assets/images/Gabon.png",
  "/src/assets/images/Central-Africa-Republic.png",
  "/src/assets/images/Lesotho.png",
  "/src/assets/images/Flag_of_Egypt_.png",
  "/src/assets/images/Cape-Verde.jpeg",
  "/src/assets/images/Mauritania.png",
  "/src/assets/images/Botswana.png",
  "/src/assets/images/Nigeria.png",
  "/src/assets/images/Benin.png",
  "/src/assets/images/Libya.png",
  "/src/assets/images/Rwanda.png",
  "/src/assets/images/Algeria.png",
  "/src/assets/images/Equatorial-Guinea.png",
  "/src/assets/images/Togo.png",
  "/src/assets/images/Liberia.png",
  "/src/assets/images/Ghana.png",
  "/src/assets/images/Angola.png",
  "/src/assets/images/Sudan.png",
  "/src/assets/images/Niger.png",
  "/src/assets/images/Cote-d'Ivoire.png",
  "/src/assets/images/Zambia.png",
  "/src/assets/images/Sierra-Leone.png",
  "/src/assets/images/Chad.png",
  "/src/assets/images/DR-Congo.png",
  "/src/assets/images/Guinea.png",
  "/src/assets/images/Tanzania.png",
  "/src/assets/images/Ethiopia.png",
  "/src/assets/images/Mali.png",
  "/src/assets/images/Mozambique.png",
  "/src/assets/images/Guinea-Bissau.png",
  "/src/assets/images/Eswatini.png",
  "/src/assets/images/Cameroon.png",
  "/src/assets/images/Namibia.png",
  "/src/assets/images/Kenya.png",
  "/src/assets/images/Zimbabwe.png",
  "/src/assets/images/South-Africa.png",
  "/src/assets/images/Uganda.png",
  "/src/assets/images/Congo.png",
  "/src/assets/images/South-Sudan.png",
  "/src/assets/images/Senegal.png",
  "/src/assets/images/Burkina-Faso.png",
  "/src/assets/images/Malawi.png",
  "/src/assets/images/Burundi.png",
];

const FlagsMove = () => {
  return (
    <div className="w-full h-[31px] bg-[#F0FFF0] overflow-hidden">
      <div className="flex space-x-2 animate-scroll">
        {flags.map((src, index) => (
          <img key={index} src={src} alt={`Flag ${index}`} className="w-8 h-5" />
        ))}
        {flags.map((src, index) => (
          <img key={`dup-${index}`} src={src} alt={`Flag ${index}`} className="w-8 h-5" />
        ))}
      </div>
    </div>
  );
};

export default FlagsMove;
