"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { inView, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Todo list",
    description: "Tools used - Next JS, Tailwind CSS",
    image: "/images/projects/todolist1.PNG",
    tag: ["All", "UI"],
    gitUrl: "https://github.com/Akashakke/todo_list",
    previewUrl: "https://todo-list-eight-bay-32.vercel.app/",
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    description: "Tools used - Next JS, Tailwind CSS",
    image: "/images/projects/tictactoe.PNG",
    tag: ["All", "UI"],
    gitUrl: "https://github.com/Akashakke/tic-tac-toe",
    previewUrl: "https://tic-tac-toe-iota-one.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce",
    description: "Tools used - MERN Stack,Cloudinary",
    image: "/images/projects/digiworld2.PNG",
    tag: ["All", "Full stack"],
    gitUrl: "https://github.com/Akashakke/NextGen_laptops",
    previewUrl: "https://nextgen-laptops.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "UI"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "UI"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "UI"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:md-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2  py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI"
          isSelected={tag === "UI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full stack"
          isSelected={tag === "Full stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgurl={project.image}
              giturl={project.gitUrl}
              previewurl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
