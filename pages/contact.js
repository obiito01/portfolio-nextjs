import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const contact = () => {
  const formEl = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const headerVariant = {
    init: { opacity: 0, y: 50 },
    anim: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 12 },
    },
  };
  const sectionVariant = {
    init: { opacity: 0, y: 50 },
    anim: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        staggerChildren: 0.2,
      },
    },
  };
  const formChildVariant = {
    init: { opacity: 0, x: 100 },
    anim: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };
  const imgVariant = {
    init: { opacity: 0, x: -100 },
    anim: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntovixi",
        "contact_form",
        formEl.current,
        "user_ZWczsxcxNOHF2fv1u4zCQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    formEl.current.reset();
  };

  return (
    <main className="max-w-[1200px] mx-auto px-5 h-screen-no-nav min-h-[600px] flex flex-col justify-center gap-5 overflow-hidden">
      <motion.header variants={headerVariant} initial="init" animate="anim">
        <h1 className="text-center text-5xl font-light mb-2">Like my work?</h1>
        <h1 className="text-center text-lg font-light">
          Leave a <span className="text-violet-500">message</span>!
        </h1>
      </motion.header>
      <motion.section
        variants={sectionVariant}
        initial="init"
        animate="anim"
        className="w-full rounded-md flex flex-col md:flex-row px-5 py-10"
      >
        {/* left */}
        <motion.div
          variants={imgVariant}
          className="flex-1  grid place-items-center"
        >
          <Image
            src="/images/contact.svg"
            height={400}
            width={400}
            objectFit="contain"
          />
        </motion.div>
        {/* right */}
        {isEmailSent ? (
          <motion.div
            variants={formChildVariant}
            className="flex-1 p-5 flex flex-col items-center justify-center gap-5"
          >
            <h1 className="text-3xl font-bold">Thank you for the email!</h1>
            <p className="text-lg font-light">
              Looking forward to talk to you soon.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            ref={formEl}
            className="flex-1 flex flex-col gap-6 p-5"
          >
            <motion.div
              variants={formChildVariant}
              className="flex flex-col gap-2"
            >
              <label htmlFor="name" className="font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="text-base py-3 px-3 dark:bg-neutral-700 outline-none rounded-md duration-300 bg-neutral-200 focus:ring-2 ring-violet-500 ring-inset font-light"
              />
            </motion.div>
            <motion.div
              variants={formChildVariant}
              className="flex flex-col gap-2"
            >
              <label htmlFor="email" className="font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="text-base py-3 px-3 dark:bg-neutral-700 outline-none rounded-md duration-300 bg-neutral-200 focus:ring-2 ring-violet-500 ring-inset font-light"
              />
            </motion.div>
            <motion.div
              variants={formChildVariant}
              className="flex flex-col gap-2"
            >
              <label htmlFor="message" className="font-medium">
                Message:
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                rows={5}
                required
                className="resize-none py-3 px-3 dark:bg-neutral-700 outline-none rounded-md duration-300 bg-neutral-200 focus:ring-2 ring-violet-500 ring-inset font-light"
              />
            </motion.div>
            <button
              type="submit"
              className="bg-neutral-200 dark:bg-neutral-700 py-3 rounded hover:ring-2 ring-violet-500 duration-300 ring-inset"
            >
              {isEmailSent ? "Email sent. Talk to you soon." : "Send"}
            </button>
          </form>
        )}
      </motion.section>
    </main>
  );
};

export default contact;
