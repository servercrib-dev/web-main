import Navbar from "@/components/Navbar";
import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const LeadershipPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Leadership />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default LeadershipPage;
