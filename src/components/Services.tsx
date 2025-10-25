import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadphonesIcon, CloudCog, Users, Briefcase, Database, Settings, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { services } from "./utils/constants";

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
