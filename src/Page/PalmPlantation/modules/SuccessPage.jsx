import React from "react";
import { TickIcon } from "../../../../public/svg";

export default function SuccessPage({
    closeModal
}) {
  return (
    <div className=" rounded-[32px] flex flex-col justify-center items-center  bg-white py-[40px] lg:py-[80px] px-[40px] lg:px-[80px]">
       
           <TickIcon/>
           <div className="mt-[32px] text-[32px] text-[#121212] font-semibold mb-[16px]">
           Thank you!
           </div>
           <div className="text-[#565656] text-[20px] lg:text-[24px] text-center font-2 font-extralight leading-[28px] mb-[48px]">
           We’ve received your request and our 
team will reach out to you within 24 hours.
           </div>

           <button className="px-[40px] rounded-[56px] py-[16px] bg-[#121212] text-white text-[18px]">
           Close
           </button>
     
    </div>
  );
}
