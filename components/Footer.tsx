
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const Footer: React.FC = () => {
    return (
        <footer className="bg-accent-black text-neutral-light py-12 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: Logo & Address */}
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-heading font-bold tracking-tighter text-accent-white">TROIS SIX NEUF</h3>
                    <p className="mt-4 text-sm text-gray-400">36 Rue de la Réunion,<br/>Casablanca, Morocco</p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="font-heading uppercase tracking-wider text-gray-300">Explore</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link to={Page.StudioSpaces} className="text-gray-400 hover:text-primary transition-colors">Studio Spaces</Link></li>
                        <li><Link to={Page.CreativeServices} className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to={Page.About} className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
                        <li><Link to={Page.BookNow} className="text-gray-400 hover:text-primary transition-colors">Book Now</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h4 className="font-heading uppercase tracking-wider text-gray-300">Contact</h4>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><a href="tel:05222-04315" className="hover:text-primary transition-colors">05222-04315</a></li>
                        <li><a href="mailto:trois6neuf.studio@gmail.com" className="hover:text-primary transition-colors">trois6neuf.studio@gmail.com</a></li>
                    </ul>
                </div>

                {/* Column 4: Social */}
                <div>
                    <h4 className="font-heading uppercase tracking-wider text-gray-300">Follow</h4>
                    <div className="mt-4 flex space-x-4">
                        <a href="https://www.instagram.com/trois.six.neuf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.07 0-4.57.017-6.176.09-1.606.073-2.715.36-3.66.795-.98.45-1.783 1.256-2.233 2.233-.436.945-.722 2.055-.795 3.66C-1.583 7.745-.6 8.246-.6 12.315c0 4.07-.017 4.57-.09 6.176-.073 1.606-.36 2.715-.795 3.66.45 1.014 1.256 1.783 2.233 2.233.945.436 2.055.722 3.66.795 1.606.073 2.106.09 6.176.09s4.57-.017 6.176-.09c1.606-.073 2.715-.36 3.66-.795.98-.45 1.783-1.256 2.233-2.233.436-.945.722-2.055.795-3.66.073-1.606.09-2.106.09-6.176s-.017-4.57-.09-6.176c-.073-1.606-.36-2.715-.795-3.66-.45-.98-1.256-1.783-2.233-2.233-.945-.436-2.055-.722-3.66-.795C16.885 2.017 16.385 2 12.315 2zM12 7.04c2.748 0 4.97 2.222 4.97 4.97s-2.222 4.97-4.97 4.97-4.97-2.222-4.97-4.97 2.222-4.97 4.97-4.97zm0 8.138c1.74 0 3.158-1.417 3.158-3.158S13.74 8.85 12 8.85s-3.158 1.417-3.158 3.158 1.417 3.168 3.158 3.168zm4.902-8.31a1.166 1.166 0 100-2.333 1.166 1.166 0 000 2.333z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Trois Six Neuf Studio. All Rights Reserved.</p>
                <p className="mt-2">Booking Policy</p>
            </div>
        </footer>
    );
};

export default Footer;

