import { useState } from "react";

export const ShippingForm = () => {
  // inputs state
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  return (
    /* Container */
    <>
      {/* Select country */}
      <div className="flex flex-col w-full">
        <label
          htmlFor="country-select"
          className="mb-[8px] font-inter text-body-2"
        >
          Country
        </label>
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="py-[14px] px-[10px] w-full border-[1px] rounded-[8px] focus:border-tertiary-600 focus:border-[2px] outline-none"
        >
          <option value="" disabled>
            Select your country
          </option>
          <option value="argentina">Argentina</option>
          <option value="bolivia">Bolivia</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
          <option value="spain">Spain</option>
          <option value="usa">USA</option>
        </select>
      </div>
      {/* Name / Last Name */}
      <div className="flex justify-between gap-[15px]">
        {/* Name */}
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-[8px] font-inter text-body-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
          />
        </div>
        {/* Last Name */}
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-[8px] font-inter text-body-2">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
          />
        </div>
      </div>
      {/* Address */}
      <div className="flex flex-col w-full">
        <label className="mb-[8px] font-inter text-body-2">House number</label>
        <input
          type="text"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          placeholder="Enter your house number or apartment number"
          className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
        />
      </div>
      {/* City / postal code */}
      <div className="flex justify-between gap-[15px]">
        {/* City */}
        <div className="flex flex-col w-full">
          <label className="mb-[8px] font-inter text-body-2">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
          />
        </div>
        {/* Postal code */}
        <div className="flex flex-col w-full">
          <label className="mb-[8px] font-inter text-body-2">Postal code</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter the postal code"
            className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
          />
        </div>
      </div>
      {/* Phone */}
      <div className="flex flex-col w-full">
        <label className="mb-[8px] font-inter text-body-2">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="py-[14px] px-[10px] border-[1px] rounded-[8px] outline-none focus-visible:border-tertiary-300 focus-visible:border-[2px]"
        />
      </div>
    </>
  );
};
