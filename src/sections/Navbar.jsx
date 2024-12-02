const Navbar = () => {
    return (
        <div className="navbar bg-black  font-bold text-[#5fcbbc]">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl font-bold ">BrunoPay</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Compare</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;