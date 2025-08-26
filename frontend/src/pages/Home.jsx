import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Directory from "../components/Directory";
import LoginCard from "../components/LoginCard";

const Home = () => {
  return (
    <div>
      <Heading />
      <Directory />
      <div className="flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
};

export default Home;
