import React, { useState } from "react";
import { TickIcon } from "../../../public/svg";

const ThankYouModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? "" : "hidden"} overflow-y-auto`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-[-100]"></div>
        <div className="bg-white p-6 w-96 rounded-[32px] shadow-lg">
          <div className="mb-[32px] !mx-auto">
            <TickIcon />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">Thank You!</h2>
          <p className="text-gray-600 mb-[48px]">
            We’ve received your request, and our
            <br /> team will reach out to you within 24 hours.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              className="px-4 py-2 bg-[#121212] text-white rounded-[56px] hover:bg-blue-600 focus:outline-none mb-[20px]"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
