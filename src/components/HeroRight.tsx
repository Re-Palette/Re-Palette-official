import { motion } from "motion/react";
import * as React from "react";
import heroImg from "../assets/images/hero.png";

export default function HeroRight() {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="absolute inset-0 w-full h-full select-none z-0">
      {/* FULL-BLEED IMAGE CONTROLLER */}
      <div className="w-full h-full relative overflow-hidden bg-white">
        
        {/* Glass Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-md flex items-center justify-center z-10">
            <div className="w-10 h-10 rounded-full border-2 border-rose-400 border-t-transparent animate-spin" />
          </div>
        )}

        {/* Master Lifestyle Photo (High fidelity) */}
        <motion.img
          src={heroImg}
          alt="Re-Palette Beauty and Welfare Studio"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          initial={{ scale: 1.02, opacity: 0 }}
          animate={{ scale: imageLoaded ? 1.00 : 1.02, opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="w-full h-full object-cover object-center select-none pointer-events-none"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600";
          }}
        />

        {/* Tiny branding text label aligned to the right edge */}
        <div className="absolute top-10 right-10 writing-mode-vertical text-gray-800/40 text-[9px] font-mono tracking-[0.3em] bg-white/40 backdrop-blur-sm px-3 py-5 rounded-full select-none uppercase hidden xl:block z-10">
          RE-PALETTE STUDIO Tokyo 2026
        </div>
      </div>
    </div>
  );
}
