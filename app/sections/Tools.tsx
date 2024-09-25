import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { SiAmazon, SiAndroid, SiAngularjs, SiChatbot, SiCplusplus, SiCsharp, SiCss3, SiDjango, SiDocker, SiElasticsearch, SiExpress, SiFastapi, SiFirebase, SiFlask, SiGit, SiGooglecloud, SiHtml5, SiJavascript, SiJira, SiKotlin, SiLaravel, SiMicrosoftazure, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiOpenai, SiOracle, SiPhp, SiPostgresql, SiPuppeteer, SiPython, SiPytorch, SiReact, SiRuby,  SiSelenium, SiSolidity, SiSwift, SiTensorflow, SiTypescript, SiVercel, SiVuedotjs, SiWeb3Dotjs, SiWordpress
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Skillsets"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Programming Language" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
                                <SiHtml5 size={50}/>
                                <SiCss3 size={50}/>
                                <SiCplusplus size={50}/>
                                <SiSwift size={50}/>
                                <SiKotlin size={50}/>
                                <SiPython size={50}/>
                                <SiJavascript size={50}/>
                                <SiTypescript size={50}/>
                                <SiPhp size={50}/>
                                <SiSolidity size={50}/>
                                <SiCsharp size={50}/>
                                <SiRuby size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Framework" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiReact size={50}/>
                                <SiVuedotjs size={50}/>
                                <SiNextdotjs size={50}/>
                                <SiAngularjs size={50}/>
                                <SiNodedotjs size={50}/>
                                <SiExpress size={50}/>
                                <SiWeb3Dotjs size={50}/>
                                <SiAndroid size={50}/>
                                <SiDjango size={50}/>
                                <SiFlask size={50}/>
                                <SiLaravel size={50}/>
                                <SiWordpress size={50}/>
                                <SiFastapi size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Database" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiMysql size={50}/>
                                <SiMongodb size={50}/>
                                <SiPostgresql size={50}/>
                                <SiOracle size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Artificial Intelligence" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiChatbot size={50}/>
                                <SiOpenai size={50}/>
                                <SiElasticsearch size={50}/>
                                <SiTensorflow size={50}/>
                                <SiPytorch size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.5} text="Web Scraping" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiSelenium size={50}/>
                                <SiPuppeteer size={50}/>
                                <SiPython size={50}/>
                                <SiJavascript size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.6} text="Other" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiAmazon size={50}/>
                                <SiMicrosoftazure size={50}/>
                                <SiGooglecloud size={50}/>
                                <SiVercel size={50}/>
                                <SiFirebase size={50}/>
                                <SiDocker size={50}/>
                                <SiGit size={50}/>
                                <SiJira size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
