import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { products } from "./utils/constants";
import { Link } from "react-router-dom";

const Products = () => {
  const [_, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  return (
    <section id="products" className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                Innovative Products. Intelligent Performance.
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/90 animate-fade-in">
              Infinite Possibilities.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
              Discover how Servercrib Technology Solutions is redefining
              enterprise performance with a new generation of AI-powered,
              cloud-secure, and data-intelligent platforms — designed to help
              businesses work smarter, move faster, and stay protected.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
              <Link to={"/contact"}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
                >
                  💬 Request a Demo
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground italic animate-fade-in">
              ✨ One Ecosystem. Endless Innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div id="products-grid" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Flagship Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proprietary software products and SaaS platforms built to empower
              digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card
                  key={index}
                  className="bg-card glow-border hover:scale-[1.02] transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {product.title}
                    </CardTitle>
                    {product.tagline && (
                      <p className="text-sm text-primary font-semibold italic">
                        {product.tagline}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Learn more →
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
                        <DialogHeader>
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <DialogTitle className="text-2xl">
                            {product.title}
                          </DialogTitle>
                          <DialogDescription className="text-base leading-relaxed pt-4">
                            {product.details}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
