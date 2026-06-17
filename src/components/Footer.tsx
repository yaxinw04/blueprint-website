const LINKEDIN_URL = "https://www.linkedin.com/in/yaxin-w/";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-semibold text-white">
              Yaxin Wang
            </p>
            <p className="mt-1 text-base text-white/60">
              University admissions coaching for students and families
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-base text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-base">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-base text-white/50">
          © {year} Yaxin Wang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
