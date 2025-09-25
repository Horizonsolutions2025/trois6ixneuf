import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { PAGES } from '../constants';
import { Page } from '../types';
import { useScrollAnimation } from '../hooks/usePageTitle';

const pageInfo = PAGES.find(p => p.path === Page.BookNow)!;

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="border-b border-gray-700 py-4 group">
    <summary className="font-heading text-xl text-accent-gold cursor-pointer list-none flex justify-between items-center">
      {question}
      <span className="text-primary transform transition-transform duration-300 group-open:rotate-45">+</span>
    </summary>
    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-open:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <div className="pt-4 text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </details>
);

const BookNow: React.FC = () => {
  const faqRef = useScrollAnimation();
  return (
    <PageWrapper title={pageInfo.title} description={pageInfo.description}>
      <div className="pt-20">
        <header className="py-12 md:py-24 bg-neutral-warm text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-7xl font-heading font-bold uppercase tracking-tighter">Book Your <span className="text-primary">Session</span></h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
              Reserve your studio time using our real-time availability calendar. For custom packages or creative service inquiries, please contact us directly.
            </p>
          </div>
        </header>

        <section className="py-10 bg-neutral-light">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://troissixneufstudio.setmore.com" 
                scrolling="yes" 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Booking Calendar"
              ></iframe>
            </div>
          </div>
        </section>

        <section ref={faqRef} className="py-20 md:py-32 bg-accent-black scroll-animate scroll-animate--fade-up">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight text-center mb-12">Booking <span className="text-primary">FAQs</span></h2>
                <div className="space-y-4">
                    <FaqItem question="What should I bring to my session?">
                        <p>We recommend bringing any specific props, wardrobe, or equipment essential to your project. While we offer a range of add-on rentals, your core creative assets should be brought with you. Don't forget storage media like hard drives or SD cards for your data!</p>
                    </FaqItem>
                    <FaqItem question="Is setup and breakdown time included in my booking?">
                        <p>Your booking time includes both setup and breakdown. Please plan your session accordingly to ensure you have enough time to prepare your set and pack up within your reserved slot. We recommend arriving a few minutes early to check in.</p>
                    </FaqItem>
                    <FaqItem question="Is support staff available?">
                        <p>A studio manager will be on-site to assist with check-in, basic questions, and facility orientation. For dedicated technical support, such as a camera operator or lighting technician, please book them through our Creative Services add-ons or contact us for a custom quote.</p>
                    </FaqItem>
                    <FaqItem question="What is your cancellation policy?">
                        <p>We require at least 48 hours' notice for cancellations to receive a full refund or to reschedule. Cancellations made within 48 hours of the booking time are non-refundable. Please see our full Booking Policy for details.</p>
                    </FaqItem>
                </div>
            </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default BookNow;