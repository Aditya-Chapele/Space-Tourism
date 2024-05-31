import React, { useState, useEffect } from "react";
import data from "../data.json";
import Navbar from "../components/Navbar";

const Destination = () => {
  const [destinations, setDestination] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setDestination(data.destinations);
  }, []);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const destination = destinations[activeTab] || {};

  return (
    <div className="destination full-width min-h-screen">
      <Navbar />
      <h2 className="pt-32 pb-8 uppercase text-[16px] sm:text-[20px] md:text-[28px] text-center md:text-start"><span className="text-white/25 font-bold tracking-[4.8px]">01</span>&nbsp; pick your destination</h2>

      <div className="container w-full gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2  place-self-center pb-6">
              <div
                className="left flex items-center justify-center"
              >
                <img
                  src={destination.images?.webp}
                  alt={`${destination.name} images`}
                />
              </div>
            
        <div className="right max-w-[70ch] mx-auto flex flex-col items-center md:items-start">
          <div className="tab-buttons mb-6 sm:mb-9 ">
            {destinations.map((place, index) => (
              <button
                key={index}
                className={`${index === activeTab ? "active-destination" : ""} mr-3 text-base  hover:border-b-[3px]  border-white/60  `}
                onClick={() => changeTab(index)}
              >
                {place.name}
              </button>
            ))}
          </div>
          <div className="info flex flex-col gap-4 items-center md:items-start" key={destination.id}>
            <h1 className="text-8xl">{destination.name}</h1>
            <p className="text-white/70 text-xl text-center md:text-left">{destination.description}</p>
            <hr className="bg-white/70"/>
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-20 uppercase">
              <h4 className="flex flex-col items-center md:items-start text-3xl"><span className="text-sm text-white/70">AVG. DISTANCE</span>{destination.distance}</h4>
              <h4 className="flex flex-col items-center md:items-start text-3xl"><span className="text-sm text-white/70">Est. travel time</span>{destination.travel}</h4>
            </div>
          </div>
              
        </div>
      </div>
    </div>
  );
};

export default Destination;
