import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { FaBriefcase } from "react-icons/fa";
import { WorkExperience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experiences: WorkExperience[];
};

const TimeLine = (experiences: any) => {
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
  const modifyDate = (data: any) => {
    let date = new Date(data).toDateString().split(" ").splice(1).join(" ");
    return date;
  };
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <motion.h3
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
        className="text-center uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        Journey
      </motion.h3>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className="py-4 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0"
      >
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-gray-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {experiences?.experience.map((data: any) => (
            <div key={data._id}>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center">
                  <motion.div
                    className="flex justify-start w-full mx-auto items-center"
                    variants={item}
                  >
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="p-4 bg-white rounded shadow flex flex-col justify-between items-center">
                        <Image
                          src={urlFor(data?.companyImage)?.url()}
                          width={60}
                          height={60}
                          alt="image"
                        />
                        <p className="font-bold">{data.jobTitle}</p>
                      </div>
                    </div>
                    <p className="hidden md:block text-white  w-56 ml-12">
                      <span className="font-thin mx-2 capitalize">from</span>
                      {modifyDate(data.dateStarted)}
                      <span className="font-thin mx-2 capitalize">
                        {data.dateEnded ? "to" : "till"}
                      </span>
                      {data.dateEnded ? (
                        modifyDate(data.dateEnded)
                      ) : (
                        <span className="mx-2 capitalize">Present</span>
                      )}
                    </p>
                  </motion.div>
                  <div className="rounded-full bg-gray-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <FaBriefcase className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLine;
