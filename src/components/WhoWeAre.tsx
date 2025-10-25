import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Are More Than a Tech Company
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              We Are a Transformation Partner.
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                <span className="text-foreground font-semibold">
                  Servercrib Technology Solutions
                </span>{" "}
                is a U.S. and African-based global IT firm with offices in
                Maryland, USA and Lagos, Nigeria, specializing in{" "}
                <span className="text-foreground font-medium">
                  ERP & Business Systems, Cybersecurity, Cloud Infrastructure,
                  Software Development, and Data Analytics.
                </span>
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                We design technologies that unify processes, secure
                environments, and power decision-making — helping enterprises
                and governments evolve through innovation.
              </p>

              <div className="text-center">
                <Link to={"/company"}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-black font-semibold group"
                  >
                    📘 Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
