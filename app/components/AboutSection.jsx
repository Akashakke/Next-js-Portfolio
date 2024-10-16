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
const tabContent = [
  {
    title: "Experience",
    id: "Experience",
    content: [
      {
        title: "UI developer Trainee",
        year: "2023 - 2024",
        desc: "Techdew UX design Pvt Ltd",
      },
      {
        title: "UI Engineer",
        year: "2024 - Present",
        desc: "Techdew UX design Pvt Ltd",
      },
    ],
  },
  {
    title: "Education",
    id: "Education",
    content: [
      {
        title: "B.Tech in Electronics and Communication",
        year: "2017-2021",
        desc: "Karunya Institute of Technology",
      },
      {
        title: "Full stack web development",
        year: "2022",
        desc: "Guvi Geek Networks",
      },
    ],
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: [
      {
        title: "Javascript",
        desc: "Guvi Geek Networks",
        link: "https://www.guvi.in/share-certificate/321Vm29L8011n658v5",
      },
      {
        title: "MERN stack",
        desc: "Guvi Geek Networks",
        link: "https://www.guvi.in/certificate?id=vAgt1R7U1D245T7361",
      },
    ],
  },
];
const TabContent = ({ content }) => (
  <ul className="list-disc pl-2">
    {content.map((item, index) => (
      <li key={index} className="mt-2">
        <div className="flex">
          <h4 className="font-semibold">{item.title}</h4>
          {item.link && (
            <a
              href={item.link}
              className="text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Certificate
            </a>
          )}
        </div>
        <p className="text-base text-slate-400">{item.desc}</p>
        <p className="text-sm">{item.year}</p>
      </li>
    ))}
  </ul>
);
export default function AboutSection() {
  const [tab, setTab] = useState("Education");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          // src="/images/mern-stack-developer.gif"
          src="https://res.cloudinary.com/dpkswvjz2/image/private/s--QwwTNSCH--/v1724253860/mern-stack-developer_kxkwsp.gif"
          width={500}
          height={500}
          priority
          unoptimized
          alt="mern-stack-developer"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base">
            I'm a full stack developer specializing in the MERN stack, with over
            2 years of experience in frontend development. Currently working as
            a frontend developer, I focus on developing responsive web
            applications and performance optimization. I stay updated with
            current trends in technology to continuously improve my skills and
            deliver cutting-edge solutions.
          </p>
          <div className="flex flex-row mt-4">
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
            {/* <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton> */}
          </div>
          <div className="mt-4">
            {/* {Tab_Data.find((t) => t.id === tab).content} */}
            {tabContent.find((t) => t.id === tab)?.content && (
              <TabContent
                content={tabContent.find((t) => t.id === tab).content}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
