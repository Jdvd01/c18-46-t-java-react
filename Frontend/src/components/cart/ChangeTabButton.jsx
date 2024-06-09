export const ChangeTabButton = ({
  clickHandler,
  text,
  rightIcon = null,
  leftIcon = null,
  addedStyles = ""
}) => {
  return (
    <button
      onClick={() => clickHandler()}
      className={`w-[170px] h-[44px] px-[12px] py-[8px] text-body-1 font-inter flex rounded-[4px] justify-between items-center ${addedStyles}`}
    >
      {leftIcon} {text} {rightIcon}
    </button>
  );
};
