import React from "react";
import { motion } from "framer-motion";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Card from "./Card";
type Props = {};

const Experience = (props: Props) => {
  const leftArrow = () => {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <AiOutlineArrowLeft
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
      />
    );
  };

  const rightArrow = () => {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <AiOutlineArrowRight
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
      />
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative  flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex space-x-5 w-full overflow-x-scroll mt-[100px] lg:mt-[120px]">
        {/* <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow}> */}
        <Card />
        <Card />
        <Card />
        <Card />
        {/* </ScrollMenu> */}
      </div>
    </motion.div>
  );
};

export default Experience;
