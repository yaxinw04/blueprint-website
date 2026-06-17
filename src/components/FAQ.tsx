import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Do you write essays for students?",
    answer:
      "No, I help students brainstorm, structure, revise, and strengthen their own writing.",
  },
  {
    question: "When should students start?",
    answer: "Ideally the summer before Grade 12 / senior year.",
  },
  {
    question: "Do you support Canadian and U.S. applications?",
    answer: "Yes.",
  },
  {
    question: "Can parents be involved?",
    answer: "Yes, especially for planning and timeline support.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeading
          label="FAQ"
          title="Common questions"
          description="Have something else on your mind? Reach out — I'm happy to chat."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-xl border border-border overflow-hidden bg-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left hover:bg-background transition-colors [&::-webkit-details-marker]:hidden">
                <span className="font-medium text-foreground">
                  {faq.question}
                </span>
                <svg
                  className="w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-muted leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
