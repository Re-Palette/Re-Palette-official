import React from "react";
import { motion } from "motion/react";
import { Scissors, Sparkles, GraduationCap, Users, Heart, Award, Smile, ChevronRight, Mail, Compass, Calendar, MapPin, Clock, Instagram, Facebook, Linkedin, Quote, User } from "lucide-react";
import { servicesData } from "../data";
import representativeImg from "../assets/images/representative.jpg";

interface MainSectionsProps {
  onInquiryClick: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function MainSections({ onInquiryClick, onNavigateSection }: MainSectionsProps) {
  const [imgSrc, setImgSrc] = React.useState(representativeImg);
  const [imgError, setImgError] = React.useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

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
            
            <h2 className="text-[27px] font-extrabold font-serif-jp leading-tight text-gray-900 select-none">
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
              <span className="text-left text-[24px]">「なりたい自分」を諦めない社会へ</span>
            </h3>
            
            <p className="text-sm font-sans font-medium text-gray-600 leading-relaxed tracking-wider">
              だれしもが周りの目を気にし、不登校や孤立を経験し、あるいは「自分なんておしゃれをしてはいけないのではないか」と、一歩を踏み出せない瞬間があります。しかし、髪型をほんの少し整えること、鏡のなかの自分と向き合うことで得られる「ときめき」は、他人の評価に縛られない、主体的（エージェンシー）に生きるチカラへと変わるはずです。
            </p>
            <p className="text-sm font-sans font-medium text-gray-600 leading-relaxed tracking-wider">
              私たちは、単に流行のヘアカットや見た目の美しさを押し付けるのではありません。一人ひとりが外見の呪縛から解放され、自分で自分を愛せる技術を学び、自尊心と笑顔の花を咲かせるための伴走型パートナーです。
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
                <h4 className="font-bold text-gray-900 text-sm font-serif-jp mb-1 whitespace-nowrap">学術的エビデンスと確かな居場所</h4>
                <p className="text-[12px] text-gray-500 font-medium">イベント前後の心境変化をデータとして測定・検証し、若者のメンタルヘルスを守るための社会的インフラとしての実践に挑みます。</p>
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
            
            <h2 className="text-[27px] font-extrabold font-serif-jp text-gray-900 tracking-tight select-none">
              やさしさと彩りを届けるサービス
            </h2>
            
            <p className="text-xs text-gray-500 font-sans tracking-wide">
              若者世代のための新たなセルフケア支援と、サードプレイス創出プログラムを展開しています。
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
                  
                  <h3 className="text-sm sm:text-[15px] md:text-[16px] font-bold text-gray-900 font-serif-jp mb-2 leading-relaxed">
                    <span className="block whitespace-nowrap overflow-hidden text-ellipsis">{service.jpTitle.split("（")[0]}</span>
                    {service.jpTitle.includes("（") && (
                      <span className="block text-[11px] sm:text-xs font-medium text-gray-500 font-sans mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                        （{service.jpTitle.split("（")[1]}
                      </span>
                    )}
                  </h3>

                  {service.subtitle && (
                    <div className="text-xs sm:text-xs md:text-sm font-bold text-[#ff7686] font-serif-jp mb-4 leading-snug whitespace-nowrap overflow-hidden text-ellipsis" title={service.subtitle}>
                      {service.subtitle}
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium mb-8">
                    {service.description}
                  </p>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdr0b2qbfsEBa6tatUcKdFP7leu4645nQ9gXeIQlCyVvuFxRg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff7686] hover:text-[#ffa07a] transition-colors cursor-pointer justify-self-end mt-4 self-start"
                >
                  <span>資料請求・お問い合せ</span>
                  <ChevronRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
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
            <p className="text-[20px] font-bold font-serif-jp text-rose-400 bg-gradient-to-r from-rose-500 via-amber-400 to-[#1db2cf] bg-clip-text text-transparent">
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

      {/* 3.5. REPRESENTATIVE MESSAGE FEATURE */}
      <section id="representative" className="scroll-mt-12 py-24 lg:py-32 bg-stone-50/50 backdrop-blur-sm relative overflow-hidden border-t border-gray-100/60 shadow-[inset_0_-2px_12px_rgba(0,0,0,0.01)]">
        {/* Artistic paint wash background circles */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-rose-50/20 filter blur-[90px] pointer-events-none select-none" />
        
        <div className="max-w-5xl mx-auto px-8 xl:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual card with Name and Profile metadata */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="relative">
                {/* Decorative glowing gradient ring */}
                <div className="absolute -inset-1 rounded-[50px] bg-gradient-to-tr from-rose-400 via-amber-300 to-teal-300 opacity-25 blur-md" />
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-[44px] bg-white border border-rose-50/60 overflow-hidden flex items-center justify-center shadow-lg shadow-rose-100/20">
                  {!imgError ? (
                    <img
                      src={imgSrc}
                      alt="鈴木 陽大"
                      onError={handleImageError}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-b from-rose-50/40 via-[#fff8f6]/50 to-amber-50/40 flex flex-col items-center justify-center p-6 text-center select-none">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-rose-100/30 mb-2">
                        <User className="w-8 h-8 text-[#ff7686]" />
                      </div>
                      <span className="text-[9px] font-mono tracking-[0.25em] text-[#ff7686] font-bold uppercase select-none">RE-PALETTE</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2 select-none">
                <span className="text-gray-400 text-[10px] font-mono tracking-[0.22em] uppercase block">Representative</span>
                <h3 className="text-2.5xl font-black font-serif-jp text-gray-900 leading-tight">
                  鈴木 陽大
                </h3>
                <p className="text-xs font-bold text-rose-500 font-sans tracking-wide">
                  学生団体 Re-Palette 代表
                </p>
              </div>
            </div>

            {/* Right Column: Empathic Message Body */}
            <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-gray-100/80 lg:pl-12">
              <div className="inline-flex items-center gap-1.5 text-rose-500 bg-white px-3.5 py-1.5 rounded-full border border-rose-50 text-[10px] font-bold tracking-widest uppercase font-mono select-none shadow-sm shadow-rose-100/10">
                代表の想い
              </div>
              
              <div className="relative">
                {/* Large decorative quotation mark */}
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-rose-100/30 transform -rotate-12 pointer-events-none select-none" />
                
                <h4 className="text-[18px] font-serif-jp font-extrabold text-[#343a40] leading-snug relative z-10 select-none">
                  「自分色のパレットを広げ、<br className="hidden sm:block" />
                  誰もがありのままでいられる居場所を。」
                </h4>
              </div>

              <div className="space-y-5 leading-relaxed tracking-wide text-xs md:text-sm font-medium text-gray-600 font-sans pr-4">
                <p>
                  僕はこれまで、同世代の不登校や孤立、そしてルッキズムといった生きづらさと向き合い、さまざまな挑戦をしてきました。その中で強く感じたのは、「人の主体性は、安心できる居場所と、フラットな人との出会いで回復する」ということです。
                </p>
                <p>
                  実際に、僕の人生を変え、進むべき道を照らしてくれたのは環境と人でした。同じように悩みながらも「変わりたい」と願う仲間と出会い、歳の近い美容学生や美容師、多くの仲間とフラットに語り合うことで、自分の可能性が広がっていく感覚がありました。
                </p>
                <p>
                  しかし、そうした一歩を踏み出すきっかけは、意図的に作らないと生まれにくいのが現実です。だからこそ、美容への心理的ハードルを下げ、孤独を感じている人たちが交われるサードプレイスを作りたいと思い、学生団体Re-Paletteを立ち上げました。
                </p>
                <p>
                  Re-Paletteが運営する『Nuance Lounge（ニュアンスラウンジ）』は、ただのコミュニティではありません。それぞれの「変わりたい」が交差し、対話や伴走型整容教育を通じて、次の主体的な挑戦へとつながっていく場所です。ここでの出会いが、誰かの人生を変えるきっかけになる。そんなやさしさと彩りの連鎖を、本気で作っていきます。
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
              Gallery
            </div>
            <h2 className="text-[17px] font-extrabold font-serif-jp text-gray-900 tracking-tight select-none">
              美しさと温もりが行き交う、日々の記録
            </h2>
            <p className="text-xs text-gray-500 font-sans tracking-wide">
              Re-Paletteが届けてきた、いくつもの笑顔と感動の瞬間をご紹介します。
            </p>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[250px] bg-white rounded-[40px] border border-gray-100/80 shadow-sm p-12">
            <div className="text-center space-y-4">
              <span className="text-gray-400 text-xs font-mono tracking-[0.25em] uppercase block select-none">
                Coming soon
              </span>
              <div className="w-12 h-[1px] bg-gray-200 mx-auto" />
            </div>
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
              
              <h2 className="text-[28px] font-extrabold font-serif-jp text-gray-900 tracking-tight leading-tight select-none">
                お気軽にご相談、<br />
                お問い合わせください。
              </h2>
              
              <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium">
                個人での訪問理美容のご依頼、福祉施設・病院経営者様からのデモンストレーションやお見積もりの相談、メディア取材等、随時受け付けております。
              </p>

              <div className="space-y-4 pt-4 border-t border-rose-100/50">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">EMAIL</span>
                  <span className="text-sm font-bold text-[#343a40] font-sans">
                    <a href="mailto:repalette809@gmail.com" className="hover:text-rose-500 transition-colors">repalette809@gmail.com</a>
                  </span>
                </div>
                
                <div className="pt-2">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2.5 font-mono">Official SNS</p>
                  <div className="flex items-center gap-3">
                    <a href="https://www.instagram.com/repalette_official/?hl=ja" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-50 hover:bg-rose-50 border border-gray-100 text-gray-400 hover:text-rose-500 transition-all shadow-sm" title="Instagram">
                      <Instagram size={16} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61587543673430&locale=ja_JP" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-50 hover:bg-rose-50 border border-gray-100 text-gray-400 hover:text-rose-500 transition-all shadow-sm" title="Facebook">
                      <Facebook size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/haruto-suzuki-614a253b9/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-50 hover:bg-rose-50 border border-gray-100 text-gray-400 hover:text-rose-500 transition-all shadow-sm" title="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Box or simplified form */}
            <div className="lg:col-span-7 bg-[#fafaf9] rounded-[40px] p-8 lg:p-10 border border-gray-100 shadow-sm relative">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900 font-serif-jp mb-2">オンラインフォームからのお問い合わせ</h3>
                <p className="text-xs text-gray-500 mb-6 font-medium">以下ボタンより、担当者が直接対応させていただくフォームが開きます。お気軽に入力ください。</p>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdr0b2qbfsEBa6tatUcKdFP7leu4645nQ9gXeIQlCyVvuFxRg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 rounded-[24px] bg-gradient-to-r from-rose-400 via-rose-500 to-orange-400 hover:from-rose-500 hover:to-orange-400 text-white font-bold text-sm text-center shadow-lg hover:shadow-xl hover:shadow-rose-100/80 cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  <span>お問い合わせフォームを開く</span>
                </motion.a>

                <p className="text-[10px] text-gray-400 text-center uppercase font-mono tracking-widest pt-2">
                  Secure Submission Protection
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMPANY FOOTER */}
      <footer id="company" className="bg-[#181615] text-stone-300 pt-20 pb-12 font-sans select-none border-t border-stone-800/40">
        
        <div className="max-w-7xl mx-auto px-8 xl:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-b border-stone-800/85 pb-12">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="font-serif-jp text-3.5xl font-extrabold tracking-widest text-white">
              Re-Palette
            </h3>
            <div className="border-l-2 border-rose-400 pl-3">
              <span className="text-xs font-serif-jp font-bold text-rose-400 block tracking-wider">
                美容福祉のチカラで、ありのままの自分へ。
              </span>
            </div>
            <p className="text-[13px] text-stone-400 leading-relaxed font-sans pt-1">
              不登校や孤立、ルッキズムなどの生きづらさを抱える若者に向け、整容教育や自己修復のためのサードプレイス「Nuance Lounge」を提供しています。
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6 border-b border-stone-800/60 pb-2 inline-block lg:w-48">
              Quick Links
            </h4>
            <ul className="text-[13px] space-y-3.5 text-stone-300 font-medium">
              <li>
                <button onClick={() => onNavigateSection("hero")} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all text-left cursor-pointer flex items-center gap-1.5 group">
                  <span className="text-rose-400/50 group-hover:text-rose-400">・</span> トップ (Top)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("about")} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all text-left cursor-pointer flex items-center gap-1.5 group">
                  <span className="text-rose-400/50 group-hover:text-rose-400">・</span> 私たちについて (About)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("services")} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all text-left cursor-pointer flex items-center gap-1.5 group">
                  <span className="text-rose-400/50 group-hover:text-rose-400">・</span> サービス内容 (Services)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("vision")} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all text-left cursor-pointer flex items-center gap-1.5 group">
                  <span className="text-rose-400/50 group-hover:text-rose-400">・</span> 未来へのビジョン (Vision)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("event")} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all text-left cursor-pointer flex items-center gap-1.5 group">
                  <span className="text-rose-400/50 group-hover:text-rose-400">・</span> イベント情報 (Events)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("gallery")} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all text-left cursor-pointer flex items-center gap-1.5 group">
                  <span className="text-rose-400/50 group-hover:text-rose-400">・</span> 日々の記録 (Gallery)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection("contact")} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-1.5 text-left cursor-pointer group">
                  <span className="text-rose-400/50 group-hover:text-rose-400">・</span> お問い合わせ (Contact) <ChevronRight size={12} className="text-stone-500 group-hover:text-rose-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Base Info */}
          <div className="md:col-span-4 space-y-4 text-[13px] text-stone-300">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6 border-b border-stone-800/60 pb-2 inline-block lg:w-48">
              Organization
            </h4>
            <p className="font-bold text-white tracking-wide">学生団体 Re-Palette（リパレット）</p>
            
            <div className="space-y-2 mt-2 leading-relaxed text-stone-400 text-[12.5px]">
              <div className="flex items-start gap-1 pb-1">
                <span className="bg-stone-800/60 text-stone-400 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold shrink-0 mt-0.5">Mail</span>
                <a href="mailto:repalette809@gmail.com" className="text-rose-400 transition-all hover:underline hover:text-rose-300 font-medium pl-1 break-all">
                  repalette809@gmail.com
                </a>
              </div>
              <div className="border-t border-stone-800/50 pt-2.5 mt-2">
                <span className="text-[11px] uppercase font-bold tracking-wider text-rose-400 block mb-1">事業内容</span>
                <ul className="list-none space-y-1 pl-1">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400/40" /> サードプレイス事業 (Nuance Lounge 運営)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400/40" /> 伴走型整容教育 ＆ ピアサポート
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400/40" /> 実学および社会的処方の検証
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center gap-3 pt-5 border-t border-stone-800/30">
              <a href="https://www.instagram.com/repalette_official/?hl=ja" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800/40 border border-stone-800/80 hover:bg-rose-500 hover:text-white hover:border-rose-400 transition-all transform hover:-translate-y-0.5 duration-300 text-stone-400" title="Instagram">
                <Instagram size={17} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587543673430&locale=ja_JP" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800/40 border border-stone-800/80 hover:bg-rose-500 hover:text-white hover:border-rose-400 transition-all transform hover:-translate-y-0.5 duration-300 text-stone-400" title="Facebook">
                <Facebook size={17} />
              </a>
              <a href="https://www.linkedin.com/in/haruto-suzuki-614a253b9/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800/40 border border-stone-800/80 hover:bg-rose-500 hover:text-white hover:border-rose-400 transition-all transform hover:-translate-y-0.5 duration-300 text-stone-400" title="LinkedIn">
                <Linkedin size={17} />
              </a>
            </div>
          </div>

        </div>

        {/* Legal copy */}
        <div className="max-w-7xl mx-auto px-8 xl:px-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500">
          <span>© 2026 Re-Palette Co., Ltd. All rights reserved.</span>
          <div className="flex gap-4 mt-4 md:mt-0 font-medium h-4">
            <button onClick={() => onNavigateSection("about")} className="hover:text-rose-400 transition-all cursor-pointer">プライバシーポリシー</button>
            <span className="w-[1px] bg-stone-800" />
            <button onClick={() => onNavigateSection("about")} className="hover:text-rose-400 transition-all cursor-pointer">特定商取引に基づく表記</button>
          </div>
        </div>

      </footer>
    </div>
  );
}
