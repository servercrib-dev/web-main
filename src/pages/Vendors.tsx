import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Vendors from "@/components/Vendors";

const VendorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Vendors />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default VendorsPage;
