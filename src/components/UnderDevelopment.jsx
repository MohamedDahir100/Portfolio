import { motion } from "framer-motion";
import github from "../assets/github.png";

const UnderDevelopment = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-primary flex items-center justify-center px-6">
      {/* Glowing background orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#915EFF] opacity-30 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 w-[460px] h-[460px] rounded-full bg-[#00cea8] opacity-20 blur-[140px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center bg-tertiary/60 backdrop-blur-md border border-white/10 rounded-3xl px-8 py-14 sm:px-14 shadow-card"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 text-[#c9b5ff] text-sm font-medium mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#915EFF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#915EFF]" />
          </span>
          Under Development
        </div>

        <h1 className="text-white font-black text-[40px] sm:text-[56px] leading-tight">
          Something new is <span className="text-[#915EFF]">coming</span>
        </h1>

        <p className="mt-5 text-secondary text-[16px] sm:text-[18px] leading-relaxed">
          I&apos;m rebuilding my portfolio from the ground up. Check back soon
          to see what I&apos;ve been working on.
        </p>

        <div className="mt-10 h-1.5 w-full max-w-sm mx-auto rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full w-1/3 rounded-full green-pink-gradient"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-white-100 font-semibold">Mohamed Dahir</p>
          <a
            href="https://github.com/MohamedDahir100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black-100 border border-white/10 text-white text-sm hover:border-[#915EFF]/60 hover:bg-black-200 transition-colors"
          >
            <img src={github} alt="" className="w-5 h-5 object-contain" />
            View my GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
