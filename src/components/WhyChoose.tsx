import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Integrated Security in Every Service",
    description: "Cybersecurity is embedded across all our solutions and services",
  },
  {
    title: "Proven Impact Metrics",
    description: "Measurable gains in uptime, efficiency, and compliance",
  },
  {
    title: "Global Reach, Local Insight",
    description: "Serving enterprises worldwide with local expertise",
  },
  {
    title: "Certified Professionals",
    description: "Our team holds industry-leading certifications and expertise",
  },
  {
    title: "Client-Centric Flexibility",
    description: "Solutions tailored to your unique needs and goals",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-background border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose ServerCrib</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-lg bg-card/50 glow-border hover:bg-card transition-all duration-300">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
