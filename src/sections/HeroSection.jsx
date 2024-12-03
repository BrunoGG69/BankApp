import profilePic from "../assets/profilePic-noBackground.png";
import { motion } from "motion/react";

import kernelCard from "/cards/kernel-card.svg";
import quantumCard from "/cards/quantum-card.svg";
import scriptCard from "/cards/script-card.svg";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden pb-10" id="heroSection">
            <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Profile Picture and BrunoPay Logo */}
                <div className="flex flex-row items-center justify-center mb-8">
                    {/* Profile Picture */}
                    <motion.div
                        className="sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 relative z-10"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full transition-all hover:scale-110 hover:brightness-110"
                        />
                    </motion.div>

                    {/* BrunoPay Logo */}
                    <motion.div
                        className="text-left relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#f48e6c] transition-all hover:scale-110 hover:brightness-110">
                            BrunoPay
                        </h1>
                        <p className="text-xl mt-2 text-[#5fcbbc] transition-all hover:scale-110 hover:brightness-110">
                            For Coders, By Coders
                        </p>
                    </motion.div>
                </div>

                {/* Cards Section */}
                <div className="relative flex sm:flex-row flex-col justify-center items-center z-10 mb-20 flex-shrink sm:py-10">
                    {/* Left Card with Glow */}
                    <motion.div
                        className="relative max-sm:-mb-10 sm:mt-0 sm:-mr-12 z-20"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30 z-10"></div>
                        <img
                            src={kernelCard}
                            alt="Left Card"
                            className="w-[300px] lg:w-[400px] relative z-20 transition-all hover:scale-110 hover:brightness-110"
                        />
                    </motion.div>

                    {/* Main Card with Glow */}
                    <motion.div
                        className="relative sm:scale-110 z-30 mx-6"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[#9067c6] blur-3xl rounded-lg opacity-40 z-20"></div>
                        <img
                            src={quantumCard}
                            alt="Main Card"
                            className="w-[350px] lg:w-[450px] relative z-30 transition-all hover:scale-110 hover:brightness-110"
                        />
                    </motion.div>

                    {/* Right Card with Glow */}
                    <motion.div
                        className="relative max-sm:-mt-10 sm:mt-0 sm:-ml-12 z-20"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x:0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30 z-10"></div>
                        <img
                            src={scriptCard}
                            alt="Right Card"
                            className="w-[300px] lg:w-[400px] relative z-20 transition-all hover:scale-110 hover:brightness-110"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
