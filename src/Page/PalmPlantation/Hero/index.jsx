import React, { useState } from "react";
import Header from "../../../Components/Header";
import FormModal from "../../../Components/Modal/FormModal";
import SuccessModal from "../../../Components/Modal/SuccessModal";
import { Container } from "../../../../utils";

export default function index({
  openModal
}) {
  

  return (
    <div className="font-1">
      <div className="bg-hero-pattern md:pt-[10px] min-h-[100vh] pb-[100px] lg:pb-[212px] bg-cover">
        <div className={` ${Container}  flex flex-col  h-full`}>
         <div className="md:mb-[100px]">
         <Header openModal={openModal} Text={"Invest Now"} />
         </div>
         
        
          <div className="flex-[1] flex flex-col justify-center">
          <div className="text-[55px] md:text-[64px] xl:text-[78px] text-center text-[#FEFEFE] mb-[16px] font-semibold leading-none md:leading-[72px]">
            Palm Plantation Reimagined
          </div>
          <div className="text-[20px] xl:text-[24px] text-center text-[#EAEAEA] mb-[90px] font-light font-2 leading-[38px] xl:leading-[40px]">
            We are growing the Largest Palm plantation in Africa with a total
            <br />
            land bank of 100,000 hectares and an estimated annual output
            <br /> of 300,000 metric tonnes (mt.) Crude Palm Oil by 2035.
          </div>
          <button onClick={openModal&&openModal} className="bg-white w-[fit-content] mx-auto text-center rounded-[56px] py-[10px] lg:py-[20px] px-[30px] lg:px-[48px] text-[#121212] text-[20px] lg:text-[28px] ">
            Invest Now
          </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
