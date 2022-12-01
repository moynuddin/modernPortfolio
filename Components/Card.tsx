import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[285px] md:w-[400px] xl:w-[500px] snap-center bg-[#292929] p-10">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Work</h4>
        <p className="font-bold text-2xl mt-1">Whatever</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500">Started work.... end....</p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
