import Link from "next/link";
import { spaceGrotesk } from "../fonts/spaceGrotesk";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pb-28 lg:pt-0"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <ContactBackground />
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${spaceGrotesk.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords
            title={"contact"}
            style={
              "flex max-w-[400px] flex-col items-start text-left text-[80px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[80px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[350px]"
            }
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:items-center sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Do you have a project, or want to work together with me?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <Link
              href="mailto:nathanjohnson0428@gmail.com?subject=Project Collaboration&body=I%20am%20very%20impressive%20from%20your%20portfolio.%20Let's%20together%20with%20us%20for%20the%20specific%20project.%20I%20am%20going%20to%20explain%20about%20the%20project%20in%20call.%20Reach%20out%20as%20soon%20as%20you%20can."
              target="_blank"
              aria-label="Contact via email"
              className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
            >
              <AnimatedBody text={"Contact via email"} className={""} />
            </Link>
          </div>

          <div className="flex flex-col gap-10 text-[16px] font-bold text-[#e4ded7]  sm:flex-col sm:gap-14 sm:text-[24px] md:flex-col md:gap-10 md:text-[16px] lg:flex-row lg:gap-20 lg:text-[28px] xl:flex-row">
            <Link
              href="https://github.com/swdreams"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <AnimatedTitle
                text={"GitHub"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="skype:live:.cid.29d4845ac14a20d6?chat"
              target="_blank"
              aria-label="View Skype Profile"
            >
              <AnimatedTitle
                text={"Skype"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            {/* <Link
              href="https://t.me/davidhirano"
              target="_blank"
              aria-label="View Telegram Profile"
            >
              <AnimatedTitle
                text={"Telegram"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link> */}
            <Link
              href="https://www.linkedin.com/in/vaclav-plachejda-ab8030313"
              target="_blank"
              aria-label="View Whatsapp Profile"
              className="flex gap-6 sm:flex-row md:flex-col"
            >
              <AnimatedTitle
                text={"Linkedin"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
