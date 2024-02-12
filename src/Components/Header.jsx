import React from "react";
import logo from "/public/img/logo.png";
import { MenuBtn } from "../../public/svg";
import { useNavigate } from "react-router-dom"
export default function Header({ openModal, Text }) {
  const navigate =useNavigate()
  return (
    <div className="w-full">
      <nav className="pt-[40px] mb-[56px]">
        <div className="flex justify-between items-center">
          <div onClick={()=>navigate('/')}>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="">
              {Text&& <div className="hidden lg:block">
                {Text && <button className="bg-white rounded-[56px] py-[12px] px-[32px] text-[#121212] text-[22px]" onClick={openModal}>{Text}</button>}
              </div> }
            </div>
            <MenuBtn className="hover:cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
}
