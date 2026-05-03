import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Header from './components/Header';
import DomainContent from './components/DomainContent';
import ErrorBoundary from './components/ErrorBoundary';
import { domainsData, generalTimeline } from './data/data';
import type { Domain, Vendor } from './types';
import './App.css';

const ScenarioShowcase = lazy(() => import('./components/ScenarioShowcase'));
const VendorMatrix = lazy(() => import('./components/VendorMatrix'));
const TimelineSidebar = lazy(() => import('./components/TimelineSidebar'));
const FooterTimeline = lazy(() => import('./components/FooterTimeline'));
const SearchModal = lazy(() => import('./components/SearchModal'));

const LoadingFallback = () => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded w-3/4" />
      <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded w-1/2" />
      <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded w-5/6" />
    </div>
  </div>
);

function EmptyApp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-slate-950 p-8">
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-10 max-w-md w-full text-center shadow-lg">
        <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2">数据加载异常</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">无法加载领域数据，请刷新页面重试。</p>
      </div>
    </div>
  );
}

const TRANSITION_DURATION = 300;

export default function App() {
  const initialDomain = domainsData.length > 0 ? domainsData[0] : null;
  const [activeDomain, setActiveDomain] = useState<Domain | null>(initialDomain);
  const [activeVendor, setActiveVendor] = useState<Vendor | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDomainChange = useCallback(
    (domain: Domain) => {
      if (domain.id === activeDomain?.id) return;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      setIsTransitioning(true);
      setActiveVendor(null);
      setTimeout(() => {
        setActiveDomain(domain);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    },
    [activeDomain?.id],
  );

  const handleSearchResultClick = useCallback(
    (domain: Domain, vendor: Vendor) => {
      if (domain.id === activeDomain?.id) {
        setActiveVendor(vendor);
      } else {
        setIsTransitioning(true);
        setActiveVendor(null);
        setTimeout(() => {
          setActiveDomain(domain);
          setActiveVendor(vendor);
          setIsTransitioning(false);
        }, TRANSITION_DURATION);
      }
      setIsSearchOpen(false);
    },
    [activeDomain?.id],
  );

  const handleCloseSearch = useCallback(() => setIsSearchOpen(false), []);
  const handleSetActiveVendor = useCallback((v: Vendor | null) => setActiveVendor(v), []);

  if (!activeDomain) {
    return <EmptyApp />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans selection:bg-indigo-100 flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to content
        </a>

        <Header domainsData={domainsData} activeDomain={activeDomain} onDomainChange={handleDomainChange} />

        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex-1">
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            <div className="order-2 lg:order-1 lg:col-span-8 space-y-6 sm:space-y-10">
              <DomainContent activeDomain={activeDomain} />
              <Suspense fallback={<LoadingFallback />}>
                <ScenarioShowcase activeDomain={activeDomain} />
              </Suspense>
              <Suspense fallback={<LoadingFallback />}>
                <VendorMatrix
                  activeDomain={activeDomain}
                  activeVendor={activeVendor}
                  setActiveVendor={handleSetActiveVendor}
                />
              </Suspense>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-4">
              <Suspense fallback={<LoadingFallback />}>
                <TimelineSidebar activeDomain={activeDomain} />
              </Suspense>
            </div>
          </div>
        </main>

        <Suspense fallback={<LoadingFallback />}>
          <FooterTimeline generalTimeline={generalTimeline} />
        </Suspense>
        <Suspense fallback={null}>
          <SearchModal
            isOpen={isSearchOpen}
            onClose={handleCloseSearch}
            onSelect={handleSearchResultClick}
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
