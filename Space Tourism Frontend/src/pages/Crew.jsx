import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import data from "../data.json";

function Crew() {
  const [crews, setCrews] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setCrews(data.crew);
  }, []);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const crew = crews[activeTab] || {};

  return (
    <div className="crew full-width min-h-screen md:px-16">
      <Navbar />
      <h2 className="pt-32 pb-8 uppercase text-[16px] sm:text-[20px] md:text-[28px]">
        <span className="text-white/25 font-bold tracking-[4.8px]">02</span>
        &nbsp; Meet your crew
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-6">
        <div className="crew-content flex md:flex-col flex-col-reverse gap-6 md:gap-28 items-center md:items-start justify-between md:justify-self-start self-center">
          <div className="text max-w-[70ch] flex flex-col gap-4 items-center md:items-start">
            <p className="text-white/60 text-2xl sm:text-3xl">{crew.role}</p>
            <p className="text-4xl sm:text-6xl tracking-tight">{crew.name}</p>
            <p className="text-lg text-center md:text-start">{crew.bio}</p>
          </div>
          <div className="flex gap-2">
            {crews.map((crewMember, index) => (
              <button
                key={index}
                className={`${
                  index === activeTab ? "active-crew" : ""
                } aspect-square w-3 bg-white/40 rounded-full hover:bg-white/80 transition-colors`}
                onClick={() => changeTab(index)}
              ></button>
            ))}
          </div>
        </div>
        <img className="w-72 sm:w-80 md:w-[360px] place-self-center sm:row-auto row-span-full" src={crew.images?.webp} alt={`${crew.name} image`} />
      </div>
    </div>
  );
}

export default Crew;
