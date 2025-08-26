import React from "react";
import bsLogo from "../assets/bsLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import NewsCard from "./NewsCard.jsx";
const Footer = () => {
  return (
    <div className="w-full h-[500px] flex flex-col">
      <div className="h-[400px] opacity-100 px-20 py-6 flex flex-row justify-between items-start gap-x-20">
        <div className="flex flex-1 flex-col h-full justify-between">
          <div className="h-[68px] w-[270px]">
            <img src={bsLogo} alt="Brain Station 23 Logo" />
          </div>
          <div>
            <p className="text-sm leading-[150%] text-justify ">
              {" "}
              AI-ready software service company specializing in resource
              augmentation. We deliver 10X faster solutions for startups, SMEs,
              and Enterprises across Fintech, Pharma, Retail & Distribution.{" "}
            </p>
          </div>
          <div className="flex  justify-between">
            <FaFacebook className="h-[44px] w-[44px] " color="#5DC5F0" />
            {/* <FaLinkedin className="h-[44px] w-[44px] " color="#5DC5F0" /> */}
            <div className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#5DC5F0] text-white">
              <FaLinkedinIn size={25} />
            </div>
            <FaTwitter className="h-[44px] w-[44px]" color="#5DC5F0" />
            <FaYoutube className="h-[44px] w-[44px]" color="#5DC5F0" />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-evenly h-full">
          <div className="font-inter font-semibold text-[24px] text-[#5DC5F0] leading-[100%] tracking-[2%] uppercase">
            <h1>COMPANY</h1>
          </div>
          <div className=" flex flex-col gap-2 text-[#263238] font-inter font-semibold text-[18px] leading-[100%] tracking-[2%]">
            <p className="uppercase">Home</p>
            <p className="uppercase">About us</p>
            <p className="uppercase">Books</p>
            <p className="uppercase">Ebooks</p>
            <p className="uppercase">new release</p>
            <p className="uppercase">Contact Us</p>
            <p className="uppercase">Blog</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-evenly h-full">
          <div className="font-inter font-semibold text-[24px] text-[#5DC5F0] leading-[100%] tracking-[2%] uppercase">
            <h1>Latest news</h1>
          </div>
          <div className="flex flex-col gap-2">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
      <div className="py-6 px-20 flex flex-row justify-between font-inter font-normal text-[18px] leading-[100%] tracking-[2%]">
        <p>© 2023 Brain Station 23. All rights reserved.</p>
        <div className="flex flex-row gap-2">
          <a className="text-[#5DC5F0]">Privacy Policy</a>
          <p>|</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
