import React from "react";
import MapImg from "/public/img/map.png";
import Line from "/public/img/line.png";
import Timeline from "/public/img/timeline.png";

export default function index() {
  return (
    <div className="bg-dark-custom">
      <div className="container py-[80px]">
        <div className="text-[50px] text-center text-[#FEFEFE] mb-[16px]">
          We are reimagining the future
        </div>
        <div className="text-[20px] text-center text-[#EAEAEA] mb-[56px]">
          From industry-leading genetic seed technology to cutting-edge
          innovations, we are leading the
          <br /> charge to transform the palm oil industry globally, ensure food
          security and deliver sustainable future.
        </div>
        <div className="row mb-[80px]">
          <div className="col-lg-4">
            <div className="flex flex-col">
              <div className="text-[34px] text-white my-[32px]">
                100,000 hectares
              </div>
              <div className="">
                <img src={Line} alt="" />
              </div>
              <div className="text-[34px] text-white my-[32px]">
                300,000 mt CPO
              </div>
              <div className="">
                <img src={Line} alt="" />
              </div>
              <div className="text-[34px] text-white my-[32px]">
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
          <div className="col-lg-8">
            <div className="">
              <img src={MapImg} alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <img src={Timeline} alt="" />
        </div>
      </div>
    </div>
  );
}
