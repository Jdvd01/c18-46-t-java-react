import { ShippingIconSVG } from "../../assets/svg/ShippingIconSVG";
import { ShippingForm } from "./shipping_tab/ShippingForm";

export const Shipping = ({ children }) => {
  return (
    <div
      className="w-[591px] h-[851px] rounded-[16px] pt-[30.5px] pb-[20.5px] px-[24px] mb-[49px] flex flex-col justify-between"
      style={{
        boxShadow: "0px 16px 24px 0px #16223314, 0px 4px 8px -4px #16223314",
      }}
    >
      {/* Labels */}
      <div className="text-body-1 text-primary-500 font-inter mx-auto w-[537px] h-[28px]">
        <div className="flex items-center gap-[9px]">
          <ShippingIconSVG width="22" height="22" /> Shipping Address
        </div>
      </div>
      {/* Form */}
      <div className="w-full h-[596px] flex flex-col justify-between">
        <ShippingForm />
      </div>
      <div className="flex items-center text-text-500">
        <input
          type="checkbox"
          name="saveShipInfo"
          id="saveShipInfo"
          className="accent-primary-500 w-[18px] h-[18px] cursor-pointer"
        />
        <label htmlFor="saveShipInfo" className="pl-2 cursor-pointer">
          Save this information for the next time
        </label>
      </div>
      {children}
    </div>
  );
};
