import React from "react";
import { motion } from "framer-motion";
import { AiTwotoneMail } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

import { Social } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  socials: any;
};

const NavBar = ({ social }: any) => {
  return (
    <header className="sticky top-0 flex flex-start justify-between p-5 max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row gap-3"
      >
        {social?.map((s: any) => (
          <Link href={s?.url} target="_blank" key={s._id}>
            <Image
              key={s._id}
              src={urlFor(s.image).url()}
              alt="HTML Skill"
              className="w-7 h-7"
              width={30}
              height={30}
              title={s?.title}
            />
          </Link>
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-2 cursor-pointer"
      >
        <AiTwotoneMail className="h-[30px] w-[30px]" title="Mail" />
        <Link
          href="#contacts"
          className="hidden md:inline-flex capitalize lg:text-2xl"
        >
          Get in touch
        </Link>
      </motion.div>
    </header>
  );
};

export default NavBar;
