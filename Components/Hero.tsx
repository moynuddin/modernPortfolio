import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import Circles from "./Circles";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo[];
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <div className="flex flex-col space-y-8 h-screen justify-center items-center overflow-hidden text-center">
      <Circles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo[0]?.profilePic).url()}
        width={200}
        height={200}
        alt="photo"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px] lg:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 text-zinc-100 text-[13px] md:text-2xl lg:text-4xl">
            <Typewriter
              words={[
                "Hi, The name is Moin uddin",
                "<code> Love programming </code>",
                "Self taught developer",
              ]}
              loop={true}
              delaySpeed={2000}
              cursorColor="white"
              cursorBlinking={true}
              cursor={true}
              cursorStyle={"_"}
            />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about" className="mr-0 md:mr-1">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience" className="mr-0 md:mr-1">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills" className="mr-0 md:mr-1">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
