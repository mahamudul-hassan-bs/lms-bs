import React from "react";
import { ShieldCheck } from "lucide-react";
import { LuLogIn } from "react-icons/lu";
const LoginCard = () => {
  return (
    <div className="bg-[#D9D9D93D] w-[650px] h-[454px] rounded-[15px]  mt-[150px] mb-[150px] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="rounded-full px-4 py-2 bg-[#002BB71A] flex gap-2 font-inter">
          <div>
            <ShieldCheck color="blue" />
          </div>
          <div>Secure Access</div>
        </div>
        <div className="font-inter font-bold w-[420px] text-[32px] text-center mt-12">
          Please log in to continue to the{" "}
          <span className="text-blue-500">LMS Home</span>
        </div>
        <div className="font-inter font-normal w-[400px] text-[14px] text-center mt-4 text-[#00000099]">
          Your dashboard, borrowed books, progress tracking, and admin tools are
          protected.
        </div>
        <div className="mt-12">
          <button className="bg-[#5DC5F0] text-white font-inter font-[500px] py-2 px-4 rounded-[15px]">
            <LuLogIn className="inline mr-2" />
            Log in to LMS
          </button>
        </div>
        <div className="text-[#00000099] mt-6">
          Already have an account? Go to login
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
