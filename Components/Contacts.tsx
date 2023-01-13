import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Contacts = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col justify-center items-center"
    >
      <motion.h3
        initial={{ y: 200, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto"
      >
        Contacts
      </motion.h3>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-[rgba(0,0,0,0.4)] p-4 text-zinc-200 drop-shadow-lg w-[350px] lg:w-[410px] lg:mt-[100px]"
      >
        <div className="flex flex-row justify-between space-x-4 mb-3">
          <input
            type="text"
            className="h-8 w-32 lg:w-40 flex-shrink-0 bg-transparent outline-none border-b-2 border-zinc-400"
            placeholder="Enter your name"
          />
          <input
            type="email"
            className="h-8 w-32 lg:w-40 bg-transparent outline-none border-b-2 border-zinc-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            className="h-10 bg-transparent outline-none  border-b-2 border-zinc-400"
            placeholder="Subject"
          />
          <textarea
            className="bg-transparent outline-none border-solid border-zinc-400 resize-none"
            placeholder="Message"
          ></textarea>
        </div>
      </motion.div>
      <motion.button
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[350px] lg:w-[410px] px-8 py-2 mt-2 bg-green-600"
      >
        Submit
      </motion.button>
    </motion.div>
  );
};

export default Contacts;
