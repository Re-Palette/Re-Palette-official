/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import Header from "./components/Header";
import NewsBar from "./components/NewsBar";
import HeroRight from "./components/HeroRight";
import MainSections from "./components/MainSections";
import InquiryModal from "./components/InquiryModal";
import NewsDrawer from "./components/NewsDrawer";
import MenuOverlay from "./components/MenuOverlay";

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);
  const [isNewsDrawerOpen, setIsNewsDrawerOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("home");

  // Keep active section synchronized during scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      const sections = ["about", "services", "careers", "company"];
      
      let found = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            found = section;
            break;
          }
        }
      }
      setActiveTab(found);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-rose-100 selection:text-rose-600 font-sans relative flex flex-col justify-start">
      
      {/* TOP HEADER NAVIGATION */}
      <Header
        onInquiryClick={() => setIsInquiryOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
        activeSection={activeTab}
        setActiveSection={setActiveTab}
      />

      {/* SPLIT SCREEN HERO PANEL - Now full bleed from top edge (h-screen) to position the image right from the absolute top */}
      <main id="hero" className="relative w-full h-screen min-h-[650px] p-0 overflow-hidden">
        {/* Full-bleed background photo representing the Japanese welfare-beauty studio atmosphere */}
        <HeroRight />

        {/* News Bar positioned perfectly at the bottom-left of the hero block */}
        <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 z-30 max-w-[calc(100vw-3rem)] sm:max-w-xl md:max-w-xl">
          <NewsBar onViewAllClick={() => setIsNewsDrawerOpen(true)} />
        </div>
      </main>

      {/* DETAILS, PHILOSOPHY & PORTFOLIOS (Scrollable story sections) */}
      <MainSections onInquiryClick={() => setIsInquiryOpen(true)} />

      {/* RE-PALETTE INTERACTIVE DIALOG OVERLAYS */}
      {/* 1. Inquiry Modal Drawer */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* 2. Full Announcement Directory Slider */}
      <NewsDrawer
        isOpen={isNewsDrawerOpen}
        onClose={() => setIsNewsDrawerOpen(false)}
      />

      {/* 3. Full-Screen Interactive Menu Index */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onInquiryClick={() => setIsInquiryOpen(true)}
        activeSection={activeTab}
        setActiveSection={setActiveTab}
      />

    </div>
  );
}

