import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Clients from "@/components/Clients";
import Vendors from "@/components/Vendors";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhoWeAre />
        <Services />
        <WhyChoose />
        <Clients />
        <Vendors />
        <Testimonials />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
