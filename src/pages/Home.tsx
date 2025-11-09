import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { ProductDemo } from "../components/ProductDemo";
import { HowItWorks } from "../components/HowItWorks";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductDemo />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
