import React from "react";
import cardLeft from "../assets/cardLeft.jpg";
const NewsCard = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <img
        className="w-[100px] h-[100px] object-cover  rounded "
        src={cardLeft}
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-inter text-[#5DC5F0] font-medium text-[18px] leading-[100%] tracking-[0%]">
          Nostrud exercitation
        </h1>
        <p className="font-inter font-normal text-[12px] leading-[100%] tracking-[0%]">
          Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.{" "}
        </p>
        <div className="flex gap-2 items-center ">
          <div className="h-[6px] w-[6px] bg-[#F6D55C] rounded-full"></div>
          <p className="font-inter font-normal text-[10px] leading-[100%] tracking-[5.5%] text-[#F6D55C]">
            15 April 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
