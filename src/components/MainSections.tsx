import { motion } from "motion/react";
import { Scissors, Sparkles, GraduationCap, Users, ArrowRight, Heart, Award, Smile, ChevronRight } from "lucide-react";
import { servicesData } from "../data";

interface MainSectionsProps {
  onInquiryClick: () => void;
}

export default function MainSections({ onInquiryClick }: MainSectionsProps) {
  // Map icons to services
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="w-8 h-8 text-rose-500" />;
      case "Sparkles":
        return <Sparkles className="w-8 h-8 text-amber-500" />;
      case "GraduationCap":
        return <GraduationCap className="w-8 h-8 text-teal-500" />;
      case "Users":
        return <Users className="w-8 h-8 text-sky-500" />;
      default:
        return <Sparkles className="w-8 h-8 text-rose-500" />;
    }
  };

  return (
    <div className="bg-white relative">
      
      {/* 1. ABOUT SECTION */}
      <section id="about" className="py-24 lg:py-32 px-8 xl:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-t border-rose-50/30">
        
        {/* Left Graphics & Philosophy */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 space-y-6">
            <div className="flex items-center gap-2 text-rose-500">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#ff6b8b]">About Re-Palette</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold font-serif-jp leading-tight text-gray-900 select-none">
              美容福祉で、<br />
              世界に彩りを。
            </h2>
            
            <p className="text-sm text-gray-500 font-sans font-medium">
              Re-Paletteは、「美容（Beauty）」と「福祉（Welfare）」の力を融合させ、心豊かな暮らしを創るイノベーションカンパニーです。
            </p>

            {/* Watercolor paint effect */}
            <div className="relative w-44 h-16 pointer-events-none select-none">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-amber-100 opacity-60 rounded-full filter blur-xl animate-pulse" />
              <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-[#1db2cf] opacity-80" />
              <div className="absolute top-6 left-1 text-xs font-cursive text-[#ff7686] rotate-[-5deg] text-xl font-bold">
                Heartwarming Care
              </div>
            </div>
          </div>
        </div>

        {/* Right Details Text (Aesthetics & Emotional prose) */}
        <div className="lg:col-span-7 space-y-10 text-gray-700">
          <div className="p-8 lg:p-10 rounded-[36px] bg-rose-50/15 border border-rose-100/25 space-y-6 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-48 h-48 rounded-full bg-rose-100/10 filter blur-2xl" />
            
            <h3 className="text-xl font-bold font-serif-jp text-[#ff7686] flex items-center gap-2">
              <Heart size={18} fill="currentColor" />
              <span>「なりたい自分」を諦めない社会</span>
            </h3>
            
            <p className="text-sm font-sans font-medium text-gray-600 leading-relaxed tracking-wider">
              だれしもが年齢を重ね、体力が衰え、あるいはハンディキャップを背負うことがあります。しかし、髪型を整えること、鏡のなかの自分にメイクを施すことで得られる「ときめき」は、何者にも代えられない生きるチカラへと変わるはず。
            </p>
            <p className="text-sm font-sans font-medium text-gray-600 leading-relaxed tracking-wider">
              私たちはただのヘアカットやケアを提供するのではなく、一人ひとりの個性と美しさを引き出し、自尊心と笑顔の花を咲かせるパートナーです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-[24px] border border-gray-100 hover:border-amber-100/70 hover:bg-amber-50/10 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                <Smile className="w-5 h-5 text-[#ff7686]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm font-serif-jp mb-1">笑顔・ぬくもり第一</h4>
                <p className="text-[12px] text-gray-500 font-medium">技術だけでなく、目線を合わせ、温もりを共有する会話と時間を守ります。</p>
              </div>
            </div>

            <div className="p-6 rounded-[24px] border border-gray-100 hover:border-teal-100/70 hover:bg-teal-50/10 transition-all flex gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-teal-500" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm font-serif-jp mb-1">高い安全性とプロスキル</h4>
                <p className="text-[12px] text-gray-500 font-medium">介護初任者研修や看護知識、徹底したバリアフリー器具を揃え施術に挑みます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 lg:py-32 bg-[#fafaf9] relative overflow-hidden">
        {/* Soft floating background items */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-rose-100/10 filter blur-3xl pointer-events-none select-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-100/10 filter blur-3xl pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-8 xl:px-16 relative">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-rose-500 font-bold bg-white px-4 py-1.5 rounded-full border border-rose-50 text-[11px] uppercase tracking-widest">
              Our Services
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold font-serif-jp text-gray-900 tracking-tight select-none">
              やさしさと彩りを届けるサービス
            </h2>
            
            <p className="text-xs text-gray-500 font-sans tracking-wide">
              訪問美容からメイクレッスン、セラピーサロン、専門人材育成まで多角的に展開しています。
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[36px] p-8 lg:p-10 border border-gray-100 hover:border-rose-100/40 shadow-sm hover:shadow-xl hover:shadow-rose-100/30 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent mini corner decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-bl-[100px]`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-3xl bg-gray-50 select-none">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-2xl font-black font-mono text-gray-100 select-none">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold tracking-widest text-[#ffa07a] uppercase block mb-1 font-mono">
                    {service.title}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 font-serif-jp mb-4">
                    {service.jpTitle}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium mb-8">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={onInquiryClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff7686] hover:text-[#ffa07a] transition-colors cursor-pointer justify-self-end mt-4 self-start"
                >
                  <span>資料請求・お問い合せ</span>
                  <ChevronRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RECRUIT / CONTACT TRIGGER BANNER */}
      <section id="careers" className="py-24 lg:py-28 px-8 xl:px-16 max-w-7xl mx-auto text-center relative font-sans">
        
        {/* Soft abstract graphic background to match style */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-[450px] h-auto text-rose-300 transform rotate-12">
            <path d="M120,310 C180,330 260,280 290,210 C320,140 280,70 210,90 C140,110 60,160 80,230 C90,270 100,300 120,310 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto space-y-8 select-none">
          <div className="inline-flex items-center gap-1 text-[#1db2cf]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1db2cf] animate-ping" />
            <span className="text-xs font-bold tracking-widest uppercase">Join Our Team</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-extrabold font-serif-jp text-gray-900 leading-relaxed">
            笑顔の輪を、いっしょに広げていきませんか？
          </h2>
          
          <p className="text-sm text-gray-500 font-sans font-medium leading-relaxed max-w-xl mx-auto">
            Re-Paletteでは、美容師、ヘアメイクアップアーティスト、作業療法士、福祉職経験者など様々な専門職が手を取り合い活躍しています。お持ちの資格や夢を、新しい笑顔に変えましょう。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onInquiryClick}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-400 directly to-rose-500 text-white font-medium text-xs tracking-wider shadow-lg hover:shadow-xl hover:shadow-rose-100 transition-all cursor-pointer"
            >
              採用情報・仕事見学に申し込む
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onInquiryClick}
              className="px-8 py-3.5 rounded-full border border-gray-200 hover:border-gray-300 text-gray-600 font-medium text-xs tracking-wider transition-all bg-white cursor-pointer"
            >
              ボランティア情報はこちら
            </motion.button>
          </div>
        </div>
      </section>

      {/* 4. COMPANY FOOTER */}
      <footer id="company" className="bg-[#1f2122] text-white pt-16 pb-12 font-sans select-none">
        
        <div className="max-w-7xl mx-auto px-8 xl:px-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 border-b border-white/5 pb-10">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif-jp text-3xl font-bold tracking-tight">
              Re-Palette
            </h3>
            <span className="text-[11px] font-serif-jp font-bold text-rose-400 block tracking-wider">
              美容福祉のチカラで、笑顔をつくる。
            </span>
            <p className="text-xs text-gray-400 leading-relaxed font-sans pt-2">
              高齢や身体障がいなどで移動の叶わない方々の笑顔を守るために。介護とメイクプランを融合させた福祉美容サービスを提供。
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="text-xs space-y-2.5 text-gray-300 font-medium">
              <li><a href="#about" className="hover:text-rose-400 transition-colors">私たちについて</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">提供サービス一覧</a></li>
              <li><a href="#news" className="hover:text-rose-400 transition-colors">最新トピックス・お知らせ</a></li>
              <li><a href="#careers" className="hover:text-rose-400 transition-colors">採用情報と見学ステップ</a></li>
            </ul>
          </div>

          {/* Base Info */}
          <div className="md:col-span-4 space-y-3 font-medium text-xs text-gray-300">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Corporate Office</h4>
            <p>株式会社 Re-Palette（リパレット）</p>
            <p className="text-gray-400">〒150-0001 東京都渋谷区神宮前x-x-x</p>
            <p className="text-gray-400">TEL: 03-xxxx-xxxx</p>
            <p className="text-gray-400">事業内容: 訪問理美容、福祉美容化粧品開発、人材セミナー、コミュニティ運営</p>
          </div>

        </div>

        {/* Legal copy */}
        <div className="max-w-7xl mx-auto px-8 xl:px-16 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
          <span>© 2026 Re-Palette Co., Ltd. All rights reserved.</span>
          <div className="flex gap-4 mt-4 md:mt-0 font-medium h-4">
            <a href="#about" className="hover:text-white transition-all">プライバシーポリシー</a>
            <span className="w-[1px] bg-gray-700" />
            <a href="#about" className="hover:text-white transition-all">特定商取引に基づく表記</a>
          </div>
        </div>

      </footer>

    </div>
  );
}
