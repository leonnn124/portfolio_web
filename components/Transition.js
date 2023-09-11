// framer motion
import { motion } from 'framer-motion';

// variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.6, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#d3bb9f]"
      />

      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#f2e2c8]"
      />

      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#f6f7f1]"
      />
    </>
  );
};

export default Transition;
