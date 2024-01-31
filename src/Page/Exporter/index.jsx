import React from "react";
import palmKernel from "/public/img/palm_kernel.png";
import Footer from "/public/svg/bottom_img.png";

export default function index() {
  return (
    <div>
      <div className="container pt-[7rem] bg-white">
        <div className="row">
          <div className="col-lg-8">
            <div className="text-[56px] text-[#121212]">
              Once the world’s largest exporter, now a leading importer
            </div>
            <div className="text-[20px] text-[#000002] mb-2">
              From being one of the leading producers and exporters of crude
              <br />
              palm oil with a global market share of 43% in the 1960s, Nigeria
              <br />
              is now a leading importer.
            </div>
            <ul className="text-[20px] text-[#121212] list-disc">
              <li>Current production: 900,000 - 1.2 million mt.</li>
              <li>Current consumption: 2.1 million mt.</li>
              <li>Annual import cost: $500m</li>
              <li>Deficit: 800,000 mt.</li>
              <li>Global market share: 2%</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <img src={palmKernel} alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <img className="w-100" src={Footer} alt="" />
      </div>
    </div>
  );
}
