import React from "react";
import type { Itechnology } from "../../type/technologies";
import RatingLogo from "../../assets/Symbol.png";

const TechnologyCard = ({ technologies }) => {
  console.log(technologies, "tec from card");
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-20">
      <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-3 gap-4">
        {technologies.map((technology: Itechnology) => {
          return (
            <div className="shadow-sm border-b border-gray-200 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center">
                <img src={technology.icon} alt="" className="w-8" />
                <p className="font-semibold bg-[#F0F9FF] text-[#50BDEF] rounded-2xl py-1 px-3">
                  {technology.badge}
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-bold text-xl">{technology.name}</h2>
                <p>{technology.description}</p>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between items-center">
                <p className="font-medium rounded-sm py-1 px-3 bg-[#F4F7FA]">
                  {technology.category}
                </p>
                <p className="font-medium">{technology.difficulty}</p>
                <div className="flex items-center gap-1">
                  <img
                    src={RatingLogo}
                    alt=""
                    className="w-3 h-3 object-contain"
                  />
                  <p>{technology.rating}</p>
                </div>
              </div>

              <button className="btn btn-block btn-neutral mt-4 rounded-xl">
                Add to Stack
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyCard;
