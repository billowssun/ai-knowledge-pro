import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DomainContent from './components/DomainContent';
import TechDeepDive from './components/TechDeepDive';
import VendorMatrix from './components/VendorMatrix';
import TimelineSidebar from './components/TimelineSidebar';
import FooterTimeline from './components/FooterTimeline';
import SearchModal from './components/SearchModal';
import { domainsData, generalTimeline } from './data/data.js';
import './App.css';

export default function App() {
  const [activeDomain, setActiveDomain] = useState(domainsData[0]);
  const [activeVendor, setActiveVendor] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDomainChange = (domain) => {
    if (domain.id === activeDomain?.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveDomain(domain);
      setActiveVendor(null);
      setIsTransitioning(false);
    }, 150);
  };

  const handleSearchResultClick = (domain, vendor) => {
    setActiveDomain(domain);
    setActiveVendor(vendor);
    setIsSearchOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-indigo-100 flex flex-col">
      <Header 
        domainsData={domainsData} 
        activeDomain={activeDomain} 
        onDomainChange={handleDomainChange} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex-1">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          
          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6 sm:space-y-10">
            <DomainContent activeDomain={activeDomain} />
            <TechDeepDive activeDomain={activeDomain} />
            <VendorMatrix 
              activeDomain={activeDomain} 
              activeVendor={activeVendor} 
              setActiveVendor={setActiveVendor} 
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-4">
            <TimelineSidebar activeDomain={activeDomain} />
          </div>
          
        </div>
      </main>

      <FooterTimeline generalTimeline={generalTimeline} />
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelect={handleSearchResultClick} 
      />
    </div>
  );
}