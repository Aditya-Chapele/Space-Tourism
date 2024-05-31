import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import data from "../data.json";

function Technology() {
  const [technologys, setTechnology] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setTechnology(data.technology);
  }, []);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const technology = technologys[activeTab] || {};

  return (
    <div className="technology full-width min-h-screen">
      <Navbar />
      <h2 className="pt-32 pb-8 uppercase text-[16px] sm:text-[20px] md:text-[28px] h-fit"><span className="text-white/25 font-bold tracking-[4.8px]">03</span>&nbsp; SPACE LAUNCH 101</h2>
      <div className="grid md:grid-cols-[1.2fr_minmax(350px,_0.8fr)] min-h-[70vh] gap-8 md:gap-12 pb-6">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-20 items-center">
          <div className="tab-buttons flex md:flex-col items-center md:items-start gap-4">
            {technologys.map((technologyTab, index) => (
              <button
                key={index}
                className={`${
                  index === activeTab ? "active-technology" : ""
                } border-2 border-white/60 rounded-full aspect-square w-16 text-xl hover:border-white transition-colors`}
                onClick={() => changeTab(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
            <div className="text max-w-[70ch] flex flex-col gap-4 items-center md:items-start">
              <p className="text-white/60 text-base sm:text-xl uppercase">the terminology...</p>
              <p className="text-4xl sm:text-6xl tracking-tight">{technology.name}</p>
              <p className="text-lg text-center md:text-start">{technology.description}</p>
            </div>
        </div>
          <img
            className=" w-80 sm:w-96 md:w-[400px] lg:w-[480px]  object-cover mx-auto md:row-auto row-span-full self-center"
            src={technology.images?.portrait}
            alt={`${technology.name} image`}
          />
      </div>
    </div>
  );
}

export default Technology;
