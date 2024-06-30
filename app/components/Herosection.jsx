"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
// import profile from '/images/profile-img.png'
import { motion } from "framer-motion";
import Link from "next/link";

export default function Herosection() {
  return (
    <section className="lg:py-16" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 max-lg:mt-[6rem]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:leading-normal lg:text-6xl font-extrabold">
            <span className="bg-gradient-to-br from-cyan-500 to-sky-700 bg-clip-text text-transparent">
              Hello I'm
            </span>
            <br />
            {/* <div className="h-20 text-center sm:h-auto"> */}
            <TypeAnimation
              sequence={[
                "Akash",
                3000,
                "Frontend developer",
                3000,
                "Full stack developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            {/* </div> */}
          </h1>
          <p className="text-white text-base  sm:text-lg mb-6 lg:text-xl">
            Full stack enthusiast currently working as a frontend developer
          </p>
          <div>
            <button className="px-6 py-3 text-black rounded-full mr-4   bg-white hover:bg-slate-200  ">
              <Link href={"/#contact"}>Hire Me</Link>
            </button>
            {/* <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br   bg-transparent hover:bg-slate-800 text-white 
            mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button> */}
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/images/hero-image.png"
              width={300}
              height={300}
              className="absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 profile-img"
              alt="profile"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
