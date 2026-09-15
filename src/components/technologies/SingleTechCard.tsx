import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { Itechnology } from "../../type/technologies";
import RatingLogo from "../../assets/Symbol.png";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "react-toastify";

interface SingleTechCardProps {
  technology: Itechnology;
  isSelectedTechCard: Itechnology[];
  setIsSelectedTechCard: Dispatch<SetStateAction<Itechnology[]>>;
}

const SingleTechCard = ({
  technology,
  isSelectedTechCard,
  setIsSelectedTechCard,
}: SingleTechCardProps) => {
  // const [isSelectedTech, setIsSelectedTech] = useState(false);
  const isSelectedTech = isSelectedTechCard.some(
    (item) => item.id === technology.id,
  );

  const handleAddToCart = () => {
    // const isAlreadyAdded = isSelectedTechCard.some(
    //   (item) => item.id === technology.id,
    // );

    if (isSelectedTech) {
      toast.error("Already added to your stack!");
      return;
    }

    // setIsSelectedTech(true);
    setIsSelectedTechCard((stack) => [...stack, technology]);
    toast.success("Successfully added to stack!");
  };

  return (
    <div>
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
            <img src={RatingLogo} alt="" className="w-3 h-3 object-contain" />
            <p>{technology.rating}</p>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`mt-4 rounded-xl btn btn-block btn-neutral ${
            isSelectedTech
              ? "bg-gray-400 text-red-600 opacity-60"
              : "hover:bg-neutral-800"
          }`}
          // disabled={isSelectedTech}
        >
          {isSelectedTech ? (
            <span className="flex items-center gap-2">
              <GiCheckMark /> Added to Stack
            </span>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default SingleTechCard;
