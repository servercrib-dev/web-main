import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import MatrixRain from "./MatrixRain";

const Hero = () => {
  const scrollToSolutions = () => {
    document.getElementById('solutions')?.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      <MatrixRain />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Welcome to Servercrib Technology Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Secure. Scalable. Intelligent.
            </span>
            <br />
            <span className="text-foreground/90 text-4xl md:text-5xl lg:text-6xl">
              Powering Digital Transformation Across the World.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            At Servercrib Technology Solutions, we help organizations innovate with confidence — combining the best of AI, Cloud, ERP, CRM, Cybersecurity, and Data Intelligence into one connected ecosystem.
          </p>

          <p className="text-base md:text-lg text-muted-foreground/80 mb-12 italic animate-fade-in">
            Building the future of business — one intelligent system at a time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="text-base px-10 py-7 bg-primary hover:bg-primary/90 text-black font-semibold shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.5)] transition-all"
              onClick={scrollToSolutions}
            >
              🚀 Explore Our Solutions
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-10 py-7 border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white font-semibold"
              onClick={scrollToContact}
            >
              📞 Schedule a Call
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
