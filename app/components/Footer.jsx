import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-3  flex justify-between " >
        <span>
          <Image src="/images/logo.ico" alt="logo" width={50} height={50} />
        </span>
        <p className="text-slate-600 flex items-end " > All rights reserved</p>
      </div>
    </footer>
  );
}
