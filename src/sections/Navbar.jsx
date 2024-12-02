import { useState } from "react";
import profilePic from "../assets/profilePic-noBackground.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // To handle the mobile dropdown menu

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar bg-transparent font-bold text-[#5fcbbc] relative z-30">
            {/* Left Side Button (BrunoPay with BrunoGG) */}
            <div className="flex-1 flex items-center">
                <a
                    className="btn btn-ghost text-2xl font-bold flex items-center"
                    href="/"
                >
                    {/* Profile Image or Icon */}
                    <img
                        src={profilePic} // Replace with your actual profile image URL
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                    />
                    <span>BrunoPay</span>
                </a>
            </div>

            {/* Menu for Large Screens */}
            <div className="hidden lg:flex flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Compare</a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-[#5fcbbc]">
                    <i
                        className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}
                        style={{ fontSize: "1.5rem" }}
                    ></i>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`lg:hidden absolute top-16 right-4 bg-[#15141d] text-white p-4 rounded-lg shadow-lg ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <ul className="menu">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Compare</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
