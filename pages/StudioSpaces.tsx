import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { PAGES } from '../constants';
import { Page } from '../types';
import { useScrollAnimation } from '../hooks/usePageTitle';

const pageInfo = PAGES.find(p => p.path === Page.StudioSpaces)!;

const StudioCard: React.FC<{
  imageUrl: string;
  title: string;
  subtitle: string;
  features: string[];
}> = ({ imageUrl, title, subtitle, features }) => {
  const cardRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const textRef = useScrollAnimation();

  return (
    <div ref={cardRef} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-accent-black p-8 md:p-12 border border-gray-800 scroll-animate scroll-animate--fade-up">
      <div ref={imageRef} className="aspect-w-16 aspect-h-9 overflow-hidden scroll-animate scroll-animate--slide-right">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div ref={textRef} className="scroll-animate scroll-animate--slide-left" style={{transitionDelay: '200ms'}}>
        <h3 className="text-3xl font-heading font-bold uppercase text-primary">{title}</h3>
        <p className="mt-2 font-heading text-lg text-accent-gold">{subtitle}</p>
        <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
          {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
        <Link to={Page.BookNow} className="mt-8 inline-block bg-transparent border-2 border-accent-gold text-accent-gold font-heading uppercase px-8 py-3 rounded-md transition-all duration-300 hover:bg-accent-gold hover:text-neutral-warm">
          View Pricing & Availability
        </Link>
      </div>
    </div>
  );
};

const StudioSpaces: React.FC = () => {
  const ctaRef = useScrollAnimation();
  return (
    <PageWrapper title={pageInfo.title} description={pageInfo.description}>
      <div className="pt-20">
        <header className="py-12 md:py-24 bg-neutral-warm text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter">Our <span className="text-primary">Studio Spaces</span></h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
              Three distinct, modular environments designed for performance, flexibility, and cinematic quality. Each space is equipped to meet the demands of modern content creation.
            </p>
          </div>
        </header>

        <section className="py-20 bg-neutral-warm">
          <div className="container mx-auto px-6 space-y-16">
            <StudioCard 
              imageUrl="https://picsum.photos/800/600?random=1"
              title="Cyclorama Studio"
              subtitle="The Infinite Canvas"
              features={[
                "6x4m infinity curve for seamless backgrounds",
                "360° programmable lighting rail",
                "Modular, customizable floor surface",
                "Perfect for video, photo shoots, and green screen work"
              ]}
            />
            <StudioCard 
              imageUrl="https://picsum.photos/800/600?random=2"
              title="Podcast Studio"
              subtitle="High-Fidelity Audio & Video"
              features={[
                "Professionally soundproofed room",
                "Full-day or express session bookings",
                "Multi-microphone and 4K camera-ready",
                "Live-streaming and recording capabilities"
              ]}
            />
            <StudioCard 
              imageUrl="https://picsum.photos/800/600?random=3"
              title="Kitchen Studio"
              subtitle="The Culinary Stage"
              features={[
                "Fully-equipped modern kitchen set",
                "Optimized for food and product capture",
                "Temperature-controlled lighting for perfect shots",
                "Ideal for chefs, brands, and content creators"
              ]}
            />
          </div>
        </section>

        <section ref={ctaRef} className="py-20 md:py-32 bg-accent-black scroll-animate scroll-animate--fade-up">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">Combined <span className="text-primary">Packages</span></h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-300">Maximize your production day by bundling our spaces. Get seamless access to multiple sets for complex, multi-format projects.</p>
              <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="border border-gray-800 p-8 bg-neutral-warm">
                      <h3 className="font-heading text-xl text-accent-gold">Cyclorama + Podcast</h3>
                      <p className="text-gray-400 mt-2">Shoot your main content and record high-quality audio segments in one booking.</p>
                  </div>
                  <div className="border border-gray-800 p-8 bg-neutral-warm">
                      <h3 className="font-heading text-xl text-accent-gold">Cyclorama + Cuisine</h3>
                      <p className="text-gray-400 mt-2">Perfect for product shoots combined with lifestyle or culinary content.</p>
                  </div>
                  <div className="border border-gray-800 p-8 bg-neutral-warm">
                      <h3 className="font-heading text-xl text-accent-gold">Full-Day Creative Bundle</h3>
                      <p className="text-gray-400 mt-2">Exclusive access to all three studios for the ultimate production flexibility.</p>
                  </div>
              </div>
               <Link to={Page.BookNow} className="mt-12 inline-block bg-primary text-accent-white font-heading uppercase px-12 py-4 rounded-md transition-transform duration-300 hover:scale-105">
                  Book a Package
              </Link>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default StudioSpaces;