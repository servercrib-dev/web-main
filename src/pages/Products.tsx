import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Products />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
