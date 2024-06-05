import { InvalidInputSVG } from "../../assets/svg/InvalidInputSVG";
export const Field = ({
  htmlFor,
  id,
  labelText,
  placeholder,
  icon,
  setShowPassword,
  showPassword,
  type = "text",
  onChange,
  value,
  isInvalid,
  invalidMessage,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-body-2 font-inter">
        {labelText}
      </label>
      <div className="flex flex-col gap-2 w-full justify-center relative">
        <input
          type={type}
          id={id}
          className={`border-[1px]  ${
            isInvalid ? "border-red-500" : "border-text-100"
          } rounded-lg h-[52px] px-[10px]`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {icon ? (
          <span
            className={`absolute ${
              isInvalid ? "right-[35px]" : "right-[10px]"
            }`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {icon}
          </span>
        ) : null}
        {isInvalid && (
          <span className="absolute right-[10px]">
            <InvalidInputSVG width="20" height="20" />
          </span>
        )}
      </div>
      {isInvalid && (
        <p className="text-red-500 text-body-3 font-inter desktop:w-[398]">
          {invalidMessage}
        </p>
      )}
    </div>
  );
};
