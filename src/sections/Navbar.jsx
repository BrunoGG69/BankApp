const Navbar = () => {
    return (
        <nav className="bg-black text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-bold text-[#f48e6c] text-2xl">BrunoPay</h1>
                <ul className="flex space-x-6">
                    <li><a href="#home" className="text-lg hover:text-[#5fcbbc]">Home</a></li>
                    <li><a href="#features" className="text-lg hover:text-[#5fcbbc]">Features</a></li>
                    <li><a href="#about" className="text-lg hover:text-[#5fcbbc]">About</a></li>
                    <li><a href="#contact" className="text-lg hover:text-[#5fcbbc]">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;