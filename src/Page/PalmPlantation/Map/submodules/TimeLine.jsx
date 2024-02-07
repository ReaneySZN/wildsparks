import React from "react";
import { TimeLineNotSelected, TimeLineNotSelectedMobile, TimeLineSelect, TimeLineSelectMobile } from "../../../../../public/svg";
import { TimeData } from "../Data";
import TooltipCustomAnimation from "../../../../Components/tooltip";

export default function TimeLine() {
  const LineDesign = ({ selected = false, name, time }) => {
    return (
      <TooltipCustomAnimation
      
      >
        <span>
          {" "}
          <div className="relative mb-[32px]">
            <div className=" border-[2px] border-[#464646]  bg-[#464646]"></div>
            <div className="absolute top-[-13px] left-0 right-0 flex justify-center">
              {selected ? <TimeLineSelect /> : <TimeLineNotSelected />}
            </div>
          </div>
          <div className=" font-1 text-center">
            <div className=" text-[#B3B3B3] text-[15px] lg:text-[20px]  ">{name}</div>
            <div className="text-[16px] xl:text-[24px] text-white">{time}</div>
          </div>
        </span>
      </TooltipCustomAnimation>
    );
  };

  const LineDesignMac = ({ selected = false, name, time,position }) => {
    return (
      <TooltipCustomAnimation
      
      >
        <span>
        <div className="flex">
        <div className="w-[40%]">
        <div className=" text-[#B3B3B3] text-[15px] lg:text-[20px]  ">{name}</div>
            <div className="text-[20px]  text-white">{time}</div>
        </div>
        <div className="w-[30%] flex justify-center relative">
        <div className={`absolute  left-0 right-0  bottom-0 flex justify-center items-center  ${position?'top-[0px]':'top-[-40px]'}`}>
              {selected ? <TimeLineSelectMobile /> : <TimeLineNotSelectedMobile />}
            </div>
          <div className={`w-[3px] bg-[#464646] ${position?' h-[60px]':' h-[100px]'}`}></div>
        </div>
        
        </div>
        </span>
      </TooltipCustomAnimation>
    );
  };

  return (
    <div>
      <div className="hidden md:flex gx-0 ">
        {TimeData?.map(({ time, name, selected }, index) => (
          <div
            className={`${index == 0 || index === 5 ? "w-[10%]" : "w-[20%]"}`}
          >
            <LineDesign selected={selected} time={time} name={name} />
          </div>
        ))}
      </div>

      <div className="md:hidden">
      
      {TimeData?.map(({ time, name, selected,position }, index) => (
       <LineDesignMac selected={selected} time={time} name={name} position={position}/>
       ))}
       
      </div>
    </div>
  );
}
