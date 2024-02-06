import React, { useState } from "react";
import Header from "../../../Components/Header";
import FormModal from "../../../Components/Modal/FormModal";
import SuccessModal from "../../../Components/Modal/SuccessModal";

export default function index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-1">
      <div className="bg-hero-pattern pt-[10px] h-[100vh] ">
        <div className="container flex flex-col  h-full">
          <Header openModal={openModal} Text={"Invest Now"} />
          <FormModal isOpen={isModalOpen} onClose={closeModal} />
          {showModal && <SuccessModal />}
          <div className="flex-[1] flex flex-col justify-center">
          <div className="text-[64px] xl:text-[78px] text-center text-[#FEFEFE] mb-[16px] font-semibold">
            Palm Plantation Reimagined
          </div>
          <div className="text-[24px] xl:text-[26px] text-center text-[#EAEAEA] mb-[90px] font-light font-2 leading-[40px] xl:leading-[44px]">
            We are growing the Largest Palm plantation in Africa with a total
            <br />
            land bank of 100,000 hectares and an estimated annual output
            <br /> of 300,000 metric tonnes (mt.) Crude Palm Oil by 2035.
          </div>
          <button className="bg-white w-[fit-content] mx-auto text-center rounded-[56px] py-[20px] px-[48px] text-[#121212] text-[28px] ">
            Invest Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
