import { Building2 } from "lucide-react";

const clients = [
  { name: "Monée by Citygate", industry: "Financial Services" },
  { name: "Quicklender", industry: "Fintech" },
  { name: "Global Organics Limited", industry: "Agriculture" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Protecting Customers Around the Globe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            is Our Passion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-lg bg-card glow-border hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{client.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
