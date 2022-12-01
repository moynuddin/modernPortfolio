import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import html from "../public/assets/html-5.png";
import css from "../public/assets/css.png";
import js from "../public/assets/js.png";
import node from "../public/assets/nodejs.png";
import react from "../public/assets/structure.png";
import github from "../public/assets/github.png";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col justify-center items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto">
        Skills
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row justify-between space-x-5 mb-5 lg:space-x-10 lg:mb-12"
      >
        <Image
          src={html}
          alt="HTML Skill"
          className="w-20 lg:w-36 hover:animate-pulse"
        />
        <Image
          src={css}
          alt="HTML Skill"
          className="w-20 lg:w-36 hover:animate-pulse"
        />
        <Image
          src={js}
          alt="HTML Skill"
          className="w-20 lg:w-36 hover:animate-pulse"
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row justify-between space-x-5 lg:space-x-10"
      >
        <Image
          src={node}
          alt="HTML Skill"
          className="w-20 lg:w-36 hover:animate-pulse"
        />
        <Image
          src={react}
          alt="HTML Skill"
          className="w-20 lg:w-36 hover:animate-pulse"
        />
        <Image
          src={github}
          alt="HTML Skill"
          className="w-20 lg:w-36 hover:animate-pulse"
        />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
