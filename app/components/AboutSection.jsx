"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const Tab_Data = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",

    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech in Electronics and Communication</li>
        <li>Full stack web development</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>MERN stack</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/mern-stack-developer.gif"
          width={500}
          height={500}
          alt="mern-stack-developer"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime non
            molestiae praesentium libero, voluptatem minima? Pariatur reiciendis
            expedita numquam consectetur exercitationem provident facere ea quas
            aperiam? Dolorem, nisi. Dolorem, veritatis.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}
