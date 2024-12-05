import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { pricingData } from '../constants';

const PricingSection = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };


    return (
        <div
            ref={sectionRef}
            id="pricingSection"
            className="text-white flex flex-col items-center justify-center py-16 pt-24 sm:px-8 md:px-4 bg-black min-h-screen"
        >
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-4">
                    Annual Fees
                </h2>
                <p className="text-gray-400 text-xl">
                    Choose the perfect card for your tech journey
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-full max-w-7xl px-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {pricingData.map((tier, index) => (
                    <motion.div
                        key={tier.id}
                        className={`relative rounded-2xl border ${tier.borderColor} bg-gradient-to-b ${tier.color} backdrop-blur-xl p-8 z-30`}
                        variants={cardVariants}
                        custom={index}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 },
                        }}
                    >
                        {tier.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-green-500 px-4 py-1 rounded-full text-sm font-semibold">
                                Most Popular
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                            <div className="text-4xl font-bold mb-2">{tier.price}</div>
                            <p className="text-gray-400">{tier.description}</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {tier.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <svg
                                        className="w-5 h-5 text-green-500 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => window.open(tier.id === 1 ? 'https://youtu.be/0N6R2l-qgGQ' : tier.id === 2 ? 'https://youtu.be/h3uBr0CCm58' : 'https://youtu.be/_Gq9PeLLWSc', '_blank')}
                            className={`w-full ${tier.buttonColor} text-white rounded-xl py-4 font-semibold transition-transform hover:scale-105`}
                        >
                            Get Started
                        </button>

                        <p className="text-center text-sm text-gray-400 mt-4">
                            {tier.highlight}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default PricingSection;



