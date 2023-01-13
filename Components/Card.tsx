import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkExperience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experiences: WorkExperience[];
};

const Card = (experiences: Props) => {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[285px] md:w-[400px] xl:w-[500px] snap-center bg-gradient-to-b from-zinc-400 to-gray-700 p-10">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full object-cover object-center"
        src={urlFor(experiences?.experiences?.companyImage).url()}
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <p className="text-ellipsis overflow-hidden text-4xl font-light whitespace-nowrap p-2 text-white font-bold">
          {experiences.experiences?.company}
        </p>
        <p className="uppercase py-5 text-zinc-100">
          {experiences?.experiences?.dateStarted} &nbsp;
          {experiences?.experiences?.dateEnded}
        </p>

        <p className="font-medium text-2xl mt-1">
          {experiences.experiences?.jobTitle}
        </p>
        <div className="flex space-x-2 my-2">
          {experiences?.experiences?.technologies.map((data) => (
            <Image
              key={data._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(data?.image).url()}
              width={30}
              height={30}
              alt="skills"
            />
          ))}
        </div>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
