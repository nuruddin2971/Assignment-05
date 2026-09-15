import { useState } from "react";
import type { Itechnology } from "../../type/technologies";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import SingleTechCard from "./SingleTechCard";

interface TechnologyCardProps {
  technologies: Itechnology[];
}

const TechnologyCard = ({ technologies }: TechnologyCardProps) => {
  const [isSelectedTechCard, setIsSelectedTechCard] = useState<Itechnology[]>(
    [],
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
      <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-3 gap-4">
        {technologies.map((technology) => {
          return (
            <SingleTechCard
              key={technology.id}
              technology={technology}
              isSelectedTechCard={isSelectedTechCard}
              setIsSelectedTechCard={setIsSelectedTechCard}
            ></SingleTechCard>
          );
        })}
      </div>
      <SelectedTechnologyCard
        isSelectedTechCard={isSelectedTechCard}
        setIsSelectedTechCard={setIsSelectedTechCard}
      ></SelectedTechnologyCard>
    </div>
  );
};

export default TechnologyCard;
