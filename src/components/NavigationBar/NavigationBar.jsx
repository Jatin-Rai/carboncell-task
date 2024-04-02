/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { FaHome, FaBitcoin } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";

const NavigationBar = ({ isSidebarOpen, toggleSidebar }) => {
    const navLinks = [
        { to: "/", text: "Home", icon: <FaHome /> },
        { to: "population", text: "Population", icon: <SlGraph /> },
        { to: "crypto-price-today", text: "Crypto Price Today", icon: <FaBitcoin /> },
    ];

    return (
        <div className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-green-500 ${isSidebarOpen ? "" : "-translate-x-full"}`}>
            <div className="flex justify-between items-center p-5">
                <h3 className="font-semibold text-3xl text-white">
                    <Link to="/">CarbonCell</Link>
                </h3>
                <FiX className="text-4xl text-white cursor-pointer hover:text-black" onClick={toggleSidebar} />
            </div>

            <div className="flex flex-col gap-3 font-semibold px-2">
                {navLinks.map((link, index) => (
                    <NavLink key={index} to={link.to} className={({ isActive }) => isActive ? "flex gap-4 p-4 text-xl items-center rounded text-black bg-gray-50" : "flex gap-4 p-4 text-xl items-center rounded hover:text-black hover:bg-gray-50"}>
                        {link.icon}
                        {link.text}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default NavigationBar;
