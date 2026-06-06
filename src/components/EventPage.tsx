import { useState } from "react";
import { motion } from "motion/react";
import { 
  Calendar, Clock, MapPin, ChevronRight, Mail, Compass, ArrowLeft, 
  Search, Users, BookOpen, Info, Instagram, Briefcase, Facebook, Linkedin
} from "lucide-react";
import nuanceLoungePoster from "../assets/images/nuance_lounge_poster.png";

interface EventPageProps {
  onInquiryClick: () => void;
  onBackToHome: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const eventCategories = [
  { id: "all", label: "すべて" },
  { id: "workshop", label: "ワークショップ・体験会" },
  { id: "lesson", label: "メイクレッスン・セラピー" },
  { id: "community", label: "地域交流・フェア" },
];

const allEventsData = [
  {
    id: "e1",
    category: "community",
    categoryLabel: "STUDENT BEAUTY LOUNGE",
    isFirstEvent: true,
    colorTheme: "rose",
    badgeBg: "bg-rose-50 text-rose-500",
    btnBorder: "border-rose-100 text-rose-500 hover:bg-rose-50/50 hover:border-rose-200",
    image: nuanceLoungePoster,
    title: "【記念すべき第1回！】学生向け美容交流イベント「Nuance Lounge (ニュアンスラウンジ)」",
    description: "「美容が好きな人も、はじめたい人も。美容でつながる、学生のための交流ラウンジ。」性別・学年・学校を問わず、どなたでも参加OK！お菓子やジュースを楽しみながら、リパレット主催でおしゃれなオフィスにて、のびのびと交流・相談・知識交換ができる特別な第1回美容イベントです。",
    date: "2026年7月5日 (日) 15:30 〜 18:30",
    location: "株式会社TOMAP オフィス (〒150-0001 東京都渋谷区神宮前3丁目1-25 3F)",
    fee: "美容学生・高校生：500円 / 大学生以上：1,000円",
    capacity: "お菓子・ジュース・ドリンク付き 🍹（お一人でもお友達連れでも大歓迎！）",
    target: "美容学生、美容に興味がある学生、何から始めればいいかわからない学生、肌悩みや美容の疑問を抱える方",
    highlights: [
      { title: "交流", desc: "同じ“美容が好き”という共通点でつながる" },
      { title: "相談", desc: "肌悩みや美容の疑問を気軽に相談できる" },
      { title: "知識交換", desc: "美容の情報や体験をシェアできる" },
      { title: "お菓子付き", desc: "お菓子やドリンクを楽しみながらリラックス♪" }
    ],
    baggage: "特になし（お気軽にご参加ください♪）",
    instagram: "repalette_official"
  }
];

export default function EventPage({ onInquiryClick, onBackToHome, onNavigateSection }: EventPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = allEventsData.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 font-sans flex flex-col justify-between">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-white py-16 sm:py-20 border-b border-gray-100">
        {/* Soft elegant blur background shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-rose-100/30 filter blur-3xl pointer-events-none select-none" />
        <div className="absolute bottom-5 right-10 w-96 h-96 rounded-full bg-amber-50/30 filter blur-3xl pointer-events-none select-none" />
        
        <div className="max-w-7xl mx-auto px-8 xl:px-16 relative">
          
          {/* Back button */}
          <motion.button
            whileHover={{ x: -4 }}
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-rose-500 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>ホームに戻る</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Banner Left Header Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-[#ff7686] bg-rose-50/70 px-4 py-1.5 rounded-full border border-rose-100/30 text-[11px] font-bold tracking-widest uppercase font-mono">
                <Compass size={12} className="text-[#ff7686]" />
                <span>Events Directory</span>
              </div>
              
              <h1 className="text-3.5xl sm:text-4.5xl font-black font-serif-jp text-gray-950 tracking-tight leading-tight select-none">
                イベント・セミナー情報
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans font-medium">
                学校や家庭以外の安心できるサードプレイス「Nuance Lounge」や、同じ目線で語り合える対話セッションなど、Re-Palette（リパレット）が主催するイベント・プログラムの一覧です。
              </p>
            </div>

            {/* Banner Right Stats Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-[32px] bg-white border border-gray-100 shadow-sm space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#ffaa44] block font-mono">ACTIVE EVENTS</span>
                <span className="text-2xl font-black font-mono text-gray-950">01件</span>
                <p className="text-[11px] text-gray-400 font-medium">参加申込・受付中</p>
              </div>
              <div className="p-6 rounded-[32px] bg-white border border-gray-100 shadow-sm space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-teal-500 block font-mono">PARTICIPANTS</span>
                <span className="text-2xl font-black font-mono text-gray-950">40人+</span>
                <p className="text-[11px] text-gray-400 font-medium">累計参加者数</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL SYSTEM */}
      <section className="sticky top-[75px] bg-white/95 backdrop-blur-md z-30 border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-8 xl:px-16 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {eventCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#343a40] text-white shadow-md shadow-gray-200"
                    : "bg-gray-50 text-gray-500 hover:text-[#343a40] hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box Inputs */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="キーワードでイベントを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:border-rose-300 text-xs font-semibold placeholder:text-gray-400 focus:bg-white transition-all shadow-inner"
            />
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC EVENT GRID SYSTEM */}
      <section className="py-16 sm:py-24 bg-[#fafaf9] relative overflow-hidden flex-grow">
        {/* Watercolor splash decorations */}
        <div className="absolute top-[40%] right-[-100px] w-96 h-96 rounded-full bg-rose-50/20 filter blur-3xl pointer-events-none select-none" />
        <div className="absolute bottom-[20%] left-[-100px] w-96 h-96 rounded-full bg-teal-50/20 filter blur-3xl pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-8 xl:px-16 relative">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[40px] border border-gray-100 max-w-lg mx-auto space-y-4">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-400 mb-2">
                <Info size={20} />
              </div>
              <h3 className="font-extrabold font-serif-jp text-[#343a40] text-md">該当するイベントが見つかりませんでした</h3>
              <p className="text-xs text-gray-500 font-medium">カテゴリーや検索キーワードを変更してお試しください。</p>
              <button 
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                className="mt-2 text-xs font-bold text-rose-500 hover:underline cursor-pointer"
              >
                クリアして再表示
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[40px] p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-rose-100/50 hover:shadow-xl hover:shadow-rose-50/20 transition-all"
                >
                  <div>
                    {/* Header Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                      <span className={`text-[10px] font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase block w-max font-mono ${event.badgeBg}`}>
                        {event.categoryLabel}
                      </span>
                      {event.isFirstEvent && (
                        <span className="text-[9px] font-black tracking-widest px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 text-white flex items-center gap-1 shadow-sm select-none animate-pulse">
                          <span>🎉 記念すべき第1回！</span>
                        </span>
                      )}
                    </div>

                    {/* Poster Image Area (Landscape / PC Aspect Ratio) */}
                    <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] rounded-[24px] overflow-hidden mb-6 bg-gray-100 border border-gray-100 flex items-center justify-center">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      {/* Stamp design overlays */}
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest text-[#ffffff] uppercase select-none border border-white/10">
                        OFFICIAL POSTER
                      </div>
                      <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[9px] font-semibold text-gray-800 select-none shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span>PC Size Poster Area</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-serif-jp leading-snug mb-5 group-hover:text-rose-500 transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-500 font-sans font-medium leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Optional Highlights Chips */}
                    {"highlights" in event && event.highlights && (
                      <div className="grid grid-cols-2 gap-2.5 my-5 pb-5 border-b border-gray-50">
                        {event.highlights.map((high: any, i: number) => (
                          <div key={i} className="bg-rose-50/20 hover:bg-rose-50/40 transition-colors border border-rose-100/40 rounded-xl p-3 flex flex-col justify-between">
                            <span className="text-[10px] font-black text-rose-500 tracking-wider mb-1 block">✦ {high.title}</span>
                            <span className="text-[9.5px] text-gray-500 leading-tight block font-medium">{high.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Details blocks */}
                    <div className="space-y-3.5 font-sans text-xs font-semibold text-gray-600 border-t border-gray-50 pt-6">
                      <div className="flex items-start gap-3">
                        <Calendar size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-gray-400 font-mono text-[10px] block uppercase">Date & Time</span>
                          <span className="text-gray-800">{event.date}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-gray-400 font-mono text-[10px] block uppercase">Location / Venue</span>
                          <span className="text-gray-800">{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-gray-400 font-mono text-[10px] block uppercase">Fee & Capacity</span>
                          <span className="text-gray-800">{event.fee} <span className="text-gray-300 mx-1.5">|</span> {event.capacity}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-gray-400 font-mono text-[10px] block uppercase">Targets</span>
                          <span className="text-gray-700 font-medium">{event.target}</span>
                        </div>
                      </div>
                      {"baggage" in event && event.baggage && (
                        <div className="flex items-start gap-3">
                          <Briefcase size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-gray-400 font-mono text-[10px] block uppercase">Baggage / 持ち物</span>
                            <span className="text-gray-850 text-gray-850">{event.baggage}</span>
                          </div>
                        </div>
                      )}
                      {"instagram" in event && event.instagram && (
                        <div className="flex items-start gap-3">
                          <Instagram size={14} className="text-[#e1306c] mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-gray-400 font-mono text-[10px] block uppercase">Inquiry / お問い合わせ</span>
                            <span className="text-[#e1306c] font-black hover:underline cursor-pointer flex items-center gap-1">
                              Instagram: @{event.instagram}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions CTA button and small badge */}
                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between gap-4">
                    <a
                      href="https://nuance-lounge.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-2xl border ${event.btnBorder} font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all text-center flex items-center justify-center`}
                    >
                      <span>イベントの参加を申請・問い合わせる</span>
                      <ChevronRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Business / Welfare Special Lecture Program Block */}
          <div className="mt-20 bg-gradient-to-r from-rose-50/35 via-[#fafaf9] to-white rounded-[40px] p-8 sm:p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#ff7686]">
                <BookOpen size={18} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif-jp">
                法人・医療福祉施設へのデモンストレーション・個別セミナー派遣
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-sans font-medium leading-relaxed">
                介護施設や病院での訪問理美容の新規導入、スタッフ様向けのバリアフリー講習、タクティールコミュニケーション研修、出張メイク体験プランなど、個別のカスタマイズセミナーも承っております。お気軽にご予算や受講人数等をお聞かせください。
              </p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdr0b2qbfsEBa6tatUcKdFP7leu4645nQ9gXeIQlCyVvuFxRg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 rounded-[24px] bg-[#343a40] hover:bg-gray-800 text-white font-bold text-xs cursor-pointer tracking-wider flex items-center justify-center gap-2 flex-shrink-0 text-center"
            >
              <Mail size={14} />
              <span>施設向け派遣・開催の相談</span>
            </motion.a>
          </div>

        </div>
      </section>

      {/* 4. COMPANY FOOTER */}
      <footer id="company" className="bg-[#1f2122] text-white pt-16 pb-12 font-sans select-none border-t border-white/5">
        
        <div className="max-w-7xl mx-auto px-8 xl:px-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 border-b border-white/5 pb-10">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif-jp text-3xl font-bold tracking-tight">
              Re-Palette
            </h3>
            <span className="text-[11px] font-serif-jp font-bold text-rose-400 block tracking-wider">
              美容福祉のチカラで、ありのままの自分へ。
            </span>
            <p className="text-xs text-gray-400 leading-relaxed font-sans pt-2">
              不登校や孤立、ルッキズムなどの生きづらさを抱える若者に向け、整容教育や自己修復のためのサードプレイス「Nuance Lounge」を提供しています。
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="text-xs space-y-2.5 text-gray-300 font-medium">
              <li><button onClick={onBackToHome} className="hover:text-rose-400 transition-colors text-left cursor-pointer">トップ (Top)</button></li>
              <li><button onClick={() => onNavigateSection("about")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">私たちについて (About)</button></li>
              <li><button onClick={() => onNavigateSection("services")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">サービス内容 (Services)</button></li>
              <li><button onClick={() => onNavigateSection("vision")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">未来へのビジョン (Vision)</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-rose-400 transition-colors text-left font-semibold">イベント情報 (Events) <span className="text-[10px] bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded ml-1">Current</span></button></li>
              <li><button onClick={() => onNavigateSection("gallery")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">日々の記録 (Gallery)</button></li>
              <li><button onClick={() => onNavigateSection("contact")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">お問い合わせ (Contact)</button></li>
            </ul>
          </div>

          {/* Base Info */}
          <div className="md:col-span-4 space-y-3 font-medium text-xs text-gray-300">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Organization</h4>
            <p>学生団体 Re-Palette（リパレット）</p>
            <p className="text-gray-400">
              MAIL: <a href="mailto:repalette809@gmail.com" className="hover:text-rose-400 transition-colors">repalette809@gmail.com</a>
            </p>
            <p className="text-gray-400">事業内容: サードプレイス（サードプレイス事業）、伴走型整容教育、ピアサポート、実学・社会的処方の検証</p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50 mt-4">
              <a href="https://www.instagram.com/repalette_official/?hl=ja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587543673430&locale=ja_JP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/haruto-suzuki-614a253b9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors" title="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Legal copy */}
        <div className="max-w-7xl mx-auto px-8 xl:px-16 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
          <span>© 2026 Re-Palette Co., Ltd. All rights reserved.</span>
          <div className="flex gap-4 mt-4 md:mt-0 font-medium h-4">
            <button onClick={() => onNavigateSection("about")} className="hover:text-white transition-all cursor-pointer">プライバシーポリシー</button>
            <span className="w-[1px] bg-gray-700" />
            <button onClick={() => onNavigateSection("about")} className="hover:text-white transition-all cursor-pointer">特定商取引に基づく表記</button>
          </div>
        </div>

      </footer>

    </div>
  );
}
