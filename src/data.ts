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
    date: "2024.04.01",
    category: "INFO",
    title: "ホームページを公開しました。",
  },
  {
    id: "2",
    date: "2024.05.15",
    category: "EVENT",
    title: "「福祉×美容」体験型キャリアワークショップを東京本校にて開催いたします。",
  },
  {
    id: "3",
    date: "2024.06.01",
    category: "SERVICE",
    title: "地域包括ケアに焦点を当てた新しい訪問ヘアメイクプログラムを開始しました。",
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "visiting-beauty",
    title: "Visiting Beauty Care",
    jpTitle: "訪問美容事業",
    description: "年齢や障がい、病気などにより、外出が困難な方のもとへプロの美容師が直接訪問。サロンクオリティの施術（カット、カラー、マニキュア、フェイシャルケア）を提供し、外見だけでなく心に寄り添い、喜びと活力を届けます。",
    color: "from-rose-400 to-orange-400",
    iconName: "Scissors",
  },
  {
    id: "welfare-makeup",
    title: "Welfare Makeup & Therapy",
    jpTitle: "福祉メイク・セラピー",
    description: "視覚障がいのある方へのセルフメイク指導や、認知症ケアの一環としてのメイクアップセラピー。指先を動かし、鏡のなかの自分に微笑みかける体験を通じて、自立支援やリハビリ効果、明るい前向きな笑顔を引き出します。",
    color: "from-amber-400 to-yellow-300",
    iconName: "Sparkles",
  },
  {
    id: "academy",
    title: "Academy & Seminars",
    jpTitle: "スクール・人材育成",
    description: "美容と福祉、療育の知識を掛け合わせたスペシャリスト「美容福祉士」を養成する専門プログラムを提供。介護施設スタッフ向けのタッチセラピー講習や、美容師のキャリアシフトを後押しする多面的な学びをサポートします。",
    color: "from-teal-400 to-emerald-400",
    iconName: "GraduationCap",
  },
  {
    id: "community-salon",
    title: "Community Salon",
    jpTitle: "コミュニティ・サロン",
    description: "世代や属性を超えて、だれもが自分らしく輝ける居場所。バリアフリー設計を徹底したスタジオ空間で、ビューティーイベント、福祉アート展示、多世代交流ワークショップなどを通じて、地域社会との温かな絆を育みます。",
    color: "from-sky-400 to-indigo-400",
    iconName: "Users",
  }
];
