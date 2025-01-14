import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../reducer/AmazonSlice";

export default function BelowNavbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const dispatch = useDispatch()

  return (
    <div className="z-[1] flex bg-[#232f3e] h-[40px] w-[100vw] text-white gap-3 items-center ">
      <div
        className="flex gap-2 justify-center items-center"
        onClick={() =>dispatch(toggleSidebar()) }
      >
        <div className="flex flex-col gap-1  w-[30px]">
          <div className="w-[20px] h-[2px] bg-white rounded-lg"></div>
          <div className="w-[20px] h-[2px] bg-white rounded-lg"></div>
          <div className="w-[20px] h-[2px] bg-white rounded-lg"></div>
        </div>
        All
      </div>
      <div>MX Player</div>
      <div>Cell</div>
      <div></div>
    </div>
  );
}
