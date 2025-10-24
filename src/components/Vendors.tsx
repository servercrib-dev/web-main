import { Handshake } from "lucide-react";

const vendors = [
  { name: "OPSWAT", category: "Security & File Analysis" },
  { name: "Veeam", category: "Backup & Data Protection" },
  { name: "StarLink", category: "Networking (Infinigate Group)" },
  { name: "BeyondTrust", category: "Privileged Access Management" },
  { name: "Guardz", category: "Cybersecurity Platform" },
  { name: "Odoo", category: "ERP Solutions" },
  { name: "Seqrite", category: "Enterprise Security" },
];

const Vendors = () => {
  return (
    <section id="vendors" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vendors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partnering with industry leaders to deliver world-class solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-card/50 glow-border hover:bg-card hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center">{vendor.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{vendor.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vendors;
