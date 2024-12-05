import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cardData } from '../constants';

const CardsSection = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    // Trigger animation when the section is in view
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

    // Animation variants
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
            id="cardsSection"
            className="text-white flex flex-col items-center justify-center py-16 pt-24 sm:px-8 md:px-4 bg-black"
        >
            {/* Heading */}
            <motion.div
                className="heading mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                    Our Cards
                </h1>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-4/5 z-30"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {cardData.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className={`bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#010101] rounded-3xl shadow-lg border ${
                            card.isSpecial
                                ? "border-purple-500 relative transform translate-y-[-10px] sm:translate-y-[-5px] hover:border-purple-400 hover:shadow-purple-500"
                                : "border-gray-700"
                        } p-6 flex flex-col justify-between`}
                        custom={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 20px rgba(128, 0, 128, 0.6)",
                        }}
                    >
                        {card.isSpecial && (
                            <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                Our Pick
                            </div>
                        )}
                        <div className="mb-4">
                            <img
                                src={card.image}
                                alt={`${card.title} Preview`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold underline mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{card.description}</p>
                            <ul className="text-teal-400 space-y-1">
                                {card.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                            <p className="mt-4 italic text-yellow-500">{card.footer}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CardsSection;

