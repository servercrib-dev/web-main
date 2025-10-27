import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Briefcase,
  Headphones,
  Newspaper,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you for reaching out!",
        description: "Our team will get back to you shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToSection = (section: string, offset: number) => {
    const element = document.getElementById(section);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                Let's Build the Future — Together.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in">
              Whether you're ready to start your digital transformation, request
              a demo, or explore partnership opportunities — our experts at
              Servercrib Technology Solutions are here to help.
              <br />
              <span className="font-semibold text-foreground">
                We respond promptly, professionally, and personally.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection("call-section", 100)}
              >
                📞 Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white text-lg px-8 py-6 font-semibold"
                onClick={() => scrollToSection("contact-form", 100)}
              >
                📩 Send Us a Message
              </Button>
            </div>

            <p className="text-sm text-muted-foreground italic animate-fade-in">
              ✨ Connect with Confidence. Collaborate with Innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Let's Talk Business */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h2>
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-xl text-muted-foreground mb-4">
                  🖥️{" "}
                  <span className="font-semibold text-foreground">
                    Let's Talk Business
                  </span>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work with clients across the U.S. and around the world —
                  providing intelligent, secure, and scalable IT solutions that
                  empower growth.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Use the form below or reach out directly to our departments:
                </p>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    General Enquiries
                  </h3>
                  <a
                    href="mailto:info@servercribtechnologysolutions.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap"
                  >
                    info@servercribtechnologysolutions.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto">
                    <Briefcase className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Sales & Partnerships
                  </h3>
                  <a
                    href="mailto:sales@servercribtechnologysolutions.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap"
                  >
                    sales@servercribtechnologysolutions.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto">
                    <Headphones className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Technical Support
                  </h3>
                  <a
                    href="mailto:support@servercribtechnologysolutions.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap"
                  >
                    support@servercribtechnologysolutions.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto">
                    <Newspaper className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Press & Media</h3>
                  <a
                    href="mailto:press@servercribtechnologysolutions.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap"
                  >
                    press@servercribtechnologysolutions.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Careers</h3>
                  <a
                    href="mailto:careers@servercribtechnologysolutions.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap"
                  >
                    careers@servercribtechnologysolutions.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Information & Business Hours */}
          <div className="mb-16" id="call-section">
            <h3 className="text-3xl font-bold text-center mb-8">
              Our Global Offices
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* US Office */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-center mb-6">
                    🇺🇸 United States Office
                  </h4>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-foreground text-center">
                      Servercrib Technology Solutions, LLC
                    </p>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          7375 Executive Place, Suite 400
                          <br />
                          Lanham, MD 20706, United States
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>+1 (240) 917-8088</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <a
                          href="mailto:info@servercribtechnologysolutions.com"
                          className="hover:text-primary transition-colors break-all"
                        >
                          info@servercribtechnologysolutions.com
                        </a>
                      </p>
                      <p className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>www.servercribtechnologysolutions.com</span>
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border/50">
                      <div className="flex items-start gap-2 mb-4">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">
                            Business Hours (EST):
                          </p>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-medium">
                                Monday – Friday:
                              </span>{" "}
                              9:00 AM – 5:00 PM
                            </p>
                            <p>
                              <span className="font-medium">Saturday:</span>{" "}
                              Closed
                            </p>
                            <p>
                              <span className="font-medium">Sunday:</span>{" "}
                              Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nigeria Office */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-center mb-6">
                    🇳🇬 Nigeria Office
                  </h4>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-foreground text-center">
                      Servercrib Technology Solutions
                    </p>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          No. 16 Amodu Ojikutu Street
                          <br />
                          Victoria Island, Lagos, Nigeria
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>+234-807-488-7702</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <a
                          href="mailto:info@servercribtechnologysolutions.com"
                          className="hover:text-primary transition-colors break-all"
                        >
                          info@servercribtechnologysolutions.com
                        </a>
                      </p>
                      <p className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>www.servercribtechnologysolutions.com</span>
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border/50">
                      <div className="flex items-start gap-2 mb-4">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">
                            Business Hours (WAT):
                          </p>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-medium">
                                Monday – Friday:
                              </span>{" "}
                              9:00 AM – 5:00 PM
                            </p>
                            <p>
                              <span className="font-medium">Saturday:</span>{" "}
                              Closed
                            </p>
                            <p>
                              <span className="font-medium">Sunday:</span>{" "}
                              Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Partner with Servercrib */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner with Servercrib
              </h3>
              <p className="text-xl text-primary font-semibold">
                Trusted Expertise. Global Reach. Proven Impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        End-to-End Digital Transformation
                      </h4>
                      <p className="text-muted-foreground">
                        From ERP/CRM implementation to cybersecurity, cloud, and
                        AI.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Certified Specialists
                      </h4>
                      <p className="text-muted-foreground">
                        In Odoo, Oracle Fusion, Microsoft Dynamics, Salesforce,
                        and HubSpot.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Custom Solutions
                      </h4>
                      <p className="text-muted-foreground">
                        Designed for your industry, scale, and goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Dedicated Support
                      </h4>
                      <p className="text-muted-foreground">
                        Real people, real help, 24/7.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-xl text-foreground italic font-medium max-w-2xl mx-auto">
              "We don't just provide technology — we deliver transformation."
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-16" id="contact-form">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">
                    We'd love to hear from you!
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form and our team will respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your company"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">How can we help? *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, inquiryType: value })
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-border z-50">
                        <SelectItem value="erp">ERP Implementation</SelectItem>
                        <SelectItem value="cybersecurity">
                          Cybersecurity
                        </SelectItem>
                        <SelectItem value="cloud">Cloud</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      required
                      className="min-h-[150px] bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Grid (existing) */}
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Ways to Reach Us
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 glow-border hover:bg-card transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 flex-shrink-0">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Email</h3>
              <a
                href="mailto:info@servercribtechnologysolutions.com"
                className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap"
              >
                info@servercribtechnologysolutions.com
              </a>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 glow-border hover:bg-card transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 flex-shrink-0">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Phone</h3>
              <div className="space-y-1 text-muted-foreground text-sm text-center">
                <p>US: +1 (240) 917-8088</p>
                <p>Africa: +234 (812) 549 0938</p>
                <p className="text-xs">WhatsApp: +234 (807) 4887 702</p>
              </div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 glow-border hover:bg-card transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 flex-shrink-0">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Website</h3>
              <a
                href="https://www.servercribtechnologysolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-xs whitespace-nowrap"
              >
                www.servercribtechnologysolutions.com
              </a>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 glow-border hover:bg-card transition-all duration-300 h-full">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 flex-shrink-0">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Locations</h3>
              <div className="space-y-2 text-muted-foreground text-center text-xs leading-relaxed">
                <div>
                  <p className="font-medium text-sm">USA</p>
                  <p>7375 Executive Place Suite 400</p>
                  <p>Lanham, MD 20706</p>
                </div>
                <div className="pt-2">
                  <p className="font-medium text-sm">Nigeria</p>
                  <p>No 16 Amodu Ojikutu Street</p>
                  <p>Victoria Island, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
