export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-light/60 via-background to-sage-light/40 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="flex items-start justify-center gap-4 sm:gap-6 mb-8 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-mark.png?v=5"
            alt=""
            className="w-[5.5rem] sm:w-28 max-h-none shrink-0"
            style={{ height: "auto" }}
          />
          <div className="py-0.5">
            <p className="font-serif text-3xl sm:text-4xl font-semibold text-foreground tracking-tight leading-snug pb-0.5">
              Blueprint
            </p>
            <p className="mt-2 text-sm sm:text-base text-muted tracking-wide leading-normal">
              Plan Smart. Stand Out. Get In.
            </p>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-muted shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-sage" />
            Now enrolling for Summer 2026
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight">
            University Applications, Made Clearer
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
            Personalized coaching to help students build strong applications,
            write meaningful essays, and stay organized from start to submit.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover transition-colors shadow-md shadow-accent/20"
            >
              Book a Screening Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white border border-border text-foreground font-semibold hover:border-accent hover:text-accent transition-colors shadow-sm"
            >
              View Services
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-8 text-base text-muted">
            <div>
              <p className="font-semibold text-foreground text-base">1-on-1</p>
              <p>Personalized support</p>
            </div>
            <div>
              <p className="font-semibold text-foreground text-base">
                Canada & U.S.
              </p>
              <p>Application expertise</p>
            </div>
            <div>
              <p className="font-semibold text-foreground text-base">
                Essay coaching
              </p>
              <p>Your voice, stronger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
