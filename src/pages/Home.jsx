import React from "react";
import Count from "./Count";
import logo from "../assets/logo.png";
function Home() {
  return (
    <div className="text-white" id="home">
      <div className="justify-center items-center  md:flex h-screen flex-col flex">
        <img className=" p-4 w-[99%] md:w-[80%]" src={logo} alt="" />
        <Count />
      </div>
    </div>
  );
}
export default Home;
