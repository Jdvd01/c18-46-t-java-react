import { RemoveProductSVG } from "../../../assets/svg/RemoveProductSVG";
import {
  FullFilledStarSVG,
  HalfFilledStarSVG,
} from "../../../assets/svg/StarsSVG";
import { QuantityInput } from "./QuantityInput";

export const ProductCard = ({ bookImg, title, author }) => {
  return (
    <div className="w-full bg-white h-[187px] rounded-[16px] border-[1px] border-text-50 flex justify-between pl-[16px] items-center">
      {/* image - name - rate - author */}
      <div className="w-[621px] flex items-center justify-between pr-[24px]">
        <div className="w-[291px] h-[163px] flex gap-[16px] font-inter">
          <img
            className="rounded-[4px]"
            src={bookImg}
            width={129}
            height={163}
            alt="book image"
          />
          <div className="w-[146px] flex flex-col justify-around">
            <p className="text-body-3 text-text-500">
              {title}
            </p>
            <div className="flex px-[3.5px] justify-between">
              <FullFilledStarSVG />
              <FullFilledStarSVG />
              <FullFilledStarSVG />
              <FullFilledStarSVG />
              <HalfFilledStarSVG />
            </div>
            <p>{author}</p>
          </div>
        </div>
        {/* price */}
        <p className="text-body-1">$10.99</p>
        {/* quantity selector */}
        <div>
          <QuantityInput initNumber={1} />
        </div>
      </div>
      {/* x icon */}
      <div
        onClick={() => console.log("remove product from cart...")}
        className="w-[48px] self-start mt-[21.4px] mr-[17.4] cursor-pointer"
      >
        <RemoveProductSVG />
      </div>
    </div>
  );
};
