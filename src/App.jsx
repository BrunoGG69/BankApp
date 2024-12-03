import "./animation.css"  ;
import Navbar from "./sections/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";

function App() {
    return (
        <main className=" font-jetbrains " >
            <div className="lines">
                <div className="line -z-2"></div>
                <div className="line -z-2" ></div>
                <div className="line"></div>
            </div>
            <Navbar/>
            <div className="padding">
                <HeroSection/>
            </div>
            <div>
                <HeroSection/>
            </div>
        </main>
    );
}

export default App;
