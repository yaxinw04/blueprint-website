import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "University Application Planning",
    description:
      "Build a personalized roadmap with school lists, timelines, and a clear strategy for each application.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
  },
  {
    title: "Essay Brainstorming & Editing",
    description:
      "Develop compelling personal statements and supplements through guided brainstorming, drafting, and revision.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    ),
  },
  {
    title: "Resume / Activities List Support",
    description:
      "Present extracurriculars, awards, and experiences in a clear, impactful format that admissions officers notice.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: "Interview Prep",
    description:
      "Practice common questions, refine your story, and build confidence for alumni and admissions interviews.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    ),
  },
  {
    title: "Admissions Roadmap Program",
    description:
      "An 8-week program with weekly 45-min sessions — school lists, essays, deadlines, and interview prep.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
  },
  {
    title: "Ongoing Weekly Coaching",
    description:
      "Consistent check-ins throughout application season to stay on track, motivated, and deadline-ready.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          label="Services"
          title="Support at every stage of the process"
          description="Whether you need a single essay review or a full summer program, there's a coaching option that fits."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-7 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
