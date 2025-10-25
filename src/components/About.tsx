import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Target,
  Eye,
  Lightbulb,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const erpSolutions = [
    "Odoo ERP (Open-source modular ERP)",
    "Oracle Fusion ERP",
    "Microsoft Dynamics 365",
    "SAP S/4HANA",
    "NetSuite ERP",
  ];

  const crmSolutions = [
    "Salesforce CRM",
    "HubSpot CRM",
    "Zoho CRM",
    "Pipedrive CRM",
    "Servercrib CRM (our in-house AI-powered CRM platform)",
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries through creativity and advanced technology.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency and accountability.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for quality, precision, and measurable impact.",
    },
    {
      icon: Shield,
      title: "Security",
      description:
        "Protecting clients' digital environments with uncompromised diligence.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Partnering with clients to create sustainable value.",
    },
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
              At Servercrib Technology Solutions, we believe innovation is more
              than technology — it's the bridge between vision and impact.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
              We help businesses evolve with intelligence, integrity, and
              excellence — delivering secure, scalable, and data-driven systems
              that transform industries and empower communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
              <Link to={"/solutions"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white text-lg px-8 py-6 font-semibold"
                  onClick={() =>
                    document
                      .getElementById("solutions")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  🚀 Explore Our Solutions
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground italic mb-8 animate-fade-in">
              ✨ Secure. Scalable. Intelligent. — That's the Servercrib Way.
            </p>

            <div className="mt-12 p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg max-w-3xl mx-auto animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <span className="text-foreground font-semibold">
                  We're not just building software — we're building trust.
                </span>
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                From ERP to Cybersecurity, Cloud to AI, we create technologies
                that redefine how organizations think, operate, and grow.
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Founded in Maryland, USA — driven by purpose, powered by
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        id="about-content"
        className="py-20 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Company Overview */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70">
              About Servercrib Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Servercrib Technology Solutions is a full-spectrum IT and digital
              innovation firm dedicated to building secure, scalable, and
              intelligent enterprise systems that transform the way
              organizations operate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We specialize in ERP & Business Systems, Cybersecurity &
              Compliance (Defendria & Defendria Sentinel), Cloud Infrastructure,
              Software Development, and Data Analytics & AI — delivering
              cutting-edge solutions that unify operations, safeguard digital
              assets, and drive measurable growth.
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
                  Our flagship platform,{" "}
                  <span className="text-foreground font-semibold">AvenERP</span>
                  , is an AI-powered ERP suite that integrates finance, HR,
                  supply chain, CRM, and compliance into one intelligent system.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Beyond AvenERP, Servercrib also implements and customizes
                  leading third-party ERPs such as:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground">
                      ERP Solutions
                    </h4>
                    <ul className="space-y-3">
                      {erpSolutions.map((solution, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground">
                      CRM Solutions
                    </h4>
                    <ul className="space-y-3">
                      {crmSolutions.map((solution, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  This makes Servercrib a true multi-platform implementation and
                  integration partner, capable of tailoring enterprise
                  technology to each client's industry, size, and digital
                  maturity.
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
                  To become Africa's leading global technology company,
                  pioneering secure digital transformation that empowers
                  enterprises, governments, and communities worldwide.
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
                  To deliver innovative, secure, and intelligent technology
                  solutions that simplify operations, protect digital assets,
                  and accelerate business growth through excellence, integrity,
                  and innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">
              Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
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
        </div>
      </div>
    </section>
  );
};

export default About;
