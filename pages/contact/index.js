// framer motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../../variants';

// icons
import { BsArrowRight, BsDot } from 'react-icons/bs';
import { IoPhonePortrait } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {`Let's connect`}
            <span className="text-[#d3bb9f]">.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/*input group */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              className="flex gap-x-6 w-full "
            >
              <input type="text" placeholder="name" className="input" />
              <input
                type="text"
                placeholder="email"
                className="input border-[#d3bb9f] focus:border-[#7a5641]"
              />
            </motion.div>
            <motion.input
              variants={fadeIn('up', 0.4)}
              type="text"
              placeholder="subject"
              className="input border-[#d3bb9f]"
            />
            <motion.textarea
              variants={fadeIn('up', 0.5)}
              placeholder="message"
              className="textarea border-[#d3bb9f]"
            ></motion.textarea>
            <motion.div
              variants={fadeIn('up', 0.6)}
              className="flex items-center justify-between"
            >
              <motion.div
                variants={fadeIn('up', 1)}
                className="flex gap-2 md:gap-4 sm:flex-row flex-col"
              >
                <div className="flex items-center">
                  <IoPhonePortrait className="text-xl" />
                  <BsDot />
                  <p className="tracking-[0.1rem] text-[#7a5641]">0968600228</p>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-xl" />
                  <BsDot />
                  <p className="tracking-[0.1rem] text-[#7a5641]">
                    leonnnx124@gmail.com
                  </p>
                </div>
              </motion.div>
              <button className="flex-1 btn rounded-full border border-[#d3bb9f] max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {`Let's talk`}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
