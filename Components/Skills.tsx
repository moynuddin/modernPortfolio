import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skills: Skill[];
};

const Skills = (skills: Props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="h-screen relative flex flex-col justify-center items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto">
        Skills
      </h3>
      <div className="mt-[100px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="container grid grid-cols-3 gap-3 justify-items-end space-x-5 mb-5 lg:space-x-10 lg:mb-12"
        >
          {skills?.skill
            ?.sort((a, b) => b.progress - a.progress)
            .map((s) => (
              <Tilt className="Tilt" options={{ max: 25 }} key={s._id}>
                <motion.div className="Tilt item" variants={item}>
                  <Image
                    src={urlFor(s?.image).url()}
                    width={500}
                    height={500}
                    alt={s?.title}
                    className="w-20 lg:w-28 lg:h-28"
                  />
                </motion.div>
              </Tilt>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
