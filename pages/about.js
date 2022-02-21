import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import Head from "next/head";

const bulletPoints = [
  { content: "Graduated in 2021" },
  { content: "Passionate to Learn" },
  { content: "Adopt Best Practices" },
  { content: "20+ Projects" },
];

export default function About() {
  const divVariant = {
    init: {
      opacity: 0,
      y: 10,
    },
    anim: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const leftDivVariant = {
    init: { opacity: 1 },
    anim: {
      opacity: 1,
      y: [0, 5, -5, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
  const rightDivVariant = {
    init: { opacity: 0 },
    anim: {
      opacity: 1,
      transition: {
        duration: 0,
        staggerChildren: 0.3,
      },
    },
  };
  const rightDivChildVariant = {
    init: { opacity: 0, x: 50 },
    anim: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Jethro | About</title>
      </Head>
      <main className="bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300 transition-colors duration-300 text-neutral-800 overflow-hidden">
        <motion.section
          variants={divVariant}
          initial="init"
          animate="anim"
          className="max-w-[1200px] mx-auto md:h-screen-no-nav text-center flex flex-col py-20 px-2 md:px-5"
        >
          <h1 className="text-5xl font-extralight mb-2">About Me</h1>
          <h3 className="text-xl font-extralight">
            &quot;Passionate and hardworking.&quot;
          </h3>
          <div className="flex-1 flex flex-col md:flex-row gap-5 md:gap-4 full items-center">
            {/* left */}
            <motion.div
              className="basis-[50%] w-full px-5 md:px-0 h-full"
              variants={leftDivVariant}
            >
              <Image
                src="/images/aboutme.svg"
                width="100%"
                height="100%"
                alt="about"
                layout="responsive"
                objectFit="contain"
              />
            </motion.div>
            {/* right */}
            <motion.div
              variants={rightDivVariant}
              className="basis-[50%] text-left p-5 md:p-3"
            >
              <motion.p
                variants={rightDivChildVariant}
                className="md:w-[90%] mb-5 text-lg md:text-xl font-normal"
              >
                STEM graduate with great interest in Software Engineering.
                Excellent skills and project experience. Always love to{" "}
                <span className="text-violet-500 font-medium">learn </span>
                new technologies and{" "}
                <span className="text-violet-500 font-medium">
                  strengthen
                </span>{" "}
                my programming skills. <br />
                <br /> My current programming languages includes{" "}
                <span className="text-violet-500 font-medium">JavaScript</span>
                and <span className="text-violet-500 font-medium">Python</span>,
                and my current stack includes{" "}
                <span className="text-violet-500 font-medium">ReactJS</span>,{" "}
                <span className="text-violet-500 font-medium">Next.js</span>,{" "}
                <span className="text-violet-500 font-medium">Express.js</span>,{" "}
                <span className="text-violet-500 font-medium">MongoDB</span>,
                and more!
              </motion.p>
              <ul className="mb-10">
                {bulletPoints.map((bullet, index) => (
                  <motion.li
                    variants={rightDivChildVariant}
                    key={index}
                    className="text-lg md:text-xl font-normal"
                  >
                    <MdKeyboardArrowRight className="inline" size={24} />{" "}
                    {bullet.content}
                  </motion.li>
                ))}
              </ul>
              <a
                href="/CV2022.pdf"
                download="CV"
                className="py-4 px-4 rounded-md bg-neutral-200 text-base md:text-lg hover:ring-2 ring-violet-500 ring-inset transition duration-300 dark:bg-neutral-700"
              >
                Download CV{" "}
                <AiOutlineCloudDownload className="inline" size={24} />
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
