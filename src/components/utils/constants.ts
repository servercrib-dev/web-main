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

export const menu = ["products", "solutions", "services", "vendors"];
export const aboutMenu = ["company", "leadership", "careers"]
