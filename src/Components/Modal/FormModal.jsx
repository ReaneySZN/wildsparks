import React, { useState } from "react";
import { CloseBtnIcon } from "../../../public/svg";

const ModalForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-[-100]"></div>

      <div className="modal-container bg-white md:w-[60%] w-[fit-content] mx-auto mt-20 rounded-[32px] shadow-lg">
        <div className="modal-header rounded-tr-[32px] rounded-tl-[32px] bg-[#F8F8F8] py-[32px] px-[40px]">
          <h2 className="modal-title text-[30px] text-[#121212]">
            We’ll love you on board!
          </h2>
          <div className="modal-close" onClick={onClose}>
            <CloseBtnIcon />
          </div>
        </div>

        <div className="container ">
          <div className="row lg:flex-col-row md:flex-row flex-col-reverse">
            <div className="col-lg-6 col-md-6">
              <form className="modal-body" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#000000] mb-[12px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g John Doe"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 px-3 py-[.6rem] w-full border border-gray-300 rounded-[16px]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#000000] mb-[12px]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+234"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 px-3 py-[.6rem] w-full border border-gray-300 rounded-[16px]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="selectOption"
                    class="block text-sm font-medium text-[#000000] mb-[12px]"
                  >
                    Investment Size
                  </label>
                  <select
                    id="selectOption"
                    name="selectOption"
                    className="mt-1 px-3 py-[.6rem] w-full border text-gray-500 border-gray-300 rounded-[16px]"
                  >
                    <option value="option1">Select Size</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#121212] text-white rounded-[56px] hover:bg-blue-600 focus:outline-none mb-[20px]"
                  >
                    Invest Now
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-6">
              <form className="modal-body" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#000000] mb-[12px]"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="e.g John Doe"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 px-3 py-[.6rem] w-full border border-gray-300 rounded-[16px]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#000000] mb-[12px]"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Wildsparks"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 px-3 py-[.6rem] w-full border border-gray-300 rounded-[16px]"
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="selectOption"
                    class="block text-sm font-medium text-[#000000] mb-[12px]"
                  >
                    Investment Interest
                  </label>
                  <select
                    id="selectOption"
                    name="selectOption"
                    className="mt-1 px-3 py-[.6rem] w-full border text-gray-500 border-gray-300 rounded-[16px]"
                  >
                    <option value="option1">Select Interest</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
