import type { Itechnology } from "../../type/technologies";

interface SelectedTechnologyCardProps {
  selectedTechnologies: Itechnology[];
}

const SelectedTechnologyCard = ({
  selectedTechnologies,
}: SelectedTechnologyCardProps) => {
  return (
    <div>
      <div className="border-b border-gray-200 shadow-sm p-6 rounded-2xl h-fit self-start space-y-4">
        <h2 className="font-bold">Your Stack</h2>
        <p className="text-[#94A3B8]">No Technology Selected</p>
        <p className="text-[#94A3B8] border-2 border-gray-200 border-dashed rounded-2xl text-center p-7">
          Your stock is empty
        </p>
        {/* <button className="btn btn-block btn-outline btn-error mt-4 rounded-xl">
          Remove All
        </button> */}
      </div>
    </div>
  );
};

export default SelectedTechnologyCard;
