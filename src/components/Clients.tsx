import { Building2 } from "lucide-react";
import moneeLogo from "@/assets/clients/monee-logo.png";
import osherAurLogo from "@/assets/clients/osher-aur-logo.png";
import realstateLogo from "@/assets/clients/realstate-logo.png";
import dugoCapitalLogo from "@/assets/clients/dugo-capital-logo.png";
import zahraLogo from "@/assets/clients/zahra-logo.png";
import quintessanceLogo from "@/assets/clients/quintessance-logo.png";
import globalOrganicsLogo from "@/assets/clients/global-organics-logo.png";
import euphoriaLogo from "@/assets/clients/euphoria-logo.png";
import zoeLogo from "@/assets/clients/zoe-logo.jpg";
import trgdevLogo from "@/assets/clients/trgdev-logo.png";
import integratedVenturesLogo from "@/assets/clients/integrated-ventures-logo.png";
import dilonLogo from "@/assets/clients/dilon-logo.png";
import thinkBusinessLogo from "@/assets/clients/think-business-logo.png";
import goldlunLogo from "@/assets/clients/goldlun-logo.png";
import ttcLogo from "@/assets/clients/ttc-logo.png";

const clients = [
  { name: "Monée by Citygate", industry: "Financial Services", logo: moneeLogo },
  { name: "Global Organics Limited", industry: "Pharmaceutical", logo: globalOrganicsLogo },
  { name: "Osher Aur", industry: "Real Estate", logo: osherAurLogo },
  { name: "Realstate", industry: "Real Estate", logo: realstateLogo },
  { name: "Dugo Capital Investment Limited", industry: "Investment Management", logo: dugoCapitalLogo },
  { name: "Zahra Beautiful You", industry: "Beauty & Cosmetics", logo: zahraLogo },
  { name: "Quintessance", industry: "Business Services", logo: quintessanceLogo },
  { name: "Euphoria", industry: "Manufacturing", logo: euphoriaLogo },
  { name: "Zoe", industry: "Food Market", logo: zoeLogo },
  { name: "TRG&DEV International Associates", industry: "Consulting", logo: trgdevLogo },
  { name: "Integrated Ventures", industry: "Home & Office Decor", logo: integratedVenturesLogo },
  { name: "Dilon", industry: "Software", logo: dilonLogo },
  { name: "Think Business", industry: "Data Market and Strategy", logo: thinkBusinessLogo },
  { name: "Goldlun Marketing Ltd", industry: "Oil and Gas", logo: goldlunLogo },
  { name: "The Transforming Church", industry: "Religion", logo: ttcLogo },
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
              <div className="w-24 h-24 flex items-center justify-center mb-4">
                {client.logo ? (
                  <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-contain" />
                ) : (
                  <Building2 className="h-16 w-16 text-primary" />
                )}
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
