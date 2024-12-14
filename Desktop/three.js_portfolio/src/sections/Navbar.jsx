import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a
                        href={href}
                        className="nav-li_a text-dark-green hover:text-light-green transition-colors"
                        onClick={() => {}}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-navbar/80 backdrop-blur-sm shadow-lg"
        >
            {/* Remove max-w-7xl to make it full width */}
            <div className="w-full">
                <div className="flex justify-between items-center py-5 px-6">
                    <a
                        href="/"
                        className="text-dark-green font-bold text-xl hover:text-light-green transition-colors"
                    >
                        Nicole
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="text-dark-green hover:text-light-green focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div
                className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
