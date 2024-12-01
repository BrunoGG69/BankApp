import React, { useState } from "react";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`transition-all duration-300 ${
                isCollapsed
                    ? "w-16"
                    : "w-[18rem] sm:w-[20rem] md:w-[22rem] lg:w-[24rem]"
            } bg-white h-full rounded-r-3xl shadow-lg`}
        >

            {/* Collapse Toggle */}
            <div
                className={`${
                    isCollapsed ? "flex justify-center" : "flex justify-end pr-4"
                } cursor-pointer p-2 text-[#0a3981] font-bold`}
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? ">" : "<"}
            </div>


            {/* Sidebar Content */}
            {!isCollapsed && (
                <div className="p-6">
                    {/* Profile Section */}
                    <div className="flex items-center mb-6">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-full w-[6rem] h-[6rem] mr-4 border-4 border-[#0a3981]"
                        />
                        <div>
                            <h2 className="text-[#0a3981] font-bold text-lg">
                                Prathamesh Prabhakar
                            </h2>
                            <p className="text-sm text-gray-500">Member Since 2024</p>
                        </div>
                    </div>

                    {/* Pay Now Button */}
                    <button
                        className="btn bg-[#0a3981] text-white w-full  rounded-3xl mb-6 shadow-md hover:bg-[#06245a]">
                        <h1 className = "flex items-center justify-center text-xl">Pay Now</h1>
                    </button>

                    {/* Spending Limit */}
                    <div className="text-[#0a3981] text-sm mb-6">
                        <p>Spending Limit:</p>
                        <div className="w-full h-6 bg-gray-200 rounded-full mt-1">
                            <div
                                className="h-6 bg-[#0a3981] rounded-full"
                                style={{width: "50%"}}
                            ></div>
                        </div>
                    </div>

                    {/* Credit Score */}
                    <div className="text-[#0a3981] text-sm mb-6">
                        <p>Credit Score:</p>
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                            <span className="ml-2 font-semibold">Good</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <button
                        className="btn bg-[#0a3981] text-white w-full py-3 rounded-xl mb-4 shadow-md hover:bg-[#06245a]">
                        Transaction History
                    </button>
                    <button className="btn bg-[#0a3981] text-white w-full py-3 rounded-xl shadow-md hover:bg-[#06245a]">
                        Cards
                    </button>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
