import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhoWeAre from "@/components/WhoWeAre";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Clients from "@/components/Clients";
import Vendors from "@/components/Vendors";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const NewsroomPage = () => {
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

export default NewsroomPage;
