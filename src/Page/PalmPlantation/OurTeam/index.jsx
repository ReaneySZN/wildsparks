import React from "react";
import { teamMembers } from "./Data";
import { Container } from "../../../../utils";
import { ArrowLeft, ArrowRight } from "../../../../public/svg";

export default function index() {
  return (
    <div className="bg-dark-custom">
      <div className={`${Container} pb-[80px]`}>
       <div className="flex justify-between items-center mb-[40px]">
       <div className="text-[48px] text-white">Our team</div>
       <div className="hidden md:flex items-center gap-[32px] ">
        <ArrowRight/>
        <ArrowLeft/>
       </div>
       </div>
        <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-[34px] md:pb-[80px]">
          {teamMembers?.map((member, index) => (
            <div key={index} className="">
              <div className="flex flex-col">
                <div className="mb-[24px]">
                  <img src={member.image} alt=""  className="object-cover w-full"/>
                </div>
                <div className="flex flex-col">
                  <div className="text-[32px] text-white mb-[2px]">{member.name}</div>
                  <div className="text-[22px] text-[#EAEAEA]">
                    {member.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
