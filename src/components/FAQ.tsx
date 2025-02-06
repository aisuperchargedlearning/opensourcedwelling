import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What makes ACRE8 development unique?",
      answer: "ACRE8 offers an unprecedented blend of luxury and nature, with just 8 exclusive homes thoughtfully positioned across 10 acres. Each residence is designed to maximize privacy while maintaining harmony with the natural landscape."
    },
    {
      question: "What sustainable features are included?",
      answer: "Each home incorporates advanced solar integration, rainwater harvesting systems, native landscaping, and energy-efficient design. Our commitment to sustainability extends from individual homes to the entire community's infrastructure."
    },
    {
      question: "What is the development timeline?",
      answer: "The development follows a carefully planned four-phase approach, from site preparation to final completion. Current projections show completion in Q4 2024, with individual home construction beginning in Q3 2024."
    },
    {
      question: "How is privacy maintained between homes?",
      answer: "Strategic home placement, natural topography, and preserved vegetation create natural privacy buffers. Each home's orientation is carefully considered to maximize views while maintaining seclusion."
    },
    {
      question: "What amenities are included?",
      answer: "The development includes shared natural spaces, walking trails, and sustainable infrastructure. Each home site is carefully positioned to take advantage of natural features while maintaining privacy."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#E5D3C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-lg text-[#1A1A1A] mb-12">Frequently asked questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-[#1A1A1A]/20"
            >
              <button
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl text-[#1A1A1A] font-light">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-[#1A1A1A]" size={24} />
                ) : (
                  <Plus className="text-[#1A1A1A]" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-[#1A1A1A]/80 font-light">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}