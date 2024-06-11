import { useState } from "react";

import { ArrowSVG } from "../../../assets/svg/QuantityArrowsSVG";

export const QuantityInput = ({ addStyles = "", initNumber = 1 }) => {
  const [number, setNumber] = useState(initNumber >= 0 ? initNumber : 0);

  const handleChange = (direction) => {
    if (direction === "down") {
      setNumber((currNumber) =>
        currNumber === 0 ? currNumber : currNumber - 1
      );
      return;
    }
    setNumber((currNumber) => currNumber + 1);
  };
  return (
    <div
      className={`w-[70px] h-[40px] border-[1px] rounded-[8px] flex items-center justify-between pr-[7px] ${addStyles}`}
    >
      <div className="text-center w-full text-body-1 font-inter pr-[5px]">
        {number}
      </div>
      <div className="flex flex-col justify-center gap-[6px] h-full">
        <div onClick={() => handleChange("up")} className="cursor-pointer">
          <ArrowSVG width={12} height={12} />
        </div>
        <div
          onClick={() => handleChange("down")}
          className="cursor-pointer rotate-[180deg]"
        >
          <ArrowSVG width={12} height={12} />
        </div>
      </div>
    </div>
  );
};
