/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import CaseStudy from './components/CaseStudy';
import Contents from './components/Contents';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Regulamin from './pages/Regulamin';
import Polityka from './pages/Polityka';
import Dziekuje from './pages/Dziekuje';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <CaseStudy />
      <Contents />
      <Offer />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-lime-400/30 overflow-x-hidden flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/regulamin" element={<Regulamin />} />
            <Route path="/polityka-prywatnosci" element={<Polityka />} />
            <Route path="/dziekuje" element={<Dziekuje />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
