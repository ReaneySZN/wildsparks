import React from "react";
import MapImg from "/public/img/map.png";
import Line from "/public/img/line.png";
import Timeline from "/public/img/timeline.png";
import TimeLine from "./submodules/TimeLine";
import TooltipCustomAnimation from "../../../Components/tooltip";
import { Container } from "../../../../utils";

export default function index() {
  return (
    <div className="bg-dark-custom font-1">

      <div className={`${Container}  pt-[80px] pb-[104px] !lg:px-0 xl:px-0 `}>
        <div className="text-[35px] leading-none lg:text-[56px] text-center text-[#FEFEFE] mb-[16px]">
          We are reimagining the future
        </div>
        <div className="text-[20px] text-center text-[#EAEAEA] mb-[56px] leading-[28px] xl:leading-[34px] font-1">
          From industry-leading genetic seed technology to cutting-edge
          innovations, we are leading the
          <br className="hidden lg:block" /> charge to transform the palm oil industry globally, ensure food
          security and deliver sustainable future.
        </div>
        <div className="flex lg:pl-[80px] w-full justify-between mb-[80px] flex-wrap">
          <div className="">
            <div className="flex flex-col text-[24px] md:text-[34px]">
              <div className=" text-white my-[32px]">
                100,000 hectares
              </div>
              <div className="">
                <img src={Line} alt="" />
              </div>
              <div className=" text-white my-[32px]">
                300,000 mt CPO
              </div>
              <div className="">
                <img src={Line} alt="" />
              </div>
              <div className=" text-white my-[32px]">
                1000 jobs created
              </div>
              <div className="">
                <img src={Line} alt="" />
              </div>
              <div className="text-[34px] text-white my-[32px]">
                5 countries
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src={MapImg} alt="" />
            </div>
          </div>
        </div>
        <div className={`${Container}`}>
          <TimeLine/>
          {/* <img src={Timeline} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
