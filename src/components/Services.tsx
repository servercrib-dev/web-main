import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadphonesIcon, CloudCog, Code, BarChart3, ShieldAlert, Users, Briefcase, Database, Lightbulb, Settings, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const services = [
  {
    icon: HeadphonesIcon,
    title: "24/7 Managed IT Support",
    description: "Round-the-clock system monitoring, incident response, and technical troubleshooting.",
    details: "Round-the-clock system monitoring, incident response, and technical troubleshooting to ensure uptime and business continuity. Our comprehensive managed support includes 24/7 help desk services, proactive monitoring, network management, server administration, patch management, security updates, performance optimization, remote and on-site support, user account management, regular system health reports, guaranteed SLA response times, and preventive maintenance. Focus on your business while we ensure your IT infrastructure runs flawlessly.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Design, build, and deploy enterprise-grade applications tailored to your business goals.",
    details: "Design, build, and deploy enterprise-grade applications tailored to your business goals — from web and mobile apps to system integrations and API services. We specialize in full-stack development using modern frameworks (React, Angular, Vue, Node.js), mobile app development (iOS, Android, cross-platform), API development and integration, microservices architecture, database design and optimization, legacy system modernization, quality assurance and testing, DevOps automation, and ongoing maintenance. Turn your vision into powerful, scalable software solutions.",
  },
  {
    icon: Settings,
    title: "ERP & CRM Support and Customization",
    description: "Continuous optimization, integration, and feature enhancements for your ERP and CRM systems.",
    details: "We provide continuous optimization, integration, and feature enhancements for: AvenERP, Odoo ERP, Oracle Fusion ERP, Microsoft Dynamics 365, Salesforce, HubSpot, Zoho, and Servercrib CRM. Whether you need module customization, workflow automation, or system training — Servercrib ensures your ERP and CRM stay optimized for business growth. Our services include custom module development, third-party integrations, workflow automation, data migration, performance tuning, user training, technical support, and strategic consulting.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI Services",
    description: "Unlock the full potential of your data with custom dashboards and predictive modeling.",
    details: "Unlock the full potential of your data with custom dashboards, KPI monitoring, and predictive modeling powered by CribAnalytics BI. We deliver comprehensive business intelligence solutions including data warehouse design, ETL pipeline development, custom dashboard creation, real-time analytics, predictive modeling and forecasting, data visualization, self-service BI enablement, performance metrics tracking, trend analysis, executive reporting, and analytics training. Transform raw data into strategic insights that drive growth.",
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity Operations (SOC-as-a-Service)",
    description: "Proactive threat monitoring, penetration testing, and endpoint protection.",
    details: "Proactive threat monitoring, penetration testing, and endpoint protection — powered by Defendria Sentinel for enterprise-grade defense. Our Security Operations Center provides 24/7 monitoring, threat detection and analysis, incident response, vulnerability scanning, penetration testing, security log analysis (SIEM), threat intelligence integration, compliance monitoring, security alert triage, forensic analysis, monthly security reports, and strategic security advisory. Your dedicated cybersecurity team protecting your digital assets around the clock.",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure Management",
    description: "Provision, scale, and secure your infrastructure with expert cloud management.",
    details: "Provision, scale, and secure your infrastructure with Servercrib Cloud or leading cloud providers. We handle setup, migration, monitoring, and performance optimization. Our cloud management services include infrastructure provisioning, auto-scaling configuration, load balancing, cost optimization, backup and disaster recovery, security hardening, performance monitoring, capacity planning, multi-cloud management, infrastructure-as-code implementation, and 24/7 cloud operations. Maximize the value of your cloud investment with expert management.",
  },
  {
    icon: Users,
    title: "IT Outsourcing & Staff Augmentation",
    description: "Access a dedicated team of experts on demand.",
    details: "Access a dedicated team of ERP consultants, cybersecurity engineers, developers, and cloud architects on demand. Our staff augmentation services provide skilled IT professionals including cloud engineers and architects, full-stack developers, database administrators, DevOps engineers, security specialists, ERP/CRM consultants, network engineers, project managers, QA testers, and business analysts. Flexible engagement models (hourly, project-based, dedicated team) with seamless integration into your existing teams and knowledge transfer.",
  },
  {
    icon: Briefcase,
    title: "Business Process Outsourcing (BPO)",
    description: "Outsource key operations with guaranteed SLAs and compliance.",
    details: "Outsource key operations like IT helpdesk, CRM support, HR automation, and financial workflows with guaranteed SLAs and compliance. Our BPO services streamline your back-office operations including IT helpdesk operations, CRM management and support, HR administration and payroll processing, data entry and management, customer support services, email and chat support, order processing and fulfillment, document management, quality assurance, performance reporting, and scalable service delivery. Focus on your core business while we handle operational excellence.",
  },
  {
    icon: Database,
    title: "Disaster Recovery & Backup Management",
    description: "Comprehensive data protection and recovery services ensuring business continuity.",
    details: "Comprehensive data protection and recovery services ensuring continuity across all your systems. Our disaster recovery solutions include DR planning and testing, automated backup solutions, off-site and cloud backup, RTO/RPO optimization, high availability configuration, failover and redundancy setup, regular backup verification, data restoration services, business continuity planning, annual DR drills, runbook documentation, and compliance reporting. Be prepared for any disaster with tested, reliable recovery procedures.",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting & Advisory",
    description: "Strategic guidance on IT modernization, compliance audits, and enterprise architecture.",
    details: "Strategic guidance on IT modernization, compliance audits, and enterprise architecture — helping you stay ahead of technological change. Our consulting services include IT strategy and roadmap development, technology assessment and vendor selection, digital transformation advisory, compliance audit and remediation, architecture review and design, cost-benefit analysis, innovation workshops, CTO advisory services, IT governance frameworks, risk assessment and management, and executive briefings. Navigate complex technology decisions with confidence.",
  },
];

const Services = () => {
  const [_, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Services Grid Section */}
      <div id="services-grid" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Managed & Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Servercrib Technology Solutions provides ongoing managed services, software development, and technical support to keep your digital ecosystem secure, scalable, and future-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card glow-border hover:scale-[1.02] transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white"
                        onClick={() => setSelectedService(service)}
                      >
                        Learn more →
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
                      <DialogHeader>
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                        <DialogDescription className="text-base leading-relaxed pt-4">
                          {service.details}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Brand Section */}
        <div className="mt-16 mb-12 text-center">
          <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground font-medium">
              <span className="text-primary font-bold">Servercrib Technology Solutions</span> — Where Innovation Meets Security.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Driving digital transformation with AvenERP, Defendria, Defendria Sentinel, Servercrib Cloud, and CribAnalytics BI.
            </p>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Industries We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Building2, name: "Retail & E-Commerce" },
              { icon: Settings, name: "Manufacturing & Supply Chain" },
              { icon: Database, name: "Financial Services" },
              { icon: Users, name: "Government & Education" },
              { icon: HeadphonesIcon, name: "Healthcare & Life Sciences" },
              { icon: Building2, name: "Real Estate & Property Management" },
              { icon: CloudCog, name: "Technology & Professional Services" },
              { icon: Briefcase, name: "Professional Services" }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground">{industry.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
