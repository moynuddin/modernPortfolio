import React from "react";
import { motion } from "framer-motion";

import ProjectDetail from "./ProjectDetail";
import { Project } from "../typings";
type Props = {
  projects: Project[];
};

const Projects = (projects: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col justify-center items-center"
    >
      <motion.h3
        initial={{ y: 200, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto"
      >
        Projects
      </motion.h3>
      <div className="flex flex-col space-y-4 mt-[70px] px-4 md:flex-row md:space-x-10 md:space-y-0">
        <ProjectDetail projects={projects?.project?.pageInfo} />
      </div>
    </motion.div>
  );
};

export default Projects;
