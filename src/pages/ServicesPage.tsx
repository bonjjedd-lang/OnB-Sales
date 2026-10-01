import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Target,
  Users,
  Compass,
  Layers,
  MessageSquare,
  Search,
  Filter,
  RefreshCw,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../types/index.ts';
import { servicesData } from '../data/servicesData.ts';
import { RingMotif } from '../components/RingMotif.tsx';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const activeService =
    servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#1E293B]">
        <RingMotif className="top-10 right-10" size={550} opacity={0.15} />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
            SALES CAPABILITIES
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            FRONT-END SALES SERVICES.
            <br />
            <span className="text-[#94A3B8]">STRUCTURED FOR EXECUTION.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed max-w-3xl">
            We help companies engineer, staff, and run the front-end layer of sales. Our focus is
            built around conversational discipline, rigorous qualification, and consistent remote
            execution—never unverified mass lead scraping.
          </p>

          {/* Positioning clarification banner */}
          <div className="p-4 sm:p-5 bg-[#0D111A] border-l-4 border-[#3B68A8] rounded-r-xl max-w-2xl">
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              <span className="text-white font-bold block mb-1">
                A Note on How We Operate:
              </span>
              ONB is an emerging sales firm focused on people, process, and performance. We are not a
              lead-generation reseller, call center, or offshore list-broker.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE SERVICE EXPLORER & DEEP DIVE
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          {/* Service Selector Tabs */}
          <div className="mb-12">
            <div className="text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-4">
              SELECT A SERVICE TO REVIEW SPECIFICATIONS
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
              {servicesData.map((svc, index) => {
                const isActive = svc.id === selectedServiceId;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceId(svc.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#3B68A8] text-white shadow-lg shadow-[#3B68A8]/25'
                        : 'bg-[#0D111A] text-[#94A3B8] hover:text-white border border-[#1E293B]'
                    }`}
                  >
                    <span className="font-mono text-xs opacity-60 mr-1.5">0{index + 1}</span>
                    {svc.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Service Showcase Card */}
          <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: What It Is & Context */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#3B68A8] tracking-widest uppercase block mb-1">
                    SERVICE OVERVIEW
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                    {activeService.title}
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  <div>
                    <h3 className="text-xs font-mono uppercase text-[#64748B] tracking-wider mb-1 font-semibold">
                      WHAT IT IS
                    </h3>
                    <p className="text-white font-medium">{activeService.whatItIs}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase text-[#64748B] tracking-wider mb-1 font-semibold">
                      HOW ONB APPROACHES IT
                    </h3>
                    <p className="text-[#94A3B8]">{activeService.fullDesc}</p>
                  </div>
                </div>

                {activeService.highlight && (
                  <div className="p-4 bg-[#080B11] border border-[#1E293B] rounded-xl text-xs text-[#94A3B8]">
                    <span className="text-[#3B68A8] font-bold block mb-1 font-mono uppercase">
                      Core Principle
                    </span>
                    {activeService.highlight}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('for-businesses')}
                    className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-[#3B68A8]/20 cursor-pointer"
                  >
                    <span>DISCUSS THIS SERVICE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Focus & Process Steps */}
              <div className="lg:col-span-6 space-y-8 lg:border-l lg:border-[#1E293B] lg:pl-10">
                {/* What ONB Focuses On */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase text-[#3B68A8] tracking-widest font-bold">
                    WHAT ONB FOCUSES ON
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
                    {activeService.focus.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#3B68A8] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What the Process Involves */}
                <div className="space-y-4 pt-6 border-t border-[#1E293B]">
                  <h3 className="text-xs font-mono uppercase text-white tracking-widest font-bold">
                    WHAT THE PROCESS INVOLVES
                  </h3>
                  <div className="space-y-3">
                    {activeService.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#080B11] border border-[#1E293B] rounded-xl flex items-start gap-3 text-xs sm:text-sm text-[#94A3B8]"
                      >
                        <span className="font-mono text-[#3B68A8] font-bold">0{idx + 1}</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ALL 7 SERVICES COMPREHENSIVE GRID VIEW
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E17] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase mb-2">
              CATALOG OF CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              ALL SEVEN SPECIALIZATIONS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#94A3B8]">
              Each offering can be deployed independently to resolve specific operational
              bottlenecks or integrated into an end-to-end remote sales development engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc, i) => (
              <div
                key={svc.id}
                className="bg-[#080B11] border border-[#1E293B] rounded-2xl p-7 flex flex-col justify-between hover:border-[#3B68A8]/60 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                    <span>SERVICE 0{i + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B68A8]" />
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#3B68A8] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-[#94A3B8] leading-relaxed">{svc.shortDesc}</p>

                  <div className="pt-2 space-y-2 border-t border-[#1E293B]/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">
                      KEY EMPHASIS
                    </span>
                    <ul className="text-xs text-[#CBD5E1] space-y-1.5">
                      {svc.focus.slice(0, 3).map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 truncate">
                          <span className="w-1 h-1 rounded-full bg-[#3B68A8]" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedServiceId(svc.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="text-xs font-mono text-[#3B68A8] hover:text-white uppercase tracking-wider cursor-pointer"
                  >
                    View Details ↑
                  </button>

                  <button
                    onClick={() => onNavigate('for-businesses')}
                    className="p-1.5 rounded-lg bg-[#0D111A] border border-[#1E293B] text-[#94A3B8] group-hover:text-white group-hover:border-[#3B68A8] transition-colors cursor-pointer"
                    aria-label={`Inquire about ${svc.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM CTA
          ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            NOT SURE WHICH CAPACITY YOUR PIPELINE NEEDS?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Let&apos;s evaluate where your sales development currently drops off—whether it&apos;s initial
            qualification, consistent follow-up cadences, or team execution bandwidth.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('for-businesses')}
              className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-[#3B68A8]/25 cursor-pointer"
            >
              <span>SCHEDULE A BUSINESS CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
