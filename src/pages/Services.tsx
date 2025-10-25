import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
