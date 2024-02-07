import React from "react";
import {
  FacebookIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "../../../../public/svg";
import { Container } from "../../../../utils";

export default function index() {
  return (
    <div className="bg-dark-custom font-1">
      <div className={`${Container}`}>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center  gap-[80px]">
          <div className="">
            <img src="/public/img/Plant.png" alt="" className="w-full object-cover" />
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="text-[35px] lg:text-[45px] text-white mb-[40px]">
              Let’s reimagine plantations and ensure food security
            </div>
            <div className="bg-white w-[fit-content] text-start rounded-[56px] py-[15px] lg:py-[20px] px-[30px] lg:px-[48px] text-[#121212] text-[18px] lg:text-[28px] ">
              Invest Now
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-b-[#2F2F2F] pb-[25px] pt-[80px]">
          <div className="flex flex-col md:flex-row text-center justify-between space-x-5">
            <div className="text-[18px] text-white">hello@wildsparks.com</div>
            <div className="text-[18px] text-white">+234 700 933 933 933</div>
          </div>
          <div className="flex space-x-2">
            <TwitterIcon />
            <LinkedInIcon />
            <FacebookIcon />
            <TiktokIcon />
          </div>
        </div>
        <div className="flex gap-3 flex-col lg:flex-row md:flex-row justify-between items-center border-b border-b-[#2F2F2F] py-[25px]">
          <div className="flex justify-between space-x-[5rem]">
            <div className="text-[18px] text-[#838383]">Privacy</div>
            <div className="text-[18px] text-[#838383]">Terms</div>
            <div className="text-[18px] text-[#838383]">Policy</div>
          </div>
          <div className="text-[#838383] text-[18px]">
            © Copyright Wildsparks.com
          </div>
        </div>
      </div>
    </div>
  );
}
