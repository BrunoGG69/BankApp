import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

import kernelCard from "/cards/kernel-card.svg";
import quantumCard from "/cards/quantum-card.svg";
import scriptCard from "/cards/script-card.svg";

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
            { threshold: 0.25 } // Trigger when 25% of the section is visible
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
                staggerChildren: 0.2, // Stagger animations for children elements
            },
        },
    };

    // Card data
    const cardData = [
        {
            id: 1,
            title: "Script Card",
            description:
                "Entry-level card designed for tech enthusiasts, new coders, and small businesses. Perfect for everyday transactions or your first few 'oops, wrong API key' purchases.",
            benefits: [
                "- No annual fee (because debugging life is expensive enough).",
                "- 2% cashback on online purchases (dev courses, e-books, and snacks included!).",
                "- API integrations for tracking spending (so you can finally answer 'Where did my money go?').",
                "- 2% cashback on tech gadgets under $500 (level up your gear without regrets).",
                "- Upgrade to the Quantum Card for **3% cashback on SaaS tools** (GitHub Pro, anyone?).",
            ],
            footer:
                "P.S. If you’re looking for better features, try the Kernel Card. But hey, let’s start small.",
            image: scriptCard
        },
        {
            id: 2,
            title: "Kernel Card",
            description:
                "For full-time developers, freelancers, and anyone who can debug in their dreams. If you believe 'sudo' solves everything, this card is for you.",
            benefits: [
                "- 5% cashback on tech-related purchases (mechanical keyboards, GPUs, and standing desks).",
                "- Exclusive access to developer communities (find people who think recursion is fun).",
                "- Enhanced transaction limits (because sometimes you *do* need that high-end laptop).",
                "- Bonus: Free subscriptions to select dev tools (yes, no more excuses for not automating your tasks).",

            ],
            footer:
                "P.S Thinking bigger? Quantum Card users get VIP treatment at tech events worldwide.",
            image: kernelCard
        },
        {
            id: 3,
            title: "Quantum Card",
            description:
                "Premium card for tech leaders, entrepreneurs, and those who casually solve algorithms while sipping coffee. For the brave and bold of tech, we salute you.",
            benefits: [
                "- 10% cashback on global transactions (hello, digital nomads!).",
                "- **3% cashback on SaaS tools** like AWS, GitHub, and Notion (because productivity isn’t free).",
                "- Quantum-level encryption (protect your data and maybe some dark secrets).",
                "- Priority support with exclusive invites to tech summits (think keynote talks, not boring webinars).",
                "- Special bonus: Free coffee at partnered cafes during hackathons (because caffeine = everything).",
            ],
            footer:
                "Don't Forget to renew your subscription for the daily dose of Caffeine",
            image: quantumCard
        },
    ];

    return (
        <div
            ref={sectionRef}
            id="cardsSection"
            className="text-white flex flex-col items-center justify-center py-16 sm:px-8 md:px-4 bg-black"
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
                        className="bg-gradient-to-b from-[#15151b] via-[#15151b] to-[#010101] rounded-3xl shadow-lg border border-gray-700 p-6 flex flex-col justify-between"
                        custom={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                        }}
                    >
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
                            <ul className="neon-blue space-y-1">
                                {card.benefits.map((benefit, i) => (

                                    <li
                                        key={i}
                                        className={benefit.includes("debugging life") ? "text-purple-400" : ""}
                                    >
                                        {benefit}
                                    </li>
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
