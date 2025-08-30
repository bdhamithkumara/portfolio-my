"use client";
import React, { useState } from "react";
import { NAVBAR_ITEMS } from "@/constants";
import { Menu, X } from "lucide-react";

export default function Narbar() {
  const [isOpen, setOpen] = useState(false);

  const handleClickNavbarButton = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="md:flex justify-between items-center p-6 border-b border-[#1e2d3d] hidden">
        <div className="text-[#607b96] cursor-pointer">
          {NAVBAR_ITEMS.USERNAME}
        </div>
        <div className="flex space-x-8">
          <div className="relative">
            <span className="text-[#e5e9f0] cursor-pointer">
              {NAVBAR_ITEMS.HELLO}
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#fea55f]"></div>
          </div>
          <span className="text-[#607b96] cursor-pointer">
            {NAVBAR_ITEMS.ABOUT_ME}
          </span>
          <span className="text-[#607b96] cursor-pointer">
            {NAVBAR_ITEMS.PROJECTS}
          </span>
        </div>
        <div className="text-[#607b96] cursor-pointer">
          {NAVBAR_ITEMS.CONTACT_ME}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between items-center p-6 border-b border-[#1e2d3d]">
          <div className="text-[#607b96] cursor-pointer">
            {NAVBAR_ITEMS.USERNAME}
          </div>
          <button onClick={handleClickNavbarButton}>
            {isOpen ? (
              <X className="text-[#607b96] cursor-pointer" />
            ) : (
              <Menu className="text-[#607b96] cursor-pointer" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-[#011627] z-50 flex flex-col h-full">
            <span className="text-[#ffffff] cursor-pointer border-b border-t border-[#1e2d3d] p-6">
              {NAVBAR_ITEMS.HELLO}
            </span>
            <span className="text-[#ffffff] cursor-pointer border-b border-[#1e2d3d] p-6">
              {NAVBAR_ITEMS.ABOUT_ME}
            </span>
            <span className="text-[#ffffff] cursor-pointer border-b border-[#1e2d3d] p-6">
              {NAVBAR_ITEMS.PROJECTS}
            </span>
            <span className="text-[#ffffff] cursor-pointer border-b border-[#1e2d3d] p-6">
              {NAVBAR_ITEMS.CONTACT_ME}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
