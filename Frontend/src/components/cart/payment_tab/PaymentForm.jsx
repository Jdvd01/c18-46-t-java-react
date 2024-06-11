import { useState } from "react";
import { VisaIconSVG } from "../../../assets/svg/VisaIconSVG";
import { MasterCardIconSVG } from "../../../assets/svg/MasterCardIconSVG";
import { GpayIconSVG } from "../../../assets/svg/GpayIconSVG";
import { PaypalIconSVG } from "../../../assets/svg/PaypalIconSVG";

export const PaymentForm = () => {
  // inputs state
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvvCode, setCvvCode] = useState("");

  return (
    /* Container */
    <>
      {/* Payment */}
      <div className="flex flex-col w-full">
        <p className="mb-[8px] font-inter text-body-2">Select payment</p>
        {/* Credit card */}
        <div className="flex relative gap-[14px] p-3 font-inter text-body-3 text-text-200 border-[1px] border-text-100 rounded-[8px] hover:border-tertiary-300 mb-[16px]">
          <input
          className="w-8 h-8"
            id="credit-card"
            type="radio"
            name="payment-methods"
            value="credit-card"
            checked={paymentMethod === "credit-card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label className="w-full flex items-center cursor-pointer h-full" htmlFor="credit-card">
            Credit Card
          </label>
          {/* Icons */}
          <div className="absolute top-1/2 -translate-y-1/2 right-16">
            <VisaIconSVG width={35} height={35} />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-3">
            <MasterCardIconSVG width={35} height={35} />
          </div>
        </div>
        {/* Google Play / Paypal */}
        <div className="flex justify-between gap-3">
          {/* Google Play */}
          <div className="flex relative gap-[14px] p-3 font-inter text-body-3 text-text-200 border-[1px] border-text-100 rounded-[8px] hover:border-tertiary-300 w-full">
            <input
            className="w-8 h-8"
              id="google-play"
              type="radio"
              name="payment-methods"
              value="google-play"
              checked={paymentMethod === "google-play"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label
              className="w-full flex items-center cursor-pointer h-full"
              htmlFor="google-play"
            >
              Google Play
            </label>
            {/* Icons */}
            <div className="absolute top-1/2 -translate-y-1/2 right-3">
              <GpayIconSVG />
            </div>
          </div>
          {/* Paypal */}
          <div className="flex relative gap-[14px] p-3 font-inter text-body-3 text-text-200 border-[1px] border-text-100 rounded-[8px] hover:border-tertiary-300 w-full">
            <input
            className="w-8 h-8"
              id="pay-pal"
              type="radio"
              name="payment-methods"
              value="pay-pal"
              checked={paymentMethod === "pay-pal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="w-full flex items-center cursor-pointer h-full" htmlFor="pay-pal">
              Paypal
            </label>
            {/* Icons */}
            <div className="absolute top-1/2 -translate-y-1/2 right-3">
              <PaypalIconSVG />
            </div>
          </div>
        </div>
      </div>

      {/* Card number */}
      <div className="flex flex-col w-full">
        <label className="mb-[8px] font-inter text-body-2">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter your card number"
          className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
        />
      </div>
      {/* Name on Card */}
      <div className="flex flex-col w-full">
        <label className="mb-[8px] font-inter text-body-2">Name on Card</label>
        <input
          type="text"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          placeholder="Enter name on card"
          className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
        />
      </div>

      {/* Expiration date / CVV */}
      <div className="flex justify-between gap-[15px]">
        {/* Expiration date  */}
        <div className="flex flex-col w-full">
          <label className="mb-[8px] font-inter text-body-2">
            Expiration date
          </label>
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            placeholder="MM / YY"
            className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
          />
        </div>
        {/* CVV */}
        <div className="flex flex-col w-full">
          <label className="mb-[8px] font-inter text-body-2">CVV</label>
          <input
            type="text"
            value={cvvCode}
            onChange={(e) => setCvvCode(e.target.value)}
            placeholder="Enter CVV code"
            className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
          />
        </div>
      </div>
    </>
  );
};
