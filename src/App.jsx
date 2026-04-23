import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DomainContent from './components/DomainContent';
import TechDeepDive from './components/TechDeepDive';
import VendorMatrix from './components/VendorMatrix';
import TimelineSidebar from './components/TimelineSidebar';
import FooterTimeline from './components/FooterTimeline';
import { domainsData, generalTimeline } from './data/data';

export default function App() {
  const [activeDomain, setActiveDomain] = useState(domainsData[0]);
  const [activeVendor, setActiveVendor] = useState(null);

  const handleDomainChange = (domain) => {
    setActiveDomain(domain);
    setActiveVendor(null);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-indigo-100 flex flex-col">
      <Header 
        domainsData={domainsData} 
        activeDomain={activeDomain} 
        onDomainChange={handleDomainChange} 
      />

      <main className="max-w-7xl mx-auto px-6 py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="order-2 lg:order-1 lg:col-span-8 space-y-10">
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
    </div>
  );
}