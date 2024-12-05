import kernelCard from "/cards/kernel-card.svg";
import quantumCard from "/cards/quantum-card.svg";
import scriptCard from "/cards/script-card.svg";

export const cardImages = {
    kernelCard,
    quantumCard,
    scriptCard,
};

export const navItems = [
    { label: "Home", href: "#heroSection" },
    { label: "About", href: "#aboutCard" },
    { label: "Our Cards", href: "#cardsSection" },
    { label: "Pricing", href: "#pricingSection" },
];

export const heroContent = {
    title: "BrunoPay",
    subtitle: "For Coders, By Coders",
};

export const aboutContent = {
    title: "The Future Of Payments",
    description: "Experience the next generation of financial technology with our innovative payment solutions. Seamlessly integrating cutting-edge security and unparalleled convenience.",
    features: [
        "Quantum-level encryption for ultimate security",
        "Lightning-fast transactions across the globe",
        "Seamless integration with existing financial systems",
    ],
};

export const cardData = [
    {
        id: 1,
        title: "Script Card",
        description: "Entry-level card designed for tech enthusiasts, new coders, and small businesses. Perfect for everyday transactions or your first few 'oops, wrong API key' purchases.",
        benefits: [
            "- No annual fee (because debugging life is expensive enough).",
            "- 2% cashback on online purchases (dev courses, e-books, and snacks included!).",
            "- API integrations for tracking spending (so you can finally answer 'Where did my money go?').",
            "- 2% cashback on tech gadgets under $500 (level up your gear without regrets).",
            "- Upgrade to the Quantum Card for **3% cashback on SaaS tools** (GitHub Pro, anyone?).",
        ],
        footer: "P.S. If you're looking for better features, try the Kernel Card. But hey, let's start small.",
        image: scriptCard,
    },
    {
        id: 2,
        title: "Quantum Card",
        description: "Premium card for tech leaders, entrepreneurs, and those who casually solve algorithms while sipping coffee. For the brave and bold of tech, we salute you.",
        benefits: [
            "- 10% cashback on global transactions (hello, digital nomads!).",
            "- **3% cashback on SaaS tools** like AWS, GitHub, and Notion (because productivity isn't free).",
            "- Quantum-level encryption (protect your data and maybe some dark secrets).",
            "- Priority support with exclusive invites to tech summits (think keynote talks, not boring webinars).",
            "- Special bonus: Free coffee at partnered cafes during hackathons (because caffeine = everything).",
        ],
        footer: "Don't forget to renew your subscription for the daily dose of Caffeine",
        image: quantumCard,
        isSpecial: true,
    },
    {
        id: 3,
        title: "Kernel Card",
        description: "For full-time developers, freelancers, and anyone who can debug in their dreams. If you believe 'sudo' solves everything, this card is for you.",
        benefits: [
            "- 5% cashback on tech-related purchases (mechanical keyboards, GPUs, and standing desks).",
            "- Exclusive access to developer communities (find people who think recursion is fun).",
            "- Enhanced transaction limits (because sometimes you *do* need that high-end laptop).",
            "- Bonus: Free subscriptions to select dev tools (yes, no more excuses for not automating your tasks).",
        ],
        footer: "P.S Thinking bigger? Quantum Card users get VIP treatment at tech events worldwide.",
        image: kernelCard,
    },
];

export const pricingData = [
    {
        id: 1,
        title: "Script Card",
        price: "Free",
        description: "Perfect for getting started in the tech world",
        features: [
            "No annual fee",
            "Basic API access",
            "Standard support response",
            "2% cashback on tech purchases",
            "Basic fraud protection"
        ],
        highlight: "Most Popular for Beginners",
        color: "from-orange-400/20 to-orange-500/20",
        borderColor: "border-orange-500/50",
        buttonColor: "bg-orange-500",
    },
    {
        id: 2,
        title: "Kernel Card",
        price: "$99/year",
        description: "Ideal for professional developers",
        features: [
            "Priority customer service",
            "Advanced API integration",
            "5% cashback on tech purchases",
            "Extended purchase protection",
            "Exclusive dev community access"
        ],
        highlight: "Best for Professionals",
        color: "from-teal-400/20 to-teal-500/20",
        borderColor: "border-teal-500/50",
        buttonColor: "bg-teal-500",
        isPopular: true,
    },
    {
        id: 3,
        title: "Quantum Card",
        price: "$299/year",
        description: "For tech leaders and entrepreneurs",
        features: [
            "24/7 dedicated support",
            "Unlimited API access",
            "10% cashback on all purchases",
            "Premium travel insurance",
            "VIP tech event access"
        ],
        highlight: "Ultimate Benefits",
        color: "from-purple-400/20 to-purple-500/20",
        borderColor: "border-purple-500/50",
        buttonColor: "bg-purple-500",
    },
];

export const socialLinks = [
    {
        id: "GitHub",
        href: "https://github.com/BrunoGG69",
        icon: "bx bxl-github",
        label: "BrunoGG69",
    },
    {
        id: "Discord",
        href: "https://discordapp.com/users/785186372369252372",
        icon: "bx bxl-discord-alt",
        label: "brunogg69",
    },
    {
        id: "Twitter",
        href: "https://twitter.com/BrunoGG69",
        icon: "bx bxl-twitter",
        label: "@BrunoGG69",
    },
    {
        id: "Email",
        href: "mailto:contact@brunogg.in",
        icon: "bx bx-envelope",
        label: "contact@brunogg.in",
    },
];