"use client";
import Image from "next/image";
import React from "react";
const skillset = [
  {
    title: "HTML",
    link: "/images/skills/html.png",
  },
  {
    title: "CSS",
    link: "/images/skills/css.png",
  },
  {
    title: "JavaScript",
    link: "/images/skills/javascript.png",
  },
  {
    title: "ReactJS",
    link: "/images/skills/react (2).png",
  },
  {
    title: "Redux",
    link: "/images/skills/redux.png",
  },
  {
    title: "SQL",
    link: "/images/skills/sql1.png",
  },
  {
    title: "MongoDB",
    link: "/images/skills/mongodb (1).png",
  },
  {
    title: "NodeJS",
    link: "/images/skills/node-js.png",
  },
  {
    title: "ExpressJS",
    link: "/images/skills/express (1).png",
  },
  {
    title: "Tailwind",
    link: "/images/skills/tailwind-css (2).png",
  },
  {
    title: "Git",
    link: "/images/skills/git.png",
  },
];
export default function Skills() {
  return (
    <section id="skills" className="text-center">
      <h2 className="text-white  text-4xl font-bold mb-4">
        Skills
      </h2>
      <div className="flex justify-center flex-wrap w-[85%] max-sm:w-[95%] m-auto">
        {skillset.map((skill, i) => (
          <div
            key={i}
            className=" py-4 flex justify-center flex-col items-center rounded-xl mx-4 w-[6rem]  hover:bg-[linear-gradient(_90deg,rgb(19,165,223),rgb(19,165,223))] transition-all ease-in-out duration-5000"
          >
            <Image src={skill.link} alt={skill.title} width={60} height={60} />
            <p className="text-white text-center p-2">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
