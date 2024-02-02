import React from "react";
import { ChevronDownBlack } from "/public/svg";

export default function index() {
  return (
    <div>
      {" "}
      <div className="container mb-[80px]">
        <div className="pt-[80px] lg:text-[50px] md:text-[48px] text-[#121212] mb-[40px]">
          From being one of the leading producers and
          <br /> exporters of crude palm oil with a global market
          <br /> share of 43% in the 1960s, Nigeria is now a<br />
          leading importer.
        </div>
        <div className="flex space-x-3 mb-3">
          <div className="flex space-x-2 items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Current production: 900,000 - 1.2 million mt.
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Deficient: 800,000 mt.
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="flex space-x-2 items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Current consumption: 2.1 million mt.
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <ChevronDownBlack />
            <div className="lg:text-[24px] md:text-[20px] text-[#121212]">
              Global market share: 2%
            </div>
          </div>
          <div className="flex space-x-2 items-center">
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
