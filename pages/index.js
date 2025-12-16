import Image from "next/image";

import PartileContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className=' w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <h1 className="h1">
            Turning Vision Into Reality
            <br /> With <span className="text-accent">Code And Design.</span>
          </h1>
          {/* subtitle */}
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 '>
            As a skilled Front-End Developer, I am dedicated to turning ideas into innovative web applications as well as a Mobile Application.
            Explore my latest projects and articles, showcasing my expertise in Application Development and Web Development.
          </p>
        </div>
      </div>
      {/* image */}
      <div>image</div>
    </div>
  );
};

export default Home;
