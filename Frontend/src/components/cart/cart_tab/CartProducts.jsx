import BookImg1 from "../../../assets/book1.png";
import BookImg2 from "../../../assets/book2.png";
import BookImg3 from "../../../assets/book3.png";

import { useNavigate } from "react-router-dom";
import { MarketBag } from "../../../assets/svg/MarketBag";
import { ProductCard } from "./ProductCard";

export const CartProducts = ({ children }) => {
  const navigate = useNavigate();
  return (
    /* Container */
    <div
      className="w-[717px] h-[793px] py-[32px] px-[24px] flex flex-col gap-[24px]"
      style={{
        boxShadow: "0px 16px 24px 0px #16223314, 0px 4px 8px -4px #16223314",
      }}
    >
      {/* Labels */}
      <div className="text-body-1 text-primary-500 font-inter mx-auto w-[537px] h-[28px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-[8px]">
            <MarketBag /> Product Details
          </div>
          <div className="flex gap-[92px] items-center">
            <div>Price</div>
            <div>Quantity</div>
          </div>
        </div>
      </div>
      {/* Product Cards */}
      <div className="w-[669px] h-[609px] overflow-y-scroll flex flex-col gap-[24px]">
        <ProductCard
          bookImg={BookImg1}
          title="Harry Potter and the Sorcerer's Stone (Book 1)"
          author="J.K. Rowling"
        />
        <ProductCard
          bookImg={BookImg2}
          title="Harry Potter and the Chamber of Secrets (Book 2)"
          author="J.K. Rowling"
        />
        <ProductCard
          bookImg={BookImg3}
          title="Harry Potter and the Prisoner of Azkaban (Book 3"
          author="J.K. Rowling"
        />
      </div>
      {/* Buttons */}
      {children}
    </div>
  );
};
