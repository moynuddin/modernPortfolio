import React from "react";
import Image from "next/image";
import { urlFor } from "../sanity";
import { FaLink } from "react-icons/fa";
type Props = {};

const ProjectDetail = (projects: Props) => {
  console.log("data", projects.projects);
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0 relative">
      {projects?.projects?.map((d: any) => (
        <div className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" key={d._id}>
          <div className="grayscale hover:grayscale-0">
            <Image
              src={urlFor(d.image).url()}
              alt="project"
              width={400}
              height={400}
            />
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-lg z-10">
              {d.title}
            </p>
            <a
              href={d.linkToBuild}
              target="_blank"
              className=" absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl pt-8"
              rel="noreferrer"
            >
              <FaLink />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
