import {useEffect, useRef, useState} from 'react';
import {motion} from 'motion/react';

import kernelCard from "/cards/kernel-card.svg";
import quantumCard from "/cards/quantum-card.svg";
import scriptCard from "/cards/script-card.svg";

const AboutSection = () => {
    const [isInView, setIsInView] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {threshold: 0.1} // Trigger when 25% of the element is visible
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div
            className="flex flex-col lg:flex-row items-center justify-center min-h-screen relative overflow-hidden p-8" id="#aboutCard">
            {/* Text Content */}
            <motion.div ref={textRef} className="pb-20 mx-auto">
                {/* Heading Animation */}
                <motion.div
                    className="pb-4"
                    initial={{opacity: 0, y: 50}}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 5
                    }}
                    transition={{duration: 0.8, delay: 0.1, ease: "easeOut"}}
                >
                    <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                        The Future Of Payments
                    </h1>
                </motion.div>
                {/* Paragraph Animation */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 5
                    }}
                    transition={{duration: 0.8, delay: 0.2, ease: "easeOut"}}
                >
                    <p className="text-gray-300 text-lg lg:text-xl max-w-lg">
                        Experience the next generation of financial technology with our innovative payment solutions.
                        Seamlessly integrating cutting-edge security and unparalleled convenience.
                    </p>
                </motion.div>
                <br/>
                {/* List Items Animation */}
                <motion.ul
                    className="text-gray-400 space-y-2"
                    initial={{opacity: 0, y: 50}}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 5
                    }}
                    transition={{duration: 0.8, delay: 0.3, ease: "easeOut"}}
                >
                    <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5 13l4 4L19 7"></path>
                        </svg>
                        Quantum-level encryption for ultimate security
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lightning-fast transactions across the globe
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5 13l4 4L19 7"></path>
                        </svg>
                        Seamless integration with existing financial systems
                    </li>
                </motion.ul>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="mx-auto my-auto pt-32"
                initial={{opacity: 0}}
                animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 10}}
                transition={{duration: 0.8, delay: 0.2}}  // Reduced delay
            >
                <div className="relative flex justify-center items-center z-10 w-full max-w-lg mx-auto">
                    <div className="absolute transform rotate-[25deg] -translate-x-[60px] -translate-y-[30px] origin-bottom-right transition-all duration-300 hover:-translate-y-[40px] group">
                        <div className="absolute inset-0 bg-[#ff7e5f] opacity-50 blur-[20px] transition-opacity group-hover:opacity-70"/>
                        <img
                            src={scriptCard}
                            alt="Script Card"
                            className="w-[400px] lg:w-[500px] relative z-20"
                        />
                    </div>
                    <div className="absolute transform rotate-[12deg] -translate-x-[30px] -translate-y-[15px] origin-bottom-right transition-all duration-300 hover:-translate-y-[25px] group">
                        <div className="absolute inset-0 bg-[#4ecdc4] opacity-50 blur-[20px] transition-opacity group-hover:opacity-70"/>
                        <img
                            src={kernelCard}
                            alt="Kernel Card"
                            className="w-[400px] lg:w-[500px] relative z-30"
                        />
                    </div>
                    <div className="relative z-40 transform origin-bottom-right transition-all duration-300 hover:-translate-y-[10px] group">
                        <div className="absolute inset-0 bg-[#a855f7] opacity-50 blur-[20px] transition-opacity group-hover:opacity-70"/>
                        <img
                            src={quantumCard}
                            alt="Quantum Card"
                            className="w-[400px] lg:w-[500px] relative z-40"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutSection;
