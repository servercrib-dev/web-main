import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Brain, Network, FileBarChart, Bot, Zap, Shield, Cloud, Lock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const solutions = [
  {
    icon: Target,
    title: "Digital Transformation Consulting",
    description: "Reimagine your business processes with expert guidance from strategy to execution.",
    details: "Reimagine your business processes with our expert guidance — from strategy to execution — ensuring your technology aligns with your business vision. We help organizations modernize their operations, adopt new technologies, and create digital-first strategies that drive competitive advantage. Our consultants work closely with your team to identify opportunities, assess readiness, and implement transformative solutions that deliver measurable results.",
  },
  {
    icon: Database,
    title: "ERP & CRM Implementation",
    description: "Deploy and customize advanced ERP and CRM platforms tailored to your needs.",
    details: "Deploy, customize, and integrate advanced ERP and CRM platforms, including: AvenERP (AI-powered all-in-one ERP by Servercrib), Odoo ERP (modular and open-source), Oracle Fusion ERP, SAP S/4HANA, Microsoft Dynamics 365, Salesforce, HubSpot, Zoho, and Servercrib CRM. Our certified experts ensure seamless migration, user adoption, and full-scale integration across departments. We handle everything from initial planning and data migration to training and ongoing optimization.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Risk Management",
    description: "Secure your infrastructure with AI-powered threat detection and compliance enforcement.",
    details: "Secure your infrastructure with Defendria and Defendria Sentinel, our AI-powered platforms for threat detection, compliance enforcement, and 24/7 monitoring. Our comprehensive cybersecurity services include vulnerability assessments, penetration testing, security architecture design, incident response planning, and continuous monitoring. We help organizations protect their digital assets, maintain compliance with industry regulations, and build resilience against evolving cyber threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Optimization",
    description: "Migrate to Servercrib Cloud or major providers with minimal downtime and maximum efficiency.",
    details: "Migrate to Servercrib Cloud or major providers (AWS, Azure, GCP) with minimal downtime and maximum efficiency. We help you build a resilient, scalable, and cost-optimized cloud environment. Our cloud experts handle assessment, planning, migration execution, and post-migration optimization. We ensure your applications are cloud-ready, implement best practices for security and performance, and provide ongoing management to maximize your cloud investment.",
  },
  {
    icon: FileBarChart,
    title: "Data Strategy & Business Intelligence",
    description: "Empower decision-making with advanced dashboards, predictive analytics, and real-time intelligence.",
    details: "Empower decision-making with CribAnalytics BI — enabling advanced dashboards, predictive analytics, and real-time intelligence. We help organizations unlock the value of their data through comprehensive data strategy development, modern data warehousing, ETL pipeline design, and powerful visualization tools. Our BI solutions provide executives and teams with actionable insights that drive better business outcomes.",
  },
  {
    icon: Bot,
    title: "AI & Automation Integration",
    description: "Transform manual processes into intelligent, automated workflows.",
    details: "Transform manual processes into intelligent, automated workflows using AI models embedded in your ERP, CRM, and analytics systems. We implement machine learning solutions, robotic process automation (RPA), intelligent document processing, and AI-powered decision support systems. Our automation solutions reduce operational costs, eliminate errors, and free your team to focus on strategic initiatives.",
  },
  {
    icon: Network,
    title: "DevOps & Cloud Infrastructure",
    description: "Accelerate deployment and improve performance with modern DevOps practices.",
    details: "Accelerate deployment and improve performance with continuous integration, microservices orchestration, and infrastructure-as-code solutions. We implement modern DevOps practices including CI/CD pipelines, containerization with Docker and Kubernetes, automated testing, monitoring and logging solutions, and GitOps workflows. Our approach reduces deployment time, increases reliability, and enables rapid innovation.",
  },
  {
    icon: Lock,
    title: "IT Governance & Compliance",
    description: "Align technology and operations with industry standards and regulations.",
    details: "Align technology and operations with SOC 2, NIST, ISO 27001, and GDPR standards, supported by our compliance frameworks and risk assessment protocols. We help organizations establish governance structures, implement policy management systems, conduct compliance audits, and maintain ongoing compliance documentation. Our experts ensure your IT operations meet regulatory requirements while supporting business objectives.",
  },
  {
    icon: Zap,
    title: "SME Digital Acceleration",
    description: "Affordable, modular solutions designed for startups and small enterprises.",
    details: "Affordable, modular ERP + CRM + Cloud + Security bundles designed to help startups and small enterprises go digital without overspending. We understand the unique challenges facing SMEs and provide right-sized solutions that scale with your business. Our packages include essential digital tools, expert implementation support, and flexible payment options that fit your budget.",
  },
  {
    icon: Lock,
    title: "Cloud Security Framework",
    description: "Implement robust cloud security architectures with zero-trust principles.",
    details: "Implement robust cloud security architectures combining Defendria's protection with modern zero-trust principles. We design and deploy comprehensive security frameworks that protect cloud workloads, secure data in transit and at rest, implement identity and access management, and ensure continuous compliance. Our layered security approach provides defense-in-depth protection for your cloud infrastructure.",
  },
];

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section id="solutions" className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                Secure. Scalable. Smart.
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/90 animate-fade-in">
              Transform Your Enterprise with Next-Gen Technology.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
              At Servercrib Technology Solutions, we design intelligent digital ecosystems that connect operations, protect data, and accelerate growth — combining the power of ERP, CRM, Cloud, Cybersecurity, and AI into one seamless platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('solutions-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🔍 Explore Our Solutions
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white text-lg px-8 py-6 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📞 Request a Consultation
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic animate-fade-in">
              ✨ Building Tomorrow's Technology, Today.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid Section */}
      <div id="solutions-grid" className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Enterprise Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Servercrib Technology Solutions provides end-to-end digital transformation solutions designed to help organizations modernize operations, protect assets, and leverage data for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index} 
                className="bg-card glow-border hover:scale-[1.02] transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white"
                        onClick={() => setSelectedSolution(solution)}
                      >
                        Learn more →
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
                      <DialogHeader>
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl">{solution.title}</DialogTitle>
                        <DialogDescription className="text-base leading-relaxed pt-4">
                          {solution.details}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="mb-8 p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg max-w-4xl mx-auto">
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

export default Solutions;
