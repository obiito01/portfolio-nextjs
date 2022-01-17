import React from "react";
import { SkillsSection, ProjectSection } from "../components";
import { motion } from "framer-motion";
const profile = () => {
  const textVariant = {
    init: {
      opacity: 0,
      y: -20,
    },
    anim: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };
  return (
    <main className="bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300 transition-colors duration-300 text-neutral-800 overflow-hidden py-10 lg:py-16">
      <motion.div
        className="mb-5"
        variants={textVariant}
        animate="anim"
        initial="init"
      >
        <h1 className="text-center text-5xl font-extralight mb-2">
          Portfolio.
        </h1>
        <p className="text-center font-extralight text-lg max-w-[80%] mx-auto">
          &quot;I don&apos;t just sell websites, I create websites that
          SELL.&quot;
        </p>
      </motion.div>
      <SkillsSection />
      <ProjectSection />
    </main>
  );
};

export default profile;
