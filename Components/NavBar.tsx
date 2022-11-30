import React from "react";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="sticky top-0 flex flex-start justify-between p-5 max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row gap-3"
      >
        <AiFillLinkedin className="h-[30px] w-[30px] cursor-pointer" />
        <AiFillGithub className="h-[30px] w-[30px] cursor-pointer" />
        <AiFillInstagram className="h-[30px] w-[30px] cursor-pointer" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-2 cursor-pointer"
      >
        <AiTwotoneMail className="h-[30px] w-[30px] " />
        <p className="md:inline-flex capitalize lg:text-2xl">Get in touch</p>
      </motion.div>
    </header>
  );
};

export default NavBar;
