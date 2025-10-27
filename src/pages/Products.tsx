import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Products />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ProductsPage;
