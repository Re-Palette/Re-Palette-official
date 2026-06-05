import { motion, AnimatePresence } from "motion/react";
import { X, Instagram, Heart, ArrowUpRight, ShieldAlert, Users, Compass, Globe } from "lucide-react";
import { navigationItems } from "../data";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onInquiryClick: () => void;
  activeSection: string;
  setActiveSection: (secId: string) => void;
}

export default function MenuOverlay({
  isOpen,
  onClose,
  onInquiryClick,
  activeSection,
  setActiveSection,
}: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex font-sans select-none overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#343a40]/40 backdrop-blur-md"
          />

          {/* Sliding Menu Shell */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative ml-auto w-full max-w-xl h-full bg-white shadow-2xl p-10 lg:p-14 flex flex-col justify-between z-10 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-menu-overlay-btn"
              className="absolute top-8 right-8 p-3 rounded-full border border-rose-100/50 hover:bg-rose-50 text-gray-500 hover:text-rose-600 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            {/* Top Logo Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif-jp text-3xl font-bold tracking-tight text-gray-900">
                  Re-Palette
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300" />
              </div>
              <p className="text-[11px] text-gray-400 tracking-widest uppercase font-mono font-bold">
                Beauty & Welfare Integration
              </p>
            </div>

            {/* Centers: High-End Cursive Nav list & Mission statements */}
            <div className="my-10 space-y-12">
              <nav className="flex flex-col space-y-6">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                        onClose();
                      }}
                      className="group flex items-baseline justify-between py-2 border-b border-gray-100 hover:border-rose-100 transition-all cursor-pointer"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-sm font-mono text-rose-400/80 font-bold group-hover:scale-110 transition-transform">
                          0{index + 1}
                        </span>
                        <span className="text-xl lg:text-2xl font-semibold font-serif-jp text-[#343a40] group-hover:text-rose-500 transition-colors">
                          {item.jpLabel}
                        </span>
                      </div>
                      <span className="text-[11px] tracking-widest text-gray-400 group-hover:text-rose-400 uppercase font-mono font-bold opacity-70 group-hover:opacity-100 transition-all">
                        {item.label}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* MISSION BLOCK STATEMENT */}
              <div className="bg-rose-50/20 rounded-[24px] p-6 border border-rose-100/30">
                <div className="flex items-center gap-2 mb-3 text-rose-500">
                  <Heart size={16} fill="currentColor" />
                  <span className="text-[11px] font-bold tracking-widest uppercase font-mono">Our Vision</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans font-medium">
                  美容のちから、福祉のやさしさ。
                  対面するすべての人の、自分らしい彩りと笑顔を引き出すために。
                  私たちは新しい福祉美容の未来を創造しつづけます。
                </p>
              </div>
            </div>

            {/* Bottom Actions: Inquiry & Social Links */}
            <div className="space-y-6">
              <button
                onClick={() => {
                  onClose();
                  onInquiryClick();
                }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-orange-400 text-white font-medium text-sm text-center shadow-lg hover:shadow-xl hover:shadow-rose-100/70 cursor-pointer transition-all"
              >
                お問い合わせはこちら
              </button>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50">
                <span>SNS: @re_palette_japan</span>
                <div className="flex items-center gap-4">
                  <a href="#instagram" className="hover:text-rose-500 transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="#about" className="hover:text-rose-500 transition-colors">
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
