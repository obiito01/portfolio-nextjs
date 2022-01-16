import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { myProjects } from "./data";
import { useInView } from "react-intersection-observer";

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
            <div className="w-full h-[300px] md:h-[600px] bg-neutral-600 relative group cursor-pointer md:first:col-span-2 md:last:col-span-2">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover brightness-[0.9] group-hover:brightness-50 transition duration-500"
              />

              <h1
                className={`text-3xl font-bold absolute top-5 md:top-10 left-5 text-neutral-200 transition-all duration-1000`}
              >
                {project.title}
              </h1>
              <p className="absolute bottom-5 left-0 px-5 opacity-0 group-hover:opacity-100 transition duration-500 text-neutral-300">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
