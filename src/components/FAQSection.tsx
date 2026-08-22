import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { faqItems } from '../config/clinicData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>

          <h2 
            id="faqs-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] tracking-tight mb-4"
          >
            Frequently Asked <span className="text-[#004a5c]">Questions</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Find answers to general questions about booking appointments, your first visit, and clinic consultations.
          </p>

          {/* Quick Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g., appointment, first visit)..."
              className="w-full pl-11 pr-4 py-3.5 bg-white rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#004a5c] focus:border-transparent transition-all"
              id="faq-search-input"
            />
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4" id="faq-accordion-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-[#1f2937] text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="p-1.5 rounded-lg bg-slate-50 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#0d9488]" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className="px-5 pb-6 sm:px-6 pt-1 text-slate-500 text-sm sm:text-base leading-relaxed border-t border-slate-100"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 bg-white rounded-2xl border border-slate-200 p-6 text-slate-500">
              No matching questions found. Feel free to contact the clinic directly for any specific enquiry.
            </div>
          )}
        </div>

        {/* Bottom Help Notice */}
        <div className="mt-12 text-center bg-white rounded-2xl border border-slate-100 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-bold text-[#1f2937] text-base">Have a specific question not listed here?</h3>
            <p className="text-xs sm:text-sm text-slate-400">We are happy to assist with consultation inquiries.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#f0fdfa] hover:bg-teal-100 text-[#0d9488] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl border border-teal-100 transition-colors"
          >
            <span>Contact Clinic</span>
          </a>
        </div>

      </div>
    </section>
  );
};
