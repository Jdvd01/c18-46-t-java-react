import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { TabNav } from "../components/cart/TabNav";
import { CartProducts } from "../components/cart/cart_tab/CartProducts";
import { OrdenSummary } from "../components/cart/OrdenSummary";
import { RightArrowSVG } from "../assets/svg/RightArrowSVG";
import { ChangeTabButton } from "../components/cart/ChangeTabButton";
import { LeftArrowSVG } from "../assets/svg/LeftArrowSVG";
import { Payment } from "../components/cart/payment_tab/Payment";

// utils
import isLastTab from "../utils/cart/tabs/isLastTab";
import isNotLastTab from "../utils/cart/tabs/isNotLastTab";
import capitalizeWord from "../utils/cart/tabs/capitalizeWord";
import { WarningIconSVG } from "../assets/svg/WarningIconSVG";
import { Shipping } from "../components/cart/Shipping";

const tabs = ["cart", "shipping", "payment"];

export const Cart = () => {
  // state
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  // handlers
  const handleClickNavBtns = (direction) => {
    if (direction === "prev") {
      setCurrentTab((currIdx) => currIdx - 1);
      return;
    }
    setCurrentTab((currIdx) => currIdx + 1);
    return;
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div>
        <TabNav
          addStyles="mt-[152px] mb-[40px]"
          tabs={tabs}
          currentTab={currentTab}
        />
        {/* Content */}
        <div
          className={`flex gap-[16px] flex-wrap ${
            tabs.at(currentTab) === "cart"
              ? "justify-center"
              : "justify-between"
          }`}
        >
          {/* Cart Products */}
          {tabs.at(currentTab) === "cart" && (
            <CartProducts>
              {/* buttons */}
              <div className="w-[669px] flex justify-between items-center">
                <ChangeTabButton
                  clickHandler={
                    currentTab === 0
                      ? () => navigate("/")
                      : () => handleClickNavBtns("prev")
                  }
                  text={`${
                    currentTab === 0
                      ? "Back To Books"
                      : currentTab === 2
                      ? "Shipping Info"
                      : "Back To " + capitalizeWord(tabs[currentTab - 1])
                  }`}
                  addedStyles="border-[2px] py-[10px] border-primary-500 bg-white w-[170px] text-primary-500 text-nowrap"
                  leftIcon={<LeftArrowSVG color="#352CE2" />}
                />
                {isLastTab(tabs, currentTab) ? (
                  <span className="text-body-2 font-inter flex gap-[3px] text-yellow-500">
                    <WarningIconSVG />
                    Verify that all your information is correct
                  </span>
                ) : (
                  <ChangeTabButton
                    clickHandler={() => handleClickNavBtns("next")}
                    text={
                      currentTab < tabs.length - 1
                        ? capitalizeWord(tabs.at(currentTab + 1))
                        : ""
                    }
                    addedStyles="text-white bg-primary-500"
                    rightIcon={<RightArrowSVG color="#fff" />}
                  />
                )}
              </div>
            </CartProducts>
          )}
          {/* Shipping Form */}
          {tabs.at(currentTab) === "shipping" && (
            <Shipping>
              {/* buttons */}
              <div className="w-[543px] flex justify-between items-center">
                <ChangeTabButton
                  clickHandler={
                    currentTab === 0
                      ? () => navigate("/")
                      : () => handleClickNavBtns("prev")
                  }
                  text={`${
                    currentTab === 0
                      ? "Back To Books"
                      : currentTab === 2
                      ? "Shipping Info"
                      : "Back To " + capitalizeWord(tabs[currentTab - 1])
                  }`}
                  addedStyles="border-[2px] py-[10px] border-primary-500 bg-white w-[170px] text-primary-500 text-nowrap"
                  leftIcon={<LeftArrowSVG color="#352CE2" />}
                />
                {isLastTab(tabs, currentTab) ? (
                  <span className="text-body-2 font-inter flex gap-[3px] text-yellow-500">
                    <WarningIconSVG />
                    Verify that all your information is correct
                  </span>
                ) : (
                  <ChangeTabButton
                    clickHandler={() => handleClickNavBtns("next")}
                    text={
                      currentTab < tabs.length - 1
                        ? capitalizeWord(tabs.at(currentTab + 1))
                        : ""
                    }
                    addedStyles="text-white bg-primary-500"
                    rightIcon={<RightArrowSVG color="#fff" />}
                  />
                )}
              </div>
            </Shipping>
          )}

          {/* Payment Form */}
          {tabs.at(currentTab) === "payment" && (
            <Payment>
              {/* buttons */}
              <div className="w-[543px] flex justify-between items-center">
                <ChangeTabButton
                  clickHandler={
                    currentTab === 0
                      ? () => navigate("/")
                      : () => handleClickNavBtns("prev")
                  }
                  text={`${
                    currentTab === 0
                      ? "Back To Books"
                      : currentTab === 2
                      ? "Shipping Info"
                      : "Back To " + capitalizeWord(tabs[currentTab - 1])
                  }`}
                  addedStyles="border-[2px] py-[10px] border-primary-500 bg-white w-[170px] text-primary-500 text-nowrap"
                  leftIcon={<LeftArrowSVG color="#352CE2" />}
                />
                {isLastTab(tabs, currentTab) ? (
                  <span className="text-body-2 font-inter flex gap-[3px] text-yellow-500">
                    <WarningIconSVG />
                    Verify that all your information is correct
                  </span>
                ) : (
                  <ChangeTabButton
                    clickHandler={() => handleClickNavBtns("next")}
                    text={
                      currentTab < tabs.length - 1
                        ? capitalizeWord(tabs.at(currentTab + 1))
                        : ""
                    }
                    addedStyles="text-white bg-primary-500"
                    rightIcon={<RightArrowSVG color="#fff" />}
                  />
                )}
              </div>
            </Payment>
          )}

          <OrdenSummary checkoutDisabled={isNotLastTab(tabs, currentTab)} />
        </div>
      </div>
    </div>
  );
};
