import React from "react";
import python from "../assets/python.jpg";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
const BookCard = () => {
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <img
            key={star}
            src={star <= rating ? star_icon : star_dull_icon}
            alt=""
            className="w-3.5"
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="flex flex-row gap-4 items-center w-[280px] h-[140px] ">
        <img className="w-[92px] h-[140px] object-cover  " src={python} />
        <div className="flex flex-col gap-2">
          <h1 className="font-inter font-normal text-[16px] leading-[100%] tracking-[0%]">
            All The Light We Cannot See
          </h1>
          <p className="font-inter font-normal text-[12px] leading-[100%] tracking-[0%]">
            By Anthony doerr
          </p>
          <div className="flex flex-row gap-2  justify-between ">
            <div className="w-[50px] h-[7px]">{renderStars(4)}</div>
            <div className="font-rubik font-[300] text-[10px] text-[#0000004D]">
              1,988,288 votes{" "}
            </div>
          </div>
          <p className="font-rambla font-normal text-[10px]  text-[#0000004D] leading-[15px] tracking-[0.3%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi
            eleifend enim, tristique
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
