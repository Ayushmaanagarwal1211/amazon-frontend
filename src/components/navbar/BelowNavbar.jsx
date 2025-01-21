import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../reducer/AmazonSlice";

export default function BelowNavbar() {
  const dispatch = useDispatch()

  return (
    <div className="z-[1] px-4 max-lg:hidden flex bg-[#232f3e] h-[40px] w-[100vw] text-white gap-3 items-center ">
      <div
        className="flex gap-2 justify-center cursor-pointer items-center"
        onClick={() =>dispatch(toggleSidebar()) }
      >
        <div className="flex flex-col gap-1  w-[30px] ">
          <div className="w-[20px] h-[2px] bg-white rounded-lg"></div>
          <div className="w-[20px] h-[2px] bg-white rounded-lg"></div>
          <div className="w-[20px] h-[2px] bg-white rounded-lg"></div>
        </div>
        All
      </div>
      <div>MX Player</div>
      <div>Cell</div>
      <div>Best Sellers</div>
<div>Today's Deals</div>
<div>Mobiles</div>
<div>Prime</div>
<div>Customer Service</div>
<div>Electronics</div>
<div>Home & Kitchen</div>
<div>Amazon Pay</div>
<div>New Releases</div>
<div>Fashion</div>
<div>Computers</div>
<div>Car & Motorbike</div>
<div>Books</div>

    </div>
  );
}
