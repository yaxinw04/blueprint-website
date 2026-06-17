import Image from "next/image";

const schools = [
  {
    name: "University of Toronto",
    logo: "/images/UofT_Wordmark.png",
    height: 36,
  },
  {
    name: "McMaster University",
    logo: "/images/McMaster_University_logo.svg.png",
    height: 44,
  },
  {
    name: "Queen's University",
    logo: "/images/QueensLogo_colour.png",
    height: 40,
  },
  {
    name: "Western University",
    logo: "/images/Western_ontario_univ_textlogo.svg.png",
    height: 36,
  },
  {
    name: "University of Alberta",
    logo: "/images/ua_logo_green_rgb.png",
    height: 44,
  },
  {
    name: "University of Calgary",
    logo: "/images/UCalgary-vertical-logo_1.png",
    height: 48,
  },
  {
    name: "University of British Columbia",
    logo: "/images/5NarrowLogo_ex_768.png",
    height: 32,
  },
];

function LogoCard({
  name,
  logo,
  height,
}: {
  name: string;
  logo: string;
  height: number;
}) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-44 sm:w-52 h-20 px-6 rounded-xl bg-white border border-[#d4dfe9] shadow-sm">
      <Image
        src={logo}
        alt={name}
        width={160}
        height={height}
        className="w-auto object-contain"
        style={{ height: `${height}px`, maxWidth: "140px" }}
      />
    </div>
  );
}

export default function UniversityLogos() {
  const track = [...schools, ...schools];

  return (
    <div className="mt-14 md:mt-16">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#1e3a5f] mb-2">
        Also admitted to
      </p>
      <h3 className="text-center font-serif text-2xl md:text-3xl font-semibold text-[#1a2d47] mb-8">
        Other schools I got into
      </h3>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#e8eff8]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#e8eff8]/90 to-transparent z-10 pointer-events-none" />

        <div className="logo-marquee flex w-max gap-5">
          {track.map((school, i) => (
            <LogoCard key={`${school.name}-${i}`} {...school} />
          ))}
        </div>
      </div>
    </div>
  );
}
