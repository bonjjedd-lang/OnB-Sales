import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Users,
  Layers,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Search,
  Filter,
  RefreshCw,
  PhoneCall,
  UserCheck,
} from 'lucide-react';
import { PageId } from '../types/index.ts';
import { ONBLogo } from '../components/ONBLogo.tsx';
import { RingMotif } from '../components/RingMotif.tsx';
import { FounderSection } from '../components/FounderSection.tsx';
import { homeServiceCards } from '../data/servicesData.ts';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B]">
        {/* Subtle circular ring motif inspired by the logo */}
        <RingMotif className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={780} opacity={0.18} />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* Official ONB Logo Badge */}
          <div className="flex justify-center pt-2">
            <ONBLogo size="lg" variant="badge" showSubtitle={true} className="shadow-2xl shadow-black hover:scale-105 transition-transform" />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D111A] border border-[#1E293B] text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8] animate-pulse" />
            ONB SALES FIRM
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] uppercase">
            BUILD THE TEAM.
            <br />
            BUILD THE PROCESS.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B68A8] via-[#5C89C7] to-white">
              BUILD THE PIPELINE.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#94A3B8] leading-relaxed font-normal">
            ONB is a sales firm building remote sales teams and helping businesses strengthen the
            people and processes behind their sales development.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('for-businesses')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#3B68A8]/25 cursor-pointer"
            >
              <span>WORK WITH ONB</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('join-onb')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D111A] hover:bg-[#141A26] active:scale-[0.98] text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl border border-[#1E293B] hover:border-[#3B68A8]/50 transition-all cursor-pointer"
            >
              <span>JOIN ONB</span>
              <ChevronRight className="w-4 h-4 text-[#3B68A8]" />
            </button>
          </div>

          {/* Trust Banner / Domain Focus Flag */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#64748B] font-mono uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
              Front-End Sales Specialization
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
              Dedicated Remote Sales Teams
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
              Practical Talent Development
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: SALES IS MORE THAN SENDING MESSAGES
          ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0E17] border-b border-[#1E293B] relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-3">
              PERSPECTIVE & DISCIPLINE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              SALES ISN&apos;T JUST SENDING MESSAGES.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Strong sales development is built around people who know how to communicate, qualify
              opportunities, follow up consistently, and create a clear path toward the next
              conversation.
            </p>
          </div>

          {/* 4 Visual Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* UNDERSTAND */}
            <div className="bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8]/50 rounded-2xl p-7 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[#0D111A] border border-[#1E293B] flex items-center justify-center text-[#3B68A8] mb-6 group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-1">
                STEP 01
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                UNDERSTAND
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Understand the prospect, situation, needs, and context.
              </p>
            </div>

            {/* QUALIFY */}
            <div className="bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8]/50 rounded-2xl p-7 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[#0D111A] border border-[#1E293B] flex items-center justify-center text-[#3B68A8] mb-6 group-hover:scale-105 transition-transform">
                <Filter className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-1">
                STEP 02
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                QUALIFY
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Identify whether the opportunity is actually worth moving forward.
              </p>
            </div>

            {/* FOLLOW UP */}
            <div className="bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8]/50 rounded-2xl p-7 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[#0D111A] border border-[#1E293B] flex items-center justify-center text-[#3B68A8] mb-6 group-hover:scale-105 transition-transform">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-1">
                STEP 03
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                FOLLOW UP
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Keep conversations moving without losing momentum.
              </p>
            </div>

            {/* MOVE FORWARD */}
            <div className="bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8]/50 rounded-2xl p-7 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-[#0D111A] border border-[#1E293B] flex items-center justify-center text-[#3B68A8] mb-6 group-hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-1">
                STEP 04
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                MOVE FORWARD
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Create a clear path toward the next sales conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: THREE PILLARS (PEOPLE. PROCESS. PERFORMANCE.)
          ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] border-b border-[#1E293B] relative overflow-hidden">
        <RingMotif className="top-10 right-0 translate-x-1/2" size={500} opacity={0.12} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
              FOUNDATIONAL ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              PEOPLE. PROCESS. PERFORMANCE.
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8]">
              Sales development does not succeed through chance or volume alone. It succeeds when
              capable people follow an intentional process with rigorous accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: PEOPLE */}
            <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-8 relative flex flex-col justify-between group hover:border-[#3B68A8]/60 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B68A8]/10 border border-[#3B68A8]/30 flex items-center justify-center text-[#3B68A8]">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  PILLAR 01
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">PEOPLE</h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  Develop capable sales professionals who understand communication, qualification,
                  follow-up, and professional sales execution.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-xs font-mono text-[#3B68A8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
                Human-Centered Communication
              </div>
            </div>

            {/* Card 2: PROCESS */}
            <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-8 relative flex flex-col justify-between group hover:border-[#3B68A8]/60 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B68A8]/10 border border-[#3B68A8]/30 flex items-center justify-center text-[#3B68A8]">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  PILLAR 02
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">PROCESS</h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  Build structured sales processes that give teams clarity around how conversations
                  should be handled.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-xs font-mono text-[#3B68A8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
                Repeatable Workflow Clarity
              </div>
            </div>

            {/* Card 3: PERFORMANCE */}
            <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-8 relative flex flex-col justify-between group hover:border-[#3B68A8]/60 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B68A8]/10 border border-[#3B68A8]/30 flex items-center justify-center text-[#3B68A8]">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  PILLAR 03
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                  PERFORMANCE
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  Create accountability around consistent execution, quality conversations, qualified
                  opportunities, and booked sales conversations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-xs font-mono text-[#3B68A8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
                Disciplined Accountability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: WHAT ONB DOES (8 SERVICE CARDS)
          ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0E17] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-3">
                CORE CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                BUILT AROUND THE FRONT END OF SALES.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#3B68A8] hover:text-white transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServiceCards.map((service, index) => (
              <div
                key={service.title}
                onClick={() => onNavigate('services')}
                className="bg-[#080B11] border border-[#1E293B] hover:border-[#3B68A8] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B] mb-4">
                    <span>0{index + 1}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#64748B] group-hover:text-[#3B68A8] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#3B68A8] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#1E293B]/60 text-[11px] font-mono text-[#64748B] uppercase tracking-wider group-hover:text-white transition-colors">
                  View Framework →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: HOW WE WORK (4 STEPS)
          ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] border-b border-[#1E293B] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
              METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              A SIMPLE PROCESS. A STRUCTURED APPROACH.
            </h2>
            <p className="text-base text-[#94A3B8]">
              We eliminate ambiguity through a clear four-phase deployment cycle designed for
              continuous execution and refinement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-7 relative space-y-4">
              <div className="text-xs font-mono font-bold text-[#3B68A8] tracking-widest">
                PHASE 01
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">UNDERSTAND</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Understand the business, offer, audience, and sales process.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-7 relative space-y-4">
              <div className="text-xs font-mono font-bold text-[#3B68A8] tracking-widest">
                PHASE 02
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">PREPARE</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Prepare the people, messaging, qualification approach, and workflow.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-7 relative space-y-4">
              <div className="text-xs font-mono font-bold text-[#3B68A8] tracking-widest">
                PHASE 03
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">EXECUTE</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Engage prospects, follow up, qualify conversations, and move suitable opportunities
                toward sales calls.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-7 relative space-y-4">
              <div className="text-xs font-mono font-bold text-[#3B68A8] tracking-widest">
                PHASE 04
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">IMPROVE</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Review execution, identify gaps, develop the team, and improve the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: FOR BUSINESSES (TEASER)
          ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0E17] border-b border-[#1E293B] relative overflow-hidden">
        <RingMotif className="top-1/2 right-10 -translate-y-1/2" size={600} opacity={0.14} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
                FOR BUSINESSES
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                YOUR SALES PROCESS NEEDS THE RIGHT PEOPLE BEHIND IT.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                <p>
                  Businesses don&apos;t only need a sales strategy. They need people who can consistently
                  execute the process behind it.
                </p>
                <p>
                  ONB helps businesses build or strengthen the sales development layer through
                  capable people, structured processes, and consistent execution.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('for-businesses')}
                  className="inline-flex items-center justify-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#3B68A8]/20 cursor-pointer"
                >
                  <span>WORK WITH ONB</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 bg-[#080B11] hover:bg-[#121722] text-[#CBD5E1] hover:text-white border border-[#1E293B] font-semibold text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-colors cursor-pointer"
                >
                  <span>REVIEW SERVICE OFFERINGS</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-8 space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold pb-2 border-b border-[#1E293B]">
                  WHAT BUSINESSES GAIN
                </h3>
                <ul className="space-y-4 text-sm text-[#CBD5E1]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B68A8] flex-shrink-0 mt-0.5" />
                    <span>Clear prospect qualification before meetings reach closing reps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B68A8] flex-shrink-0 mt-0.5" />
                    <span>Structured multi-touch follow-up cadences that prevent lead slippage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B68A8] flex-shrink-0 mt-0.5" />
                    <span>Accountable remote sales personnel operating under disciplined rhythms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B68A8] flex-shrink-0 mt-0.5" />
                    <span>No ungrounded conversion promises—only honest, repeatable execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: JOIN ONB (TEASER)
          ======================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080B11] border-b border-[#1E293B] relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
              FOR SALES TALENT
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              BUILD YOUR SALES CAREER WITH ONB.
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              ONB is building a remote sales team for people who want to develop practical sales
              skills, gain experience, improve their communication, and grow within a structured team
              environment.
            </p>
          </div>

          {/* Development Path */}
          <div className="mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-[#64748B] mb-4">
              THE DEVELOPMENT PATH
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 bg-[#0D111A] border border-[#1E293B] rounded-xl">
                <span className="text-xs font-mono text-[#3B68A8] block mb-1">01</span>
                <span className="text-lg font-bold text-white block">LEARN</span>
                <span className="text-xs text-[#94A3B8]">Understand sales fundamentals</span>
              </div>
              <div className="p-5 bg-[#0D111A] border border-[#1E293B] rounded-xl">
                <span className="text-xs font-mono text-[#3B68A8] block mb-1">02</span>
                <span className="text-lg font-bold text-white block">PRACTICE</span>
                <span className="text-xs text-[#94A3B8]">Conversations & objection handling</span>
              </div>
              <div className="p-5 bg-[#0D111A] border border-[#1E293B] rounded-xl">
                <span className="text-xs font-mono text-[#3B68A8] block mb-1">03</span>
                <span className="text-lg font-bold text-white block">PERFORM</span>
                <span className="text-xs text-[#94A3B8]">Apply skills in real environments</span>
              </div>
              <div className="p-5 bg-[#0D111A] border border-[#1E293B] rounded-xl">
                <span className="text-xs font-mono text-[#3B68A8] block mb-1">04</span>
                <span className="text-lg font-bold text-white block">GROW</span>
                <span className="text-xs text-[#94A3B8]">Continuous feedback & accountability</span>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-8 mb-10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#64748B] mb-6">
              SKILLS YOU MAY DEVELOP WITH ONB
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-[#CBD5E1]">
              {[
                'Prospect communication',
                'Appointment setting',
                'Qualification',
                'Follow-up',
                'Objection handling',
                'Sales communication',
                'Professional communication',
                'Remote team collaboration',
                'Accountability',
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Explicit disclaimer as strictly required */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-[#0D111A] border border-[#1E293B] rounded-xl">
            <p className="text-xs text-[#64748B] leading-relaxed max-w-2xl">
              * Note: Joining the application process does not guarantee employment, income, or
              career placement. ONB focuses on practical skills training, structured onboarding, and
              accountability for motivated individuals.
            </p>

            <button
              onClick={() => onNavigate('join-onb')}
              className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <span>JOIN ONB</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: FOUNDER (BUILT BY A SALESPERSON...)
          ======================================================== */}
      <FounderSection showExtendedBackground={false} />

      {/* ========================================================
          BOTTOM CONVERSION STRIP
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D111A] text-center border-t border-[#1E293B]">
        <div className="max-w-4xl mx-auto space-y-6">
          <ONBLogo variant="mark" size="sm" className="mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            READY TO STRENGTHEN YOUR SALES PIPELINE?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Whether you are a growing business seeking structured outbound execution or an ambitious
            individual ready to develop real sales capability, start a conversation with ONB.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('for-businesses')}
              className="w-full sm:w-auto bg-[#3B68A8] hover:bg-[#2F578C] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-[#3B68A8]/20 cursor-pointer"
            >
              WORK WITH ONB (BUSINESSES)
            </button>
            <button
              onClick={() => onNavigate('join-onb')}
              className="w-full sm:w-auto bg-[#080B11] hover:bg-[#141A26] text-white border border-[#1E293B] text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              APPLY TO JOIN ONB (SALES TALENT)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
