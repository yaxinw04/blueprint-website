import Image from "next/image";
import UniversityLogos from "./UniversityLogos";

export default function CompetitiveProgram() {
  return (
    <section id="results" className="py-20 md:py-28 bg-[#e8eff8]/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1e3a5f] mb-3">
            My Results
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1a2d47] leading-tight">
            I got into one of the most competitive programs in Canada
          </h2>
          <p className="mt-4 text-lg text-[#5a6d84]">
            Biomedical Engineering at the University of Waterloo — here are the stats.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl bg-white border border-[#d4dfe9] shadow-sm overflow-hidden">
          <div className="p-3 sm:p-4">
            <Image
              src="/images/waterloo-engineering-acceptance-rate-admissions-average.png"
              alt="University of Waterloo Engineering admissions chart showing probability of receiving an offer by program and applicant average."
              width={768}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="px-5 pb-5 text-sm text-[#5a6d84] text-center">
            Biomedical &amp; Software Engineering:{" "}
            <strong className="text-[#1e3a5f]">29% offer rate</strong> at 95%+
            averages.
          </p>
        </div>

        <UniversityLogos />
      </div>
    </section>
  );
}
