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
        duration: 3,
      }}
      viewport={{ once: true }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-teal-200 rounded-full h-[200px] w-[200px] mt-52 animate-ping " />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0.2, 0.6, 0.8, 0.5, 0.3, 0.2, 0.1, 0],
          rotate: [35, 65, 90, 180, -60],
        }}
        transition={{ duration: 2.6 }}
        viewport={{ once: true }}
        className="absolute border-dotted border-8 border-teal-400 rounded-full h-[300px] w-[300px] mt-52 opacity-20"
      />
      <div className="absolute border border-teal-700 rounded-full lg:h-[550px] lg:w-[550px] mt-52 animate-pulse opacity-10" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0.5, 0.8, 0.4, 0.9, 0.5, 0.2, 0],
          borderRadius: ["20%", "20%", "50%", "40%", "20%"],
        }}
        transition={{ duration: 2.6 }}
        viewport={{ once: true }}
        className="absolute border-dashed border-8 border-teal-700 rounded-full lg:h-[700px] lg:w-[700px] mt-52"
      />
      <div />
    </motion.div>
  );
};

export default Circles;
