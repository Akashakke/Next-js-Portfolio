"use client";
import Link from "next/link";
import React from "react";

export default function Navlink({ href, title }) {
  return (
    <div>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </Link>
    </div>
  );
}
