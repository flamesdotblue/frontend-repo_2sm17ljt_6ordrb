import { Moon, SunMedium, User, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TopNavbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Persist theme preference
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored ? stored : prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    setDark(next === "dark");
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2">
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-teal-500 text-white shadow-md">
            <Sparkles size={18} />
          </motion.div>
          <div className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Ćílo</div>
          <div className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-600 dark:text-cyan-400">Dashboard</div>
        </div>

        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 active:scale-95 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 transition">
            {dark ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Profile" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
            <User size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
