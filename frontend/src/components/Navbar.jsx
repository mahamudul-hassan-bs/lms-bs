import React from "react";
import logo from "../assets/logo.png";
import { FaBell } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaComment } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between  px-12  ">
      <div className="flex flex-row items-center ">
        <div className="">
          <img height={"150px"} width={"150px"} src={logo} alt="Logo" />
        </div>
        <div>
          <CgMenuGridR size={"30px"} color="gray" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className="button">
          <button className="bg-[#5DC5F0] text-black font-bold py-2 h-[41px] w-[87px] px-4 rounded-full ">
            Sign In
          </button>
        </div>
        <div>
          <FaBell className="h-[30px] w-[30px] " color="#0000004D" />
        </div>
        <div>
          <FaComment className="h-[30px] w-[30px]" color="#0000004D" />
        </div>
        <div>
          <AiOutlineSearch className="h-[30px] w-[30px]" color="#0000004D" />
        </div>
        <div>
          <FaUser className="h-[30px] w-[30px]" color="#0000004D" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
