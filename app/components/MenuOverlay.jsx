import React from "react";
import Navlink from "./Navlink";

export default function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {links.map((link, i) => (
        <li key={i}>
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
