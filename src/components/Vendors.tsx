import opswatLogo from "@/assets/vendors/opswat-logo.png";
import veeamLogo from "@/assets/vendors/veeam-logo.png";
import starlinkLogo from "@/assets/vendors/starlink-logo.png";
import beyondtrustLogo from "@/assets/vendors/beyondtrust-logo.png";
import guardzLogo from "@/assets/vendors/guardz-logo.png";
import odooLogo from "@/assets/vendors/odoo-logo.png";
import seqriteLogo from "@/assets/vendors/seqrite-logo.png";

const vendors = [
  { name: "OPSWAT", category: "Security & File Analysis", logo: opswatLogo, website: "https://www.opswat.com" },
  { name: "Veeam", category: "Backup & Data Protection", logo: veeamLogo, website: "https://www.veeam.com" },
  { name: "StarLink", category: "Networking (Infinigate Group)", logo: starlinkLogo, website: "https://www.starlinkme.net" },
  { name: "BeyondTrust", category: "Privileged Access Management", logo: beyondtrustLogo, website: "https://www.beyondtrust.com" },
  { name: "Guardz", category: "Cybersecurity Platform", logo: guardzLogo, website: "https://guardz.com" },
  { name: "Odoo", category: "ERP Solutions", logo: odooLogo, website: "https://www.odoo.com" },
  { name: "Seqrite", category: "Enterprise Security", logo: seqriteLogo, website: "https://www.seqrite.com" },
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
            <a
              key={index}
              href={vendor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-card/50 glow-border hover:bg-card hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-32 h-32 flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300">
                <img 
                  src={vendor.logo} 
                  alt={`${vendor.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center">{vendor.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{vendor.category}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vendors;
