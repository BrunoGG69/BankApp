import profilePic from "../assets/profilePic-noBackground.png";

const Footer = () => {
    return (
        <footer className="bg-black py-6 relative z-30">
            <div className="container mx-auto px-4">
                <div className="flex flex-row items-center justify-center space-x-4">
                    <img
                        src={profilePic}
                        width="40"
                        height="40"
                        alt="BrunoPay Logo"
                        className="rounded-full"
                    />
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} BrunoPay. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

