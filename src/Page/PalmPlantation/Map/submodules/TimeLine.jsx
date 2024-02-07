import React from "react";
import { TimeLineNotSelected, TimeLineSelect } from "../../../../../public/svg";
import { TimeData } from "../Data";
import TooltipCustomAnimation from "../../../../Components/tooltip";

export default function TimeLine() {
  const LineDesign = ({ selected = false, name, time }) => {
    return (
        <TooltipCustomAnimation desc={'Our IVR Technology is currently deployed by EDC for the MasterCard Sponsored TNY Program across the Micro, Small and Medium Enterprises (MSMEs)'}>
      
      
      <span>
        {" "}
        <div className="relative mb-[32px]">
          <div className=" border-[2px] border-[#464646]  bg-[#464646]"></div>
          <div className="absolute top-[-13px] left-0 right-0 flex justify-center">
            {selected ? <TimeLineSelect /> : <TimeLineNotSelected />}
          </div>
        </div>
        <div className=" font-1 text-center">
          <div className=" text-[#B3B3B3] text-[20px]  ">{name}</div>
          <div className="text-[24px] text-white">{time}</div>
        </div>
      </span>
      </TooltipCustomAnimation>
    );
  };

  return (
    <div>
      <div className="flex gx-0">
        {TimeData?.map(({ time, name, selected }, index) => (
          <div
            className={`${index == 0 || index === 5 ? "w-[10%]" : "w-[20%]"}`}
          >
            <LineDesign selected={selected} time={time} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
