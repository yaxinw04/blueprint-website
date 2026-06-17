import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
          <div className="mx-auto md:mx-0 w-full max-w-[280px]">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#d4dfe9] shadow-md">
              <Image
                src="/images/headshot.jpg"
                alt="Yaxin Wang"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 280px"
                priority
              />
            </div>
          </div>

          <div>
            <SectionHeading
              label="About Me"
              title="Guidance from someone who's been there"
              align="left"
            />

            <div className="space-y-6 -mt-6 md:-mt-8">
              <p className="text-xl md:text-2xl font-semibold text-[#1a2d47] leading-snug">
                Why should a parent trust me with one of the most important
                processes in their kid&apos;s life?
              </p>

              <p className="text-[#5a6d84] leading-relaxed text-lg">
                Getting into university isn&apos;t just about grades, it&apos;s
                about having a plan. As a project manager by profession, I help
                students turn a stressful admissions process into a clear,
                organized roadmap.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex px-3 py-1.5 rounded-full bg-[#e3ebf5] text-sm font-medium text-[#1a2d47]">
                  Project Management &amp; SWE @ WHOOP, Boston
                </span>
                <span className="inline-flex px-3 py-1.5 rounded-full bg-[#e8eff8] text-sm font-medium text-[#1a2d47]">
                  BME @ University of Waterloo
                </span>
              </div>

              <a
                href="https://www.linkedin.com/in/yaxin-w/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1e3a5f] hover:text-[#152d4a] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>

              <p className="text-[#5a6d84] leading-relaxed text-lg border-l-4 border-[#1e3a5f] pl-5">
                During my own admissions journey, I received offers from every
                university I applied to. Now, I help students create strong
                applications through thoughtful planning, clear storytelling, and
                structured support.
              </p>

              <p className="text-[#5a6d84] leading-relaxed text-lg">
                I love reading, writing, and helping students communicate who
                they are beyond grades and achievements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Strategic planning",
              description:
                "Structured timelines and clear priorities so nothing falls through the cracks.",
            },
            {
              title: "Authentic storytelling",
              description:
                "Help students find and express their unique voice in essays and interviews.",
            },
            {
              title: "Organized support",
              description:
                "Trackers, checklists, and weekly coaching to keep momentum going.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#f4f7fb] border border-[#d4dfe9]"
            >
              <h3 className="font-serif text-lg font-semibold text-[#1a2d47] mb-2">
                {item.title}
              </h3>
              <p className="text-[#5a6d84] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
