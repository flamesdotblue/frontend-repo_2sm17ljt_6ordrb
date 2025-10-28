import { Home, LineChart, Users, Layers, Smile, Upload, Settings } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Dashboard", icon: Home },
  { label: "Listening Trends", icon: LineChart },
  { label: "Top Artists", icon: Users },
  { label: "Genre Insights", icon: Layers },
  { label: "Mood Analytics", icon: Smile },
  { label: "Data Upload", icon: Upload },
  { label: "Settings", icon: Settings },
];

export default function SidebarNav() {
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 h-screen sticky top-0 z-10 border-r border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="w-full p-4 sm:p-6 space-y-2">
        <div className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 px-2">Navigation</div>
        <ul className="space-y-1 mt-2">
          {links.map(({ label, icon: Icon }) => (
            <motion.li key={label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
              <button className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/60 transition">
                <Icon size={18} className="text-neutral-500 group-hover:text-cyan-500 transition" />
                <span>{label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
