import Spline from "@splinetool/react-spline";

export default function HeroSplineCover() {
  return (
    <section className="relative h-[320px] sm:h-[380px] md:h-[440px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 h-full w-full flex items-end p-6 sm:p-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Your music, visualized</h1>
          <p className="mt-2 text-sm sm:text-base text-white/80 max-w-2xl">Track evolving listening habits across time, artists, genres, and moods. Minimal, data-forward insights powered by elegant visuals.</p>
        </div>
      </div>
    </section>
  );
}
