import { useState } from "react";

export const QuantityInput = ({ addStyles = "", initNumber = 1 }) => {
  const [number, setNumber] = useState(initNumber >= 0 ? initNumber : 0);

  const handleChange = (value) => {
    const newNumber = value;
    if ((newNumber >= 1 && newNumber <= 100) || newNumber === "")
      setNumber(newNumber);
  };
  return (
    <div
      className={`w-[70px] h-[40px] border-[1px] rounded-[8px] flex items-center justify-between pr-[7px] ${addStyles}`}
    >
      <input
        type="number"
        className="text-center w-full text-body-1 font-inter pr-[5px]"
        value={number}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={(e) => handleChange(e.target.value === "" ? 1 : number)}
      />
    </div>
  );
};
