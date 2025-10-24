import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, TrendingUp, Cloud, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Enterprise Grade",
    description: "Solutions built for scale and reliability",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Cybersecurity embedded in everything",
  },
  {
    icon: TrendingUp,
    title: "Data Driven",
    description: "Analytics and insights for decisions",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Modern infrastructure for growth",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center bg-card glow-border hover:scale-105 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
