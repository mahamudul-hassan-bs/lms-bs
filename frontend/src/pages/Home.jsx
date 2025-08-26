import React from "react";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div className="mt-6 px-20">
      <div className="grid grid-cols-3">
        <div className="">
          {" "}
          <h1 className="font-karla font-bold text-[15px] leading-[100%] tracking-[0%]">
            Book by Genre
          </h1>
          <div className="flex flex-col gap-2 mt-4 font-karla font-normal text-[15px] ">
            <a href=""> All Genres</a>
            <a href=""> Development</a>
            <a href=""> Business</a>
            <a href=""> IT & Software</a>
            <a href=""> Design</a>
            <a href=""> Marketing</a>
          </div>
        </div>
        <div className="col-span-2  ">
          <div className="bg-[#F3F4F7] p-6 w-full rounded-sm shadow-md">
            <h1 className="font-karla font-bold text-[25px] leading-[100%] tracking-[0%] py-2">
              Recommended
            </h1>
            <div className="flex flex-wrap flex-row gap-12">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </div>
            <h1 className="font-karla font-bold text-[25px] leading-[100%] tracking-[0%] py-2 mt-12 mb-6">
              Popular
            </h1>
            <div className="flex flex-wrap flex-row gap-6">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </div>
          </div>
          <div className="bg-[#F3F4F7] p-6 mt-8 w-full rounded-sm shadow-md">
            <h1 className="font-karla font-bold text-[25px] leading-[100%] tracking-[0%] py-2 mb-6 uppercase">
              new book collections
            </h1>
            <div className="flex flex-wrap flex-row gap-12">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
