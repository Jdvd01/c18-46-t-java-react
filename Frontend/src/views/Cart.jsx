import { useState } from "react";
import { TabNav } from "../components/cart/TabNav";

// utils
import isNotLastTab from "../utils/cart/tabs/isNotLastTab";
import { ChangeTabButton } from "../components/cart/ChangeTabButton";
import { OrdenSummary } from "../components/cart/cart_tab/OrdenSummary";

const tabs = ["cart", "shipping", "payment"];

export const Cart = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleClick = () => {
    setCurrentTab((currIdx) => (isNotLastTab(tabs, currIdx) ? currIdx + 1 : 0));
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="position absolute top-[152px] right-1/2  translate-x-[50%] w-[1120px]">
        {/* <TabNav currentTab={currentTab} tabs={tabs} /> */}
        <TabNav tabs={tabs} currentTab={currentTab} />
        <OrdenSummary />
        <ChangeTabButton clickHandler={handleClick} text="Shipping" />
      </div>
    </div>
  );
};
