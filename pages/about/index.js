// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaFigma,
  FaNodeJs,
  FaSass,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaDocker,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiCanva,
  SiAdobephotoshop,
} from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Dev',
        icons: [
          { id: 1, icon: <FaHtml5 /> },
          { id: 2, icon: <FaCss3 /> },
          { id: 3, icon: <FaJs /> },
          { id: 4, icon: <FaReact /> },
          { id: 5, icon: <FaVuejs /> },
          { id: 6, icon: <FaNodeJs /> },
          { id: 7, icon: <SiNextdotjs /> },
          { id: 8, icon: <SiFramer /> },
          { id: 9, icon: <SiTailwindcss /> },
          { id: 10, icon: <FaSass /> },
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          { id: 1, icon: <FaFigma /> },
          { id: 2, icon: <SiCanva /> },
          { id: 3, icon: <SiAdobephotoshop /> },
        ],
      },
      {
        title: 'Tech Stack',
        icons: [
          { id: 1, icon: <FaGithub /> },
          { id: 2, icon: <FaGitAlt /> },
          { id: 3, icon: <FaPython /> },
          { id: 4, icon: <FaDocker /> },
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Ideas Hatch 2022 IOT Side Project 入選',
        stage: '2022/5 - 2022/6',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Intern - Trunk Studio',
        stage: '2022/2 - 2022/6',
      },
    ],
  },
];

// next image
import Image from 'next/image';

// components
import { useState } from 'react';

// framer motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full py-36 text-center xl:text-left">
      <motion.div
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[340px]"
      >
        <Image
          src={'/cuteboy.png'}
          width={737}
          height={678}
          alt=""
          className="opacity-30"
        />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col pt-6 xs:pt-0 items-start xl:ml-10 flex-1"
        >
          <h2 className="h2 md:px-0 px-10 mb-2 w-full xl:w-1/2 flex items-center justify-between">
            <span className="">林暐倫</span>
            <span className="md:text-3xl text-xl">Leon</span>
          </h2>
          <p className="text-[#7a5641] max-w-[500px] mx-auto xl:mx-0 mb-8 xl:mb-12 px-2 xl:px-0">
            <span className="text-xs italic">
              | 國立臺中科技大學 資訊管理系
              <br />
            </span>
            對設計 web、app 充滿好奇
            <br />
            以自學的方式探索、研究相關領域知識
          </p>
        </motion.div>
        {/* info */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col w-full xl:max-w-[48%] h-[280px] "
        >
          <div className="flex gap-x-10 xl:gap-x-12 mx-auto xl:mx-0 mb-2">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-[#d3bb9f] after:w-[100%] after:bg-[#d3bb9f] after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-[#d3bb9f] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            className="py-8 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-[#c2945f]"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden xl:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-6 my-2 overflow-x-auto max-w-[300px]">
                    {/* icons */}
                    {item.icons?.map((icons, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-2xl text-[#c2945f]/60"
                        >
                          {icons.icon}
                        </div>
                      );
                    })}
                  </div>
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
