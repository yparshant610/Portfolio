import Image from "next/image";

import PartileContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import ResumeBtn from "../components/ResumeBtn";
import Avatar from "../components/Avatar";
import { useState } from "react";

import { easeInOut, motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Turning Vision Into Reality
            <br /> With <span className="text-accent">Code And Design.</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
          >
            As a skilled Full Stack Developer, I am dedicated to turning ideas
            into innovative web applications as well as a Mobile Application.
            Explore my latest projects and articles, showcasing my expertise in
            Application Development and Web Development.
          </motion.p>
          {/* Buttons */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row justify-center xl:justify-start items-center gap-4 xl:gap-8"
          >
            <div className="relative">
              <ProjectsBtn />
            </div>
            <div className="relative">
              <ResumeBtn />
            </div>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <PartileContainer/> 
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration:1, ease: 'easeInOut'}}
          className=" w-full h-full max-w-[738px] max-h-[672px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
