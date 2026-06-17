import SectionHeading from "./SectionHeading";

const weeks = [
  { week: "Week 1", title: "Discovery & goal setting" },
  { week: "Week 2", title: "Building your school list" },
  { week: "Week 3", title: "Activities & resume development" },
  { week: "Week 4", title: "Essay brainstorming" },
  { week: "Week 5", title: "Personal statement development" },
  { week: "Week 6", title: "Essay review & revision" },
  { week: "Week 7", title: "Application planning & deadlines" },
  { week: "Week 8", title: "Interview prep & final strategy" },
];

const includes = [
  "8 weekly one-on-one sessions (45 minutes each)",
  "Personalized admissions strategy & school list",
  "Resume and activities review",
  "Essay brainstorming and coaching",
  "Application planning and deadline management",
  "Interview preparation",
  "Email support between sessions",
];

export default function SummerProgram() {
  return (
    <section id="summer" className="py-20 md:py-28 bg-sage-light/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          label="Summer Program"
          title="Summer University Admissions Roadmap Program"
          description="An 8-week coaching program to help students approach applications with confidence, organization, and a clear plan."
          align="center"
        />

        <p className="text-center -mt-10 mb-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#d4dfe9] text-sm font-semibold text-[#1e3a5f] shadow-sm">
            July–Aug
          </span>
        </p>

        <p className="text-center text-3xl font-bold text-[#1e3a5f] -mt-2 mb-2">
          $299
        </p>
        <p className="text-center text-sm font-medium text-[#5a6d84] mb-12">
          Recommended for summer · July–August
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="p-6 rounded-2xl bg-white border border-[#d4dfe9] shadow-sm h-full">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#3d5a80] mb-3">
              What&apos;s included
            </p>
            <ul className="space-y-2.5">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#5a6d84]"
                >
                  <span className="text-[#3d5a80] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5a6d84] mb-1">
              8-week breakdown
            </p>
            {weeks.map((item, index) => (
              <div
                key={item.week}
                className="flex gap-3 p-3.5 rounded-xl bg-white border border-[#d4dfe9] shadow-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e3ebf5] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#1e3a5f]">
                    {index + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5a6d84]">
                    {item.week}
                  </p>
                  <p className="font-medium text-[#1a2d47] text-sm leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-[#d4dfe9] shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#3d5a80] mb-2">
              Ideal for
            </p>
            <p className="text-[#5a6d84] leading-relaxed text-sm">
              Students entering Grade 12 who want to get ahead before application
              deadlines — with a finalized school list, polished resume, essay
              direction, and a clear timeline.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#e8eff8]/60 border border-[#3d5a80]/20">
            <p className="text-sm font-semibold text-[#1a2d47] mb-2">
              Calgary in-person (July)
            </p>
            <p className="text-[#5a6d84] leading-relaxed text-sm">
              I&apos;ll be in Calgary in July and can meet at your home or a
              local library. In-person is my preference, but optional — Zoom
              works great too.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3d5a80] text-white font-semibold hover:bg-[#3d5a80]/90 transition-colors shadow-sm"
          >
            Enroll for Summer 2026
          </a>
        </div>
      </div>
    </section>
  );
}
