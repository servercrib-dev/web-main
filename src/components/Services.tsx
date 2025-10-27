import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadphonesIcon, CloudCog, Code, BarChart3, ShieldAlert, Users, Briefcase, Database, Lightbulb, Settings, Building2, GraduationCap, Shield, Lock, Eye, Network, FileCheck, AlertTriangle, KeyRound } from "lucide-react";
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
    title: "Security Operations Center (SOC-as-a-Service)",
    description: "24/7 threat monitoring, incident response, and enterprise-grade defense.",
    details: "Proactive threat monitoring, penetration testing, and endpoint protection — powered by Defendria Sentinel for enterprise-grade defense. Our Security Operations Center provides 24/7 monitoring, threat detection and analysis, incident response, vulnerability scanning, penetration testing, security log analysis (SIEM), threat intelligence integration, compliance monitoring, security alert triage, forensic analysis, monthly security reports, and strategic security advisory. Your dedicated cybersecurity team protecting your digital assets around the clock.",
  },
  {
    icon: Shield,
    title: "Zero Trust Architecture",
    description: "Implement modern security frameworks with continuous verification and least-privilege access.",
    details: "Build a Zero Trust security model that assumes no implicit trust and continuously verifies every access request. Our Zero Trust services include identity verification architecture, micro-segmentation implementation, continuous authentication and authorization, endpoint security integration, network access control (NAC), policy-based access management, context-aware security policies, multi-factor authentication (MFA) deployment, privileged access management, security posture assessment, Zero Trust roadmap development, and ongoing optimization. Secure your organization with a 'never trust, always verify' approach that protects against modern threats.",
  },
  {
    icon: CloudCog,
    title: "Cloud Security & Compliance",
    description: "Secure your cloud infrastructure with comprehensive protection and regulatory compliance.",
    details: "Comprehensive cloud security solutions ensuring your cloud environments remain secure and compliant. Our cloud security services include cloud security posture management (CSPM), cloud workload protection, identity and access management (IAM), data encryption and key management, security configuration auditing, compliance monitoring (GDPR, HIPAA, SOC 2, ISO 27001), cloud-native firewall configuration, container security, serverless security, multi-cloud security management, security automation, and cloud security training. Protect your cloud assets while maintaining regulatory compliance across all major cloud platforms.",
  },
  {
    icon: Eye,
    title: "AI-Powered Threat Detection",
    description: "Advanced threat intelligence using machine learning and behavioral analytics.",
    details: "Leverage artificial intelligence and machine learning to detect and respond to advanced threats in real-time. Our AI-powered security solutions include behavioral analytics and anomaly detection, machine learning-based threat identification, user and entity behavior analytics (UEBA), automated threat hunting, predictive threat intelligence, advanced persistent threat (APT) detection, insider threat detection, security orchestration and automated response (SOAR), threat pattern recognition, AI-driven incident prioritization, real-time risk scoring, and continuous learning algorithms. Stay ahead of emerging threats with intelligent security that evolves with the threat landscape.",
  },
  {
    icon: Network,
    title: "Supply Chain Security",
    description: "Protect your extended ecosystem with vendor risk management and third-party security.",
    details: "Secure your supply chain and manage third-party risks across your vendor ecosystem. Our supply chain security services include vendor security assessments, third-party risk management, software supply chain security, secure software development lifecycle (SSDLC), vendor compliance monitoring, software composition analysis (SCA), continuous vendor monitoring, supply chain threat intelligence, secure procurement processes, contract security requirements, incident response coordination with vendors, and regular security audits. Ensure your entire digital supply chain maintains the highest security standards.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access Management (IAM)",
    description: "Centralized identity governance with single sign-on and privileged access management.",
    details: "Comprehensive identity and access management solutions that secure user identities and control access across your enterprise. Our IAM services include single sign-on (SSO) implementation, multi-factor authentication (MFA), privileged access management (PAM), identity governance and administration (IGA), role-based access control (RBAC), lifecycle management and provisioning, directory services integration, federated identity management, access certification and recertification, password management and policies, adaptive authentication, and identity analytics. Control who has access to what, when, and under what conditions.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response & Recovery",
    description: "Rapid response to security incidents with forensic analysis and recovery planning.",
    details: "Expert incident response and recovery services to minimize damage and restore operations quickly when security incidents occur. Our incident response services include 24/7 emergency response team, incident triage and containment, digital forensics and investigation, malware analysis and reverse engineering, threat actor identification, evidence preservation and chain of custody, recovery and remediation planning, post-incident analysis and reporting, lessons learned documentation, incident response plan development, tabletop exercises and simulations, and retainer-based response services. Be prepared for the worst with a tested incident response capability.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Data Privacy",
    description: "Ensure regulatory compliance with GDPR, HIPAA, SOC 2, and industry standards.",
    details: "Navigate complex regulatory requirements with comprehensive compliance and data privacy services. Our compliance solutions include GDPR compliance assessment and implementation, HIPAA security and privacy controls, SOC 2 Type I/II audit preparation, ISO 27001 certification support, PCI DSS compliance for payment processing, data protection impact assessments (DPIA), privacy policy development, data mapping and classification, consent management systems, breach notification procedures, regulatory reporting automation, ongoing compliance monitoring, and compliance training programs. Maintain regulatory compliance while protecting customer data privacy.",
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
  {
    icon: GraduationCap,
    title: "Servercrib Academy",
    description: "Training and certification in ERP, AI, and Cloud technologies.",
    details: "Servercrib Academy delivers comprehensive training and certification programs in ERP, AI, and Cloud technologies. We empower professionals and organizations with the skills needed to excel in today's digital landscape. Our academy offers instructor-led training courses, hands-on lab environments, certification preparation programs, custom corporate training, online and on-site learning options, AvenERP certification tracks, Defendria security training, Cloud architecture workshops, AI and machine learning courses, continuing education programs, group discounts for enterprises, and flexible scheduling options. Build your team's expertise with industry-recognized certifications and practical skills.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="py-32 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                Empowering Business Continuity
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/90 animate-fade-in">
              Through Managed Innovation.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
              We deliver continuous IT excellence through ERP/CRM customization, cybersecurity operations, cloud management, and 24/7 support services — so your business stays secure, efficient, and future-ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'auto' })}
              >
                ⚙️ View Our Services
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white text-lg px-8 py-6 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}
              >
                💬 Talk to an Expert
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic animate-fade-in">
              ✨ We Manage the Technology. You Focus on Growth.
            </p>
          </div>
        </div>
      </div>

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

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}
          >
            Get Started
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
