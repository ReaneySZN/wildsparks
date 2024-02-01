import React from "react";
import logo from "/public/img/logo.png";
import { MenuBtn } from "../../public/svg";

export default function Header({ titleText }) {
  return (
    <div>
      <nav className="pt-[40px] pb-[56px]">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="">
              <div className="bg-white rounded-[56px] py-1 px-3 text-[#121212] text-[22px]">
                {titleText && <div>{titleText}</div>}
              </div>
            </div>
            <MenuBtn />
          </div>
        </div>
      </nav>
    </div>
  );
}
