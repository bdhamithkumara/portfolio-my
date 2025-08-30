import React from "react";
import { Twitter, Github, Linkedin } from "./icons";
import { FOOTER_ITEMS } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-6 border-t border-[#1e2d3d]">
      <div className="flex items-center space-x-4">
        <span className="text-[#607b96] text-sm">
          {FOOTER_ITEMS.FIND_ME_IN}
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
      <div className="flex items-center space-x-2">
        <span className="text-[#607b96] text-sm md:flex hidden">
          {FOOTER_ITEMS.USERNAME}
        </span>
        <Link href="https://x.com/bdhamithkumara" target="_blank" className="md:hidden">
          <Twitter className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bdhamithkumara/"
          target="_blank" className="md:hidden"
        >
          <Linkedin className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
        </Link>
        <Link href="https://github.com/bdhamithkumara" target="_blank">
          <Github className="w-6 h-6 text-[#607b96] hover:text-[#e5e9f0] cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
}
