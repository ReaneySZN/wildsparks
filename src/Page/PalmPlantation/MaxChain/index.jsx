import React from "react";
import Nursery from "/public/img/Nursery.png";
import PalmPlantation from "/public/img/Plantation_palm.png";
import Miling from "/public/img/Miling.png";
import Refine from "/public/img/Refining_Products.png";
import Fruit from "/public/img/Fresh_fruit.png";
import Estate from "/public/img/Real_estate.png";
import CPO from "/public/img/CPO.png";
import Fiber from "/public/img/Fresh_fiber.png";
import { Container } from "../../../../utils";

export default function index() {
  return (
    <div>
      <div className={`${Container} my-[60px] lg:my-[90px] font-1`}>
        <div className="text-[35px] md:text-[48px] text-[#121212]">
          Maximising the value chain
        </div>
        <div className="text-[#767676] text-[18px] lg:text-[24px] mb-[80px] md:w-[65%] leading-[30px] lg:leading-[40px] font-1">
          Our Palms Downstream will safeguard the upstream operations by
          providing a guaranteed
         uptake of Crude Palm Oil (CPO) for value-added products such as
          margarine, soaps,
           lipsticks, and polishes to confectionary, cooking oils,
          surfactants, and industrial lubricants,
          oleo chemicals and biodiesel.
        </div>
        <div className="flex wrap justify-between text-center items-start">
          <div className="">
            <img src={Nursery} alt="" />
            <div className="text-[24px] text-[#121212] mt-3">Nursery</div>
          </div>
          {/* <div className="h-[2px] flex-1 bg-black"></div> */}
          <div className="flex flex-col justify-between items-center ">
            <div className="mb-[80px]">
              <img src={PalmPlantation} alt="" />
              <div className="text-[24px] text-[#121212] mt-3">
                Palm plantation
              </div>
            </div>
            {/* <div className="flex">
              <div className="">
                <img src={Fruit} alt="" />
                <div className="text-[24px] text-[#121212] mt-3">
                  Fresh
                  <br /> fruit
                  <br /> bunches
                </div>
              </div>
              <div className="">
                <img src={Estate} alt="" />
                <div className="text-[24px] text-[#121212] mt-3">
                  Real
                  <br /> estate
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="flex flex-col justify-between items-center">
            <div className="mb-[80px]">
              <img src={Miling} alt="" />
              <div className="text-[24px] text-[#121212] mt-3">Miling</div>
            </div>
            <div className="flex">
              <div className="">
                <img src={CPO} alt="" />
                <div className="text-[24px] text-[#121212] mt-3">
                  CPO &<br /> CPK
                </div>
              </div>
              <div className="">
                <img src={Fiber} alt="" />
                <div className="text-[24px] text-[#121212] mt-3">
                  Fresh fiber,
                  <br /> sludge oil,
                  <br /> POME, EFB,
                  <br /> kernel shell
                </div>
              </div>
            </div>
          </div> */}
          <div className="">
            <img src={Refine} alt="" />
            <div className="text-[24px] text-[#121212] mt-3">
              Refining & packaged
              <br /> products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
