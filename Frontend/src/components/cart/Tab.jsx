export const Tab = ({ isCurrent, text, number }) => {
  return (
    <div
      className={`border-b-4 ${
        isCurrent
          ? "border-primary-500 text-primary-500"
          : "border-text-50 text-text-200"
      } pb-[8px] w-[371.33px] flex justify-center gap-[8px] items-center  text-body-1 font-inter`}
    >
      <div
        className={`w-[21px] h-[21px] ${
          isCurrent ? "bg-primary-500" : "bg-text-200"
        } rounded-full`}
      >
        <div
          className={`${
            isCurrent ? "text-white" : "text-white"
          } text-body-3 font-inter text-center`}
        >
          {number}
        </div>
      </div>
      {text}
    </div>
  );
};
