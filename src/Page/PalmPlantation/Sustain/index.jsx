import React from "react";
import { Container } from "../../../../utils";

export default function index() {
  return (
    <div className="bg-dark-custom overflow-hidden font-2">
      <div className={` py-[88px]`}>
        <div className={`${Container} text-[30px] lg:text-[35px] xl:text-[48px] text-center text-[#FEFEFE] mb-[40px]`}>
          Delivering sustainable futures
        </div>
        <div className="row gy-3 pb-[40px] lg:pb-[80px]">
          <div className="col-lg-6">
            <div className="bg-sustain-img bg-cover px-[30px] lg:px-[40px] xl:px-[60px]  md:mb-5 h-[100%]">
              <div className="text-[24px] lg:text-[28px] text-[#FFFFFF] pt-[60px]">
                Sustainability
              </div>
              <div className="lg:text-[20px] text-[#FFFFFF] mb-[60px]">
                Through elevated standards and policies, we foster sustainable
                practices, ensure responsible production, actively combat
                climate change and contribute to a healthier society.
              </div>
              <div className="flex space-x-3 pb-[32px]">
                <div className="">
                  <img src="/img/SusIcon.png" alt=""className="w-[80%]" />
                </div>
                <div className="">
                  <img src="/img/SusIconII.png" alt="" className="w-[80%]"  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="bg-sustain-img bg-cover px-[30px] lg:px-[40px] xl:px-[60px]  md:mb-5 h-[100%]">
          <div className="text-[24px] lg:text-[28px] text-[#FFFFFF] pt-[60px]">
                People
              </div>
              <div className="lg:text-[20px] text-[#FFFFFF] mb-[60px]">
                Together, we are impacting the lives of our workers, small
                farmholders and the community through decent work for all,
                increased employment opportunities and inclusive economic
                growth.
              </div>
              <div className="pb-[32px]">
                <img src="/img/SusIconIII.png" alt="" className=""  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
