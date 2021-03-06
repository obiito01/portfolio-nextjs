import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const rightDivVariant = {
    init: {
      opacity: 0,
      y: -80,
    },
    anim: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
      },
    },
  };
  const imgVariant = {
    init: {
      rotate: 0,
    },
    anim: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      },
    },
  };
  const leftDivVariant = {
    init: {
      opacity: 0,
      x: -100,
    },
    anim: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };
  const leftDivChildVariant = {
    init: {
      opacity: 0,
      x: -100,
    },
    anim: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Jethro | Home</title>
      </Head>
      <main className="bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300 transition-colors duration-300 text-neutral-800 h-screen-no-nav min-h-[800px]">
        <section className="max-w-[1200px] mx-auto h-full flex  flex-col-reverse sm:flex-row items-center p-3 md:p-5 gap-10 sm:gap-0">
          {/* left */}

          <motion.div
            variants={leftDivVariant}
            initial="init"
            animate="anim"
            exit="exit"
            className="basis-[50%] px-5 sm:p-2"
          >
            <motion.h1
              variants={leftDivChildVariant}
              className="text-5xl md:text-6xl font-medium dark:text-white mb-5"
            >
              Hi, I am Jethro
            </motion.h1>
            <motion.h3
              variants={leftDivChildVariant}
              className="text-xl md:text-2xl font-normal mb-5"
            >
              Software Engineer
            </motion.h3>
            <motion.p
              variants={leftDivChildVariant}
              className="text-base md:text-lg font-light w-[80%] mb-10"
            >
              High level experience in software engineering and development,
              producing quality work.
            </motion.p>
            <motion.div variants={leftDivChildVariant} className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/galongau/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-4 bg-neutral-200 dark:bg-neutral-700 rounded-md transition duration-300 hover:ring-2 ring-violet-500 ring-inset font-medium"
              >
                <span className="mr-2">LinkedIn</span>
                <BsLinkedin size={22} className="inline-block" />
              </a>
              <a
                href="https://github.com/obiito01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-4 py-4 bg-neutral-200 dark:bg-neutral-700 rounded-md transition duration-300 hover:ring-2 ring-violet-500 ring-inset font-medium"
              >
                <span className="mr-2">GitHub</span>
                <BsGithub size={22} className="inline-block" />
              </a>
              <Link href="/contact">
                <a className="flex items-center px-4 py-4 bg-neutral-200 dark:bg-neutral-700 rounded-md mr-5 transition duration-300 hover:ring-2 ring-violet-500 ring-inset font-medium">
                  <span className="mr-2">Contact</span>
                  <FcContacts size={20} className="inline-block" />
                </a>
              </Link>
            </motion.div>
          </motion.div>

          {/* right */}
          <motion.div
            variants={rightDivVariant}
            initial="init"
            animate="anim"
            className="basis-[50%] grid place-items-center overflow-hidden w-full"
          >
            <motion.div variants={imgVariant}>
              <Image
                src="/images/avatar.svg"
                width="320"
                height="320"
                alt="avatar"
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
