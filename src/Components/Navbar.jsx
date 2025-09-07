import React from "react";
import { Routes, Route, Link } from "react-router-dom";


// import "./Navbar.css"; 

const Navbar = () => {
    return (
    <nav className="bg-gray-800 p-4 text-white font-mono " >
            <ul className="flex justify-between items-center font-mono ">
                <li>
                    <Link to="/">
                        <h2 className="text-2xl font-bold text-teal-400 font-mono">E-Commerce</h2>
                    </Link>
                </li>
                <li className="flex space-x-6 font-mono">
                    <Link to="/AboutUs" className="hover:text-teal-400 transition-colors duration-200 font-mono">
                        About Us
                    </Link>
                    <Link to="/Services" className="hover:text-teal-400 transition-colors duration-200 font-mono">
                        Services
                    </Link>
                    <Link to="/Products" className="hover:text-teal-400 transition-colors duration-200 font-mono">
                        Products
                    </Link>
                    <Link to="/ContactUs" className="hover:text-teal-400 transition-colors duration-200 font-mono">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};



export default Navbar;