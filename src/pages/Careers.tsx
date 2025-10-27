import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default CareersPage;
