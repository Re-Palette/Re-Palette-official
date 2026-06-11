import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Shield, FileText, Landmark, Mail, MapPin } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: "privacy" | "tokushoho";
}

export default function LegalModal({ isOpen, onClose, initialTab }: LegalModalProps) {
  const [activeTab, setActiveTab] = React.useState<"privacy" | "tokushoho">("privacy");

  // Keep activeTab in sync with initialTab when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Handle closing when ESC is pressed
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-[40px] border border-stone-100 shadow-2xl flex flex-col overflow-hidden z-10 select-text"
          >
            {/* Glowing top-right border accents */}
            <div className="absolute top-0 right-0 w-80 h-40 bg-gradient-to-bl from-rose-200/15 via-transparent to-transparent pointer-events-none rounded-t-[40px]" />
            <div className="absolute bottom-0 left-0 w-80 h-40 bg-gradient-to-tr from-[#14b8a6]/5 via-transparent to-transparent pointer-events-none rounded-b-[40px]" />

            {/* Header section */}
            <div className="p-6 sm:p-8 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-rose-50/50 text-rose-500 rounded-2xl border border-rose-100/30">
                  {activeTab === "privacy" ? <Shield size={22} /> : <FileText size={22} />}
                </div>
                <div>
                  <h2 className="text-xl font-serif-jp font-black text-stone-900 tracking-tight">法律・規約情報</h2>
                  <p className="text-[11px] text-stone-400 font-mono tracking-wider font-semibold uppercase mt-0.5">Legal Specifications</p>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="flex bg-stone-50 border border-stone-100 rounded-full p-1 self-start sm:self-center">
                <button
                  onClick={() => setActiveTab("privacy")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-300 cursor-pointer ${
                    activeTab === "privacy"
                      ? "bg-white text-rose-500 shadow-sm"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  プライバシーポリシー
                </button>
                <button
                  onClick={() => setActiveTab("tokushoho")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-300 cursor-pointer ${
                    activeTab === "tokushoho"
                      ? "bg-white text-rose-500 shadow-sm"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  特定商取引に基づく表記
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-stone-600 hover:bg-stone-50 border border-stone-100 bg-white transition-all duration-200 cursor-pointer shadow-sm"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content pane with local scrollbar */}
            <div className="p-6 sm:p-10 overflow-y-auto max-h-full leading-relaxed space-y-8 font-sans scrollbar-thin">
              {activeTab === "privacy" ? (
                <div className="space-y-6">
                  {/* Privacy Policy Content */}
                  <div className="border-b border-stone-105 pb-5">
                    <h3 className="text-lg font-bold text-stone-900 font-serif-jp relative pl-3.5 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-1 before:bg-rose-400 before:rounded">
                      個人情報保護方針（プライバシーポリシー）
                    </h3>
                    <p className="text-stone-500 text-xs mt-2">
                      学生団体 Re-Palette（以下「当団体」といいます）は、提供するサードプレイス事業、イベント、各種サポートプログラム等（以下「本サービス」といいます）における、利用者の個人情報の取り扱いに関し、以下の通りプライバシーポリシーを定め、その適切な保護に努めます。
                    </p>
                  </div>

                  <div className="space-y-6 text-[13px] text-stone-600">
                    <section className="space-y-2">
                      <h4 className="font-bold text-stone-800 text-sm">1. 個人情報の定義</h4>
                      <p>
                        本プライバシーポリシーにおける「個人情報」とは、個人情報保護法にいう「個人情報」を指し、生存する個人に関する情報であって、提供されるお名前、生年月日、連絡先（住所・電話番号・メールアドレス等）、特定の個人を識別できる情報（その他の情報と照合することで容易に個人を識別できるものを含む）を指します。
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-stone-800 text-sm">2. 個人情報の取得と収集目的</h4>
                      <p>当団体は、本サービスの提供・運営に伴い、適法かつ公正な手段によって個人情報を取得します。取得した個人情報の主な利用目的は以下の通りです。</p>
                      <ul className="list-disc pl-5 space-y-1 text-stone-500">
                        <li>各種イベント（Nuance Loungeなど）の予約受付、対面／オンラインセッション運営および円滑な実施</li>
                        <li>利用者様からのお問い合わせやご相談、窓口対応のため</li>
                        <li>当団体が企画するプログラム、サービス開発におけるアンケート調査や検証実施</li>
                        <li>当団体の活動報告、各種ご案内、緊急時その他必要に応じた諸連絡のため</li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-stone-800 text-sm">3. 個人情報の厳重管理と安全対策</h4>
                      <p>
                        当団体はお預かりした個人情報の秘密保持を徹底し、個人情報の漏洩、紛失、改ざん、または不正アクセスなどを防止するために必要かつ適切な安全対策を講じ、厳重に管理監督を行います。
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-stone-800 text-sm">4. 第三者への開示・提供の制限</h4>
                      <p>
                        当団体は、法令に定める場合を除き、事前にお客様の同意を得ることなく、お客様の個人情報を第三者に提供・開示したしません。ただし、法令に基づく公的機関からの開示指示、または人の生命、身体もしくは財産保護に緊急の必要性がある場合には開示する場合があります。
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-stone-800 text-sm">5. 個人情報の開示・訂正・利用停止・消去</h4>
                      <p>
                        お客様がご自身の個人情報について開示、訂正、利用停止、または削除をご希望される場合には、ご本人様であることを確認させていただいたうえで、当団体の規約に準じ速やかに合理的な範囲内で対応いたします。
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h4 className="font-bold text-stone-800 text-sm">6. プライバシーポリシーの改定</h4>
                      <p>
                        当団体は、保有する個人情報に関する法令および社会通念を遵守し、本プライバシーポリシーの内容を必要に応じて適宜見直し、継続的改善に努めます。改定された新しいポリシーは本ウェブサイト上に掲示した時点で即座に効力を生じるものとします。
                      </p>
                    </section>
                  </div>

                  {/* Footer Contact info */}
                  <div className="bg-stone-50 border border-stone-100 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h5 className="font-bold text-stone-800 text-xs">個人情報管理に関するお問い合わせ先</h5>
                      <p className="text-[11px] text-stone-400">ご意見・ご質問につきましては、以下にお気軽にご連絡ください。</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white text-stone-700 text-xs px-4 py-2 rounded-xl shadow-sm border border-stone-200/50 self-start sm:self-center">
                      <Mail size={14} className="text-rose-400" />
                      <a href="mailto:repalette809@gmail.com" className="hover:text-rose-500 font-medium select-all">
                        repalette809@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Tokushoho Content */}
                  <div className="border-b border-stone-105 pb-5">
                    <h3 className="text-lg font-bold text-stone-900 font-serif-jp relative pl-3.5 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-1 before:bg-rose-400 before:rounded">
                      特定商取引法に基づく表記
                    </h3>
                    <p className="text-stone-500 text-xs mt-2">
                      特定商取引法（通信販売）に基づき、以下の通り取引・サービス事項を公示いたします。
                    </p>
                  </div>

                  {/* Dense Table Layout for specifications */}
                  <div className="border border-stone-100 rounded-[24px] overflow-hidden bg-white text-[13px]">
                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        運営団体名称
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        学生団体 Re-Palette（リパレット）
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        代表者 / 運営責任者
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        鈴木 陽大
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        連絡先 (メールアドレス)
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600 flex items-center gap-2">
                        <Mail size={14} className="text-stone-400" />
                        <a href="mailto:repalette809@gmail.com" className="text-rose-500 hover:underline">
                          repalette809@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        サービス価格（対価）
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        各イベント申込ページ、チケット購入、またはプログラム募集要項に表示される金額（税込）に基づく。
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        対価以外の必要費用
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        インターネット接続料金、パケット通信料、および指定された銀行口座への振込に伴う手数料（銀行振込、代金振込時）は参加者様のご負担となります。またイベント会場等への各自の交通費は全額ご本人負担となります。
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        お支払方法
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        各種クレジットカード決済（申込システム経由）、銀行振込、その他イベントごとに指定されたお支払い方法。
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        お支払時期
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        - クレジットカード：各指定申込フォームの送信完了による即時決済。<br />
                        - 銀行振込：申込完了後、各イベントに設定された期日まで（通常は実施日の3日前まで）、または案内メール記載の指定口座に事前入金。
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-50">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        サービス提供時期
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        予約また支払手続き完了後、該当プログラム・サードプレイスイベント等の実施日時に提供されます。
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="bg-stone-50/50 p-4 font-bold text-stone-700 flex items-center md:border-r border-stone-100">
                        キャンセル・返金
                      </div>
                      <div className="p-4 md:col-span-3 text-stone-600">
                        サービスの特質上、イベント開催日以降のキャンセル・ご返金はできません。開催日前のキャンセル、受講振替、払戻条件等につきましては、各企画案内、予約システム個別のキャンセルポリシーによって適用される規定に準ずるものとします。
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Actions Bar */}
            <div className="p-5 border-t border-stone-100 bg-stone-50/30 flex justify-end shrink-0 relative z-10">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full border border-stone-200 text-stone-600 font-semibold text-xs hover:bg-stone-50 hover:text-stone-800 transition-all cursor-pointer shadow-sm active:translate-y-px"
              >
                閉じる
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
