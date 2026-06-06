import { NavItem, NewsItem, ServiceItem } from "./types";

export const navigationItems: NavItem[] = [
  { id: "about", label: "About Us", jpLabel: "ABOUT", href: "#about" },
  { id: "services", label: "Services", jpLabel: "SERVICE", href: "#services" },
  { id: "vision", label: "Color Your Future", jpLabel: "VISION", href: "#vision" },
  { id: "event", label: "Upcoming Events", jpLabel: "EVENT", href: "#event" },
  { id: "gallery", label: "Gallery", jpLabel: "GALLERY", href: "#gallery" },
  { id: "contact", label: "Contact Us", jpLabel: "CONTACT", href: "#contact" },
];

export const newsFeed: NewsItem[] = [
  {
    id: "1",
    date: "2026.06.06",
    category: "INFO",
    title: "ホームページを公開しました。",
  },
  {
    id: "2",
    date: "2026.06.06",
    category: "EVENT",
    title: "美容交流イベント「Nuance Lounge」開催決定！",
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "third-place",
    title: "COMMUNITY THIRD PLACE",
    jpTitle: "コミュニティ・サロン（サードプレイス事業）",
    subtitle: "【Nuance Lounge（ニュアンスラウンジ）】",
    description: "不登校や孤立、ルッキズムによる生きづらさを抱え、「一歩を踏み出せない」若者のためのポップアップ・サードプレイスです。学校や家庭以外の安心できる空間で、同じ目線を持つ仲間と出会い、ありのままの自分を表現できる最初の居場所を提供します。",
    color: "from-rose-400 to-orange-400",
    iconName: "Users",
  },
  {
    id: "companion-grooming",
    title: "SELF-CARE EDUCATION",
    jpTitle: "伴走型整容教育（セルフケア技術の習得支援）",
    subtitle: "【自分で自分を素敵にする技術】",
    description: "プロが一方的に施術するのではなく、年齢の近い美容学生が隣に寄り添いながら、参加者自身がアイロンの動かし方や眉の整え方を実践・習得するプログラムです。「自分の手で外見をコントロールできた」という原体験が、強力な自己効力感（自信）を生み出します。",
    color: "from-amber-400 to-yellow-300",
    iconName: "Sparkles",
  },
  {
    id: "peer-support",
    title: "PEER SUPPORT SESSION",
    jpTitle: "ピア・サポート＆テーマトーク（対話セッション）",
    subtitle: "【美容をフックにしたフラットな対話】",
    description: "アイロンを持つハードルすら高いと感じる時期でも、おしゃべり感覚で「自分らしさ」や髪・眉の小さなお悩みを語り合える場です。美容学生がフラットな対話のパートナーとなることで、外見への心理的ハードルを下げ、心地よい温もりを共有します。",
    color: "from-teal-400 to-emerald-400",
    iconName: "Heart",
  },
  {
    id: "data-evidence",
    title: "DATA & EVIDENCE RESEARCH",
    jpTitle: "データ＆エビデンス（実学・社会的処方の検証）",
    subtitle: "【科学的根拠に基づく美容福祉の体系化】",
    description: "感覚的なアプローチに留まらず、ルネ・エンゲル教授の『Beauty Sick』理論等をベースとした事前・事後の心境変化アンケートを実施。参加者の「自己効力感」や「社会への主体性」の回復を定量・定性データとして検証し、日本における新たな社会的処方のモデルを証明します。",
    color: "from-sky-400 to-indigo-400",
    iconName: "GraduationCap",
  }
];
