import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-[50px] md:pt-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="h-56 w-56 object-cover md:mb-0 flex-shrink-0 rounded-full md:w-64 md:h-95 md:rounded-lg xl:w-[500px] xl:h-[500px] xl:mt-[100px] xl:object-cover"
        src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold text-gray-500 lg:text-3xl">
          Here's a little background
        </h4>
        <p className="text-sm text-zinc-200 xl:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
          aperiam! Illo illum facilis ratione fuga, tempora soluta
          necessitatibus officiis eaque, quos nihil nesciunt enim voluptate
          ullam nostrum distinctio consequatur numquam.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
