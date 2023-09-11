// components
import ProjectsBtn from '../components/ProjectsBtn';
import Avater from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="h-full bg-[#f6f7f1]">
      {/* text */}
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto pl-10">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {`HI ! I'm Leon`}
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[#7a5641]/60 tracking-[5px] max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            朝著前端工程師之路邁進 <br />
            Working hard to become a front-end engineer
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center relative xl:hidden"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute -right-60 bottom-0">
        {/* bg img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="xl:bg-boy bg-contain xl:bg-cover bg-right bg-no-repeat w-full h-full absolute translate-z-0 "
        ></motion.div>
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avater />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
