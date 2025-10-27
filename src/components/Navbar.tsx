import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { aboutMenu, navMenu } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="ServerCrib Logo"
                className="h-10 w-10 object-contain rounded"
              />
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                ServerCrib
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navMenu.map((item) => (
              <Link to={`/${item}`}>
                <button className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium capitalize">
                  {item}
                </button>
              </Link>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/70 hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-sm font-medium h-auto p-0">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border/50">
                    <ul className="w-48 p-2">
                      {aboutMenu.map((item) => (
                        <li>
                          <Link to={`/${item}`}>
                            <button className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors capitalize">
                              {item}
                            </button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to={"/contact"}>
              <button className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
                Contact Us
              </button>
            </Link>
            <Link to={"/contact"}>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-black font-semibold"
              >
                Get a Demo
              </Button>
            </Link>
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
            {navMenu.map((item) => (
              <Link to={`/${item}`}>
                <button className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors capitalize">
                  {item}
                </button>
              </Link>
            ))}

            <div className="space-y-1">
              <div className="px-4 py-2 text-foreground/70 font-medium text-sm">
                About Us
              </div>
              {aboutMenu.map((item) => (
                <Link to={`/${item}`}>
                  <button className="block w-full text-left px-8 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors text-sm capitalize">
                    {item}
                  </button>
                </Link>
              ))}
            </div>
            <Link to={"/contact"}>
              <button className="block w-full text-left px-4 py-2 hover:bg-muted rounded-md text-foreground/70 hover:text-primary transition-colors">
                Contact Us
              </button>
            </Link>
            <Link to={"/contact"}>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
              >
                Get a Demo
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
