import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { PAGES } from '../constants';
import { Page } from '../types';
import { useScrollAnimation } from '../hooks/usePageTitle';

const pageInfo = PAGES.find(p => p.path === Page.CreativeServices)!;

const ServiceItem: React.FC<{ title: string, description: string, delay: number }> = ({ title, description, delay }) => {
    const itemRef = useScrollAnimation();
    return (
        <div 
            ref={itemRef}
            className="bg-accent-black p-8 border border-gray-800 transition-transform duration-500 hover:[transform:perspective(1000px)_rotateY(2deg)_scale(1.03)] scroll-animate scroll-animate--fade-up"
            style={{transitionDelay: `${delay}ms`}}
        >
            <h3 className="text-2xl font-heading text-accent-gold">{title}</h3>
            <p className="mt-4 text-gray-400">{description}</p>
        </div>
    );
};

const CreativeServices: React.FC = () => {
    const services = [
        { title: "Content Creation Support", description: "From concept to final cut, our in-house team can assist at any stage of your production pipeline." },
        { title: "Visual Identity Design", description: "Craft a compelling brand image with our design experts, specializing in logos, style guides, and digital assets." },
        { title: "Audio Post-Production", description: "Professional mixing, mastering, and sound design to give your audio content a polished, broadcast-quality finish." },
        { title: "Set Design & Styling", description: "Collaborate with our stylists to design and build custom sets that bring your creative vision to life within our spaces." },
        { title: "Equipment Add-Ons", description: "Access our inventory of high-end cinema cameras, lenses, lighting, and grip equipment for your session." },
        { title: "Production Crew", description: "Hire professional camera operators, gaffers, sound engineers, and production assistants to support your shoot." }
    ];

    const ctaRef = useScrollAnimation();

    return (
        <PageWrapper title={pageInfo.title} description={pageInfo.description}>
            <div className="pt-20">
                <header className="py-12 md:py-24 bg-neutral-warm text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter">Creative <span className="text-primary">Services</span></h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                            More than just a space. We are a full-service production partner. Leverage our in-house talent and resources to elevate your content.
                        </p>
                    </div>
                </header>

                <section className="py-20 bg-neutral-warm">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => <ServiceItem key={service.title} {...service} delay={index * 100} />)}
                        </div>
                    </div>
                </section>

                 <section ref={ctaRef} className="py-20 md:py-32 bg-primary scroll-animate scroll-animate--fade-up">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-accent-white">Have a Project in Mind?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">Let's discuss how our creative services can align with your goals.</p>
                        <div className="mt-10">
                            <Link to={Page.Contact} className="bg-accent-gold text-neutral-warm font-heading uppercase px-12 py-4 rounded-md transition-transform duration-300 hover:scale-105 inline-block">
                               Book a Consultation
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default CreativeServices;