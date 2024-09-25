import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I'm Vaclav Plachejda, Senior Full-Stack Engineer"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              className="text-3xl"
              text="I actively engaged in the tech industry since 2016."
            />

            <AnimatedBody
              className="text-3xl"
              text="I have total 15 years of experience in coding when I was young age."
            />

            <AnimatedBody
              delay={0.1}
              className="text-3xl"
              text="My expertise spans global tech hubs, specializing in Web and Mobile technologies."
            />

            <AnimatedBody
              className="text-3xl"
              delay={0.2}
              text="I have significantly enhanced application efficiency and integrated cutting-edge AI features."
            />

            <AnimatedBody
              className="text-3xl"
              delay={0.3}
              text="Known for innovating user interactions and refining operational processes, my skills extend across diverse global environments, establishing me as a versatile leader in digital advancement."
            />
            <AnimatedBody
              className="text-3xl"
              delay={0.4}
              text=" I am eager to take on projects where I can leverage my experience to drive projects forward efficiently and with high-quality work."
            />
            <AnimatedBody
              className="text-3xl"
              delay={0.4}
              text="I am pr💕ud of my jumping in IT world."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
