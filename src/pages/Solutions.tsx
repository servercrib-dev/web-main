import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Solutions />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default SolutionsPage;
