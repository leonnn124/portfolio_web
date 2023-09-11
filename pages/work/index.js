// components
import WorkSlider from '../../components/WorkSlider';

// framer motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full py-36 xl:px-28 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/* text */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
          >
            <h2 className="h2 xl:mt-12">
              My Work<span className="text-[#d3bb9f]">.</span>
            </h2>
            <p className="hidden xl:flex text-[#c2945f] mb-4 max-w-[400px] mx-auto lg:mx-0">
              -
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] lg:max-w-[70%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
