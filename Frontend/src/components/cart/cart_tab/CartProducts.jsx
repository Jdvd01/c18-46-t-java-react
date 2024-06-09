import { MarketBag } from "../../../assets/svg/MarketBag";
import { ProductCard } from "./ProductCard";

export const CartProducts = () => {
  return (
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
      {/* Content */}
      <div className="w-[669px] h-[609px]">
        <ProductCard />
      </div>
      {/* Buttons */}
    </div>
  );
};
