import React from 'react';
import { Clock, ShieldCheck, ArrowRight, Layers, Target, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types/index.ts';
import { RingMotif } from '../components/RingMotif.tsx';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#1E293B]">
        <RingMotif className="top-10 right-1/4" size={600} opacity={0.15} />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3B68A8] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3B68A8]" />
            PROVEN WORK & RESULTS
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            CASE STUDIES & PORTFOLIO.
          </h1>

          <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl">
            We believe trust is earned through verifiable performance, not fabricated logos or
            inflated vanity metrics.
          </p>
        </div>
      </section>

      {/* Transparent Coming Soon / In-Progress Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D111A] border border-[#1E293B] rounded-2xl p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#3B68A8]/10 border border-[#3B68A8]/30 flex items-center justify-center text-[#3B68A8] mx-auto">
              <Clock className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3B68A8] font-bold">
                PORTFOLIO ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                CASE STUDIES WILL APPEAR HERE AS ONB BUILDS ITS PORTFOLIO
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
                ONB is an emerging sales firm being intentionally built from the ground up. Rather
                than displaying unverified logos, synthetic testimonials, or exaggerated conversion
                claims, we let our process speak for itself.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto text-left">
              <div className="p-4 bg-[#080B11] border border-[#1E293B] rounded-xl space-y-1">
                <span className="text-xs font-mono text-[#3B68A8] font-bold block">STANDARD 01</span>
                <span className="text-sm font-bold text-white block">Real Accounts</span>
                <p className="text-xs text-[#94A3B8]">
                  Verified B2B outbound workflows with documented parameters.
                </p>
              </div>

              <div className="p-4 bg-[#080B11] border border-[#1E293B] rounded-xl space-y-1">
                <span className="text-xs font-mono text-[#3B68A8] font-bold block">STANDARD 02</span>
                <span className="text-sm font-bold text-white block">Verifiable Cadences</span>
                <p className="text-xs text-[#94A3B8]">
                  Real qualification milestones, attendance rates, and feedback.
                </p>
              </div>

              <div className="p-4 bg-[#080B11] border border-[#1E293B] rounded-xl space-y-1">
                <span className="text-xs font-mono text-[#3B68A8] font-bold block">STANDARD 03</span>
                <span className="text-sm font-bold text-white block">Team Development</span>
                <p className="text-xs text-[#94A3B8]">
                  Documented progression of remote sales talent from onboarding to live execution.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('for-businesses')}
                className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <span>BE AN EARLY ONB CLIENT PARTNER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="text-xs font-mono text-[#94A3B8] hover:text-white uppercase tracking-wider cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
