import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo[];
};

const About = (pageInfo: Props) => {
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
        src={urlFor(pageInfo.pageInfo[0]?.heroImage).url()}
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold text-gray-500 lg:text-3xl">
          Here's a little background
        </h4>
        <p className="text-justify text-sm text-zinc-200 xl:text-2xl">
          {pageInfo.pageInfo[0].backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
