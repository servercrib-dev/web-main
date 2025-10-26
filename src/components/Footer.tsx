import { Mail, MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Servercrib Technology Solutions</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A U.S. and African-based global IT firm empowering the future through secure, scalable, and intelligent innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'auto' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'auto' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'auto' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'auto' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <a 
                  href="mailto:careers@servercribtechnologysolutions.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info - US Office */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">US Office</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>7375 Executive Place, Suite 400<br />Lanham, MD 20706, United States</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>+1 (240) 917-8088</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@servercribtechnologysolutions.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@servercribtechnologysolutions.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Globe className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.servercribtechnologysolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-all"
                >
                  www.servercribtechnologysolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - Nigeria Office */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Nigeria Office</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>No. 16 Amodu Ojikutu Street<br />Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>+234-807-488-7702</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@servercribtechnologysolutions.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@servercribtechnologysolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Business Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday – Friday: 9:00 AM – 5:00 PM (EST)</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Servercrib Technology Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
