import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { PAGES } from '../constants';
import { Page } from '../types';
import { useScrollAnimation } from '../hooks/usePageTitle';

const pageInfo = PAGES.find(p => p.path === Page.About)!;

const About: React.FC = () => {
  const visionRef = useScrollAnimation();
  const quoteRef = useScrollAnimation();
  const btsRef = useScrollAnimation();

  return (
    <PageWrapper title={pageInfo.title} description={pageInfo.description}>
      <div className="pt-20">
        <header className="py-12 md:py-24 bg-neutral-warm text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter">A Lab For <span className="text-primary">Creators</span></h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
              Built by professionals, for professionals. We understand the nuances of production and have designed a space that anticipates your every need.
            </p>
          </div>
        </header>
        
        <section ref={visionRef} className="py-20 bg-accent-black scroll-animate scroll-animate--fade-up">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate scroll-animate--slide-right">
                  <img src="https://picsum.photos/800/1000?random=4" alt="Studio founders" className="w-full h-full object-cover"/>
              </div>
              <div className="scroll-animate scroll-animate--slide-left" style={{transitionDelay: '200ms'}}>
                   <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">Our <span className="text-primary">Vision</span></h2>
                   <p className="mt-6 text-gray-300 leading-relaxed">
                      Trois Six Neuf was born from a simple idea: to create a production environment in Casablanca that rivals the best in Europe. We saw a need for a space that wasn't just functional, but inspirational—a place where technology, design, and creative energy converge.
                   </p>
                   <p className="mt-4 text-gray-300 leading-relaxed">
                      Our philosophy is workflow-first. Every outlet, every light rail, and every acoustic panel has been meticulously planned to remove friction from the creative process. We want you to walk in, plug in, and start creating, confident that the infrastructure will not only keep up but enhance your vision.
                   </p>
              </div>
          </div>
        </section>

        <section ref={quoteRef} className="py-20 md:py-32 bg-neutral-warm scroll-animate scroll-animate--fade-up">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <blockquote className="text-2xl md:text-4xl font-heading text-accent-white leading-tight">
                  “We designed Trois Six Neuf to be more than a space — <span className="text-accent-gold">it’s a catalyst</span>. A place where an idea can be nurtured, developed, and executed to the highest standard, all under one roof.”
              </blockquote>
              <p className="mt-6 font-heading text-lg text-gray-400">- The Founders</p>
            </div>
        </section>

        <section ref={btsRef} className="py-20 bg-accent-black scroll-animate scroll-animate--fade-up">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-center mb-12">Behind The <span className="text-primary">Scenes</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[5, 6, 7, 8].map((num, index) => (
                    <div key={num} className="aspect-w-1 aspect-h-1 scroll-animate scroll-animate--scale-in" style={{transitionDelay: `${index * 150}ms`}}>
                      <img src={`https://picsum.photos/500/500?random=${num}`} className="w-full h-full object-cover" alt={`BTS ${index + 1}`} />
                    </div>
                  ))}
              </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;