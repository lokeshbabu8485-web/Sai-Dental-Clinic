import React from 'react';
import { MessageSquare, Quote, Heart, ShieldCheck } from 'lucide-react';
import { testimonials } from '../config/clinicData';

export const TestimonialsSection: React.FC = () => {
  const hasReviews = testimonials.length > 0;

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdfa] border border-teal-100 text-[#0d9488] text-xs font-bold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Patient Feedback</span>
          </div>

          <h2 
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] tracking-tight mb-4"
          >
            Patient <span className="text-[#004a5c]">Experiences</span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Genuine experiences from patients visiting Sai Dental Care in Bengaluru East.
          </p>
        </div>

        {/* Dynamic Reviews or Respectful Authentic Empty State */}
        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#0d9488]/40 mb-3" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-4">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-[#004a5c]">{t.patientName}</span>
                  <span>{t.date} • {t.source}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            id="testimonials-placeholder-state"
            className="max-w-2xl mx-auto bg-slate-50 rounded-2xl border border-slate-100 p-8 sm:p-10 text-center shadow-xs"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdfa] border border-teal-100 text-[#0d9488] flex items-center justify-center mx-auto mb-5">
              <Heart className="w-7 h-7" />
            </div>

            <h3 className="font-bold text-[#1f2937] text-xl mb-3">
              We Value Every Patient&apos;s Experience
            </h3>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
              Patient reviews will be displayed here as they become available. We take pride in building trusted, long-term relationships with every patient who visits our clinic.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-white text-slate-600 border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#0d9488]" />
              <span>Authentic reviews will be published directly from verified visits</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
