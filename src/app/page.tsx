import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CompetitiveProgram from "@/components/CompetitiveProgram";
import Services from "@/components/Services";
import SummerProgram from "@/components/SummerProgram";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string; error?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CompetitiveProgram />
        <Services />
        <SummerProgram />
        <Pricing />
        <FAQ />
        <Contact
          submitted={params.submitted === "true"}
          error={params.error}
        />
      </main>
      <Footer />
    </>
  );
}
