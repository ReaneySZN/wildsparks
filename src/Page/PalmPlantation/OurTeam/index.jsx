import React from "react";
import { teamMembers } from "./Data";

export default function index() {
  return (
    <div className="bg-dark-custom">
      <div className="container pb-[80px]">
        <div className="text-[48px] text-white mb-[40px]">Our team</div>
        <div className="row pb-[80px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4">
              <div className="flex flex-col">
                <div className="">
                  <img src={member.image} alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[32px] text-white">{member.name}</div>
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
