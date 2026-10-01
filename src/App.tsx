import React, { useState, useEffect } from 'react';
import { PageId } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ForBusinessesPage } from './pages/ForBusinessesPage.tsx';
import { JoinONBPage } from './pages/JoinONBPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { CaseStudiesPage } from './pages/CaseStudiesPage.tsx';
import { InsightsPage } from './pages/InsightsPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash routing on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'for-businesses',
        'join-onb',
        'contact',
        'case-studies',
        'insights',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'for-businesses':
        return <ForBusinessesPage onNavigate={handleNavigate} />;
      case 'join-onb':
        return <JoinONBPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CaseStudiesPage onNavigate={handleNavigate} />;
      case 'insights':
        return <InsightsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-[#E2E8F0] flex flex-col selection:bg-[#3B68A8] selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page View */}
      <main className="flex-grow">{renderCurrentPage()}</main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Privacy / Terms Modal */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
}
