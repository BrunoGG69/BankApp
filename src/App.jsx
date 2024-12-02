import HeroSection from "./sections/HeroSection.jsx";
import Navbar from "./sections/Navbar.jsx";

function App() {
    return (
        <main >
            <Navbar/>
            <div className="bg-[#15151b] font-jetbrains">
                <HeroSection/>
            </div>
        </main>
    );
}

export default App;
