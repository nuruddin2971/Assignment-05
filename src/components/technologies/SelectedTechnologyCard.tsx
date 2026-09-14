import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../type/technologies";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface SelectedTechnologyCardProps {
  selectedTechnologies: Itechnology[];
  isSelectedTechCard: Itechnology[];
  setIsSelectedTechCard: Dispatch<SetStateAction<Itechnology[]>>;
}

const SelectedTechnologyCard = ({
  selectedTechnologies,
  isSelectedTechCard,
  setIsSelectedTechCard,
}: SelectedTechnologyCardProps) => {
  return (
    <div>
      <div className="border-b border-gray-200 shadow-sm p-6 rounded-2xl h-fit self-start space-y-4">
        <h2 className="font-bold">Your Stack</h2>
        {isSelectedTechCard.length === 0 ? (
          <div>
            <p className="text-[#94A3B8]">No Technology Selected</p>
            <p className="text-[#94A3B8] border-2 border-gray-200 border-dashed rounded-2xl text-center p-7">
              Your stock is empty
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">
              {isSelectedTechCard.length}Technology Selected
            </p>
            <div className="space-y-3">
              {isSelectedTechCard.map((tech) => (
                <div
                  key={tech.id}
                  className="flex justify-between items-center p-2 border border-gray-200 rounded-xl bg-white shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={tech.icon}
                      alt=""
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <h4 className="font-bold">{tech.name}</h4>
                      <p className="text-xs text-gray-500">{tech.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSelectedTechCard(
                        isSelectedTechCard.filter(
                          (item) => item.id !== tech.id,
                        ),
                      );
                      toast.info("Removed from stack!");
                    }}
                    className="text-gray-400 hover:text-red-500 text-lg font-bold px-2"
                  >
                    <RxCross2 />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setIsSelectedTechCard([]);

                toast.warn("All items removed from stack!");
              }}
              className="btn btn-block btn-outline btn-error mt-4 rounded-xl"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedTechnologyCard;
