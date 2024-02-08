import React from "react";
import TextInput from "../../../Components/TextInput";
import SelectInput from "../../../Components/SelectInput";
export default function InvestForm({
  closeModal
}) {
  const FormDetails = [
    {
      name: "",
      label: "Full Name",
      placeholder: "e.g John Doe",
    },
    {
      name: "",
      label: "Email address",
      placeholder: "e.g John Doe",
    },
    {
      name: "",
      label: "Phone number ",
      suffix: "234",
    },
    {
      name: "",
      label: "Company",
      placeholder: "e.g Wildsparks",
    },
    {
      name: "",
      label: "Investment size",
      placeholder: "e.g John Doe",
      type:'select'
    },
    {
      name: "",
      label: "Investment interest ",
      // suffix: "234",
      type:'select'
    },
   
  ];
  return (
    <div className="bg-white rounded-[32px]  pb-[40px]">
      <div className="flex justify-between items-center bg-[#F8F8F8] px-[40px] py-[32px] mb-[24px]">
        <div className="text-[32px] text-[#121212]">
          We’ll love you on board!
        </div>
        <div 
        className="cursor-pointer"
        onClick={closeModal&&closeModal}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 24L16 16M16 16L8 8M16 16L24 8M16 16L8 24"
              stroke="#121212"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="px-[40px]">
        <div className="row gx-5 gy-4">
          {FormDetails?.map((item, index) => (
            <div className="col-lg-6">
              {item?.type === "input" ||
                (!item?.type && (
                  <TextInput
                    key={index}
                    label={item?.label}
                    placeholder={item?.placeholder}
                    suffix={item?.suffix}
                  />
                ))}

              {item?.type === "select"  && <SelectInput 
                key={index}
                label={item?.label}
                placeholder={item?.placeholder}
                suffix={item?.suffix}
              />}
            </div>
          ))}
         
        </div>
        <button className="px-[40px] rounded-[56px] mt-[40px] py-[16px] bg-[#121212] text-white text-[18px]">
        Invest Now
        </button>
      </div>
    </div>
  );
}
