import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="ServerCrib Logo" className="h-10 w-10 object-contain rounded" />
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              ServerCrib
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => scrollTo('products')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollTo('solutions')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollTo('services')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('clients')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollTo('vendors')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Vendors
            </button>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/70 hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-sm font-medium h-auto p-0">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/50">
                    <ul className="w-48 p-2">
                      <li>
                        <button
                          onClick={() => scrollTo('about')}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                        >
                          Company
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollTo('about')}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                        >
                          Leadership
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollTo('about')}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                        >
                          Careers
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => scrollTo('about')}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                        >
                          Newsroom
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button 
              onClick={() => scrollTo('contact')}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Contact Us
            </button>
            <Button 
              onClick={() => scrollTo('contact')} 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-black font-semibold"
            >
              Get a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted text-primary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border/30">
            <button
              onClick={() => scrollTo('products')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollTo('solutions')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('clients')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors"
            >
              Clients
            </button>
            <button
              onClick={() => scrollTo('vendors')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors"
            >
              Vendors
            </button>
            
            <div className="space-y-1">
              <div className="px-4 py-2 text-foreground/70 font-medium text-sm">About Us</div>
              <button
                onClick={() => scrollTo('about')}
                className="block w-full text-left px-8 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Company
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="block w-full text-left px-8 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Leadership
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="block w-full text-left px-8 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Careers
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="block w-full text-left px-8 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                Newsroom
              </button>
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors"
            >
              Contact Us
            </button>
            <Button 
              onClick={() => scrollTo('contact')}
              className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
            >
              Get a Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
