import React from "react";
import { teamMembers } from "./Data";

export default function index() {
  return (
    <div className="bg-dark-custom">
      <div className="container pb-[80px]">
        <div className="text-[48px] text-white mb-[40px]">Our team</div>
        <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-[34px] pb-[80px]">
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
