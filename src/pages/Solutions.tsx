import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Solutions />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
