/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import NewsBar from "./components/NewsBar";
import HeroRight from "./components/HeroRight";
import MainSections from "./components/MainSections";
import InquiryModal from "./components/InquiryModal";
import NewsDrawer from "./components/NewsDrawer";
import MenuOverlay from "./components/MenuOverlay";
import EventPage from "./components/EventPage";

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);
  const [isNewsDrawerOpen, setIsNewsDrawerOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("hero");
  
  // Router state
  const [currentView, setCurrentView] = React.useState<"main" | "event">("main");
  const [pendingScrollSection, setPendingScrollSection] = React.useState<string | null>(null);

  // Keep active section synchronized during scroll (only active on "main" landing path)
  React.useEffect(() => {
    if (currentView !== "main") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      // "event" is now a separate page, so it doesn't exist in our standard inline scroll list
      const sections = ["about", "services", "vision", "gallery", "contact"];
      
      let found = "hero";
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
  }, [currentView]);

  // Handle cross-view clean routing & deferred element scrolling
  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === "event") {
      setCurrentView("event");
      setActiveTab("event");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (currentView === "event") {
        // Enqueue the target landing section and switch view
        setPendingScrollSection(sectionId);
        setCurrentView("main");
      } else {
        // Already on landing page, scroll normally
        setActiveTab(sectionId);
        if (sectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    }
  };

  // Perform deferred scrolling after switching back to main view
  React.useEffect(() => {
    if (currentView === "main" && pendingScrollSection) {
      const timer = setTimeout(() => {
        setActiveTab(pendingScrollSection);
        if (pendingScrollSection === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(pendingScrollSection);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
        setPendingScrollSection(null);
      }, 150); // Small delay to guarantee DOM mount
      return () => clearTimeout(timer);
    }
  }, [currentView, pendingScrollSection]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-rose-100 selection:text-rose-600 font-sans relative flex flex-col justify-start">
      
      {/* TOP HEADER NAVIGATION */}
      <Header
        onInquiryClick={() => setIsInquiryOpen(true)}
        onMenuClick={() => setIsMenuOpen(true)}
        activeSection={activeTab}
        setActiveSection={handleNavigateSection}
      />

      {/* VIEW TRANSITIONS ENGINE */}
      <AnimatePresence mode="wait">
        {currentView === "main" ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* SPLIT SCREEN HERO PANEL */}
            <main id="hero" className="relative w-full h-screen min-h-[650px] p-0 overflow-hidden">
              <HeroRight />

              {/* News Bar positioned perfectly at the bottom-left of the hero block */}
              <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 z-30 max-w-[calc(100vw-3rem)] sm:max-w-xl md:max-w-xl">
                <NewsBar onViewAllClick={() => setIsNewsDrawerOpen(true)} />
              </div>
            </main>

            {/* DETAILS, PHILOSOPHY & PORTFOLIOS (Scrollable story sections) */}
            <MainSections 
              onInquiryClick={() => setIsInquiryOpen(true)} 
              onNavigateSection={handleNavigateSection}
            />
          </motion.div>
        ) : (
          <motion.div
            key="event-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <EventPage
              onInquiryClick={() => setIsInquiryOpen(true)}
              onBackToHome={() => handleNavigateSection("hero")}
              onNavigateSection={handleNavigateSection}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
        setActiveSection={handleNavigateSection}
      />

    </div>
  );
}
