import type { Itechnology } from "../../type/technologies";

interface SelectedTechnologyCardProps {
  selectedTechnologies: Itechnology[];
}

const SelectedTechnologyCard = ({
  selectedTechnologies,
}: SelectedTechnologyCardProps) => {
  return (
    <div>
      <div className="border-b border-gray-200 shadow-sm p-6 rounded-2xl h-fit self-start">
        <h2 className="font-bold">Your Stack</h2>
        <p className="text-[#94A3B8]">Technology Selected</p>
        <button className="btn btn-block btn-outline btn-error mt-4 rounded-xl">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedTechnologyCard;
