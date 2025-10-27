import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const ClientsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Clients />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ClientsPage;
