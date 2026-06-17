import SectionHeading from "./SectionHeading";

type Plan = {
  emoji: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  includes: string[];
  optionalAddOns?: string[];
  extension?: string;
  bestFor: string;
  timingNote?: string;
  featured: boolean;
};

const plans: Plan[] = [
  {
    emoji: "🎓",
    name: "University Roadmap Session",
    price: "$49",
    tagline: "Perfect for students who don't know where to start.",
    description:
      "In this one-on-one strategy session, we'll review your academic profile, extracurriculars, goals, and target programs to create a personalized admissions plan.",
    includes: [
      "60-minute Zoom session",
      "School list review",
      "Reach, match, and safety school recommendations",
      "Application timeline planning",
      "Personalized action plan",
    ],
    bestFor:
      "Students entering Grade 11 or Grade 12 who want clarity and direction.",
    featured: false,
  },
  {
    emoji: "✍️",
    name: "Personal Statement Coaching",
    price: "$119",
    tagline: "Transform your ideas into a compelling personal statement.",
    description:
      "Rather than rewriting essays for students, I help identify strong topics, improve storytelling, strengthen structure, and provide actionable feedback.",
    optionalAddOns: [
      "Optional initial essay planning session (45 min) — +$32",
    ],
    includes: [
      "One full essay review (45 min)",
      "Written feedback and comments",
      "Structure and storytelling guidance",
      "Revision strategy",
      "One follow-up session (30 min)",
    ],
    extension:
      "Extend to a series of 30-min check-in sessions at $29/session, with unlimited edits in between via text, email, or WeChat.",
    bestFor:
      "Students working on personal statements, supplemental essays, scholarship essays, or application responses.",
    featured: false,
  },
  {
    emoji: "🎤",
    name: "Interview Prep Session",
    price: "$60",
    tagline: "Build confidence before admissions and scholarship interviews.",
    description:
      "Practice answering common interview questions, improve communication skills, and receive personalized feedback in a low-pressure environment.",
    includes: [
      "60-minute mock interview session",
      "Common admissions questions",
      "Behavioral interview practice",
      "Personalized feedback",
      "Confidence and communication coaching",
    ],
    bestFor:
      "Students preparing for university interviews, scholarships, co-op programs, or competitive admissions.",
    featured: false,
  },
  {
    emoji: "🚀",
    name: "University Admissions Coaching",
    price: "$179/month",
    tagline: "Ongoing support throughout the entire application process.",
    description:
      "Think of me as your personal admissions coach and accountability partner. We'll meet regularly to keep your applications moving forward and make sure nothing falls through the cracks.",
    includes: [
      "Weekly 30-minute coaching session",
      "Personalized admissions strategy",
      "Essay and application support",
      "Deadline planning and accountability",
      "Unlimited email questions between meetings",
      "University list refinement",
      "Interview preparation as needed",
    ],
    timingNote:
      "Recommended July–Dec for the early application cycle (U.S. schools, early-admission Canadian schools, and scholarships). Recommended Sept–Feb for regular Canadian cycles.",
    bestFor:
      "Students who want structured support from planning through submission.",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading
          label="Services & Pricing"
          title="Clear options for every stage"
          description="Pick the level of support that fits your goals. All students start with a mandatory free 15-minute screening to confirm we're a good match."
        />

        <div className="space-y-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border p-7 md:p-8 shadow-sm ${
                plan.featured
                  ? "bg-[#e3ebf5]/50 border-[#1e3a5f]/30 ring-1 ring-[#1e3a5f]/20"
                  : "bg-white border-[#d4dfe9]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#1e3a5f] text-white text-xs font-semibold">
                  Most Popular
                </span>
              )}

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {plan.emoji}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#1a2d47]">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-[#5a6d84] text-sm md:text-sm">
                      {plan.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#1e3a5f] whitespace-nowrap">
                  {plan.price}
                </p>
              </div>

              <p className="text-[#5a6d84] leading-relaxed mb-6">
                {plan.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  {plan.optionalAddOns && plan.optionalAddOns.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-[#1a2d47] mb-2">
                        Optional add-on:
                      </p>
                      <ul className="space-y-2">
                        {plan.optionalAddOns.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-[#5a6d84]"
                          >
                            <span className="text-[#1e3a5f] mt-0.5">+</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-sm font-semibold text-[#1a2d47] mb-3">
                    Includes:
                  </p>
                  <ul className="space-y-2">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#5a6d84]"
                      >
                        <span className="text-[#3d5a80] mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {plan.extension && (
                    <p className="mt-4 text-sm text-[#5a6d84] leading-relaxed p-3 rounded-xl bg-[#f4f7fb] border border-[#d4dfe9]">
                      <span className="font-semibold text-[#1a2d47]">
                        Extend:{" "}
                      </span>
                      {plan.extension}
                    </p>
                  )}
                </div>

                <div className="sm:border-l sm:border-[#d4dfe9] sm:pl-6 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-[#1a2d47] mb-2">
                      Best for:
                    </p>
                    <p className="text-sm text-[#5a6d84] leading-relaxed">
                      {plan.bestFor}
                    </p>
                  </div>

                  {plan.timingNote && (
                    <div>
                      <p className="text-sm font-semibold text-[#1a2d47] mb-2">
                        When to start:
                      </p>
                      <p className="text-sm text-[#5a6d84] leading-relaxed">
                        {plan.timingNote}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex mt-6 text-sm font-semibold text-[#1e3a5f] hover:text-[#152d4a] transition-colors"
              >
                Get started →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 p-7 md:p-8 rounded-2xl bg-[#f4f7fb] border border-[#d4dfe9] text-center">
          <h3 className="font-serif text-xl font-semibold text-[#1a2d47] mb-3">
            Not sure which option is right for you?
          </h3>
          <p className="text-[#5a6d84] leading-relaxed max-w-xl mx-auto">
            Start with a University Roadmap Session and we&apos;ll build a plan
            based on your goals, timeline, and target schools.
          </p>
          <a
            href="#contact"
            className="inline-flex mt-5 px-6 py-3 rounded-full bg-[#1e3a5f] text-white text-sm font-semibold hover:bg-[#152d4a] transition-colors"
          >
            Book a Roadmap Session
          </a>
        </div>
      </div>
    </section>
  );
}
