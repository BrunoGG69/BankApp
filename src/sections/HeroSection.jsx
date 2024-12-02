import profilePic from "../assets/profilePic-noBackground.png";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-black ">
            <div className="flex flex-row items-center justify-center m-10">
                {/* Profile Picture */}
                <div className="sm:mr-4 mb-4 sm:mb-0 flex-shrink-0">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full transition-all hover:scale-110 hover-brightness-110"
                    />
                </div>

                {/* BrunoPay Logo */}
                <div className="text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold text-[#f48e6c] transition-all hover:scale-110 hover-brightness-110">BrunoPay</h1>
                    <p className="text-xl mt-2 text-[#5fcbbc] transition-all hover:scale-110 hover-brightness-110">For Coders, By Coders</p>
                </div>
            </div>


            {/* Cards Section */}
            <div className="relative mt-12">
                {/* Image Container */}
                <div className="flex flex-col items-center sm:flex-row sm:justify-center relative">
                    {/* Left Card with Glow */}
                    <div className="relative sm:mt-0 -z-1 sm:-mr-12 -mt-15">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30"></div>
                        <img
                            src="https://brunogg69.github.io/icons/cards/kernel-card.svg"
                            alt="Left Card"
                            className="w-64 sm:w-80 opacity-80 relative transition-all hover:scale-110 hover-brightness-110"
                        />
                    </div>

                    {/* Main Card with Glow */}
                    <div className="relative sm:scale-110 z-10">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#9067c6] blur-3xl rounded-lg opacity-40 "></div>
                        <img
                            src="https://brunogg69.github.io/icons/cards/quantum-card.svg"
                            alt="Main Card"
                            className="w-80 sm:w-96 relative transition-all hover:scale-110 hover-brightness-110"
                        />
                    </div>

                    {/* Right Card with Glow */}
                    <div className="relative sm:mt-0 z-0 sm:-ml-12 -mt-12">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#5fcbbc] blur-2xl rounded-lg opacity-30"></div>
                        <img
                            src="https://brunogg69.github.io/icons/cards/script-card.svg"
                            alt="Right Card"
                            className="w-64 sm:w-80 opacity-80 relative transition-all hover:scale-110 hover-brightness-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
