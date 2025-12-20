import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <FaJava />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobephotoshop />,
          <SiAdobeillustrator />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Graphic Designer Intern - Bhanzu",
        stage: "May 2025 - Aug 2025",
        location: "Bengaluru, Karnataka",
      },
      {
        title: "UX/UI Developer Intern - LogicalLoops",
        stage: "Nov 2022 – Feb 2023 ",
        location: "Remote",
      },
      {
        title: "Graphic Designer - Udaan - The Student Magazine, GGV",
        stage: "April 2022 – May 2024",
        location: "GGV-Bilaspur, Chhattisgarh",
      },
      {
        title: "Event Management Lead - GDSC GGV",
        stage: "August 2022 – July 2023",
        location: "GGV-Bilaspur, Chhattisgarh",
      },
      {
        title: "Core Team Member - GFG Student Chapter",
        stage: "July 2022 – July 2023 ",
        location: "GGV-Bilaspur, Chhattisgarh",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Bachelor of Technology in Information Technology",
        stage: "2020-2024",
        location: "Guru Ghasidas Vishwavidyalaya(GGV)- Bilaspur, Chhattisgarh",
      },
    ],
  },
];

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] "
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12 xl:pt-12">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-8 xl:mb-16 px-2 xl:px-0"
          >
            Hi, I am parshant yadav, a web developer and UI/UX designer with a
            passion for creating beautiful, functional, and user centered
            digital experiences. I am always looking for new and innovative ways
            to bring my clients visions to life. I believe that design is about
            more than just making things look pretty, it is about solving
            problems and creating intuitive, enjoyable experiences for users.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:q-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:q-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:q-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finsihed Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-6 xl:gap-x-10 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <motion.div
            key={index}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-4 xl:py-8 flex flex-col gap-y-6 xl:gap-y-8 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex flex-col gap-y-2">
                  <div className="text-lg font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="flex items-center gap-x-4 text-sm text-white/80">
                    {item.stage && <span>{item.stage}</span>}
                    {item.stage && item.location && <span>|</span>}
                    {item.location && (
                      <span className="italic">{item.location}</span>
                    )}
                  </div>
                  {item.icons && (
                    <div
                      className={`flex gap-x-4 ${
                        aboutData[index].title === "skills"
                          ? "flex-wrap w-[240px] gap-y-4 pt-2"
                          : ""
                      }`}
                    >
                      {item.icons.map((icon, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="text-5xl text-white hover:text-accent transition-all duration-300"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
