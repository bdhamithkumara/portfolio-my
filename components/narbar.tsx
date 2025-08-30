import React from "react";
import { NAVBAR_ITEMS } from "@/constants";

export default function Narbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-[#1e2d3d]">
      <div className="text-[#607b96] cursor-pointer">{NAVBAR_ITEMS.USERNAME}</div>
      <div className="flex space-x-8">
        <div className="relative">
          <span className="text-[#e5e9f0] cursor-pointer">{NAVBAR_ITEMS.HELLO}</span>
          <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fea55f]"></div>
        </div>
        <span className="text-[#607b96] cursor-pointer">{NAVBAR_ITEMS.ABOUT_ME}</span>
        <span className="text-[#607b96] cursor-pointer">{NAVBAR_ITEMS.PROJECTS}</span>
      </div>
      <div className="text-[#607b96] cursor-pointer">{NAVBAR_ITEMS.CONTACT_ME}</div>
    </nav>
  );
}
