import SectionHeading from "./SectionHeading";
import { submitContact } from "@/app/actions";

const gradeOptions = [
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12 / Senior",
  "Gap year",
  "Other",
];

const supportOptions = [
  "University Roadmap Session",
  "Personal Statement Coaching",
  "Interview Prep Session",
  "University Admissions Coaching",
  "Admissions Roadmap Program ($299)",
  "Not sure yet — want to discuss",
];

export default function Contact({
  submitted = false,
  error,
}: {
  submitted?: boolean;
  error?: string;
}) {
  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-xl mx-auto px-5 sm:px-8 text-center">
          <div className="p-10 rounded-2xl bg-white border border-[#d4dfe9] shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#e8eff8] flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-7 h-7 text-[#3d5a80]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-[#1a2d47] mb-3">
              Thank you for reaching out!
            </h2>
            <p className="text-[#5a6d84] leading-relaxed">
              Your message was sent to my inbox. Looking forward to connecting!
            </p>
            <a
              href="/"
              className="inline-block mt-6 text-sm font-semibold text-[#1e3a5f] hover:text-[#152d4a] transition-colors"
            >
              Back to home
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeading
              label="Contact"
              title="Let's start with a conversation"
              description="Every student begins with a mandatory free 15-minute screening call so we can make sure we're a good match before starting coaching."
              align="left"
            />

            <div className="space-y-4 text-[#5a6d84]">
              <p className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#e3ebf5] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#1e3a5f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                Mandatory free 15-min student screening to confirm fit
              </p>
              <p className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#e8eff8] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#3d5a80]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span>
                  <strong className="text-[#1a2d47]">
                    Calgary students — in-person available in July.
                  </strong>{" "}
                  I can meet at your home or a local library (my preference, but
                  optional — Zoom works great too).
                </span>
              </p>

              <div className="pt-1 space-y-2">
                <p className="text-[#1a2d47] font-medium">
                  Or contact me directly:
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:yaxin.w04@gmail.com"
                    className="text-[#1e3a5f] hover:text-[#152d4a] transition-colors"
                  >
                    yaxin.w04@gmail.com
                  </a>
                </p>
                <p>
                  WeChat ID:{" "}
                  <span className="font-medium text-[#1a2d47]">yaxinw04</span>
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/yaxin-w/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[#1e3a5f] hover:text-[#152d4a] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/yaxin-w
              </a>
            </div>
          </div>

          <form
            action={submitContact}
            className="p-7 md:p-8 rounded-2xl bg-white border border-[#d4dfe9] shadow-sm space-y-5"
          >
            {error && (
              <div className="p-4 rounded-xl bg-[#e3ebf5] border border-[#1e3a5f]/30 text-[#1a2d47] text-sm leading-relaxed">
                {error === "activation-needed"
                  ? "Almost there! Check yaxin.w04@gmail.com for a FormSubmit activation email and click the link once. Then submit the form again — or email me directly at yaxin.w04@gmail.com / WeChat yaxinw04."
                  : error === "send-failed"
                    ? "Something went wrong sending your message. Please email me at yaxin.w04@gmail.com or WeChat yaxinw04."
                    : "Please fill in all required fields."}
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#1a2d47] mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#d4dfe9] bg-[#f4f7fb] text-[#1a2d47] placeholder:text-[#5a6d84]/60 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1a2d47] mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#d4dfe9] bg-[#f4f7fb] text-[#1a2d47] placeholder:text-[#5a6d84]/60 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] text-sm"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="grade"
                className="block text-sm font-medium text-[#1a2d47] mb-1.5"
              >
                Student grade
              </label>
              <select
                id="grade"
                name="grade"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#d4dfe9] bg-[#f4f7fb] text-[#1a2d47] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] text-sm"
              >
                <option value="">Select grade</option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="support"
                className="block text-sm font-medium text-[#1a2d47] mb-1.5"
              >
                What support are you looking for?
              </label>
              <select
                id="support"
                name="support"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#d4dfe9] bg-[#f4f7fb] text-[#1a2d47] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] text-sm"
              >
                <option value="">Select a service</option>
                {supportOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#1a2d47] mb-1.5"
              >
                Anything else? (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d4dfe9] bg-[#f4f7fb] text-[#1a2d47] placeholder:text-[#5a6d84]/60 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] resize-none"
                placeholder="Tell me a bit about your goals..."
              />
            </div>

            <p className="text-sm text-[#5a6d84] leading-relaxed">
              By submitting, you agree to start with a free 15-minute screening call
              so we can confirm we&apos;re a good fit. Form submissions go to{" "}
              <a
                href="mailto:yaxin.w04@gmail.com"
                className="text-[#1e3a5f] hover:text-[#152d4a]"
              >
                yaxin.w04@gmail.com
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#1e3a5f] text-white text-sm font-semibold hover:bg-[#152d4a] transition-colors shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
