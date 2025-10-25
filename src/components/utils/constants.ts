import {
  Database,
  Shield,
  Cloud,
  Search,
  Lock,
  BarChart3,
  Users,
  ShieldCheck,
  GraduationCap,
  Blocks,
  Target,
  FileBarChart,
  Bot,
  Network,
  Zap,
  HeadphonesIcon,
  Code,
  Settings,
  ShieldAlert,
  CloudCog,
  Briefcase,
  Lightbulb,
} from "lucide-react";

export const products = [
  {
    icon: Database,
    title: "AvenERP — Intelligent Enterprise Resource Planning",
    tagline: "Unify. Automate. Accelerate.",
    description:
      "AvenERP is our all-in-one, AI-driven ERP suite built to transform how organizations operate.",
    details:
      "AvenERP is our all-in-one, AI-driven ERP suite built to transform how organizations operate. From finance to HR, inventory to compliance — AvenERP unites all business processes into one intelligent platform. Also supports custom implementation of Odoo, Oracle Fusion, Microsoft Dynamics 365, and SAP. Built with cutting-edge AI technology, it seamlessly integrates: Financial Management & Accounting, Human Resources & Payroll, Customer Relationship Management, Inventory & Supply Chain, Business Intelligence & Analytics, Real-time Reporting & Insights, Mobile Access & Cloud-native Architecture, Advanced Security & Compliance, Workflow Automation, Predictive Analytics.",
  },
  {
    icon: Shield,
    title: "Defendria — Cybersecurity Simplified, Protection Amplified",
    tagline: "Defense Beyond Detection.",
    description:
      "Defendria is a next-generation cybersecurity suite that safeguards your enterprise against modern threats.",
    details:
      "Defendria is a next-generation cybersecurity suite that safeguards your enterprise against modern threats. With automated compliance, real-time monitoring, and AI-based risk detection, Defendria ensures your business stays one step ahead of cybercrime. Our comprehensive platform includes: Real-time Threat Detection & Response, Advanced Endpoint Protection, Network Security Monitoring, Behavioral Analytics & AI-driven Anomaly Detection, Automated Compliance Reporting (SOC 2, ISO 27001, NIST), Vulnerability Assessment & Management, Incident Response Automation, Security Information & Event Management (SIEM), Zero Trust Architecture Implementation, Integration with existing security infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Defendria Sentinel — 24/7 Threat Intelligence & Response",
    tagline: "Your Digital Guardian in Real Time.",
    description:
      "Defendria Sentinel extends Defendria's power with active monitoring and AI-driven incident response.",
    details:
      "Defendria Sentinel extends Defendria's power with active monitoring, AI-driven incident response, and SOC-as-a-Service capabilities. It's your dedicated layer of protection — detecting, analyzing, and neutralizing threats around the clock. Features include: Real-time Endpoint Monitoring, AI-powered Threat Detection, Behavioral Analysis & Anomaly Detection, Automated Threat Response, Zero-day Attack Protection, Ransomware Prevention, Device Control & Application Whitelisting, Network Traffic Analysis, Centralized Management Console, Lightweight Agent Design, Cloud-native Architecture, 24/7 SOC Operations, Compliance Reporting.",
  },
  {
    icon: Cloud,
    title: "Servercrib Cloud — Scalable, Secure, and Seamlessly Managed",
    tagline: "Powering the Future of Cloud Infrastructure.",
    description:
      "Servercrib Cloud delivers enterprise-grade cloud hosting, virtualization, and data storage solutions.",
    details:
      "Servercrib Cloud delivers enterprise-grade cloud hosting, virtualization, and data storage solutions — optimized for performance, cost, and security. Deploy private, hybrid, or multi-cloud setups backed by integrated monitoring and zero-trust security. Our platform offers: Multi-region Deployment & High Availability, Auto-scaling & Load Balancing, Container Orchestration (Kubernetes), Serverless Computing Options, Advanced Security & Encryption, Cost Optimization & Resource Management, Hybrid & Multi-cloud Support, 99.99% Uptime SLA, Real-time Monitoring & Analytics, DevOps Integration & CI/CD Pipeline Support, Disaster Recovery & Backup Solutions.",
  },
  {
    icon: BarChart3,
    title: "CribAnalytics BI — Intelligence That Drives Decisions",
    tagline: "From Data to Decisions — Instantly.",
    description:
      "CribAnalytics BI empowers enterprises with actionable insights, predictive analytics, and real-time dashboards.",
    details:
      "CribAnalytics BI empowers enterprises with actionable insights, predictive analytics, and real-time dashboards. Turn your data into strategy with advanced visualization tools and AI-driven reporting designed for impact. The platform offers: Interactive Dashboards & Reports, Drag-and-drop Report Builder, Predictive Analytics & Forecasting, Real-time Data Processing, Multi-source Data Integration, Automated KPI Tracking, Custom Visualization Options, Collaborative Analytics Workspace, Mobile BI Apps, Advanced AI/ML Integration, Role-based Access Control, Export & Sharing Capabilities, Executive Reporting.",
  },
  {
    icon: Search,
    title: "SafeFind",
    description:
      "AI-powered missing-person and emergency-response coordination platform connecting citizens and agencies in real time.",
    details:
      "SafeFind revolutionizes emergency response and missing person recovery with AI-driven coordination. The platform includes: Real-time Alert Distribution, Geolocation & Mapping Integration, Multi-agency Coordination Tools, Citizen Reporting & Crowd-sourcing, AI-powered Pattern Recognition, Case Management & Documentation, Mobile App for Citizens & Responders, Privacy-protected Data Handling, Integration with Law Enforcement Systems, Analytics & Reporting Dashboard. Every second counts, and SafeFind ensures efficient, coordinated response.",
  },
  {
    icon: Lock,
    title: "SilentShield",
    description:
      "Privacy-centric VPN and data protection system ensuring secure communication and browsing.",
    details:
      "SilentShield provides military-grade privacy protection for individuals and enterprises. Features include: Zero-log VPN with Global Servers, End-to-end Encryption for All Communications, DNS Leak Protection, Kill Switch Technology, Split Tunneling Capabilities, Multi-device Support, Dedicated IP Options, Anonymous Browsing & Identity Protection, Secure File Sharing, Compliance with Privacy Regulations (GDPR, CCPA). Your privacy is non-negotiable, and SilentShield ensures it stays protected.",
  },
  {
    icon: Users,
    title: "Servercrib CRM",
    description:
      "Advanced customer relationship management system for sales automation, marketing campaigns, and client retention.",
    details:
      "Servercrib CRM transforms how you engage with customers throughout their lifecycle. Features include: 360° Customer View, Sales Pipeline Management, Marketing Automation & Campaign Tools, Lead Scoring & Qualification, Email Integration & Tracking, Task & Calendar Management, Customer Support Ticketing, Analytics & Performance Metrics, Mobile CRM Apps, Integration with AvenERP, Customizable Workflows, API Access for Third-party Tools. Build lasting relationships and drive revenue growth.",
  },
  {
    icon: GraduationCap,
    title: "Servercrib Academy LMS",
    description:
      "Cloud-based learning and certification management platform for enterprise and government institutions.",
    details:
      "Servercrib Academy LMS delivers comprehensive learning management for organizations of any size. Features include: Course Creation & Management, Video Hosting & Streaming, Assessment & Certification Tools, Learning Path Designer, Student Progress Tracking, Discussion Forums & Collaboration, Gamification & Engagement Tools, Mobile Learning Apps, Integration with HR Systems, Compliance Training Tracking, White-label Options, Advanced Analytics & Reporting. Empower your workforce with continuous learning.",
  },
  {
    icon: Blocks,
    title: "CribAI Builder",
    description:
      "No-code AI app development framework enabling businesses to create intelligent tools without deep technical skills.",
    details:
      "CribAI Builder democratizes AI development with an intuitive no-code platform. The framework includes: Visual AI Workflow Builder, Pre-built AI Models & Templates, Natural Language Processing, Computer Vision Components, Predictive Analytics Tools, API Integration Framework, Custom Model Training, Testing & Deployment Tools, Collaboration Features, Version Control, Scalable Cloud Infrastructure, Security & Compliance Controls. Build AI-powered applications in hours, not months.",
  },
];

export const solutions = [
  {
    icon: Target,
    title: "Digital Transformation Consulting",
    description:
      "Reimagine your business processes with expert guidance from strategy to execution.",
    details:
      "Reimagine your business processes with our expert guidance — from strategy to execution — ensuring your technology aligns with your business vision. We help organizations modernize their operations, adopt new technologies, and create digital-first strategies that drive competitive advantage. Our consultants work closely with your team to identify opportunities, assess readiness, and implement transformative solutions that deliver measurable results.",
  },
  {
    icon: Database,
    title: "ERP & CRM Implementation",
    description:
      "Deploy and customize advanced ERP and CRM platforms tailored to your needs.",
    details:
      "Deploy, customize, and integrate advanced ERP and CRM platforms, including: AvenERP (AI-powered all-in-one ERP by Servercrib), Odoo ERP (modular and open-source), Oracle Fusion ERP, SAP S/4HANA, Microsoft Dynamics 365, Salesforce, HubSpot, Zoho, and Servercrib CRM. Our certified experts ensure seamless migration, user adoption, and full-scale integration across departments. We handle everything from initial planning and data migration to training and ongoing optimization.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Risk Management",
    description:
      "Secure your infrastructure with AI-powered threat detection and compliance enforcement.",
    details:
      "Secure your infrastructure with Defendria and Defendria Sentinel, our AI-powered platforms for threat detection, compliance enforcement, and 24/7 monitoring. Our comprehensive cybersecurity services include vulnerability assessments, penetration testing, security architecture design, incident response planning, and continuous monitoring. We help organizations protect their digital assets, maintain compliance with industry regulations, and build resilience against evolving cyber threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Optimization",
    description:
      "Migrate to Servercrib Cloud or major providers with minimal downtime and maximum efficiency.",
    details:
      "Migrate to Servercrib Cloud or major providers (AWS, Azure, GCP) with minimal downtime and maximum efficiency. We help you build a resilient, scalable, and cost-optimized cloud environment. Our cloud experts handle assessment, planning, migration execution, and post-migration optimization. We ensure your applications are cloud-ready, implement best practices for security and performance, and provide ongoing management to maximize your cloud investment.",
  },
  {
    icon: FileBarChart,
    title: "Data Strategy & Business Intelligence",
    description:
      "Empower decision-making with advanced dashboards, predictive analytics, and real-time intelligence.",
    details:
      "Empower decision-making with CribAnalytics BI — enabling advanced dashboards, predictive analytics, and real-time intelligence. We help organizations unlock the value of their data through comprehensive data strategy development, modern data warehousing, ETL pipeline design, and powerful visualization tools. Our BI solutions provide executives and teams with actionable insights that drive better business outcomes.",
  },
  {
    icon: Bot,
    title: "AI & Automation Integration",
    description:
      "Transform manual processes into intelligent, automated workflows.",
    details:
      "Transform manual processes into intelligent, automated workflows using AI models embedded in your ERP, CRM, and analytics systems. We implement machine learning solutions, robotic process automation (RPA), intelligent document processing, and AI-powered decision support systems. Our automation solutions reduce operational costs, eliminate errors, and free your team to focus on strategic initiatives.",
  },
  {
    icon: Network,
    title: "DevOps & Cloud Infrastructure",
    description:
      "Accelerate deployment and improve performance with modern DevOps practices.",
    details:
      "Accelerate deployment and improve performance with continuous integration, microservices orchestration, and infrastructure-as-code solutions. We implement modern DevOps practices including CI/CD pipelines, containerization with Docker and Kubernetes, automated testing, monitoring and logging solutions, and GitOps workflows. Our approach reduces deployment time, increases reliability, and enables rapid innovation.",
  },
  {
    icon: Lock,
    title: "IT Governance & Compliance",
    description:
      "Align technology and operations with industry standards and regulations.",
    details:
      "Align technology and operations with SOC 2, NIST, ISO 27001, and GDPR standards, supported by our compliance frameworks and risk assessment protocols. We help organizations establish governance structures, implement policy management systems, conduct compliance audits, and maintain ongoing compliance documentation. Our experts ensure your IT operations meet regulatory requirements while supporting business objectives.",
  },
  {
    icon: Zap,
    title: "SME Digital Acceleration",
    description:
      "Affordable, modular solutions designed for startups and small enterprises.",
    details:
      "Affordable, modular ERP + CRM + Cloud + Security bundles designed to help startups and small enterprises go digital without overspending. We understand the unique challenges facing SMEs and provide right-sized solutions that scale with your business. Our packages include essential digital tools, expert implementation support, and flexible payment options that fit your budget.",
  },
  {
    icon: Lock,
    title: "Cloud Security Framework",
    description:
      "Implement robust cloud security architectures with zero-trust principles.",
    details:
      "Implement robust cloud security architectures combining Defendria's protection with modern zero-trust principles. We design and deploy comprehensive security frameworks that protect cloud workloads, secure data in transit and at rest, implement identity and access management, and ensure continuous compliance. Our layered security approach provides defense-in-depth protection for your cloud infrastructure.",
  },
];

export const services = [
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

export const stats = [
  {
    value: "40%",
    label: "Reduction in Manual Errors",
  },
  {
    value: "99.9%",
    label: "Uptime Reliability",
  },
  {
    value: "35%",
    label: "Fewer Security Incidents",
  },
  {
    value: "50%",
    label: "Cloud Cost Savings",
  },
];

export const menu = ["products", "solutions", "services", "vendors"];
export const aboutMenu = ["company", "leadership", "careers"]
export const footerMenu = ["about", "solutions", "services", "products", "careers", "contact"]
