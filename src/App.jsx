import "./animation.css"  ;
import Navbar from "./sections/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";

function App() {
    return (
        <main className="relative bg-black font-jetbrains">
            <div className="lines">
                <div className="line "></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <Navbar/>
            <div className="padding">
                <HeroSection/>
            </div>
        </main>
    );
}

export default App;
