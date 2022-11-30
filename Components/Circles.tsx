import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Circles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.6,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-teal-200 rounded-full h-[200px] w-[200px] mt-52 animate-pulse" />
      <div className="absolute border border-teal-400 rounded-full h-[300px] w-[300px] mt-52 opacity-20 animate-pulse" />
      <div className="absolute border border-teal-500 rounded-full lg:h-[550px] lg:w-[550px] mt-52 animate-pulse" />
      <div className="absolute border border-teal-700 rounded-full lg:h-[800px] lg:w-[800px] mt-52 opacity-25 animate-pulse" />
      <div />
    </motion.div>
  );
};

export default Circles;
