import { Menu, Mail, Sparkles } from "lucide-react";
import { navigationItems } from "../data";
import { motion } from "motion/react";

interface HeaderProps {
  onInquiryClick: () => void;
  onMenuClick: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({
  onInquiryClick,
  onMenuClick,
  activeSection,
  setActiveSection,
}: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white/25 backdrop-blur-[12px] fixed top-0 left-0 z-40 px-8 xl:px-16 py-4 flex items-center justify-between border-b border-white/10 font-sans"
    >
      {/* BRAND LOGO / SUBTITLE */}
      <div className="flex flex-col select-none">
        <a href="#hero" className="flex items-center gap-1.5 group">
          <span className="font-serif-jp text-3xl font-medium tracking-tight bg-gradient-to-r from-[#343a40] via-[#495057] to-gray-700 bg-clip-text text-transparent hover:text-rose-500 transition-colors">
            Re-Palette
          </span>
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 animate-pulse mt-2" />
        </a>
        <span className="text-[10px] text-gray-500 font-serif-jp font-semibold tracking-wider mt-0.5 whitespace-nowrap">
          美容福祉のチカラで、笑顔をつくる。
        </span>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => {
              // Smooth scroll
              e.preventDefault();
              setActiveSection(item.id);
              const element = document.getElementById(item.id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="group relative flex flex-col items-center py-2 text-[14px] select-none"
          >
            {/* Japanese Text (Primary in the style) */}
            <span className="text-[#343a40] font-sans font-medium hover:text-rose-500 transition-colors duration-200">
              {item.jpLabel}
            </span>
            
            {/* Hover Sub-label (English, elegant, tiny) */}
            <span className="absolute -bottom-2 text-[8px] font-bold uppercase tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
              {item.label}
            </span>

            {/* Custom watercolor dot underline */}
            <span 
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-rose-400 rounded-full transition-transform duration-300 origin-center ${
                activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-75"
              }`} 
            />
          </a>
        ))}
      </nav>

      {/* CTA BUTTONS */}
      <div className="flex items-center gap-3">
        {/* Inquiry Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onInquiryClick}
          id="header-inquiry-btn"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-orange-400 text-white font-medium text-[13px] tracking-wide shadow-md shadow-rose-100 transition-all cursor-pointer"
        >
          <Mail size={14} className="text-white/90" />
          <span>お問い合わせ</span>
        </motion.button>

        {/* Circular Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenuClick}
          id="circular-hamburger-menu"
          aria-label="Menu"
          className="w-[42px] h-[42px] rounded-full border border-rose-100 flex items-center justify-center hover:bg-rose-50/50 text-[#343a40] hover:text-rose-500 transition-colors cursor-pointer"
        >
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="w-4 h-0.5 bg-rose-400 rounded-full" />
            <span className="w-3.5 h-0.5 bg-rose-400 rounded-full" />
            <span className="w-4 h-0.5 bg-rose-400 rounded-full" />
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
}
