import React from "react";
import {
  FacebookIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "../../../../public/svg";

export default function index() {
  return (
    <div className="bg-dark-custom">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-6">
            <img src="/public/img/Plant.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="text-[45px] text-white mb-[40px]">
              Let’s reimagine plantations and ensure food security
            </div>
            <div className="bg-white w-[fit-content] text-start rounded-[56px] py-1 px-3 text-[#121212] text-[28px] ">
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
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center border-b border-b-[#2F2F2F] py-[25px]">
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
