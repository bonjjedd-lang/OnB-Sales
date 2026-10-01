import React from 'react';
import { ArrowUpRight, Linkedin, Shield } from 'lucide-react';
import { ONBLogo } from './ONBLogo.tsx';
import { PageId } from '../types/index.ts';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-[#1E293B] pt-16 pb-12 overflow-hidden text-[#94A3B8]">
      {/* Subtle ring background decoration */}
      <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 pointer-events-none opacity-10">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="200" stroke="#3B68A8" strokeWidth="2" strokeDasharray="8 8" />
          <circle cx="250" cy="250" r="140" stroke="#3B68A8" strokeWidth="1" />
          <circle cx="250" cy="250" r="70" stroke="#3B68A8" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#1E293B]/70">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div onClick={() => handleNav('home')} className="cursor-pointer">
              <ONBLogo size="md" variant="lockup-horizontal" showSubtitle={true} />
            </div>

            <div className="pt-2">
              <p className="text-white font-bold tracking-wider text-sm font-mono uppercase">
                BUILD THE TEAM.
                <br />
                BUILD THE PROCESS.
                <br />
                <span className="text-[#3B68A8]">BUILD THE PIPELINE.</span>
              </p>
            </div>

            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
              ONB is an emerging sales firm building remote sales teams and helping businesses
              strengthen the people and processes behind their front-end sales development.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0D111A] border border-[#1E293B] hover:border-[#3B68A8] hover:text-white transition-colors text-xs font-medium cursor-pointer"
                aria-label="ONB on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#3B68A8]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About ONB
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('for-businesses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  For Businesses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('join-onb')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Join ONB
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Focus & Future Sections */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Sales Focus & Perspectives
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-[#94A3B8]">
              <div className="p-3 bg-[#0A0E17] border border-[#1E293B] rounded-xl space-y-1">
                <span className="text-white font-semibold block">Front-End Sales Discipline</span>
                <p>
                  Specialized in appointment setting, qualification, multi-touch follow-up, and
                  remote SDR team structures.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => handleNav('case-studies')}
                  className="text-xs text-[#94A3B8] hover:text-[#3B68A8] transition-colors underline cursor-pointer"
                >
                  Case Studies (Portfolio Status)
                </button>
                <span>·</span>
                <button
                  onClick={() => handleNav('insights')}
                  className="text-xs text-[#94A3B8] hover:text-[#3B68A8] transition-colors underline cursor-pointer"
                >
                  Sales Insights
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-4">
            <span>© 2026 ONB. All rights reserved.</span>
            <span>·</span>
            <span>ONB Sales Firm</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#94A3B8] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#94A3B8] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
