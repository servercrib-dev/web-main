import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Shield, Cloud, Search, Lock, BarChart3, Users, ShieldCheck, GraduationCap, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const products = [
  {
    icon: Database,
    title: "AvenERP — Intelligent Enterprise Resource Planning",
    tagline: "Unify. Automate. Accelerate.",
    description: "AvenERP is our all-in-one, AI-driven ERP suite built to transform how organizations operate.",
    details: "AvenERP is our all-in-one, AI-driven ERP suite built to transform how organizations operate. From finance to HR, inventory to compliance — AvenERP unites all business processes into one intelligent platform. Also supports custom implementation of Odoo, Oracle Fusion, Microsoft Dynamics 365, and SAP. Built with cutting-edge AI technology, it seamlessly integrates: Financial Management & Accounting, Human Resources & Payroll, Customer Relationship Management, Inventory & Supply Chain, Business Intelligence & Analytics, Real-time Reporting & Insights, Mobile Access & Cloud-native Architecture, Advanced Security & Compliance, Workflow Automation, Predictive Analytics.",
  },
  {
    icon: Shield,
    title: "Defendria — Cybersecurity Simplified, Protection Amplified",
    tagline: "Defense Beyond Detection.",
    description: "Defendria is a next-generation cybersecurity suite that safeguards your enterprise against modern threats.",
    details: "Defendria is a next-generation cybersecurity suite that safeguards your enterprise against modern threats. With automated compliance, real-time monitoring, and AI-based risk detection, Defendria ensures your business stays one step ahead of cybercrime. Our comprehensive platform includes: Real-time Threat Detection & Response, Advanced Endpoint Protection, Network Security Monitoring, Behavioral Analytics & AI-driven Anomaly Detection, Automated Compliance Reporting (SOC 2, ISO 27001, NIST), Vulnerability Assessment & Management, Incident Response Automation, Security Information & Event Management (SIEM), Zero Trust Architecture Implementation, Integration with existing security infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Defendria Sentinel — 24/7 Threat Intelligence & Response",
    tagline: "Your Digital Guardian in Real Time.",
    description: "Defendria Sentinel extends Defendria's power with active monitoring and AI-driven incident response.",
    details: "Defendria Sentinel extends Defendria's power with active monitoring, AI-driven incident response, and SOC-as-a-Service capabilities. It's your dedicated layer of protection — detecting, analyzing, and neutralizing threats around the clock. Features include: Real-time Endpoint Monitoring, AI-powered Threat Detection, Behavioral Analysis & Anomaly Detection, Automated Threat Response, Zero-day Attack Protection, Ransomware Prevention, Device Control & Application Whitelisting, Network Traffic Analysis, Centralized Management Console, Lightweight Agent Design, Cloud-native Architecture, 24/7 SOC Operations, Compliance Reporting.",
  },
  {
    icon: Cloud,
    title: "Servercrib Cloud — Scalable, Secure, and Seamlessly Managed",
    tagline: "Powering the Future of Cloud Infrastructure.",
    description: "Servercrib Cloud delivers enterprise-grade cloud hosting, virtualization, and data storage solutions.",
    details: "Servercrib Cloud delivers enterprise-grade cloud hosting, virtualization, and data storage solutions — optimized for performance, cost, and security. Deploy private, hybrid, or multi-cloud setups backed by integrated monitoring and zero-trust security. Our platform offers: Multi-region Deployment & High Availability, Auto-scaling & Load Balancing, Container Orchestration (Kubernetes), Serverless Computing Options, Advanced Security & Encryption, Cost Optimization & Resource Management, Hybrid & Multi-cloud Support, 99.99% Uptime SLA, Real-time Monitoring & Analytics, DevOps Integration & CI/CD Pipeline Support, Disaster Recovery & Backup Solutions.",
  },
  {
    icon: BarChart3,
    title: "CribAnalytics BI — Intelligence That Drives Decisions",
    tagline: "From Data to Decisions — Instantly.",
    description: "CribAnalytics BI empowers enterprises with actionable insights, predictive analytics, and real-time dashboards.",
    details: "CribAnalytics BI empowers enterprises with actionable insights, predictive analytics, and real-time dashboards. Turn your data into strategy with advanced visualization tools and AI-driven reporting designed for impact. The platform offers: Interactive Dashboards & Reports, Drag-and-drop Report Builder, Predictive Analytics & Forecasting, Real-time Data Processing, Multi-source Data Integration, Automated KPI Tracking, Custom Visualization Options, Collaborative Analytics Workspace, Mobile BI Apps, Advanced AI/ML Integration, Role-based Access Control, Export & Sharing Capabilities, Executive Reporting.",
  },
  {
    icon: Search,
    title: "SafeFind",
    description: "AI-powered missing-person and emergency-response coordination platform connecting citizens and agencies in real time.",
    details: "SafeFind revolutionizes emergency response and missing person recovery with AI-driven coordination. The platform includes: Real-time Alert Distribution, Geolocation & Mapping Integration, Multi-agency Coordination Tools, Citizen Reporting & Crowd-sourcing, AI-powered Pattern Recognition, Case Management & Documentation, Mobile App for Citizens & Responders, Privacy-protected Data Handling, Integration with Law Enforcement Systems, Analytics & Reporting Dashboard. Every second counts, and SafeFind ensures efficient, coordinated response.",
  },
  {
    icon: Lock,
    title: "SilentShield",
    description: "Privacy-centric VPN and data protection system ensuring secure communication and browsing.",
    details: "SilentShield provides military-grade privacy protection for individuals and enterprises. Features include: Zero-log VPN with Global Servers, End-to-end Encryption for All Communications, DNS Leak Protection, Kill Switch Technology, Split Tunneling Capabilities, Multi-device Support, Dedicated IP Options, Anonymous Browsing & Identity Protection, Secure File Sharing, Compliance with Privacy Regulations (GDPR, CCPA). Your privacy is non-negotiable, and SilentShield ensures it stays protected.",
  },
  {
    icon: Users,
    title: "Servercrib CRM",
    description: "Advanced customer relationship management system for sales automation, marketing campaigns, and client retention.",
    details: "Servercrib CRM transforms how you engage with customers throughout their lifecycle. Features include: 360° Customer View, Sales Pipeline Management, Marketing Automation & Campaign Tools, Lead Scoring & Qualification, Email Integration & Tracking, Task & Calendar Management, Customer Support Ticketing, Analytics & Performance Metrics, Mobile CRM Apps, Integration with AvenERP, Customizable Workflows, API Access for Third-party Tools. Build lasting relationships and drive revenue growth.",
  },
  {
    icon: GraduationCap,
    title: "Servercrib Academy LMS",
    description: "Cloud-based learning and certification management platform for enterprise and government institutions.",
    details: "Servercrib Academy LMS delivers comprehensive learning management for organizations of any size. Features include: Course Creation & Management, Video Hosting & Streaming, Assessment & Certification Tools, Learning Path Designer, Student Progress Tracking, Discussion Forums & Collaboration, Gamification & Engagement Tools, Mobile Learning Apps, Integration with HR Systems, Compliance Training Tracking, White-label Options, Advanced Analytics & Reporting. Empower your workforce with continuous learning.",
  },
  {
    icon: Blocks,
    title: "CribAI Builder",
    description: "No-code AI app development framework enabling businesses to create intelligent tools without deep technical skills.",
    details: "CribAI Builder democratizes AI development with an intuitive no-code platform. The framework includes: Visual AI Workflow Builder, Pre-built AI Models & Templates, Natural Language Processing, Computer Vision Components, Predictive Analytics Tools, API Integration Framework, Custom Model Training, Testing & Deployment Tools, Collaboration Features, Version Control, Scalable Cloud Infrastructure, Security & Compliance Controls. Build AI-powered applications in hours, not months.",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="products" className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                Innovative Products. Intelligent Performance.
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/90 animate-fade-in">
              Infinite Possibilities.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
              Discover how Servercrib Technology Solutions is redefining enterprise performance with a new generation of AI-powered, cloud-secure, and data-intelligent platforms — designed to help businesses work smarter, move faster, and stay protected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Explore Our Products
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white text-lg px-8 py-6 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                💬 Request a Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic animate-fade-in">
              ✨ One Ecosystem. Endless Innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div id="products-grid" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Flagship Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proprietary software products and SaaS platforms built to empower digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index} 
                className="bg-card glow-border hover:scale-[1.02] transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  {product.tagline && (
                    <p className="text-sm text-primary font-semibold italic">{product.tagline}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white"
                        onClick={() => setSelectedProduct(product)}
                      >
                        Learn more →
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
                      <DialogHeader>
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl">{product.title}</DialogTitle>
                        <DialogDescription className="text-base leading-relaxed pt-4">
                          {product.details}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Closing Section */}
        <div className="mt-20 text-center">
          <div className="mb-12 p-12 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              One Platform. Total Transformation.
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're scaling a startup or modernizing a global enterprise, Servercrib's suite of products delivers the intelligence, automation, and security your business deserves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white font-semibold"
                onClick={() => document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ⚙️ View All Products
              </Button>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📞 Schedule a Free Consultation
              </Button>
            </div>
          </div>

          <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground font-medium">
              <span className="text-primary font-bold">Servercrib Technology Solutions</span> — Where Innovation Meets Security.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Driving digital transformation with AvenERP, Defendria, Defendria Sentinel, Servercrib Cloud, and CribAnalytics BI.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Products;
