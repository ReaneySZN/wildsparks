import React,{useState} from "react";
import Hero from "./Hero";
import Producer from "./Producer";
import Map from "./Map";
import MaxChain from "./MaxChain";
import Sustain from "./Sustain";
import OurTeam from "./OurTeam";
import FoodSecurity from "./FoodSecurity";
// import DialogDefault from '../../Components/Modal'
import ModalComp from "../../Components/Modal";

import InvestForm from "./modules/InvestForm";
import SuccessPage from "./modules/SuccessPage";
// import { DialogDefault } from "../../Components/Modal";

export default function index() {
  let [isOpen, setIsOpen] = useState('Success')

  function closeModal() {
    setIsOpen(null)
  }

  function openModal() {
    setIsOpen('Investment Form')
  }

  const ModalList =[
    {
      name:'Investment Form',
      component:<InvestForm closeModal={closeModal}/>
    },
    {
      name:'Success',
      component:<SuccessPage closeModal={closeModal}/>,
      className:'w-[40vw]'
    }
  ]
  return (
    <div className="">
      <ModalComp 
      containerStyle={ModalList?.find((item,index)=>item?.name===isOpen)?.className}
      bodyComponent={ModalList?.find((item,index)=>item?.name===isOpen)?.component}
      isOpen={isOpen?true:false} closeModal={closeModal} openModal={openModal} />
      <Hero openModal={openModal} />
      <Producer />
      <Map />
      <MaxChain />
      <Sustain />
      <OurTeam />
      <FoodSecurity />
    </div>
  );
}
