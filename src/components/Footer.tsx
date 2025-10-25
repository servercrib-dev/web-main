import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { footerMenu } from "./utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Servercrib Technology Solutions
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A U.S. and African-based global IT firm empowering the future
              through secure, scalable, and intelligent innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerMenu.map((item) => (
                <Link to={`${item}`}>
                  <li>
                    <button className="text-muted-foreground hover:text-primary transition-colors capitalize my-1">
                      {item}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact Info - US Office */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">US Office</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Maryland, United States</span>
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
            <h4 className="font-semibold mb-4 text-foreground">
              Nigeria Office
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
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
            <h4 className="font-semibold mb-4 text-foreground">
              Business Hours
            </h4>
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
            &copy; {new Date().getFullYear()} Servercrib Technology Solutions.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
