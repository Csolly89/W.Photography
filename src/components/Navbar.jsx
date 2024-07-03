import React, { useState } from 'react';
import { Link } from "react-router-dom"
import NavLink from "./NavLink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Services",
        path: "/services",
    },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
            <nav className="fixed m-2 w-[95vw] lg:w-auto lg:right-0 z-40 text-background border-2 border-white border-opacity-40 backdrop-blur-sm rounded-3xl ">
                <div className="flex items-center justify-between">
                    <Link to={"/"} className="text-4xl lg:hidden font-Header ml-4" onClick={() => setNavbarOpen(false)}>
                        <h1>Walker Photography</h1>
                    </Link>

                    {/* main navbar links */}
                    <div className="menu hidden md:block md:w-auto " id="navbar">
                        <ul className="flex flex-row mr-5 justify-between gap-2 ">
                            {navLinks.map((link, index) => (
                                <li
                                    className="font-Title lg:text-xl md:text-lg "
                                    key={index}
                                >
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mobile-menu visible md:hidden mr-5">
                        {!navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center p-1 text-background"
                            >
                                <Bars3Icon className="h-6 w-6" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center p-1 border rounded-xl border-background text-background"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                </div>
                {/* mobile display menu */}
                <div className="">
                    {navbarOpen ? (
                        <div className="absolute h-full w-full flex justify-center ">
                            <ul className="h-[calc(95vh-3.5rem)] w-[90vw] flex flex-col gap-10 justify-center items-center text-3xl rounded-3xl mt-2 bg-black bg-opacity-60 border-2 border-white border-opacity-40 backdrop-blur-sm md:hidden">
                                {navLinks.map((link, index) => (
                                    <li
                                        className="text-background font-Body"
                                        key={index}
                                        onClick={() => setNavbarOpen(false)}
                                    >
                                        <NavLink href={link.path} title={link.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </nav>
    );
}

export default Navbar;