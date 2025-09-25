import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { PAGES } from '../constants';
import { Page } from '../types';
import { useScrollAnimation } from '../hooks/usePageTitle';

const pageInfo = PAGES.find(p => p.path === Page.Home)!;

const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Infrastructure',
      desc: 'High-speed connectivity, modular power grids, and a workflow-first layout designed for zero friction.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Cinematic Results',
      desc: 'Achieve professional-grade visuals with our state-of-the-art equipment and acoustically treated spaces.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'LED Programmable Lighting',
      desc: 'Full creative control with our 360° programmable lighting rail system to paint your scene with light.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Custom Workflows',
      desc: 'Flexible setups adaptable to any project, from solo creators to full production crews. We fit your needs.',
    },
];

const Home: React.FC = () => {
    const section1Ref = useScrollAnimation();
    const section2Ref = useScrollAnimation();
    const section3Ref = useScrollAnimation();
    const section4Ref = useScrollAnimation();
    const icon1Ref = useScrollAnimation();
    const icon2Ref = useScrollAnimation();
    const icon3Ref = useScrollAnimation();

    return (
        <PageWrapper title={pageInfo.title} description={pageInfo.description}>
            {/* Hero Section */}
            <section className="h-screen min-h-[700px] flex items-center justify-center bg-neutral-warm relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 hero-bg-animate" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-warm via-neutral-warm/50 to-transparent"></div>
                <div className="text-center z-10 px-6">
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tighter animate-fade-in-up">
                        Where Creativity
                        <br />
                        <span className="text-primary">Meets Control.</span>
                    </h1>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <Link to={Page.StudioSpaces} className="w-full sm:w-auto bg-transparent border-2 border-accent-gold text-accent-gold font-heading uppercase px-10 py-3 rounded-md transition-all duration-300 hover:bg-accent-gold hover:text-neutral-warm">
                            Explore the Studios
                        </Link>
                        <Link to={Page.BookNow} className="w-full sm:w-auto bg-primary text-accent-white font-heading uppercase px-10 py-3 rounded-md transition-transform duration-300 hover:scale-105">
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Split Section */}
            <section ref={section1Ref} className="py-20 md:py-32 bg-accent-black scroll-animate scroll-animate--fade-up">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">A Modular Hub for <span className="text-primary">Modern Creators</span></h2>
                        <p className="mt-6 text-gray-300 leading-relaxed">
                            Trois Six Neuf is a high-end creative and production boutique in Casablanca. We provide the space, tools, and support for creators to produce their best work, from cinematic video shoots to high-fidelity podcasts and culinary content.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div ref={icon1Ref} className="bg-neutral-warm p-6 text-center border border-gray-800 scroll-animate scroll-animate--scale-in" style={{ transitionDelay: '200ms' }}>
                             <h3 className="font-heading text-lg text-accent-gold uppercase">Cyclorama</h3>
                             <p className="text-sm text-gray-400 mt-2">Infinity curve for photo & video.</p>
                        </div>
                        <div ref={icon2Ref} className="bg-neutral-warm p-6 text-center border border-gray-800 scroll-animate scroll-animate--scale-in" style={{ transitionDelay: '350ms' }}>
                             <h3 className="font-heading text-lg text-accent-gold uppercase">Podcast</h3>
                             <p className="text-sm text-gray-400 mt-2">Soundproofed multi-mic setup.</p>
                        </div>
                        <div ref={icon3Ref} className="bg-neutral-warm p-6 text-center border border-gray-800 scroll-animate scroll-animate--scale-in" style={{ transitionDelay: '500ms' }}>
                             <h3 className="font-heading text-lg text-accent-gold uppercase">Kitchen</h3>
                             <p className="text-sm text-gray-400 mt-2">Professional set for food content.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section ref={section2Ref} className="py-20 md:py-32 bg-neutral-warm scroll-animate scroll-animate--fade-up">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">Engineered for <span className="text-primary">Excellence</span></h2>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, index) => (
                             <div key={item.title} className="border border-gray-800 p-8 text-center scroll-animate scroll-animate--fade-up" style={{transitionDelay: `${index * 150}ms`}}>
                                {item.icon}
                                <h3 className="font-heading text-xl text-accent-gold uppercase">{item.title}</h3>
                                <p className="mt-4 text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Client Logos Section */}
             <section ref={section3Ref} className="py-20 bg-accent-black scroll-animate scroll-animate--fade-up">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-lg font-heading uppercase tracking-widest text-gray-400">Trusted By Industry Leaders</h3>
                    <div className="mt-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
                         {['BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE'].map(brand => (
                            <div key={brand} className="font-heading text-2xl text-gray-500">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Final CTA */}
            <section ref={section4Ref} className="py-20 md:py-32 bg-primary scroll-animate scroll-animate--fade-up">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-accent-white">Ready to Create?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">Let's bring your vision to life. Book your space and get started today.</p>
                    <div className="mt-10">
                        <Link to={Page.BookNow} className="bg-accent-gold text-neutral-warm font-heading uppercase px-12 py-4 rounded-md transition-transform duration-300 hover:scale-105 inline-block">
                            Book Your Space
                        </Link>
                    </div>
                </div>
            </section>

        </PageWrapper>
    );
};

export default Home;