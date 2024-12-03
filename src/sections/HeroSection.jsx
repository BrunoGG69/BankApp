// import profilePic from "../assets/profilePic-noBackground.png";
// import { useEffect, useRef } from "react";

// const HeroSection = () => {
//     const cardRef = useRef(null);

//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollPosition = window.scrollY;
//         if (cardRef.current) {
//           cardRef.current.style.transform = `translate(${scrollPosition * 0.5}px, ${scrollPosition * 0.5}px)`;
//         }
//       };
  
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
//   return (
//     <section className="flex flex-col  items-center justify-center min-h-[90vh] bg-black overflow-x-hidden">
//       <div className="flex flex-col items-center justify-center">
//         {/* Profile Picture and BrunoPay Logo */}
//         <div className="flex flex-row items-center justify-center mb-8">
//           {/* Profile Picture */}
//           <div className="sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 relative z-10">
//             <img
//               src={profilePic}
//               alt="Profile"
//               className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full transition-all hover:scale-110 hover-brightness-110"
//             />
//           </div>

//           {/* BrunoPay Logo */}
//           <div className="text-left relative z-10">
//             <h1 className="text-4xl lg:text-6xl font-bold text-[#f48e6c] transition-all hover:scale-110 hover-brightness-110">
//               BrunoPay
//             </h1>
//             <p className="text-xl mt-2 text-[#5fcbbc] transition-all hover:scale-110 hover-brightness-110">
//               For Coders, By Coders
//             </p>
//           </div>
//         </div>

//         {/* Cards Section */}
//         <div className="relative flex sm:flex-row flex-col justify-center items-center z-10 mb-20 flex-shrink">
//           {/* Left Card with Glow */}
//           <div className="relative max-sm:-mb-10 sm:mt-0 sm:-mr-12  z-20">
//             <div className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30 z-10"></div>
//             <img
//               src="https://brunogg69.github.io/icons/cards/kernel-card.svg"
//               alt="Left Card"
//               className="w-64 sm:w-80 relative transition-all hover:scale-110 hover-brightness-110 z-20"
//             />
//           </div>

//           {/* Main Card with Glow */}
//           <div className="relative sm:scale-110 z-30 mx-6">
//             <div
//               ref={cardRef}
//               className="relative transition-transform duration-300"
//             >
//               <div className="absolute top-0 left-0 w-full h-full bg-[#9067c6] blur-3xl rounded-lg opacity-40 z-20"></div>
//               <img
//                 src="https://brunogg69.github.io/icons/cards/quantum-card.svg"
//                 alt="Main Card"
//                 className="w-80 sm:w-96 relative transition-all hover:scale-110 hover-brightness-110 z-30"
//               />
//             </div>
//           </div>

//           {/* Right Card with Glow */}
//           <div className="relative max-sm:-mt-10 sm:mt-0 sm:-ml-12 z-20">
//             <div className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30 z-10"></div>
//             <img
//               src="https://brunogg69.github.io/icons/cards/script-card.svg"
//               alt="Right Card"
//               className="w-64 sm:w-80 relative transition-all hover:scale-110 hover-brightness-110 z-20"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import profilePic from "../assets/profilePic-noBackground.png";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const movingCardRef = useRef(null);
  const textBelowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (movingCardRef.current) {
        movingCardRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      if (textBelowRef.current) {
        textBelowRef.current.style.opacity = scrollY > 200 ? 1 : 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] bg-black overflow-x-hidden">
      {/* Cards */}
      <div className="flex flex-row items-center justify-center mb-8">
        {/* First Card */}
        <div className="sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 relative z-10">
          {/* First Card Content */}
        </div>

        {/* Middle Card that moves on scroll */}
        <div className="text-left relative z-10">
          <h1
            ref={movingCardRef}
            className="text-4xl lg:text-6xl font-bold text-[#f48e6c] transition-all hover:scale-110 hover-brightness-110"
          >
            {/* Middle Card Content */}
          </h1>
        </div>

        {/* Third Card */}
        <div className="sm:ml-4 mb-4 sm:mb-0 flex-shrink-0 relative z-10">
          {/* Third Card Content */}
        </div>
      </div>

      {/* Text below the moving card */}
      <div
        ref={textBelowRef}
        className="text-center text-white mt-8 transition-opacity duration-500 opacity-0"
      >
        <p>This text appears below the middle card when it moves down.</p>
      </div>
    </section>
  );
};

export default HeroSection;