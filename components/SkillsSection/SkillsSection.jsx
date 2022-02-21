import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { frontendSkills, backendSkills, programmingLanguage } from "./data";
import { SkillItem } from "..";

const SkillsSection = () => {
  const [isFrontendDropdownOpen, setIsFrontendDropdownOpen] = useState(false);
  const [isBackendDropdownOpen, setIsBackendDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const headerVariant = {
    init: {
      opacity: 0,
      x: -50,
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
      x: -50,
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

  const contentVariant = {
    init: {
      opacity: 0,
      y: -10,
    },
    anim: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-10">
      <motion.header variants={headerVariant} initial="init" animate="anim">
        <motion.h1
          variants={headerChildVariant}
          className="text-6xl font-bold text-neutral-200 dark:text-neutral-700 ml-[-20px] select-none"
        >
          SKILLS
        </motion.h1>
        <motion.h1
          variants={headerChildVariant}
          className="text-6xl font-bold z-10 relative mt-[-30px] select-none"
        >
          SKILLS
        </motion.h1>
        <motion.h1
          variants={headerChildVariant}
          className="text-6xl font-bold text-neutral-200 dark:text-neutral-700 mt-[-30px] ml-5 mb-5 select-none"
        >
          SKILLS
        </motion.h1>
      </motion.header>
      {/* skills content */}
      <motion.div
        variants={contentVariant}
        initial="init"
        animate="anim"
        exit="exit"
        className="py-10"
      >
        {/* programming languages */}
        <div>
          {/* dropdown header */}
          <div
            className="items-center gap-2 inline-block cursor-pointer group  mb-4"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <div className="flex items-center group-hover:text-violet-500 duration-300">
              {isFrontendDropdownOpen ? (
                <MdKeyboardArrowDown size={32} />
              ) : (
                <MdKeyboardArrowRight size={32} />
              )}
              <span className="text-2xl select-none">Programming Language</span>
            </div>
          </div>
          <p className="ml-4 mb-5">
            A programming language is any set of rules that converts strings, or
            graphical program elements in the case of visual programming
            languages, to various kinds of machine code output. Programming
            languages are one kind of computer language, and are used in
            computer programming to implement algorithms.
          </p>
          <AnimatePresence>
            {isLanguageDropdownOpen && (
              <motion.div
                variants={contentVariant}
                initial="init"
                animate="anim"
                exit="exit"
                className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center ring-2 ring-neutral-200 dark:ring-neutral-600 dark:bg-neutral-700 bg-neutral-100 rounded-md mb-10"
              >
                {programmingLanguage.map((skill) => (
                  <SkillItem {...skill} key={skill.title} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* frontend skills */}
        <div>
          {/* dropdown header */}
          <div
            className="items-center gap-2 inline-block cursor-pointer group  mb-4"
            onClick={() => setIsFrontendDropdownOpen(!isFrontendDropdownOpen)}
          >
            <div className="flex items-center group-hover:text-violet-500 duration-300">
              {isFrontendDropdownOpen ? (
                <MdKeyboardArrowDown size={32} />
              ) : (
                <MdKeyboardArrowRight size={32} />
              )}
              <span className="text-2xl select-none">Frontend Development</span>
            </div>
          </div>
          <p className="ml-4 mb-5">
            Front-end web development, also known as client-side development is
            the practice of producing HTML, CSS and JavaScript for a website or
            Web Application so that a user can see and interact with them
            directly. The challenge associated with front end development is
            that the tools and techniques used to create the front end of a
            website change constantly and so the developer needs to constantly
            be aware of how the field is developing.
          </p>
          <AnimatePresence>
            {isFrontendDropdownOpen && (
              <motion.div
                variants={contentVariant}
                initial="init"
                animate="anim"
                exit="exit"
                className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center ring-2 ring-neutral-200 dark:ring-neutral-600 dark:bg-neutral-700 bg-neutral-100 rounded-md mb-10"
              >
                {frontendSkills.map((skill) => (
                  <SkillItem {...skill} key={skill.title} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* backend skills */}
        <div>
          {/* dropdown header */}
          <div
            className="items-center gap-2 inline-block cursor-pointer group"
            onClick={() => setIsBackendDropdownOpen(!isBackendDropdownOpen)}
          >
            <div className="flex items-center group-hover:text-violet-500 duration-300 mb-5">
              {isBackendDropdownOpen ? (
                <MdKeyboardArrowDown size={32} />
              ) : (
                <MdKeyboardArrowRight size={32} />
              )}
              <span className="text-2xl select-none">Backend Development</span>
            </div>
          </div>
          <p className="ml-4 mb-5">
            Backend Development is also known as server-side development. It is
            everything that the users don’t see and contains behind-the-scenes
            activities that occur when performing any action on a website. It
            focuses primarily on databases, backend logic, APIs, and Servers.
          </p>
          <AnimatePresence>
            {isBackendDropdownOpen && (
              <motion.div
                variants={contentVariant}
                initial="init"
                animate="anim"
                exit="exit"
                className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center ring-2 ring-neutral-200 dark:ring-neutral-600 dark:bg-neutral-700 bg-neutral-100 rounded-md mb-10"
              >
                {backendSkills.map((skill) => (
                  <SkillItem {...skill} key={skill.title} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
