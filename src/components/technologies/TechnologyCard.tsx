import type { Itechnology } from "../../type/technologies";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import SingleTechCard from "./SingleTechCard";

interface TechnologyCardProps {
  technologies: Itechnology[];
}

const TechnologyCard = ({ technologies }: TechnologyCardProps) => {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
      <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-3 gap-4">
        {technologies.map((technology) => {
          return (
            <SingleTechCard
              key={technology.id}
              technology={technology}
            ></SingleTechCard>
          );
        })}
      </div>
      <SelectedTechnologyCard></SelectedTechnologyCard>
    </div>
  );
};

export default TechnologyCard;
