import { motion } from "motion/react";
import { Scissors, Sparkles, GraduationCap, Users, Heart, Award, Smile, ChevronRight, Mail, Compass, Calendar, MapPin, Clock } from "lucide-react";
import { servicesData } from "../data";

interface MainSectionsProps {
  onInquiryClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const galleryItems = [
  {
    id: "g1",
    category: "VISITING CARE",
    number: "01",
    tag: "訪問カット＆ケア",
    title: "いつものお部屋が、プロのヘアサロンに変わる瞬間。",
    description: "ベッドサイドや車椅子のまま安全に配慮し、プロフェッショナルな仕上げで極上の笑顔をお届けします。",
    gradient: "from-rose-400/40 to-pink-500/40",
  },
  {
    id: "g2",
    category: "MAKEUP THERAPY",
    number: "02",
    tag: "福祉メイクアップレッスン",
    title: "自分の手で行うメイク。表情の輝きとリハビリ効果。",
    description: "視覚障がいのある方やシニアの方々が自ら美を表現。鏡を見つめる喜びと温かな活力を引き出します。",
    gradient: "from-amber-300/40 to-orange-400/40",
  },
  {
    id: "g3",
    category: "ACADEMY",
    number: "03",
    tag: "福祉美容セミナー研修",
    title: "次の世代を担う、美容と医療・福祉の専門職養成。",
    description: "介助方法や心理ケアの専門知識を習得し、福祉美容の第一線で活躍できる優秀な講師陣やキャストを育成。",
    gradient: "from-teal-300/40 to-emerald-400/40",
  },
  {
    id: "g4",
    category: "COMMUNITY EVENTS",
    number: "04",
    tag: "世代を越えた地域サロン",
    title: "だれもが障壁を忘れて集える、新しい温もり交流の場。",
    description: "ビューティデーやバリアフリーアート展示などを定期開催。地域の人々をハートフルに結びつけます。",
    gradient: "from-sky-300/40 to-indigo-500/40",
  },
  {
    id: "g5",
    category: "TOUCH THERAPY",
    number: "05",
    tag: "タクティールコミュニケーション",
    title: "肌を通じた対話。心と体の安らぎを呼び起こす手法。",
    description: "自律神経の調和をはかり、安心感を与えるタッチングケア。笑顔の裏側にある健やかなメンタルを支えます。",
    gradient: "from-purple-300/40 to-rose-400/40",
  },
  {
    id: "g6",
    category: "FUTURE VISION",
    number: "06",
    tag: "Color Your Future",
    title: "あなたらしい本来の色が、きらきらと輝く未来（あした）。",
    description: "私たちは、すべての人に「なりたかった私」「もっとワクワクする私」に再会する幸せをお約束します。",
    gradient: "from-[#ffa07a]/40 to-[#ff6b8b]/40",
  },
];

export default function MainSections({ onInquiryClick, onNavigateSection }: MainSectionsProps) {
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
      
      {/* 2. ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 py-24 lg:py-32 px-8 xl:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-t border-rose-50/30">
        
        {/* Left Graphics & Philosophy */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 space-y-6">
            <div className="flex items-center gap-2 text-rose-500">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#ff6b8b]">About Re-Palette</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold font-serif-jp leading-tight text-gray-900 select-none">
              伴走型美容福祉で、<br />
              すべての若者に彩りを。
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

      {/* 2.5. SERVICES SECTION */}
      <section id="services" className="scroll-mt-24 py-24 lg:py-32 bg-[#fafaf9] relative overflow-hidden border-t border-gray-50">
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

      {/* 3. VISION (Color Your Future) SECTION */}
      <section id="vision" className="scroll-mt-12 py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Artistic paint wash background circles */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose-50/20 filter blur-[90px] pointer-events-none select-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-50/20 filter blur-[90px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-8 xl:px-16 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4 select-none">
            <div className="inline-flex items-center gap-1.5 text-[#ff7686] bg-rose-50/50 px-4 py-1.5 rounded-full border border-rose-100/20 text-[11px] font-bold tracking-widest uppercase font-mono">
              <Compass size={12} className="text-[#ff7686] animate-spin-slow" />
              <span>Color Your Future</span>
            </div>
            
            <h2 className="text-3.5xl lg:text-4.5xl font-black font-serif-jp text-gray-950 tracking-tight leading-tight pt-2">
              VISION
            </h2>
            <p className="text-lg lg:text-xl font-bold font-serif-jp text-rose-400 bg-gradient-to-r from-rose-500 via-amber-400 to-[#1db2cf] bg-clip-text text-transparent">
              誰もが「自分色の未来」を自由に描ける社会へ。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Philosophy Pillar */}
            <div className="lg:col-span-6 space-y-8 text-gray-700 font-sans font-medium">
              <h3 className="text-2xl font-extrabold font-serif-jp text-gray-900 leading-snug">
                年齢や障がいを理由に、<br />
                自分をもてなす喜びを諦めない社会をつくる。
              </h3>
              
              <div className="space-y-5 leading-relaxed tracking-wide text-sm font-medium text-gray-600">
                <p>
                  髪を切り整え、好みの色をまとう。それだけで鏡に映る瞳は輝き、言葉が弾み、世界が生き生きと動き出します。「美しくありたい」と願う本能は、人が健やかに豊かに生きるための、最も純粋で強力なエネルギーです。
                </p>
                <p>
                  しかし移動が困難であったり、環境が整っていなかったりすることで、多くの人がその体験に届かない現実があります。
                </p>
                <p>
                  私たちRe-Palette（リパレット）は、すべての障害を取り除き、一人ひとりに最高水準の美容ケアをお届けします。パレットに新しい絵の具を溶くように、あなたの世界を美しい驚きと希望の色で満たすこと。それが私たちの使命です。
                </p>
              </div>

              {/* Dynamic decorative statement */}
              <div className="pt-4 flex items-center gap-4 text-xs font-mono font-bold text-gray-400 select-none">
                <span>EQUALITY OF BEAUTY</span>
                <span className="w-8 h-[1px] bg-gray-200" />
                <span>FREEDOM OF EXPRESSION</span>
              </div>
            </div>

            {/* Core Values Pillars Design */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-8 rounded-[32px] bg-[#fafaf9] border border-gray-100 hover:border-rose-100/50 hover:bg-white transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 font-black">
                  彩
                </div>
                <h4 className="text-md font-bold font-serif-jp text-gray-900">
                  尊厳のカラー
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                  単なる日常の整髪ではなく、「ときめく心」や「高揚感」という精神的尊厳にフォーカスします。
                </p>
              </div>

              <div className="p-8 rounded-[32px] bg-[#fafaf9] border border-gray-100 hover:border-amber-100/50 hover:bg-white transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 font-black">
                  温
                </div>
                <h4 className="text-md font-bold font-serif-jp text-gray-900">
                  臨床での寄り添い
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                  医療や心理への深い理解を用い、相手の身体的・認知的な状態に極限までアライメントします。
                </p>
              </div>

              <div className="p-8 rounded-[32px] bg-[#fafaf9] border border-gray-100 hover:border-teal-100/50 hover:bg-white transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-500 font-black">
                  創
                </div>
                <h4 className="text-md font-bold font-serif-jp text-gray-900">
                  未来を創る共走
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                  地域、ご家族、福祉施設スタッフの方々と共に車輪を回し、社会課題を笑顔でアップデートします。
                </p>
              </div>

              <div className="p-8 rounded-[32px] bg-[#fafaf9] border border-gray-100 hover:border-sky-100/50 hover:bg-white transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 font-black">
                  志
                </div>
                <h4 className="text-md font-bold font-serif-jp text-gray-900">
                  プロの人材育成
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                  アカデミーでの教育を通し、「優しさ」と「プロ技術」を兼ね備えた優れたイノベーターを紡ぎ出します。
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>



      {/* 4. GALLERY SECTION */}
      <section id="gallery" className="scroll-mt-12 py-24 lg:py-32 bg-[#fafaf9] relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-rose-500 font-bold bg-white px-4 py-1.5 rounded-full border border-rose-50 text-[11px] uppercase tracking-widest">
              Studio Gallery
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold font-serif-jp text-gray-900 tracking-tight select-none">
              美しさと温もりが行き交う、日々の記録
            </h2>
            <p className="text-xs text-gray-500 font-sans tracking-wide">
              Re-Paletteが届けてきた、いくつもの笑顔と感動の瞬間をご紹介します。
            </p>
          </div>

          {/* Elegant Bento Grid of visual representation blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="group relative h-[380px] rounded-[32px] overflow-hidden bg-white border border-gray-100 shadow-sm transition-all"
              >
                {/* A soft color-wash gradient as fallback matching the premium theme */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} opacity-20 group-hover:opacity-30 transition-all duration-500`} />
                
                {/* Subtle graphical background pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Content overlay container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest font-mono text-gray-400 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-gray-100/50">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-rose-400/80">
                      {item.number}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[11px] font-bold tracking-widest text-[#ffa07a] uppercase block font-mono">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 font-serif-jp leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 font-sans font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-300 via-amber-200 to-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="scroll-mt-12 py-24 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        {/* Absolute shapes for cosmetic touch */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-72 h-72 rounded-full bg-[#fbdbe1]/20 filter blur-3xl pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-8 xl:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-[11px] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Contact Us</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold font-serif-jp text-gray-900 tracking-tight leading-tight select-none">
                お気軽にご相談、<br />
                お問い合わせください。
              </h2>
              
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium">
                個人での訪問理美容のご依頼、福祉施設・病院経営者様からのデモンストレーションやお見積もりの相談、メディア取材等、随時受け付けております。
              </p>

              <div className="space-y-4 pt-4 border-t border-rose-100/50">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">TEL</span>
                  <span className="text-lg font-bold text-[#343a40] font-sans">03-xxxx-xxxx</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">EMAIL</span>
                  <span className="text-sm font-bold text-[#343a40] font-sans">contact@re-palette.com</span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium font-sans">受付時間：平日 10:00〜18:00（土日祝休）</p>
              </div>
            </div>

            {/* Quick Box or simplified form */}
            <div className="lg:col-span-7 bg-[#fafaf9] rounded-[40px] p-8 lg:p-10 border border-gray-100 shadow-sm relative">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900 font-serif-jp mb-2">オンラインフォームからのお問い合わせ</h3>
                <p className="text-xs text-gray-500 mb-6 font-medium">以下ボタンより、担当者が直接対応させていただくフォームが開きます。お気軽に入力ください。</p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onInquiryClick}
                  className="w-full py-5 rounded-[24px] bg-gradient-to-r from-rose-400 via-rose-500 to-orange-400 hover:from-rose-500 hover:to-orange-400 text-white font-bold text-sm text-center shadow-lg hover:shadow-xl hover:shadow-rose-100/80 cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  <span>お問い合わせフォームを開く</span>
                </motion.button>

                <p className="text-[10px] text-gray-400 text-center uppercase font-mono tracking-widest pt-2">
                  Secure Submission Protection
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMPANY FOOTER */}
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
              <li><button onClick={() => onNavigateSection("hero")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">トップ (Top)</button></li>
              <li><button onClick={() => onNavigateSection("about")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">私たちについて (About)</button></li>
              <li><button onClick={() => onNavigateSection("services")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">サービス内容 (Services)</button></li>
              <li><button onClick={() => onNavigateSection("vision")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">未来へのビジョン (Vision)</button></li>
              <li><button onClick={() => onNavigateSection("event")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">イベント情報 (Events)</button></li>
              <li><button onClick={() => onNavigateSection("gallery")} className="hover:text-rose-400 transition-colors text-left cursor-pointer">日々の記録 (Gallery)</button></li>
              <li><button onClick={() => onNavigateSection("contact")} className="hover:text-rose-400 transition-colors flex items-center gap-1 text-left cursor-pointer">お問い合わせ (Contact) <ChevronRight size={10} /></button></li>
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
            <button onClick={() => onNavigateSection("about")} className="hover:text-white transition-all cursor-pointer">プライバシーポリシー</button>
            <span className="w-[1px] bg-gray-700" />
            <button onClick={() => onNavigateSection("about")} className="hover:text-white transition-all cursor-pointer">特定商取引に基づく表記</button>
          </div>
        </div>

      </footer>

    </div>
  );
}
