import React, { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Itechnology } from "../../type/technologies";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="w-11/12 mx-auto space-y-3 mt-4">
      <div className="space-y-5 md:text-left text-center">
        <h2 className="font-extrabold text-4xl">
          Explore the <span className="text-[#DB4CA9]">Technologies</span>
        </h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <TechnologyCard technologies={technologies}></TechnologyCard>
    </div>
  );
};

export default Technologies;
