import Navbar from "@/components/Navbar";
import Vendors from "@/components/Vendors";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const VendorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Vendors />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default VendorsPage;
