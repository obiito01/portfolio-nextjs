import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { myProjects } from "./data";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { MdWebAsset } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const ProjectSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("anim");
    }
  }, [controls, inView]);

  const headerVariant = {
    init: {
      opacity: 0,
      x: 50,
    },
    anim: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.4,
      },
    },
  };

  const headerChildVariant = {
    init: {
      opacity: 0,
      x: 50,
    },
    anim: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  const projectsVariant = {
    init: { opacity: 0, x: 100 },
    anim: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 40, damping: 15 },
    },
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5">
      <motion.header
        variants={headerVariant}
        initial="init"
        animate="anim"
        className="text-right"
      >
        <motion.h1
          variants={headerChildVariant}
          className="text-6xl font-bold text-neutral-200 dark:text-neutral-700 mr-[-20px] select-none"
        >
          PROJECTS
        </motion.h1>
        <motion.h1
          variants={headerChildVariant}
          className="text-6xl font-bold z-10 relative mt-[-30px] select-none"
        >
          PROJECTS
        </motion.h1>
        <motion.h1
          variants={headerChildVariant}
          className="text-6xl font-bold text-neutral-200 dark:text-neutral-700 mt-[-30px] mr-5 mb-5 select-none"
        >
          PROJECTS
        </motion.h1>
      </motion.header>
      <p className="text-right">
        More projects can be found on my{" "}
        <a
          href="http://github.com/obiito01"
          target="_blank"
          rel="noreferrer"
          className="text-violet-500 font-medium hover:text-violet-700 transition-colors duration-300"
        >
          GitHub
        </a>
        .
      </p>
      {/* content */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="init"
        variants={projectsVariant}
        className="py-10"
      >
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {myProjects.map((project) => (
            // project card
            <div
              className="w-full h-[300px] md:h-[600px] bg-neutral-600 relative group md:first:col-span-2 md:last:col-span-2"
              key={project.title}
              href={project.live}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="brightness-[0.7] group-hover:brightness-50 transition duration-500"
              />
              <div className="absolute top-5 left-5">
                <h1
                  className={`text-3xl font-bold text-neutral-200 mb-2 duration-300`}
                >
                  {project.title}
                </h1>
              </div>
              <p className="absolute bottom-5 left-0 px-5 opacity-0 group-hover:opacity-100 transition duration-500 text-neutral-300">
                {project.desc}
              </p>
              <div className="absolute top-5 right-5 flex flex-col gap-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 bg-neutral-200 text-neutral-700 rounded-md inline-block duration-300 hover:bg-neutral-400 relative"
                >
                  <BsGithub size={22} />
                  <span className="absolute right-[110%] top-[50%] translate-y-[-50%] group-hover:opacity-100 opacity-0 text-neutral-200 duration-300 font-medium">
                    GitHub
                  </span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 bg-neutral-200 text-neutral-700 rounded-md inline-block duration-300 hover:bg-neutral-400 relative"
                >
                  <MdWebAsset size={22} />
                  <span className="absolute right-[110%] top-[50%] translate-y-[-50%] group-hover:opacity-100 opacity-0 text-neutral-200 duration-300 font-medium">
                    Live
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
