import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Eye, Lightbulb, Shield, Users, CheckCircle } from "lucide-react";
import johnImage from "@/assets/john.jpg";
import nnennaImage from "@/assets/nnenna.jpg";
import awesomeImage from "@/assets/awesome.jpeg";
import estherImage from "@/assets/esther.jpg";
import ifeanyiImage from "@/assets/ifeanyi.jpg";
import favorImage from "@/assets/favor.jpg";
import okitiImage from "@/assets/okiti.jpg";
import ekeImage from "@/assets/eke.jpg";
import chineduImage from "@/assets/chinedu.jpg";
import ashleyImage from "@/assets/ashley.jpg";
import jimmyImage from "@/assets/jimmy-updated.jpg";
import nsikanImage from "@/assets/nsikan.jpg";
import ivieImage from "@/assets/ivie.jpg";
import aaliyahImage from "@/assets/aaliyah.jpg";
import michaelImage from "@/assets/michael.jpg";
import onyinyechiImage from "@/assets/onyinyechi.jpg";
import frankImage from "@/assets/frank.jpg";
import obinnaImage from "@/assets/obinna.jpg";

const About = () => {
  const erpSolutions = [
    "Odoo ERP (Open-source modular ERP)",
    "Oracle Fusion ERP",
    "Microsoft Dynamics 365",
    "SAP S/4HANA",
    "NetSuite ERP"
  ];

  const crmSolutions = [
    "Salesforce CRM",
    "HubSpot CRM",
    "Zoho CRM",
    "Pipedrive CRM",
    "Servercrib CRM (our in-house AI-powered CRM platform)"
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold trust and transparency in everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly redefine what's possible."
    },
    {
      icon: Shield,
      title: "Security",
      description: "We protect businesses, data, and people."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue perfection and measurable impact."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in collaboration and shared success."
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="py-32 bg-gradient-to-b from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                Empowering the Future
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/90 animate-fade-in">
              Through Secure Digital Transformation.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed animate-fade-in">
              Servercrib Technology Solutions is a U.S. and African-based global IT firm dedicated to empowering organizations through secure, scalable, and intelligent innovation.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed animate-fade-in">
              We combine cutting-edge AI, Cloud, ERP, and Security technologies to help enterprises optimize performance, automate workflows, and drive growth.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
              Servercrib is the cradle of intelligent innovation — the birthplace of ecosystems that serve humanity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('about-content')?.scrollIntoView({ behavior: 'auto' })}
              >
                📘 Learn More About Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6 font-semibold"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'auto' })}
              >
                🚀 Explore Our Solutions
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic mb-8 animate-fade-in">
              ✨ Secure. Scalable. Intelligent. — That's the Servercrib Way.
            </p>

            <div className="mt-12 p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg max-w-3xl mx-auto animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                From within its walls, <span className="text-foreground font-semibold">AVEN rises</span>: a network that builds worlds through automation and intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Then comes <span className="text-foreground font-semibold">Defendria</span>, the guardian of those worlds, ensuring every system remains trusted, compliant, and secure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                And finally, <span className="text-foreground font-semibold">Servercrib Consulting & Academy</span> steps in to bring these systems to life in the hands of real people — implementing, integrating, and educating the next generation of builders.
              </p>
              <p className="text-xl text-foreground font-bold mt-6 mb-2">
                AVEN Builds. Defendria Secures. Servercrib Implements.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed italic">
                This triad is more than a brand family — it's a movement toward intelligent digital sovereignty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div id="about-content" className="py-20 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
        {/* What is AVEN */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70">
            ⚙️ What is AVEN?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            <span className="text-foreground font-semibold">AVEN</span> stands for <span className="text-foreground font-semibold">Automated Virtual Environment Network</span> — a self-learning system that automates the creation of digital environments, turning ideas into intelligent software.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="font-bold text-primary text-xl mb-1">A</p>
                <p className="text-sm font-semibold mb-1">Automated</p>
                <p className="text-xs text-muted-foreground">AI-powered creation and workflow generation</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="font-bold text-primary text-xl mb-1">V</p>
                <p className="text-sm font-semibold mb-1">Virtual</p>
                <p className="text-xs text-muted-foreground">The digital universe where innovation lives</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="font-bold text-primary text-xl mb-1">E</p>
                <p className="text-sm font-semibold mb-1">Environment</p>
                <p className="text-xs text-muted-foreground">Intelligent ecosystems for work, learning, and growth</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="font-bold text-primary text-xl mb-1">N</p>
                <p className="text-sm font-semibold mb-1">Network</p>
                <p className="text-xs text-muted-foreground">The connected structure linking users, apps, and data</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-foreground font-semibold mb-2">
            AVEN builds the world — one automated environment at a time.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Rooted in meanings like "avenue" (pathway) and "avènement" (arrival), AVEN symbolizes the flow of intelligent creation and the dawn of a new digital era.
          </p>
          <p className="text-xl text-foreground font-bold">
            AVEN builds the world. Defendria secures it. Servercrib implements and trains it.
          </p>
        </div>

        {/* ERP & CRM Expertise */}
        <div className="mb-20">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">ERP & CRM Expertise</h3>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our flagship platform, <span className="text-foreground font-semibold">AvenERP</span>, is an AI-powered ERP suite that integrates finance, HR, supply chain, CRM, and compliance into one intelligent system.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond AvenERP, Servercrib also implements and customizes leading third-party ERPs such as:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">ERP Solutions</h4>
                  <ul className="space-y-3">
                    {erpSolutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">CRM Solutions</h4>
                  <ul className="space-y-3">
                    {crmSolutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                This makes Servercrib a true multi-platform implementation and integration partner, capable of tailoring enterprise technology to each client's industry, size, and digital maturity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become a global leader in secure digital transformation, empowering enterprises and communities worldwide through intelligent, scalable, and future-ready technology solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver secure, intelligent, and innovative platforms that simplify operations, protect digital assets, and accelerate business growth through excellence, integrity, and technology-driven innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">{value.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-4">Leadership</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our global team of innovators, strategists, and technologists driving digital transformation worldwide.
          </p>

          {/* Board of Directors */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center mb-8">Board of Directors</h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                    <img src={nnennaImage} alt="Nnenna Nnadili" className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-2xl font-bold mb-2">Nnenna Nnadili</h5>
                  <p className="text-lg font-bold text-primary mb-3">Chairperson of the Board</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A visionary leader and strategist passionate about innovation, human capital development, and sustainable growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                    <img src={johnImage} alt="Dr. John Ibebunjo" className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-2xl font-bold mb-2">Dr. John Ibebunjo</h5>
                  <p className="text-lg font-bold text-primary mb-3">Strategic Planning & Research Consultant</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A renowned strategic planning and research expert with deep experience in enterprise growth, governance, and innovation strategy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                    <img src={okitiImage} alt="Dr. Okiti Ogho" className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-2xl font-bold mb-2">Dr. Okiti Ogho</h5>
                  <p className="text-lg font-bold text-primary mb-3">Policy, Ideas & Capital Economic Transformer</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    An economic strategist and policy innovator focused on transforming ideas into capital-efficient realities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Management Team */}
          <div>
            <h4 className="text-2xl font-bold text-center mb-8">Management Team</h4>
            
            {/* Executive Leadership */}
            <div className="mb-8">
              <h5 className="text-xl font-semibold mb-4 text-center text-primary">Executive Leadership</h5>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={chineduImage} alt="Chinedu Emmanuel Oleka" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-lg">Chinedu Emmanuel Oleka</p>
                    <p className="text-base font-semibold text-muted-foreground">Managing Director</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={favorImage} alt="Favor Enoch" className="w-full h-full object-cover object-[50%_10%]" />
                    </div>
                    <p className="font-bold text-lg">Favor Enoch</p>
                    <p className="text-base font-semibold text-muted-foreground">Administrator & Finance Officer</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={estherImage} alt="Esther Okpala" className="w-full h-full object-cover object-[50%_30%]" />
                    </div>
                    <p className="font-bold text-lg">Esther Okpala</p>
                    <p className="text-base font-semibold text-muted-foreground">Technical Operations Officer</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Product & Engineering Division */}
            <div className="mb-8">
              <h5 className="text-xl font-semibold mb-4 text-center text-primary">Product & Engineering Division</h5>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={ekeImage} alt="Inyang Akanimo Sunday" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-lg">Inyang Akanimo Sunday</p>
                    <p className="text-base font-semibold text-muted-foreground">Project & Product Manager</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={ifeanyiImage} alt="Ifeanyi Nneji" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-lg">Ifeanyi Nneji</p>
                    <p className="text-base font-semibold text-muted-foreground">AI & Full Stack Manager</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={ivieImage} alt="Ivie Valentine" className="w-full h-full object-cover object-[50%_35%]" />
                    </div>
                    <p className="font-bold text-lg">Ivie Valentine</p>
                    <p className="text-base font-semibold text-muted-foreground">Backend Engineer</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={ashleyImage} alt="Ashley Agbonkhese" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-lg">Ashley Agbonkhese</p>
                    <p className="text-base font-semibold text-muted-foreground">Frontend Engineer</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={aaliyahImage} alt="Aaliyah Bahru" className="w-full h-full object-cover object-[50%_75%]" />
                    </div>
                    <p className="font-bold text-lg">Aaliyah Bahru</p>
                    <p className="text-base font-semibold text-muted-foreground">Frontend Engineer</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={awesomeImage} alt="Awesome Bassey" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-lg">Awesome Bassey</p>
                    <p className="text-base font-semibold text-muted-foreground">DevOps Manager</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Design & Experience Division */}
            <div className="mb-8">
              <h5 className="text-xl font-semibold mb-4 text-center text-primary">Design & Experience Division</h5>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={jimmyImage} alt="Victor Jimmy" className="w-full h-full object-cover object-[50%_25%]" />
                    </div>
                    <p className="font-bold text-lg">Victor Jimmy</p>
                    <p className="text-base font-semibold text-muted-foreground">Product & Brand Design Manager</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={onyinyechiImage} alt="Onyinyechi Sopuruchi-Obiagbaso" className="w-full h-full object-cover object-[50%_15%]" />
                    </div>
                    <p className="font-bold text-lg">Onyinyechi Sopuruchi-Obiagbaso</p>
                    <p className="text-base font-semibold text-muted-foreground">Product & Brand Designer</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={michaelImage} alt="Micheal Obazu" className="w-full h-full object-cover object-[50%_10%]" />
                    </div>
                    <p className="font-bold text-lg">Micheal Obazu</p>
                    <p className="text-base font-semibold text-muted-foreground">Product & Brand Designer</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Business & Growth Division */}
            <div>
              <h5 className="text-xl font-semibold mb-4 text-center text-primary">Business & Growth Division</h5>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img 
                        src={nsikanImage} 
                        alt="Nsikan Ikpe" 
                        className="w-full h-full object-cover object-[50%_10%]"
                      />
                    </div>
                    <p className="font-bold text-lg">Nsikan Ikpe</p>
                    <p className="text-base font-semibold text-muted-foreground">Social Media & Digital Marketing Manager</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={frankImage} alt="Lee Frank" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-lg">Lee Frank</p>
                    <p className="text-base font-semibold text-muted-foreground">Business Development Manager</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                      <img src={obinnaImage} alt="Obinna Nzem" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-lg">Obinna Nzem</p>
                    <p className="text-base font-semibold text-muted-foreground">Marketing & Sales Manager</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
