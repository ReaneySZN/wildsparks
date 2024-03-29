import React from "react";
import { ChevronDownBlack } from "/public/svg";
import { Container } from "../../../../utils";

export default function index() {
  return (
    <div className="bg-white">
      {" "}
      <div className={` ${Container} pb-[110px]`} >
        <div className="pt-[80px] text-[25px] xl:text-[56px] md:text-[48px] text-[#121212] mb-[50px] leading-[35px] md:leading-[72px] xl:leading-[82px] pe-3 font-1 font-medium">
          From being one of the leading producers and
         exporters of crude palm oil with a global market
          share of 43% in the 1960s, Nigeria is now a
          leading importer.
        </div>
        <div className="flex gap-[12px] mb-[16px] flex-wrap font-1 font-1 font-2 font-light">
          <div className="flex gap-[15px] items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212] ">
              Current production: 900,000 - 1.2 million mt.
            </div>
          </div>
          <div className="flex gap-[15px] items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Deficient: 800,000 mt.
            </div>
          </div>
        </div>
        <div className="flex gap-[15px] font-2 font-light flex-wrap">
          <div className="flex gap-[15px] items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Current consumption: 2.1 million mt.
            </div>
          </div>
          <div className="flex gap-[15px] items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Global market share: 2%
            </div>
          </div>
          <div className="flex gap-[15px] items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Annual import cost: $500m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
