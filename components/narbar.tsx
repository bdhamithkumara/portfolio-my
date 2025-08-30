"use client";
import React, { useState } from "react";
import { NAVBAR_ITEMS } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "./icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Narbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClickNavbarButton = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="">
      {/* Desktop Navbar */}
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

      {/* Mobile Navbar */}
      <div className="relative md:hidden">
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
          <div className="absolute top-[22px] right-[20px] h-[calc(100vh-64px)] z-60 flex flex-col">
            {" "}
            <button onClick={handleClickNavbarButton}>
              {" "}
              <X className="text-[#607b96] cursor-pointer" />{" "}
            </button>{" "}
          </div>
        )}

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-screen bg-[#011627] z-50 flex flex-col"
            >
              {/* Menu Items */}
              <div className="flex flex-col flex-1 overflow-y-auto">
                <span className="text-[#ffffff] cursor-pointer border-b border-[#1e2d3d] py-6 px-6">
                  {NAVBAR_ITEMS.HELLO}
                </span>
                <span className="text-[#ffffff] cursor-pointer border-b border-[#1e2d3d] py-6 px-6">
                  {NAVBAR_ITEMS.ABOUT_ME}
                </span>
                <span className="text-[#ffffff] cursor-pointer border-b border-[#1e2d3d] py-6 px-6">
                  {NAVBAR_ITEMS.PROJECTS}
                </span>
                <span className="text-[#ffffff] cursor-pointer border-b border-[#1e2d3d] py-6 px-6">
                  {NAVBAR_ITEMS.CONTACT_ME}
                </span>
              </div>

              {/* Footer (unchanged) */}
              <div className="flex justify-between items-center p-6 border-t border-[#1e2d3d]">
                <div className="flex items-center space-x-4 pb-6">
                  <span className="text-[#607b96] text-sm">
                    {NAVBAR_ITEMS.FIND_ME_IN}
                  </span>
                  <div className="space-x-2 md:flex hidden">
                    <Link href="https://x.com/bdhamithkumara" target="_blank">
                      <Twitter className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/bdhamithkumara/"
                      target="_blank"
                    >
                      <Linkedin className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-2 pb-6">
                  <Link
                    href="https://x.com/bdhamithkumara"
                    target="_blank"
                    className="md:hidden"
                  >
                    <Twitter className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/bdhamithkumara/"
                    target="_blank"
                    className="md:hidden"
                  >
                    <Linkedin className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
                  </Link>
                  <Link
                    href="https://github.com/bdhamithkumara"
                    target="_blank"
                  >
                    <Github className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
