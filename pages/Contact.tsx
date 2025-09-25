import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { PAGES } from '../constants';
import { Page } from '../types';
import { useScrollAnimation } from '../hooks/usePageTitle';

const pageInfo = PAGES.find(p => p.path === Page.Contact)!;

const Contact: React.FC = () => {
    const contactInfoRef = useScrollAnimation();
    const contactFormRef = useScrollAnimation();

    return (
        <PageWrapper title={pageInfo.title} description={pageInfo.description}>
            <div className="pt-20">
                <header className="py-12 md:py-24 bg-neutral-warm text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter">Get In <span className="text-primary">Touch</span></h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                            We're here for bookings, collaborations, and studio tours. Let's start the conversation.
                        </p>
                    </div>
                </header>

                <section className="py-20 bg-accent-black">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                        {/* Contact Info & Map */}
                        <div ref={contactInfoRef} className="scroll-animate scroll-animate--slide-right">
                            <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-primary">Contact Info</h2>
                            <div className="mt-6 space-y-4 text-gray-300">
                                <p><strong>Address:</strong> 36 Rue de la Réunion, Casablanca</p>
                                <p><strong>Phone:</strong> <a href="tel:05222-04315" className="hover:text-primary">05222-04315</a></p>
                                <p><strong>Email:</strong> <a href="mailto:trois6neuf.studio@gmail.com" className="hover:text-primary">trois6neuf.studio@gmail.com</a></p>
                                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/trois.six.neuf" target="_blank" rel="noopener noreferrer" className="hover:text-primary">@trois.six.neuf</a></p>
                            </div>
                            <div className="mt-8 bg-gray-800 aspect-w-16 aspect-h-9 flex items-center justify-center">
                                <p className="text-gray-500">Map Embed Placeholder</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div ref={contactFormRef} className="scroll-animate scroll-animate--slide-left" style={{transitionDelay: '200ms'}}>
                            <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-primary">Send a Message</h2>
                            <form className="mt-6 space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input type="text" id="name" placeholder="Your Name" className="w-full bg-neutral-warm border border-gray-700 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                 <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" id="email" placeholder="Your Email" className="w-full bg-neutral-warm border border-gray-700 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                 <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea id="message" rows={5} placeholder="Your Message" className="w-full bg-neutral-warm border border-gray-700 p-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-accent-white font-heading uppercase px-10 py-3 rounded-md transition-transform duration-300 hover:scale-105">
                                    Start Your Project With Us
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Contact;