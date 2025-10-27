import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ProductsPage from "@/pages/Products";
import SolutionsPage from "@/pages/Solutions";
import ServicesPage from "@/pages/Services";
import ClientsPage from "@/pages/Clients";
import VendorsPage from "@/pages/Vendors";
import AboutPage from "@/pages/About";
import LeadershipPage from "@/pages/Leadership";
import CareersPage from "@/pages/Careers";
import NewsroomPage from "@/pages/Newsroom";
import ContactPage from "@/pages/Contact";

export const routes = [
  { path: "/", element: <Index /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/solutions", element: <SolutionsPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/clients", element: <ClientsPage /> },
  { path: "/vendors", element: <VendorsPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/company", element: <AboutPage /> },
  { path: "/leadership", element: <LeadershipPage /> },
  { path: "/careers", element: <CareersPage /> },
  { path: "/newsroom", element: <NewsroomPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "*", element: <NotFound /> },
];
