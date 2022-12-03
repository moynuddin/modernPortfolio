import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Tilt from "react-tilt";

import html from "../public/assets/html-5.png";
import css from "../public/assets/css.png";
import js from "../public/assets/js.png";
import node from "../public/assets/nodejs.png";
import react from "../public/assets/structure.png";
import github from "../public/assets/github.png";
import git from "../public/assets/git.png";
import angular from "../public/assets/angular.svg";
import sass from "../public/assets/sass.svg";

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
      <div className="mt-[100px]">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row justify-between space-x-5 mb-5 lg:space-x-10 lg:mb-12"
        >
          <Tilt className="Tilt" options={{ max: 25 }}>
            <Image
              src={html}
              alt="HTML Skill"
              className="w-20 lg:w-28 lg:h-28"
            />
          </Tilt>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <Image
              src={css}
              alt="HTML Skill"
              className="w-20 lg:w-28 lg:h-28"
            />
          </Tilt>
          <Tilt
            className="Tilt"
            options={{
              max: 25,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 100,
              transition: true,
            }}
          >
            <Image src={js} alt="HTML Skill" className="w-20 lg:w-28 lg:h-28" />
          </Tilt>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row justify-between space-x-5 lg:space-x-10 mb-12"
        >
          <Tilt
            className="Tilt"
            options={{
              max: 25,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 100,
              transition: true,
            }}
          >
            <Image
              src={node}
              alt="HTML Skill"
              className="w-20 lg:w-28 lg:h-28"
            />
          </Tilt>
          <Tilt
            className="Tilt"
            options={{
              max: 25,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 100,
              transition: true,
            }}
          >
            <Image
              src={react}
              alt="HTML Skill"
              className="w-20 lg:w-28 lg:h-28"
            />
          </Tilt>
          <Tilt
            className="Tilt"
            options={{
              max: 25,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 100,
              transition: true,
            }}
          >
            <Tilt
              className="Tilt"
              options={{
                max: 25,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                perspective: 100,
                transition: true,
              }}
            >
              <Image
                src={github}
                alt="HTML Skill"
                className="w-20 lg:w-28 lg:h-28"
              />
            </Tilt>
          </Tilt>
        </motion.div>
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1.5,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="flex flex-row justify-between space-x-5 lg:space-x-10"
        >
          <Tilt
            className="Tilt"
            options={{
              max: 25,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 100,
              transition: true,
            }}
          >
            <Image
              src={angular}
              alt="Angular"
              className="w-20 lg:w-28 lg:h-28"
            />
          </Tilt>
          <Tilt
            className="Tilt"
            options={{
              max: 25,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 100,
              transition: true,
            }}
          >
            <Image src={sass} alt="Sass" className="w-20 lg:w-28 lg:h-28" />
          </Tilt>
          <Tilt
            className="Tilt"
            options={{
              max: 25,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              perspective: 100,
              transition: true,
            }}
          >
            <Tilt
              className="Tilt"
              options={{
                max: 25,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                perspective: 100,
                transition: true,
              }}
            >
              <Image src={git} alt="git" className="w-20 lg:w-28 lg:h-28" />
            </Tilt>
          </Tilt>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
