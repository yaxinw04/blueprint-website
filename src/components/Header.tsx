export default function Header() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#summer", label: "Summer Program" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between min-h-16 md:min-h-[4.5rem] py-2">
          <a href="#" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-mark.png?v=5"
              alt="Blueprint"
              className="w-10 sm:w-11 h-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm"
            >
              Book a Call
            </a>
          </nav>

          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer p-2 text-foreground [&::-webkit-details-marker]:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Open menu</span>
            </summary>
            <nav className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-card border border-border shadow-lg p-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-muted hover:text-accent font-medium rounded-lg hover:bg-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-accent text-white text-sm font-semibold"
              >
                Book a Call
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
