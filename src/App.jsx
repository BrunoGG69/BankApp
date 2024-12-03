import "./animation.css";
import Navbar from "./sections/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import Features from "./sections/OurCardsSection.jsx";

function App() {
    return (
        <main className="relative bg-black font-jetbrains overflow-hidden">
            <div className="lines">
                <div className="line -z-2"></div>
                <div className="line -z-2"></div>
                <div className="line"></div>
            </div>
            <Navbar />
            <div className="padding">
                <HeroSection/>
            </div>
            <div className="padding">
                <AboutSection/>
            </div>
            <div className="padding">
                <Features/>
            </div>

        </main>
    );
}

export default App;

