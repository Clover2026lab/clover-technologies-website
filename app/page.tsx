import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";
import Technologies from "@/components/sections/technologies";
import WhyClover from "@/components/sections/why-clover";
import Industries from "@/components/sections/industries";
import N3T2SShowcase from "@/components/sections/n3t2s-showcase";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Services />
      <Technologies />
      <WhyClover />
      <Industries />
      <N3T2SShowcase/>
      <CTA />
    </>
  );
}