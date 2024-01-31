import React from "react";
import { items } from "./Data";
import HeaderLogo from "/public/svg/header_logo.svg";
import Footer from "/public/svg/bottom_img.png";

export default function index() {
  return (
    <div>
      <div className="container h-100 bg-white">
        <div className="text-[56px] text-[#000002] pt-[7rem] mb-[14px]">
          We are a food and agro-allied
          <br /> company nourishing the world.
        </div>
        <div className="text-[20px] text-[#000002] mb-[14px]">
          We are committed to providing the best food and agricultural products
          to people locally and globally in a <br /> safe, responsible and
          sustainable way while creating long term value for our people, our
          shareholders and <br /> the communities in which we operate.
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-2 mb-[14px]">
              <div className="flex flex-col">
                <div className="mb-[12px]">
                  <img className="w-100" src={item.src} alt={item.alt} />
                </div>
                <div className="flex space-x-1 justify-center text-center">
                  <div>
                    <img className="" src={item.image} alt={item.alt} />
                  </div>
                  <div className="text-[16px] text-[#000002]">{item.Title}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
        </div>
        <div className="">
          <img src={HeaderLogo} alt="" />
        </div>
      </div>
      <div className="">
        <img className="w-100" src={Footer} alt="" />
      </div>
    </div>
  );
}
