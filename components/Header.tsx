import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PAGES } from '../constants';
import { Page } from '../types';

const Logo = () => (
    <NavLink to="/" className="text-2xl md:text-3xl font-heading font-bold tracking-tighter text-accent-white hover:text-primary transition-colors duration-300">
        TROIS SIX NEUF
    </NavLink>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    }, [location]);

    const toggleMenu = () => {
        const nextState = !isMenuOpen;
        setIsMenuOpen(nextState);
        document.body.style.overflow = nextState ? 'hidden' : 'auto';
    };

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `relative font-heading tracking-wide text-sm uppercase after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:transition-transform after:duration-300 after:ease-in-out ${
            isActive ? 'text-primary after:bg-primary after:scale-x-100' : 'text-accent-white hover:text-primary after:bg-primary after:scale-x-0 hover:after:scale-x-100'
        }`;

    const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `text-4xl font-heading uppercase transition-colors duration-300 ${isActive ? 'text-primary' : 'text-accent-white hover:text-primary'}`;

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-neutral-warm/80 backdrop-blur-md z-50 transition-shadow duration-300 shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Logo />
                    <nav className="hidden lg:flex items-center space-x-8">
                        {PAGES.filter(p => p.path !== Page.Home).map((page) => (
                            <NavLink key={page.path} to={page.path} className={navLinkClasses}>
                                {page.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <NavLink to={Page.BookNow} className="hidden lg:block bg-primary text-accent-white font-heading text-sm uppercase px-6 py-2 rounded-md transition-transform duration-300 hover:scale-105">
                            Book a Session
                        </NavLink>
                        <button onClick={toggleMenu} className="lg:hidden z-50 text-accent-white" aria-label="Toggle menu">
                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-neutral-warm z-40 transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <nav className="flex flex-col space-y-8">
                        {PAGES.map((page) => (
                            <NavLink key={page.path} to={page.path} className={mobileNavLinkClasses}>
                                {page.name}
                            </NavLink>
                        ))}
                    </nav>
                     <NavLink to={Page.BookNow} className="mt-12 bg-primary text-accent-white font-heading text-lg uppercase px-10 py-4 rounded-md transition-transform duration-300 hover:scale-105">
                        Book a Session
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;