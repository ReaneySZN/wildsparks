import React from "react";

export default function index() {
  return (
    <div className="bg-dark-custom">
      <div className="container py-[88px]">
        <div className="text-[48px] text-center text-[#FEFEFE] mb-[40px]">
          Delivering sustainable futures
        </div>
        <div className="row pb-[80px]">
          <div className="col-lg-6">
            <div className="bg-sustain-img px-[60px]  md:mb-5">
              <div className="text-[28px] text-[#FFFFFF] pt-[60px]">
                Sustainability
              </div>
              <div className="text-[20px] text-[#FFFFFF] mb-[60px]">
                Through elevated standards and policies, we foster sustainable
                practices, ensure responsible production, actively combat
                climate change and contribute to a healthier society.
              </div>
              <div className="flex space-x-3 pb-[32px]">
                <div className="">
                  <img src="/public/img/SusIcon.png" alt="" />
                </div>
                <div className="">
                  <img src="/public/img/SusIconII.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-people-img px-[60px]">
              <div className="text-[28px] text-[#FFFFFF] pt-[50px] ">
                People
              </div>
              <div className="text-[20px] text-[#FFFFFF] mb-[40px]">
                Together, we are impacting the lives of our workers, small
                farmholders and the community through decent work for all,
                increased employment opportunities and inclusive economic
                growth.
              </div>
              <div className="pb-[32px]">
                <img src="/public/img/SusIconIII.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
