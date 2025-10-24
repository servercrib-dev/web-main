import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Servercrib helped us automate our operations, reduce cost, and improve compliance. Their team feels like part of ours.",
      author: "CEO",
      company: "Logistics Company",
      location: "Maryland"
    },
    {
      quote: "The implementation of AvenERP transformed how we manage our business processes. The support team has been exceptional.",
      author: "CTO",
      company: "Manufacturing Enterprise",
      location: "Lagos"
    },
    {
      quote: "Their cybersecurity solutions with Defendria gave us peace of mind. We finally have 24/7 protection and real-time threat monitoring.",
      author: "IT Director",
      company: "Financial Services",
      location: "USA"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary mb-4 opacity-50" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
