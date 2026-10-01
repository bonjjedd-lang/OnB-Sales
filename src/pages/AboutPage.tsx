import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Sparkles, Clock, Target, Layers } from 'lucide-react';
import { PageId } from '../types/index.ts';
import { RingMotif } from '../components/RingMotif.tsx';
import { FounderSection } from '../components/FounderSection.tsx';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20 border-b border-[#1E293B]">
        <RingMotif className="top-10 right-1/4" size={600} opacity={0.15} />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
            ABOUT ONB SALES FIRM
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            WE&apos;RE BUILDING ONB FROM THE GROUND UP.
          </h1>

          <div className="space-y-4 text-base sm:text-xl text-[#CBD5E1] leading-relaxed">
            <p className="font-semibold text-white">
              ONB was created around a simple idea: Strong sales development requires more than a script.
            </p>
            <p>
              It requires capable people, clear processes, consistent communication, and accountability.
            </p>
            <p>
              ONB is being built to sit at the intersection of sales development and sales talent
              development.
            </p>
            <p className="text-[#94A3B8]">
              We work with businesses that need stronger sales execution, while also developing sales
              professionals who want practical experience and structured growth.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('for-businesses')}
              className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-[#3B68A8]/20 cursor-pointer"
            >
              <span>WORK WITH ONB</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('join-onb')}
              className="inline-flex items-center gap-2 bg-[#0D111A] hover:bg-[#141A26] border border-[#1E293B] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <span>JOIN THE TEAM</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY ONB EXISTS
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E17] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-2">
              THE MISSION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              WHY ONB EXISTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* The Business Need */}
            <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-8 space-y-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#3B68A8] uppercase tracking-wider mb-2">
                  THE BUSINESS REALITY
                </div>
                <h3 className="text-2xl font-bold text-white uppercase mb-3">
                  Businesses need capable people to execute sales processes.
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Companies invest thousands in sales tech stacks, CRM licenses, and lead databases,
                  yet their pipelines stall because no one is consistently executing the daily
                  conversational work. A sales strategy on paper is powerless without disciplined,
                  consistent human communicators to execute it.
                </p>
              </div>
              <div className="pt-6 border-t border-[#1E293B] flex items-center gap-2 text-xs font-mono text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#3B68A8]" />
                <span>Reliable front-end execution layer</span>
              </div>
            </div>

            {/* The Talent Opportunity */}
            <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-8 space-y-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#3B68A8] uppercase tracking-wider mb-2">
                  THE TALENT OPPORTUNITY
                </div>
                <h3 className="text-2xl font-bold text-white uppercase mb-3">
                  Developing sales professionals need real opportunities to learn and practice.
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Most people wanting to enter sales are thrown onto phones without context, given
                  rigid robotic scripts, or denied opportunities for lack of experience. They need
                  deliberate practice, constructive feedback, psychological safety, and realistic
                  frameworks that teach them how to actually converse.
                </p>
              </div>
              <div className="pt-6 border-t border-[#1E293B] flex items-center gap-2 text-xs font-mono text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#3B68A8]" />
                <span>Practical skill cultivation & feedback</span>
              </div>
            </div>
          </div>

          {/* Connection Bridge */}
          <div className="mt-8 p-6 sm:p-8 bg-[#0D111A] border border-[#1E293B] rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#3B68A8] font-bold">
                  THE INTERSECTION
                </span>
                <p className="text-base text-white font-medium">
                  ONB is being built to connect those two needs through structured sales development
                  and remote team building.
                </p>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-[#64748B] block">
                  PEOPLE · PROCESS · PERFORMANCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR CORE PRINCIPLES
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-2">
              STANDARDS OF WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              WHAT WE BELIEVE IN
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0D111A] border border-[#1E293B] rounded-xl space-y-3">
              <h3 className="text-lg font-bold text-white uppercase">No Spam Mass Blasts</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Sales development is not about blasting 10,000 generic emails a day to damage domain
                reputations. It is about understanding prospect context and initiating thoughtful,
                relevant dialogue.
              </p>
            </div>

            <div className="p-6 bg-[#0D111A] border border-[#1E293B] rounded-xl space-y-3">
              <h3 className="text-lg font-bold text-white uppercase">Rigorous Qualification</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Protecting our clients’ time is as crucial as generating meetings. A packed calendar
                of unqualified leads is a net negative for any serious business.
              </p>
            </div>

            <div className="p-6 bg-[#0D111A] border border-[#1E293B] rounded-xl space-y-3">
              <h3 className="text-lg font-bold text-white uppercase">Genuine Accountability</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Every remote team member operates under daily cadence, activity transparency, and
                regular review sessions. We measure real inputs and honest output quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT SAMUEL (FOUNDER SECTION WITH EXTENDED BACKGROUND)
          ======================================================== */}
      <FounderSection showExtendedBackground={true} />

      {/* ========================================================
          HONEST PORTFOLIO & TRACK RECORD STATUS
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E17]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-8 sm:p-10 text-center space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#3B68A8]/10 border border-[#3B68A8]/30 flex items-center justify-center text-[#3B68A8] mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest">
              TRANSPARENCY & TRACK RECORD
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
              CASE STUDIES WILL APPEAR HERE AS ONB BUILDS ITS PORTFOLIO
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              We do not fabricate client logos, fake revenue figures, or invent anonymous testimonials.
              As ONB completes client engagements and documents real pipeline results, verified case
              studies will be published here with complete fidelity.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#3B68A8] hover:text-white uppercase tracking-widest font-semibold cursor-pointer"
              >
                <span>Inquire About Early Client Onboarding →</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
