import TopNavbar from "./components/TopNavbar";
import SidebarNav from "./components/SidebarNav";
import HeroSplineCover from "./components/HeroSplineCover";
import OverviewMetricsCard from "./components/OverviewMetricsCard";
import { Headphones, Crown, Clock3, Timer } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen antialiased bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <TopNavbar />
      <div className="flex">
        <SidebarNav />

        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          <HeroSplineCover />

          <section aria-label="Overview metrics" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            <OverviewMetricsCard title="Total Listening Time" value="1,248 hrs" subtext="All-time" icon={Headphones} accent="from-cyan-500 to-teal-500" />
            <OverviewMetricsCard title="Top Artist" value="Nils Frahm" subtext="This year" icon={Crown} accent="from-fuchsia-500 to-cyan-500" />
            <OverviewMetricsCard title="Total Songs" value="18,432" subtext="Unique plays" icon={Clock3} accent="from-emerald-500 to-cyan-500" />
            <OverviewMetricsCard title="Avg Session" value="42 mins" subtext="Per day" icon={Timer} accent="from-violet-500 to-indigo-500" />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-4 sm:p-5">
              <h2 className="text-base font-semibold mb-2">Listening Trends</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Daily listening duration over the last 30 days.</p>
              <div className="mt-4 h-64 flex items-center justify-center text-neutral-500 dark:text-neutral-400 text-sm">
                Chart placeholder — integrate Recharts line chart later.
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-4 sm:p-5">
              <h2 className="text-base font-semibold mb-2">Quick Actions</h2>
              <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>
                  <button className="w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-3 py-2 text-left transition">Upload data</button>
                </li>
                <li>
                  <button className="w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-3 py-2 text-left transition">Refresh insights</button>
                </li>
                <li>
                  <button className="w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-3 py-2 text-left transition">Manage settings</button>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
