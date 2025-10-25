import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
