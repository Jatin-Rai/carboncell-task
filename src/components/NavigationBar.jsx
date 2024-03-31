/* eslint-disable react/prop-types */
import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { FaHome, FaBitcoin } from 'react-icons/fa';
import { SlGraph } from 'react-icons/sl';

const NavigationBar = ({ isSidebarOpen, toggleSidebar }) => {
    const navLinks = [
        { to: "/", text: "Home", icon: <FaHome /> },
        { to: "population", text: "Population", icon: <SlGraph /> },
        { to: "crypto-price-today", text: "Crypto Price Today", icon: <FaBitcoin /> }
    ];

    return (
        <div className={`container w-80 h-screen p-5 bg-green-500 shadow-lg transition-all duration-500 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-80"}`}>
            <div className='flex justify-between items-center mb-10'>
                <h3 className='font-semibold text-3xl'>
                    <Link to="/">CarbonCell</Link>
                </h3>
                <FiX className='text-4xl cursor-pointer hover:text-black' onClick={toggleSidebar} />
            </div>

            <div className='relative mb-10'>
                <input type="text" className="w-full p-2 border-2 border-gray-400 rounded-md bg-black text-white" placeholder="Search..." />
                <FiSearch className='absolute top-3 right-3 text-gray-500' />
            </div>

            <div className="flex flex-col gap-3 font-semibold">
                {navLinks.map((link, index) => (
                    <NavLink key={index} to={link.to} className={({ isActive }) => isActive ? "flex gap-4 p-4 text-2xl items-center rounded text-black bg-gray-50" : "flex gap-4 p-4 text-2xl items-center rounded hover:text-black hover:bg-gray-50"}>
                        {link.icon}
                        {link.text}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default NavigationBar;
