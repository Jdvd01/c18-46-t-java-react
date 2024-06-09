import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TabNav } from "../components/cart/TabNav";

// components
import { RightArrowSVG } from "../assets/svg/RightArrowSVG";
import { LeftArrowSVG } from "../assets/svg/LeftArrowSVG";

// utils
import isNotLastTab from "../utils/cart/tabs/isNotLastTab";
import { ChangeTabButton } from "../components/cart/ChangeTabButton";
import { OrdenSummary } from "../components/cart/OrdenSummary";
import { CartProducts } from "../components/cart/cart_tab/CartProducts";

const tabs = ["cart", "shipping", "payment"];

export const Cart = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentTab((currIdx) => (isNotLastTab(tabs, currIdx) ? currIdx + 1 : 0));
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="position absolute top-[152px] right-1/2  translate-x-[50%] w-[1120px]">
        {/* <TabNav currentTab={currentTab} tabs={tabs} /> */}
        {/* <TabNav tabs={tabs} currentTab={currentTab} />
        <OrdenSummary />
        <div className="position absolute top-2/3 right-[20px]">
          <ChangeTabButton
            clickHandler={handleClick}
            text="Shipping"
            addedStyles="text-white bg-primary-500"
            rightIcon={<RightArrowSVG color="#fff" />}
          />
          <ChangeTabButton
            clickHandler={() => navigate("/")}
            text="Back to Books"
            addedStyles="border-[2px] py-[10px] border-primary-500 bg-white w-[170px] text-primary-500 text-nowrap"
            leftIcon={<LeftArrowSVG color="#352CE2" />}
          />
        </div> */}
        <CartProducts />
      </div>
    </div>
  );
};
