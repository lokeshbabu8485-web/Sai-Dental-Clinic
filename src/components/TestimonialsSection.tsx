import React from 'react';
import { 
  MessageSquare, 
  Quote, 
  Star, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { testimonials } from '../config/clinicData';

export const TestimonialsSection: React.FC = () => {
  const hasReviews = testimonials.length > 0;

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>4.9 / 5 Rated by Patients</span>
          </div>

          <h2 
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#004a5c] tracking-tight mb-4"
          >
            What Our Patients Say in <span className="text-[#ea580c]">Bengaluru East</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real experiences from patients who entrusted their smiles and oral health to Sai Dental Care.
          </p>
        </div>

        {/* Reviews Grid */}
        {hasReviews && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Treatment Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-400 gap-0.5">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {t.treatment && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-[#0d9488] border border-teal-100">
                        {t.treatment}
                      </span>
                    )}
                  </div>

                  <Quote className="w-7 h-7 text-[#004a5c]/25 mb-2" />

                  <p className="text-slate-700 text-sm leading-relaxed mb-6">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <div>
                    <div className="font-bold text-[#004a5c] text-sm flex items-center gap-1">
                      <span>{t.patientName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-[11px] text-slate-400">{t.date}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                    {t.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Google Reviews Trust Badge */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-black text-xl text-[#ea580c] shadow-2xs">
              4.9
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start text-amber-500 gap-0.5 mb-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Verified Google Reviews • Sai Dental Care, Bengaluru East
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Genuine Patients</span>
          </div>
        </div>

      </div>
    </section>
  );
};
