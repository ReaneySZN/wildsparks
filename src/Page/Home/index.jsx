import React from "react";
import { items } from "./Data";
import Header from "../../Components/Header";

export default function index() {
  return (
    <div className="bg-dark-custom">
      <div className="container">
        <div>
          <Header />
        </div>
        <div className="md:text-[48px] text-[40px] text-[#FEFEFE] mb-[40px]">
          We are a food and agro-allied
          <br /> company nourishing the world.
        </div>
        <div className="row pb-[60px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-4 md:py-[8.5rem] lg:py-0 sm:py-0"
            >
              <div className="flex flex-col">
                <div className="">
                  <img src={item.image} alt="" />
                </div>
                <div className="flex flex-col mb-4">
                  <div className={`md:text-[42px] text-[36px] text-[#FFFFFF]`}>
                    {item.title}
                  </div>
                  {item.linkText && (
                    <div className="underline md:text-[24px] text-[20px] text-[#FEFEFE]">
                      <a href={item.linkUrl}>{item.linkText}</a>
                    </div>
                  )}
                  {item.comingSoon && (
                    <div className="bg-[#242424] w-[fit-content] py-1 px-3 rounded-[48px] md:text-[24px] text-[20px] text-[#FEFEFE]">
                      Coming soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
