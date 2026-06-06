import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Newspaper, ArrowUpRight } from "lucide-react";
import { newsFeed } from "../data";

interface NewsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export default function NewsDrawer({ isOpen, onClose, onNavigateSection }: NewsDrawerProps) {
  const handleItemClick = (news: typeof newsFeed[0]) => {
    if ((news.category === "EVENT" || news.title.includes("Nuance Lounge")) && onNavigateSection) {
      onClose();
      onNavigateSection("event");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center font-sans p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/35 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: "spring", duration: 0.5 } }}
            exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
            className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl p-8 z-10 overflow-hidden max-h-[85vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-gray-100 hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-[10px] tracking-widest text-[#ffa07a] font-bold uppercase block mb-1">
                Announcements
              </span>
              <h3 className="text-2xl font-bold text-gray-900 font-serif-jp tracking-tight">お知らせ一覧</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-rose-400 to-amber-300 rounded-full mt-3" />
            </div>

            {/* News List */}
            <div className="flex-grow overflow-y-auto pr-2 space-y-4 my-2">
              {newsFeed.map((news) => (
                <div
                  key={news.id}
                  onClick={() => handleItemClick(news)}
                  className="p-5 rounded-2xl border border-gray-100 hover:border-rose-100/60 hover:bg-rose-50/20 transition-all group flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-rose-400">
                        {news.date}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider text-rose-500 bg-rose-50 uppercase">
                        {news.category}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 leading-relaxed group-hover:text-rose-500 transition-colors">
                      {news.title}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-rose-400 group-hover:border-rose-100 transition-all flex-shrink-0">
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle art background element */}
            <div className="mt-4 pt-4 border-t border-gray-50 text-center text-xs text-gray-400">
              © Re-Palette Beauty & Welfare. All rights reserved.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
