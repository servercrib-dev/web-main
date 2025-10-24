import { Button } from "@/components/ui/button";

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our technology solutions can drive your digital transformation.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-black font-semibold shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.5)] transition-all"
            onClick={scrollToContact}
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
