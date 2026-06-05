import * as React from "react";
import { ArrowRight, ChevronRight, Volume2 } from "lucide-react";
import { newsFeed } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface NewsBarProps {
  onViewAllClick: () => void;
}

export default function NewsBar({ onViewAllClick }: NewsBarProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Cycle news items gently over time to make the page feel premium and alive
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsFeed.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeNews = newsFeed[currentIndex];

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
      className="relative z-20 flex items-center max-w-xl bg-white rounded-full border border-rose-50/60 p-2 shadow-lg shadow-rose-100/30 group hover:shadow-xl hover:shadow-rose-100/60 hover:border-rose-100/50 transition-all font-sans select-none"
    >
      {/* NEWS PINK BADGE */}
      <span className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 to-[#ff7686] flex items-center justify-center text-white text-[12px] font-bold tracking-widest shadow-md shadow-rose-200">
        NEWS
      </span>

      {/* DYNAMIC NEWS SLIDER */}
      <div className="flex-1 px-4 lg:px-6 overflow-hidden relative h-10 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNews.id}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-baseline gap-4 w-full cursor-pointer"
            onClick={onViewAllClick}
          >
            <span className="text-[12px] lg:text-[13px] font-bold text-rose-400 font-mono tracking-wider">
              {activeNews.date}
            </span>
            <span className="text-[12px] lg:text-[13px] text-gray-700 font-medium font-sans truncate hover:text-rose-500 transition-colors">
              {activeNews.title}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* VIEW ALL LINK */}
      <button
        onClick={onViewAllClick}
        id="news-view-all-btn"
        className="flex items-center gap-1.5 text-rose-500 text-[11px] lg:text-[12px] font-bold tracking-wider hover:text-[#ffa07a] transition-colors pr-4 flex-shrink-0 cursor-pointer"
      >
        <span>VIEW ALL</span>
        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 text-rose-400" />
      </button>
    </motion.div>
  );
}
