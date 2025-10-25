import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      {/* Closing CTA Banner */}
      <div className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your business? Let's make it happen.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Book a discovery call today and find out how Servercrib can help
              your organization grow securely and intelligently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/services"}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
                  asChild
                >
                  <a href="mailto:info@servercribtechnologysolutions.com">
                    🚀 Start Your Project
                  </a>
                </Button>
              </Link>
              <Link to={"/contact"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white text-lg px-8 py-6 font-semibold"
                >
                  📞 Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
