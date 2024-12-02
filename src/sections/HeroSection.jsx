import profilePic from "../assets/profilePic-noBackground.png";

const HeroSection = () => {
    return (
        <section className="flex flex-col  items-center justify-center min-h-[90vh] bg-black overflow-x-hidden">
            <div className="flex flex-col items-center justify-center">
                {/* Profile Picture and BrunoPay Logo */}
                <div className="flex flex-row items-center justify-center mb-8">
                    {/* Profile Picture */}
                    <div className="sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 relative z-10">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full transition-all hover:scale-110 hover-brightness-110"
                        />
                    </div>

                    {/* BrunoPay Logo */}
                    <div className="text-left relative z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#f48e6c] transition-all hover:scale-110 hover-brightness-110">
                            BrunoPay
                        </h1>
                        <p className="text-xl mt-2 text-[#5fcbbc] transition-all hover:scale-110 hover-brightness-110">
                            For Coders, By Coders
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="relative flex sm:flex-row flex-col justify-center items-center z-10 mb-20 flex-shrink">
                    {/* Left Card with Glow */}
                    <div className="relative max-sm:-mb-10 sm:mt-0 sm:-mr-12  z-20">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30 z-10"></div>
                        <img
                            src="https://brunogg69.github.io/icons/cards/kernel-card.svg"
                            alt="Left Card"
                            className="w-64 sm:w-80 relative transition-all hover:scale-110 hover-brightness-110 z-20"
                        />
                    </div>

                    {/* Main Card with Glow */}
                    <div className="relative sm:scale-110 z-30 mx-6">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#9067c6] blur-3xl rounded-lg opacity-40 z-20"></div>
                        <img
                            src="https://brunogg69.github.io/icons/cards/quantum-card.svg"
                            alt="Main Card"
                            className="w-80 sm:w-96 relative transition-all hover:scale-110 hover-brightness-110 z-30"
                        />
                    </div>

                    {/* Right Card with Glow */}
                    <div className="relative max-sm:-mt-10 sm:mt-0 sm:-ml-12 z-20">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30 z-10"></div>
                        <img
                            src="https://brunogg69.github.io/icons/cards/script-card.svg"
                            alt="Right Card"
                            className="w-64 sm:w-80 relative transition-all hover:scale-110 hover-brightness-110 z-20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
