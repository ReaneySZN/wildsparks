import React from "react";
import { items } from "./Data";
import Header from "../../Components/Header";
import { Container } from "../../../utils";

export default function index() {
  return (
    <div className="bg-dark-custom min-h-[100vh] font-1 overflow-hidden">
      <div className={` flex flex-col min-h-[100vh] justify-between ${Container}`}>
        <div>
          <Header />
        </div>
        <div data-aos="fade-down" className="text-[35px] md:text-[48px] leading-[44px] lg:leading-[58px] font-1 font-medium text-[#FEFEFE] mb-[50px]">
          We are a food and agro-allied
          <br /> company nourishing the world.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[58px] mb-[60px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="md:py-[8.5rem] lg:py-0 sm:py-0"
              data-aos="fade-down"
              data-aos-delay={`${index*150}`}
            >
              <div className="flex flex-col">
                <div className="mb-[36px]">
                  <img src={item.image} alt=""  className="object-cover w-full"/>
                </div>
                <div className="flex flex-col mb-4">
                  <div className={`md:text-[42px] text-[30px] lg:text-[36px] text-[#FFFFFF] font-semibold mb-[12px]`}>
                  <div data-aos="fade-left"   data-aos-delay="500" className="flex gap-[24px] flex-wrap">
                    {item.title}
                    {item.comingSoon && (
                    <div className="bg-[#242424]  flex justify-center items-center  py-1 px-3 rounded-[48px] md:text-[24px] text-[20px] text-[#FEFEFE]">
                      Coming soon
                    </div>
                  )}
                  </div>
                  </div>
                 
                  {item.linkText && (
                    <div className="underline text-[20px] md:text-[24px] font-medium  text-[#FEFEFE]">
                      <a href={item.linkUrl}>{item.linkText}</a>
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
