import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyUse from "@/components/sections/WhyUse";
import Features from "@/components/sections/Features";
import Trust from "@/components/sections/Trust";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <WhyUse />
        <section id="features">
          <Features />
        </section>
        <section id="trust">
          <Trust />
        </section>
        <Testimonials />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
