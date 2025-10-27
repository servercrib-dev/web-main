import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const LeadershipPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default LeadershipPage;
