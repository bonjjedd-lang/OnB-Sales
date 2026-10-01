import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { ONBLogo } from './ONBLogo.tsx';
import { PageId } from '../types/index.ts';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'For Businesses', id: 'for-businesses' },
    { label: 'Join ONB', id: 'join-onb' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-[#1E293B]/70 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-[#1E293B]/30 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div onClick={() => handleNavClick('home')} className="flex items-center cursor-pointer">
            <ONBLogo size="md" variant="lockup-horizontal" showSubtitle={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm tracking-wide font-medium transition-colors py-1 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B68A8] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('join-onb')}
              className="text-xs uppercase tracking-wider font-semibold text-[#94A3B8] hover:text-white px-3 py-2 transition-colors cursor-pointer"
            >
              JOIN ONB
            </button>

            <button
              onClick={() => handleNavClick('for-businesses')}
              className="inline-flex items-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] active:scale-[0.98] text-white text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-[#3B68A8]/20 cursor-pointer"
            >
              <span>WORK WITH ONB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => handleNavClick('for-businesses')}
              className="bg-[#3B68A8] text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-md cursor-pointer"
            >
              WORK WITH ONB
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94A3B8] hover:text-white bg-[#0D111A] border border-[#1E293B] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#080B11]/98 backdrop-blur-xl z-50 flex flex-col p-6 lg:hidden border-t border-[#1E293B] overflow-y-auto">
          <div className="space-y-2 py-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between text-left py-3.5 px-4 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#3B68A8]/10 text-white border border-[#3B68A8]/30 font-semibold'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#0D111A]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${isActive ? 'text-[#3B68A8]' : 'text-[#475569]'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="mt-auto pt-6 border-t border-[#1E293B] flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('for-businesses')}
              className="w-full flex items-center justify-center gap-2 bg-[#3B68A8] hover:bg-[#2F578C] text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-[#3B68A8]/25 cursor-pointer"
            >
              <span>WORK WITH ONB</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavClick('join-onb')}
              className="w-full flex items-center justify-center gap-2 bg-[#0D111A] hover:bg-[#161D2B] text-white border border-[#1E293B] font-semibold text-sm uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <span>JOIN ONB AS SALES TALENT</span>
            </button>

            <div className="pt-4 text-center">
              <p className="text-xs text-[#64748B] uppercase tracking-widest font-mono">
                BUILD THE TEAM · BUILD THE PROCESS · BUILD THE PIPELINE
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
