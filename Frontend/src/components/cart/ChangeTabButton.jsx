import { RightArrowSVG } from "../../assets/svg/RightArrowSVG";

export const ChangeTabButton = ({clickHandler, text}) => {
  return (
    <button
      onClick={() => clickHandler()}
      className="w-[170px] px-[12px] py-[8px] bg-primary-500 text-body-1 font-inter position absolute top-2/3 right-[20px] text-white flex rounded-[4px] justify-between items-center"
    >
      {text} <RightArrowSVG color="#fff" />
    </button>
  );
};
