import React from "react";
import logo from "/public/img/logo.png";
import { MenuBtn } from "../../public/svg";

export default function Header({ openModal, Text }) {
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
                {Text && <button onClick={openModal}>{Text}</button>}
              </div>
            </div>
            <MenuBtn className="hover:cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}
