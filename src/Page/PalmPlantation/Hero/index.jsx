import React from "react";
import Header from "../../../Components/Header";

export default function index() {
  return (
    <div>
      <div className="bg-hero-pattern pb-[90px]">
        <div className="container">
          <Header titleText={"Invest Now"} />
          <div className="text-[64px] text-center text-[#FEFEFE]">
            Palm Plantation Reimagined
          </div>
          <div className="text-[24px] text-center text-[#EAEAEA] mb-[90px]">
            We are growing the Largest Palm plantation in Africa with a total
            <br />
            land bank of 100,000 hectares and an estimated annual output
            <br /> of 300,000 metric tonnes (mt.) Crude Palm Oil by 2035.
          </div>
          <div className="bg-white w-[fit-content] mx-auto text-center rounded-[56px] py-1 px-3 text-[#121212] text-[28px] ">
            Invest Now
          </div>
        </div>
      </div>
    </div>
  );
}
