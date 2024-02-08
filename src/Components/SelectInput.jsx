import React from "react";

export default function SelectInput({ label, placeholder, suffix }) {
  return (
    <div className="font-1">
      <div className="text-[16px] mb-[12px] font-medium ">{label}</div>
      <div className="flex items-center  flex-1 border-[#BFBFBF] border-[1px] px-[24px] rounded-[16px] gap-1">
        {suffix && <div className="text-[#7E7E7E]">{suffix}</div>}
        <select className="h-[55px]  w-full  outline-none" placeholder={placeholder}>
          <option>Select {label}</option>
        </select>
      </div>
    </div>
  );
}
