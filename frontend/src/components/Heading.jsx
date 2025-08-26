import React from "react";

const Heading = () => {
  return (
    <div className="h-[80px] bg-[#5DC5F0]">
      <div className="flex items-center text-white px-20 h-full justify-between">
        <h1 className="font-inter font-semibold text-[30px]  text-center">
          My Library
        </h1>
        <div className="button">
          <button className="bg-[#0047F126] text-white font-bold py-2 px-4 rounded">
            Customize this page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
