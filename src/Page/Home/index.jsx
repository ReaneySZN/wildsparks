import React from "react";
import footer from "/public/svg/bottom_img.png";
import Logo from "/public/svg/Logo.svg";

export default function index() {
  return (
    <div className="bg-dark">
      <div className="container px-8">
        <div className="row">
          <div className="text-left float-left pt-[7rem] mb-[54px]">
            <img src={Logo} alt="" />
          </div>
          <div className="col-lg-8 col-md-10 col-12">
            <div className="text-[48px] font-500 text-white text-left mb-[80px]">
              We are a food and agro-allied company nourishing the world.
            </div>
          </div>
          <div className="col-lg-4 col-md-2 col-12"></div>
        </div>
      </div>
      <div className="w-100">
        <img className="w-100" src={footer} alt="" />
      </div>
    </div>
  );
}
