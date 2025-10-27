import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Shield, Cloud, Search, Lock, BarChart3, Users, ShieldCheck, GraduationCap, Blocks, ShoppingBag, Activity, Warehouse, Heart, BookOpen, ShoppingCart, DollarSign, Stethoscope, UserCog, Cpu, Code, MessageSquare, Brain, Gauge, Network, Briefcase, Microscope, Handshake, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

type Product = {
  icon: any;
  title: string;
  tagline?: string;
  description: string;
  details: string;
};

type ProductCategory = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
};

const productCategories: ProductCategory[] = [
  {
    id: "core-family",
    title: "A. AVEN CORE FAMILY",
    subtitle: "Foundation Layer - The core layer that powers every Servercrib solution — connecting automation, AI, and cloud infrastructure.",
    products: [
      {
        icon: Cpu,
        title: "AvenCore",
        tagline: "Imagine. Generate. Deploy.",
        description: "AI-powered environment engine that converts business ideas into working applications or ERP modules.",
        details: "AvenCore is a revolutionary AI-powered environment engine that transforms business ideas and requirements into fully functional applications or ERP modules. Simply describe what you need, and AvenCore generates the complete solution — database schema, business logic, user interface, and integrations. Capabilities include: Natural Language to Application Conversion, Intelligent Requirements Analysis, Auto-generated Database Schema, Business Logic Generation, User Interface Creation, Workflow Automation Design, API & Integration Generation, Security & Access Control Setup, Testing & Validation, Version Control & Deployment, Continuous Learning from User Feedback, Multi-platform Support (Web, Mobile), Integration with Entire Aven Ecosystem, and Enterprise-grade Scalability. Turn ideas into reality at the speed of thought with AvenCore.",
      },
      {
        icon: Code,
        title: "AvenForge",
        tagline: "Prompt. Design. Export.",
        description: "Developer and designer studio that enables 'prompt-to-app' creation and live code export.",
        details: "AvenForge is an innovative developer and designer studio that revolutionizes application development with prompt-to-app capabilities. Describe your application in natural language, watch it come to life, and export production-ready code instantly. The studio provides: AI-powered Prompt-to-App Generation, Visual Design Editor & Customization, Real-time Code Preview, Live Code Export (React, Vue, Angular, etc.), Component Library & Templates, Responsive Design Tools, Database Schema Designer, API Endpoint Generator, Authentication & Authorization Setup, Testing & Debugging Tools, Version Control Integration, Collaboration Features for Teams, Cloud Deployment Options, and Integration with AvenERP & AvenCore. Build applications faster than ever with AvenForge.",
      },
      {
        icon: Cloud,
        title: "AvenCloud",
        tagline: "Powering the Future of Cloud Infrastructure.",
        description: "Secure hosting and deployment platform for all AVEN and Defendria applications.",
        details: "AvenCloud delivers enterprise-grade cloud hosting, virtualization, and data storage solutions — optimized for performance, cost, and security. Deploy private, hybrid, or multi-cloud setups backed by integrated monitoring and zero-trust security. Our platform offers: Multi-region Deployment & High Availability, Auto-scaling & Load Balancing, Container Orchestration (Kubernetes), Serverless Computing Options, Advanced Security & Encryption, Cost Optimization & Resource Management, Hybrid & Multi-cloud Support, 99.99% Uptime SLA, Real-time Monitoring & Analytics, DevOps Integration & CI/CD Pipeline Support, Disaster Recovery & Backup Solutions.",
      },
      {
        icon: MessageSquare,
        title: "AvenConnect",
        tagline: "Communicate. Automate. Connect.",
        description: "Unified communication suite that manages email, SMS, WhatsApp, and workflow automation.",
        details: "AvenConnect is a unified communication suite that brings together email, SMS, WhatsApp, and workflow automation into one powerful platform. Manage all your business communications, automate repetitive tasks, and ensure seamless connectivity across channels. Features include: Multi-channel Messaging (Email, SMS, WhatsApp), Unified Inbox & Conversation Management, Workflow Automation & Triggers, Email Campaign Management, SMS Broadcast & Scheduling, WhatsApp Business API Integration, Contact Management & Segmentation, Message Templates & Personalization, Auto-responders & Chatbots, Analytics & Engagement Metrics, Team Collaboration Tools, API Access for Custom Integrations, Compliance & Privacy Controls, and Integration with CRM & AvenERP. Streamline your communications with AvenConnect.",
      },
      {
        icon: Blocks,
        title: "AvenAI Builder",
        description: "No-code AI app development framework enabling businesses to create intelligent tools without deep technical skills.",
        details: "AvenAI Builder democratizes AI development with an intuitive no-code platform. The framework includes: Visual AI Workflow Builder, Pre-built AI Models & Templates, Natural Language Processing, Computer Vision Components, Predictive Analytics Tools, API Integration Framework, Custom Model Training, Testing & Deployment Tools, Collaboration Features, Version Control, Scalable Cloud Infrastructure, Security & Compliance Controls. Build AI-powered applications in hours, not months.",
      },
    ]
  },
  {
    id: "enterprise-suite",
    title: "B. AVEN ENTERPRISE SUITE",
    subtitle: "Business Layer - Scalable, industry-focused solutions that drive digital transformation across all sectors.",
    products: [
      {
        icon: Database,
        title: "AvenERP — Intelligent Enterprise Resource Planning",
        tagline: "Unify. Automate. Accelerate.",
        description: "AvenERP is our all-in-one, AI-driven ERP suite built to transform how organizations operate.",
        details: "AvenERP is our all-in-one, AI-driven ERP suite built to transform how organizations operate. From finance to HR, inventory to compliance — AvenERP unites all business processes into one intelligent platform. Also supports custom implementation of Odoo, Oracle Fusion, Microsoft Dynamics 365, and SAP. Built with cutting-edge AI technology, it seamlessly integrates: Financial Management & Accounting, Human Resources & Payroll, Customer Relationship Management, Inventory & Supply Chain, Business Intelligence & Analytics, Real-time Reporting & Insights, Mobile Access & Cloud-native Architecture, Advanced Security & Compliance, Workflow Automation, Predictive Analytics.",
      },
      {
        icon: Users,
        title: "AvenCRM",
        description: "Advanced customer relationship management system for sales automation, marketing campaigns, and client retention.",
        details: "AvenCRM transforms how you engage with customers throughout their lifecycle. Features include: 360° Customer View, Sales Pipeline Management, Marketing Automation & Campaign Tools, Lead Scoring & Qualification, Email Integration & Tracking, Task & Calendar Management, Customer Support Ticketing, Analytics & Performance Metrics, Mobile CRM Apps, Integration with AvenERP, Customizable Workflows, API Access for Third-party Tools. Build lasting relationships and drive revenue growth.",
      },
      {
        icon: Heart,
        title: "AvenFaith",
        tagline: "Empower. Engage. Elevate.",
        description: "Ministry & Nonprofit Management platform for donations, volunteers, and events.",
        details: "AvenFaith is a comprehensive ministry and nonprofit management platform designed to help faith-based organizations and nonprofits thrive. Manage donations, coordinate volunteers, organize events, and engage with your community — all in one unified platform. Features include: Donation Management & Online Giving, Volunteer Coordination & Scheduling, Event Planning & Registration, Member Database & Communication, Pledge Tracking & Recurring Donations, Financial Reporting & Transparency, Email & SMS Campaigns, Child Check-in & Safety Systems, Small Group Management, Attendance Tracking, Ministry Resource Library, Mobile App for Members, Integration with Accounting Systems, and Compliance & Tax Receipt Generation. Strengthen your mission with tools built specifically for faith-based and nonprofit organizations.",
      },
      {
        icon: BookOpen,
        title: "AvenLearn",
        tagline: "Educate. Inspire. Transform.",
        description: "Education Management System for schools, academies, and training centers.",
        details: "AvenLearn is a comprehensive education management system designed for schools, academies, and training centers of all sizes. Streamline admissions, manage student records, track academic progress, and facilitate parent-teacher communication in one integrated platform. Key capabilities include: Student Information System (SIS), Admissions & Enrollment Management, Attendance Tracking & Reporting, Grade Book & Academic Records, Timetable & Schedule Management, Parent-Teacher Communication Portal, Fee Management & Billing, Library Management, Exam & Assessment Tools, Report Card Generation, Student Progress Analytics, Mobile Apps for Students & Parents, Integration with Learning Management Systems, and Compliance & Accreditation Reporting. Transform educational administration with AvenLearn.",
      },
      {
        icon: ShoppingCart,
        title: "AvenMarket",
        tagline: "Build. Sell. Scale.",
        description: "Multi-vendor eCommerce and marketplace builder.",
        details: "AvenMarket is a powerful multi-vendor eCommerce and marketplace platform that enables you to build and scale your online marketplace rapidly. Support unlimited vendors, manage products, process payments, and deliver exceptional customer experiences. The platform includes: Multi-vendor Management & Onboarding, Product Catalog & Inventory Management, Shopping Cart & Checkout, Payment Gateway Integration, Order Management & Fulfillment, Shipping & Logistics Integration, Customer Reviews & Ratings, Vendor Commission Management, Advanced Search & Filtering, Mobile-responsive Design, Marketing & Promotion Tools, Analytics & Sales Reporting, Multi-currency & Multi-language Support, SEO Optimization, and Integration with AvenERP & AvenFinance. Launch your marketplace and empower vendors to succeed.",
      },
      {
        icon: DollarSign,
        title: "AvenFinance",
        tagline: "Track. Manage. Grow.",
        description: "Fintech platform for accounting, invoicing, and analytics.",
        details: "AvenFinance is an intelligent fintech platform that simplifies accounting, invoicing, and financial analytics for businesses of all sizes. Automate bookkeeping, generate professional invoices, and gain real-time insights into your financial health. Features include: Double-entry Accounting System, Automated Invoice Generation & Tracking, Expense Management & Receipt Capture, Bank Reconciliation & Integration, Financial Reporting & Dashboards, Cash Flow Forecasting, Multi-currency Support, Tax Calculation & Compliance, Budgeting & Planning Tools, Accounts Payable & Receivable, Payment Gateway Integration, Client Portal Access, Mobile Apps for On-the-go Management, and Integration with AvenERP & AvenAnalytics BI. Take control of your finances with AvenFinance.",
      },
      {
        icon: Stethoscope,
        title: "AvenHealth",
        tagline: "Care. Connect. Heal.",
        description: "Healthcare management suite for clinics and hospitals.",
        details: "AvenHealth is a comprehensive healthcare management suite designed for clinics, hospitals, and medical facilities. Streamline patient care, manage appointments, maintain electronic health records, and ensure regulatory compliance — all in one integrated system. Core features include: Electronic Health Records (EHR), Patient Registration & Demographics, Appointment Scheduling & Reminders, Medical Billing & Claims Management, Prescription & Pharmacy Management, Laboratory & Radiology Integration, Inventory & Supply Chain Management, Staff & Resource Scheduling, Telemedicine & Virtual Consultations, Patient Portal & Communication, Insurance Verification & Management, Clinical Decision Support, HIPAA Compliance & Security, and Integration with Medical Devices & Systems. Deliver better patient outcomes with AvenHealth.",
      },
      {
        icon: UserCog,
        title: "AvenHuman",
        tagline: "Hire. Develop. Retain.",
        description: "Human Capital Management for hiring, payroll, and performance tracking.",
        details: "AvenHuman is a complete Human Capital Management (HCM) platform that covers the entire employee lifecycle — from recruitment to retirement. Manage hiring, onboarding, payroll, performance, and employee development in one unified system. The platform offers: Applicant Tracking System (ATS), Employee Onboarding & Offboarding, Payroll Processing & Tax Compliance, Time & Attendance Tracking, Leave & Absence Management, Performance Management & Reviews, Goal Setting & OKRs, Learning & Development Programs, Employee Self-service Portal, Benefits Administration, Succession Planning, Workforce Analytics & Reporting, Mobile HR Apps, and Integration with AvenERP & AvenFinance. Build a thriving workforce with AvenHuman.",
      },
      {
        icon: Search,
        title: "SafeFind",
        description: "AI-powered missing-person and emergency-response coordination platform connecting citizens and agencies in real time.",
        details: "SafeFind revolutionizes emergency response and missing person recovery with AI-driven coordination. The platform includes: Real-time Alert Distribution, Geolocation & Mapping Integration, Multi-agency Coordination Tools, Citizen Reporting & Crowd-sourcing, AI-powered Pattern Recognition, Case Management & Documentation, Mobile App for Citizens & Responders, Privacy-protected Data Handling, Integration with Law Enforcement Systems, Analytics & Reporting Dashboard. Every second counts, and SafeFind ensures efficient, coordinated response.",
      },
    ]
  },
  {
    id: "defendria-suite",
    title: "C. DEFENDRIA SECURITY SUITE",
    subtitle: "Protecting the digital enterprise through advanced AI-driven cybersecurity.",
    products: [
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
        description: "Threat and vulnerability detection system for applications, APIs, and networks.",
        details: "Defendria Sentinel extends Defendria's power with active monitoring, AI-driven incident response, and SOC-as-a-Service capabilities. It's your dedicated layer of protection — detecting, analyzing, and neutralizing threats around the clock. Features include: Real-time Endpoint Monitoring, AI-powered Threat Detection, Behavioral Analysis & Anomaly Detection, Automated Threat Response, Zero-day Attack Protection, Ransomware Prevention, Device Control & Application Whitelisting, Network Traffic Analysis, Centralized Management Console, Lightweight Agent Design, Cloud-native Architecture, 24/7 SOC Operations, Compliance Reporting.",
      },
      {
        icon: Shield,
        title: "Defendria Cloud",
        description: "Enterprise-grade security and compliance framework for AvenCloud.",
        details: "Defendria Cloud provides comprehensive security and compliance protection for cloud infrastructure. Features include: Cloud Security Posture Management (CSPM), Container Security, Cloud Workload Protection, Identity & Access Management, Data Encryption & Key Management, Compliance Automation (SOC 2, ISO 27001, GDPR), Security Monitoring & Logging, Threat Detection & Response, Cloud Network Security, Multi-cloud Security Management, Security Configuration Assessment, Automated Remediation, Integration with AvenCloud. Secure your cloud infrastructure with enterprise-grade protection.",
      },
      {
        icon: GraduationCap,
        title: "Defendria Academy",
        description: "Security awareness and certification platform for users and organizations.",
        details: "Defendria Academy provides comprehensive security training and certification programs. The platform includes: Security Awareness Training, Phishing Simulation & Testing, Compliance Training Programs, Role-based Learning Paths, Certification Preparation Courses, Interactive Learning Modules, Assessment & Testing Tools, Progress Tracking & Reporting, Gamification & Engagement, Mobile Learning Support, Custom Content Creation, Integration with HR Systems, Compliance Tracking & Reporting. Build a security-aware culture across your organization.",
      },
      {
        icon: Lock,
        title: "SilentShield",
        description: "Privacy-centric VPN and data protection system ensuring secure communication and browsing.",
        details: "SilentShield provides military-grade privacy protection for individuals and enterprises. Features include: Zero-log VPN with Global Servers, End-to-end Encryption for All Communications, DNS Leak Protection, Kill Switch Technology, Split Tunneling Capabilities, Multi-device Support, Dedicated IP Options, Anonymous Browsing & Identity Protection, Secure File Sharing, Compliance with Privacy Regulations (GDPR, CCPA). Your privacy is non-negotiable, and SilentShield ensures it stays protected.",
      },
    ]
  },
  {
    id: "intelligence-data",
    title: "D. INTELLIGENCE & DATA",
    subtitle: "Empowering businesses with analytics, automation, and AI-driven insights.",
    products: [
      {
        icon: Brain,
        title: "AvenAI",
        description: "Core AI brain powering automation, recommendations, and predictive analysis.",
        details: "AvenAI is the intelligent core that powers AI-driven features across the entire Servercrib ecosystem. The platform delivers: Machine Learning Model Management, Predictive Analytics Engine, Natural Language Processing, Computer Vision & Image Recognition, Recommendation Systems, Automated Decision Making, AI-powered Automation, Anomaly Detection, Sentiment Analysis, Time Series Forecasting, Model Training & Optimization, API Access for Custom Integrations, Integration with All Aven Products. Transform data into intelligent action with AvenAI.",
      },
      {
        icon: BarChart3,
        title: "AvenAnalytics BI — Intelligence That Drives Decisions",
        tagline: "From Data to Decisions — Instantly.",
        description: "Visual dashboards and BI tools for executive insights.",
        details: "AvenAnalytics BI empowers enterprises with actionable insights, predictive analytics, and real-time dashboards. Turn your data into strategy with advanced visualization tools and AI-driven reporting designed for impact. The platform offers: Interactive Dashboards & Reports, Drag-and-drop Report Builder, Predictive Analytics & Forecasting, Real-time Data Processing, Multi-source Data Integration, Automated KPI Tracking, Custom Visualization Options, Collaborative Analytics Workspace, Mobile BI Apps, Advanced AI/ML Integration, Role-based Access Control, Export & Sharing Capabilities, Executive Reporting.",
      },
      {
        icon: Activity,
        title: "AvenOps",
        tagline: "Monitor. Analyze. Optimize.",
        description: "Operations monitoring and system performance analytics.",
        details: "AvenOps is a comprehensive operations monitoring and system performance analytics platform designed to give you complete visibility into your entire technology infrastructure. Monitor, analyze, and optimize your systems in real-time with AI-powered insights. Key features include: Real-time Infrastructure Monitoring, Application Performance Management (APM), Server and Network Monitoring, Database Performance Analytics, Cloud Resource Optimization, Automated Alert Management, Custom Dashboard Builder, Predictive Performance Analytics, Root Cause Analysis with AI, Integration with AvenERP and other Servercrib products, Service Level Agreement (SLA) Tracking, Capacity Planning Tools, Historical Trend Analysis, Multi-cloud and Hybrid Environment Support, and Mobile Monitoring Apps. Keep your operations running at peak performance with intelligent monitoring and proactive optimization.",
      },
      {
        icon: Warehouse,
        title: "AvenData",
        tagline: "Centralize. Integrate. Analyze.",
        description: "Data warehousing and integration across ERP, CRM, and APIs.",
        details: "AvenData is an enterprise-grade data warehousing and integration platform that unifies data from ERP systems, CRM platforms, APIs, and third-party applications into a single source of truth. Transform scattered data into strategic insights with seamless integration and powerful analytics. The platform delivers: Centralized Data Warehouse Architecture, ETL/ELT Pipeline Management, Real-time Data Synchronization, Multi-source Data Integration (ERP, CRM, Cloud Apps, APIs), Data Quality Management and Cleansing, Master Data Management (MDM), Data Governance and Compliance Tools, Automated Schema Mapping, API Integration Framework, Data Transformation and Enrichment, Historical Data Archiving, Scalable Cloud-native Storage, Advanced Security and Encryption, Pre-built Connectors for Popular Platforms, and Integration with AvenAnalytics BI for visualization. Break down data silos and unlock the full potential of your enterprise data with AvenData.",
      },
    ]
  },
  {
    id: "community-consulting",
    title: "E. COMMUNITY & CONSULTING",
    subtitle: "Empowering individuals, teams, and innovators through education and collaboration.",
    products: [
      {
        icon: Briefcase,
        title: "Servercrib Consulting & Implementation",
        description: "Professional consulting for ERP, CRM, and cybersecurity.",
        details: "Servercrib Consulting & Implementation provides expert guidance and hands-on support for successful digital transformation. Our services include: ERP Implementation & Customization, CRM Deployment & Integration, Cybersecurity Assessment & Planning, Cloud Migration Strategy, Business Process Optimization, Change Management, Training & Knowledge Transfer, Project Management, System Integration, Custom Development, Post-implementation Support, Ongoing Optimization. Partner with our experts to maximize your technology investment.",
      },
      {
        icon: GraduationCap,
        title: "Servercrib Academy",
        description: "Training and certification in ERP, AI, and Cloud technologies.",
        details: "Servercrib Academy delivers comprehensive learning management for organizations of any size. Features include: Course Creation & Management, Video Hosting & Streaming, Assessment & Certification Tools, Learning Path Designer, Student Progress Tracking, Discussion Forums & Collaboration, Gamification & Engagement Tools, Mobile Learning Apps, Integration with HR Systems, Compliance Training Tracking, White-label Options, Advanced Analytics & Reporting. Empower your workforce with continuous learning.",
      },
      {
        icon: ShoppingBag,
        title: "Servercrib Marketplace",
        description: "Digital store for AVEN extensions, plugins, and integrations.",
        details: "Servercrib Marketplace is your one-stop digital store for enterprise extensions, plugins, integrations, and add-ons across the entire Servercrib ecosystem. Discover and deploy solutions that extend the capabilities of AvenERP, Defendria, AvenCloud, and other platforms. The marketplace features verified third-party extensions, official Servercrib plugins, pre-built integrations with popular business tools, industry-specific modules, automation workflows, reporting templates, API connectors, custom themes and UI kits, one-click installation, secure payment processing, developer sandbox environments, and community ratings and reviews. Enhance your digital infrastructure with trusted, ready-to-deploy solutions from our growing marketplace ecosystem.",
      },
      {
        icon: Microscope,
        title: "Servercrib Labs",
        description: "Innovation and R&D division for emerging tech.",
        details: "Servercrib Labs is our dedicated innovation and research & development division focused on emerging technologies and breakthrough solutions. We explore: Artificial Intelligence & Machine Learning, Quantum Computing Applications, Blockchain & Distributed Systems, Extended Reality (AR/VR/MR), Edge Computing & IoT, Advanced Cybersecurity Research, Next-generation Cloud Architecture, Automation & Robotics, Biometric Authentication, Green Technology & Sustainability. Join us in shaping the future of enterprise technology.",
      },
      {
        icon: Handshake,
        title: "Servercrib Partner Network",
        description: "Collaboration hub for resellers and system integrators.",
        details: "Servercrib Partner Network connects resellers, system integrators, and technology partners in a collaborative ecosystem. Benefits include: Partner Portal Access, Sales & Marketing Resources, Technical Training & Certification, Co-marketing Opportunities, Lead Sharing & Referral Program, Partner Incentives & Rewards, Dedicated Partner Support, Early Access to New Products, Joint Solution Development, Partner Community Forums, Revenue Sharing Models, White-label Options. Grow your business with Servercrib.",
      },
      {
        icon: LayoutDashboard,
        title: "AvenCentral",
        description: "Centralized console for managing all Servercrib and AVEN applications.",
        details: "AvenCentral is your unified command center for managing the entire Servercrib ecosystem. From a single dashboard, control and monitor all your AVEN applications, integrations, and services. Features include: Unified Dashboard & Navigation, Single Sign-On (SSO) Access, Cross-application Search, Centralized User Management, License & Subscription Management, System Health Monitoring, Usage Analytics & Reporting, Notification Center, Quick Actions & Shortcuts, Application Switching, Settings Management, Support & Documentation Access, Mobile App Access. Simplify enterprise management with AvenCentral.",
      },
    ]
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
                onClick={() => document.getElementById('products-grid')?.scrollIntoView({ behavior: 'auto' })}
              >
                🚀 Explore Our Products
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white text-lg px-8 py-6 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}
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

      {/* Products Grid Section - Now Grouped by Categories */}
      <div id="products-grid" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Product Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proprietary software products and SaaS platforms built to empower digital transformation
            </p>
          </div>

          {/* Render each product category */}
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-24">
              {/* Category Header */}
              <div className="mb-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  {category.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  {category.subtitle}
                </p>
              </div>

              {/* Products Grid for this category */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => {
                  const Icon = product.icon;
                  return (
                    <Card 
                      key={`${categoryIndex}-${productIndex}`}
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
            </div>
          ))}

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
                  onClick={() => document.getElementById('products-grid')?.scrollIntoView({ behavior: 'auto' })}
                >
                  ⚙️ View All Products
                </Button>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}
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
                Driving digital transformation with the complete AVEN ecosystem and Defendria security suite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
