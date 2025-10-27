import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Services />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ServicesPage;
