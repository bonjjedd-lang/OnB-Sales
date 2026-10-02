import React from 'react';
import { UserCheck, Shield, Target, Compass, Sparkles } from 'lucide-react';
import { ONBLogo } from './ONBLogo.tsx';

interface FounderSectionProps {
  showExtendedBackground?: boolean;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  showExtendedBackground = false,
}) => {
  return (
    <section className="relative py-24 bg-[#080B11] border-t border-b border-[#1E293B] overflow-hidden">
      {/* Subtle ring background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-10">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#3B68A8" strokeWidth="1.5" strokeDasharray="5 7" />
          <circle cx="300" cy="300" r="200" stroke="#3B68A8" strokeWidth="2.5" />
          <circle cx="300" cy="300" r="110" stroke="#3B68A8" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-[#3B68A8] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
            FOUNDER & LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            BUILT BY A SALESPERSON.
            <br />
            <span className="text-[#94A3B8]">BEING BUILT WITH SALES PROFESSIONALS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Founder Identity Card */}
          <div className="lg:col-span-4 bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="relative">
              {/* Modern geometric avatar portrait representation */}
              <div className="w-full aspect-[3/4] max-w-xs rounded-2xl border-2 border-[#3B68A8]/40 shadow-xl overflow-hidden">
                <picture>
                  <source srcSet="/images/samuel-onibonoje.webp" type="image/webp" />
                  <img
                    src="/images/samuel-onibonoje.jpg"
                    alt="Samuel Onibonoje, Founder & Sales Team Lead of ONB Sales Firm"
                    width={720}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-2 right-2 w-6 h-6 rounded-full bg-[#0D111A] border-2 border-[#3B68A8] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#3B68A8]" />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-wide">Samuel Onibonoje</h3>
              <p className="text-xs uppercase tracking-widest text-[#3B68A8] font-semibold">
                Founder & Sales Team Lead, ONB
              </p>
            </div>

            <div className="pt-4 border-t border-[#1E293B] space-y-3 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2.5">
                <Target className="w-4 h-4 text-[#3B68A8] flex-shrink-0" />
                <span>Prospect Engagement & Qualification</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#3B68A8] flex-shrink-0" />
                <span>Appointment Setting & Cadence Design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-[#3B68A8] flex-shrink-0" />
                <span>People & Culture / HR Practitioner</span>
              </div>
            </div>

            {/* Core Brand Creed inside card */}
            <div className="p-4 bg-[#080B11] border border-[#1E293B] rounded-xl space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] block">
                CORE ORIENTATION
              </span>
              <p className="text-xs font-bold text-white tracking-wider leading-relaxed">
                PEOPLE + PROCESS + PERFORMANCE
              </p>
            </div>
          </div>

          {/* Founder Exact Story & Context */}
          <div className="lg:col-span-8 bg-[#0D111A]/60 border border-[#1E293B] rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="space-y-5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal">
              <p>
                Samuel is a Sales & Business Development professional focused on prospect
                engagement, qualification, follow-up, appointment setting, and professional
                communication.
              </p>

              <p>
                His experience in sales has taught him that strong sales development is not simply
                about sending more messages. It is about understanding people, asking better
                questions, following up consistently, qualifying opportunities, and creating a
                clear path to the next conversation.
              </p>

              <p>
                Alongside sales, Samuel is developing professionally in Human Resources and People &
                Culture while gaining practical experience in team and people-focused work.
              </p>

              <p>
                He is now building ONB to take the next step: developing other sales professionals
                while creating structured sales processes that businesses can actually use.
              </p>

              <p className="text-white font-medium">
                ONB is being built from the ground up around people, process, and performance.
              </p>
            </div>

            {/* If extended background requested on About page */}
            {showExtendedBackground && (
              <div className="mt-8 pt-6 border-t border-[#1E293B] space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] font-bold">
                  Additional Creative Foundation
                </h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Alongside his sales career, Samuel’s professional background also encompasses
                  practical experience in{' '}
                  <span className="text-white font-medium">UI/UX Design</span>,{' '}
                  <span className="text-white font-medium">Web Design</span>,{' '}
                  <span className="text-white font-medium">Graphic Design</span>, and{' '}
                  <span className="text-white font-medium">Videography</span>. This gives ONB a sharp
                  visual and structural discipline, though ONB remains strictly dedicated to sales
                  development and sales team building.
                </p>
              </div>
            )}

            {/* Core statement highlight banner */}
            <div className="pt-6 border-t border-[#1E293B]">
              <div className="p-5 bg-[#080B11] border-l-4 border-[#3B68A8] rounded-r-xl">
                <div className="font-mono text-sm sm:text-base font-extrabold text-white tracking-wider space-y-1">
                  <div>BUILD THE PEOPLE.</div>
                  <div>BUILD THE PROCESS.</div>
                  <div className="text-[#3B68A8]">BUILD THE PIPELINE.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
