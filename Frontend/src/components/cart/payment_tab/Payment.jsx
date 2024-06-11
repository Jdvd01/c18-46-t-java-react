import { CreditCardIconSVG } from "../../../assets/svg/CreditCardIconSVG";
import { PaymentForm } from "./PaymentForm";

export const Payment = ({ children }) => {
  return (
    <div
      className="w-[591px] h-[716px] rounded-[16px] pt-[31px] pb-[20.5px] px-[24px] mb-[49px] flex flex-col justify-between"
      style={{
        boxShadow: "0px 16px 24px 0px #16223314,0px 4px 8px -4px #16223314",
      }}
    >
      {/* Labels */}
      <div className="text-body-1 text-primary-500 font-inter mx-auto w-[537px] h-[28px]">
        <div className="flex items-center gap-[9px]">
          <CreditCardIconSVG /> Credit Card / Debit Card
        </div>
      </div>
      {/* Form */}
      <div className="w-full h-[460px] flex flex-col justify-between">
        <PaymentForm />
      </div>
      <div className="flex items-center text-text-500">
        <input
          type="checkbox"
          name="savePaymentInfo"
          id="savePaymentInfo"
          className="accent-primary-500 w-[18px] h-[18px] cursor-pointer"
        />
        <label htmlFor="savePaymentInfo" className="pl-2 cursor-pointer">
          Save payment details for future purchases
        </label>
      </div>
      {children}
    </div>
  );
};
