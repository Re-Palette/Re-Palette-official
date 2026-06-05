import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Check, Mail, Phone, MapPin, Sparkles } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [category, setCategory] = React.useState("visiting");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setName("");
    setEmail("");
    setCategory("visiting");
    setMessage("");
    onClose();
  };

  // Prevent scrolling behind modal when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#343a40]/30 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ x: "100%", opacity: 0.9 }}
            animate={{ x: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 180 } }}
            exit={{ x: "100%", opacity: 0.9, transition: { duration: 0.3 } }}
            id="inquiry-drawer"
            className="relative w-full max-w-lg h-full bg-white shadow-2xl p-8 flex flex-col justify-between z-10 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute top-6 right-6 p-2 rounded-full border border-gray-100 hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-rose-500 mb-1">
                <Sparkles size={18} className="animate-pulse" />
                <span className="text-xs uppercase font-semibold tracking-wider font-sans">Contact Us</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 font-serif-jp tracking-tight">お問い合せ</h3>
              <p className="text-xs text-gray-500 mt-2 font-sans">
                訪問美容のご依頼、メイクレッスン取材、採用に関するご質問などお気軽にご相談ください。
              </p>
              
              {/* Artistic Separator */}
              <div className="h-1.5 w-24 bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-400 rounded-full mt-4" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 my-8">
              {!formSubmitted ? (
                <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Category Grid */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">お問い合せ内容カテゴリー</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: "visiting", label: "訪問美容について" },
                        { id: "seminar", label: "講習・セミナー講師" },
                        { id: "career", label: "リクルート・採用" },
                        { id: "other", label: "その他お問い合せ" },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setCategory(cat.id)}
                          className={`py-2 px-3 rounded-full border text-left transition-all ${
                            category === cat.id
                              ? "bg-rose-50 border-rose-400 text-rose-600 font-medium shadow-sm shadow-rose-100"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="user-name" className="block text-xs font-semibold text-gray-700 mb-1">お名前 (必須)</label>
                    <input
                      type="text"
                      id="user-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="美波 華子"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-all text-gray-900"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="user-email" className="block text-xs font-semibold text-gray-700 mb-1">メールアドレス (必須)</label>
                    <input
                      type="email"
                      id="user-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hanako@example.com"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-all text-gray-900"
                    />
                  </div>

                  {/* Message Area */}
                  <div>
                    <label htmlFor="user-msg" className="block text-xs font-semibold text-gray-700 mb-1">メッセージ内容 (必須)</label>
                    <textarea
                      id="user-msg"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="ご希望の日程、人数、ご質問内容などを記入してください。"
                      className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-all resize-none text-gray-900"
                    />
                  </div>

                  {/* Send Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    id="submit-inquiry-btn"
                    className="w-full mt-2 py-3 px-6 rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-400 hover:shadow-lg hover:shadow-rose-100 text-white font-medium flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send size={16} />
                    <span>メッセージを送信する</span>
                  </motion.button>
                </form>
              ) : (
                /* Success Animated State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center px-4 py-12"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-4 animate-bounce">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold font-serif-jp text-gray-900">送信が完了しました！</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    お問い合せいただき誠にありがとうございます。<br />
                    2営業日以内に担当スタッフより折り返しご連絡いたします。
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-8 px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-50 text-sm text-gray-600 font-medium transition-colors cursor-pointer"
                  >
                    閉じる
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer Information */}
            <div className="pt-6 border-t border-gray-100 text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-rose-400" />
                <span>beauty-welfare@re-palette.co.jp</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-rose-400" />
                <span>03-xxxx-xxxx (平日 10:00 - 18:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-rose-400" />
                <span>〒150-0001 東京都渋谷区神宮前x-x-x</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
