import johnImage from "@/assets/john.jpg";
import nnennaImage from "@/assets/nnenna.jpg";
import awesomeImage from "@/assets/awesome.jpeg";
import estherImage from "@/assets/esther.jpg";
import ifeanyiImage from "@/assets/ifeanyi.jpg";
import favorImage from "@/assets/favor.jpg";
import okitiImage from "@/assets/okiti.jpg";
import ekeImage from "@/assets/eke.jpg";
import chineduImage from "@/assets/chinedu.jpg";
import ashleyImage from "@/assets/ashley.jpg";
import jimmyImage from "@/assets/jimmy-updated.jpg";
import nsikanImage from "@/assets/nsikan.jpg";
import ivieImage from "@/assets/ivie.jpg";
import aaliyahImage from "@/assets/aaliyah.jpg";
import michaelImage from "@/assets/michael.jpg";
import onyinyechiImage from "@/assets/onyinyechi.jpg";
import frankImage from "@/assets/frank.jpg";
import obinnaImage from "@/assets/obinna.jpg";
import { Card, CardContent } from "./ui/card";

const Leadership = () => {
  return (
    <section id="leadership" className="relative overflow-hidden">
      <div className="py-32 bg-gradient-to-b from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                Leadership
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/90 animate-fade-in">
              Our global team of innovators, strategists, and technologists
              driving digital transformation worldwide.
            </h2>
          </div>
        </div>
      </div>
      <div className="mb-20">
        {/* Board of Directors */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-center mb-8">
            Board of Directors
          </h4>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                  <img
                    src={nnennaImage}
                    alt="Nnenna Nnadili"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-2xl font-bold mb-2">Nnenna Nnadili</h5>
                <p className="text-lg font-bold text-primary mb-3">
                  Chairperson of the Board
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A visionary leader and strategist passionate about innovation,
                  human capital development, and sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                  <img
                    src={johnImage}
                    alt="Dr. John Ibebunjo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-2xl font-bold mb-2">Dr. John Ibebunjo</h5>
                <p className="text-lg font-bold text-primary mb-3">
                  Strategic Planning & Research Consultant
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A renowned strategic planning and research expert with deep
                  experience in enterprise growth, governance, and innovation
                  strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                  <img
                    src={okitiImage}
                    alt="Dr. Okiti Ogho"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-2xl font-bold mb-2">Dr. Okiti Ogho</h5>
                <p className="text-lg font-bold text-primary mb-3">
                  Policy, Ideas & Capital Economic Transformer
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  An economic strategist and policy innovator focused on
                  transforming ideas into capital-efficient realities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Management Team */}
        <div>
          <h4 className="text-2xl font-bold text-center mb-8">
            Management Team
          </h4>

          {/* Executive Leadership */}
          <div className="mb-8">
            <h5 className="text-xl font-semibold mb-4 text-center text-primary">
              Executive Leadership
            </h5>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={chineduImage}
                      alt="Chinedu Emmanuel Oleka"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg">Chinedu Emmanuel Oleka</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Managing Director
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={favorImage}
                      alt="Favor Enoch"
                      className="w-full h-full object-cover object-[50%_10%]"
                    />
                  </div>
                  <p className="font-bold text-lg">Favor Enoch</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Administrator & Finance Officer
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={estherImage}
                      alt="Esther Okpala"
                      className="w-full h-full object-cover object-[50%_30%]"
                    />
                  </div>
                  <p className="font-bold text-lg">Esther Okpala</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Technical Operations Officer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product & Engineering Division */}
          <div className="mb-8">
            <h5 className="text-xl font-semibold mb-4 text-center text-primary">
              Product & Engineering Division
            </h5>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={ekeImage}
                      alt="Inyang Akanimo Sunday"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg">Inyang Akanimo Sunday</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Project & Product Manager
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={ifeanyiImage}
                      alt="Ifeanyi Nneji"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg">Ifeanyi Nneji</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    AI & Full Stack Manager
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={ivieImage}
                      alt="Ivie Valentine"
                      className="w-full h-full object-cover object-[50%_35%]"
                    />
                  </div>
                  <p className="font-bold text-lg">Ivie Valentine</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Backend Engineer
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={ashleyImage}
                      alt="Ashley Agbonkhese"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg">Ashley Agbonkhese</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Frontend Engineer
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={aaliyahImage}
                      alt="Aaliyah Bahru"
                      className="w-full h-full object-cover object-[50%_75%]"
                    />
                  </div>
                  <p className="font-bold text-lg">Aaliyah Bahru</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Frontend Engineer
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={awesomeImage}
                      alt="Awesome Bassey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg">Awesome Bassey</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    DevOps Manager
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Design & Experience Division */}
          <div className="mb-8">
            <h5 className="text-xl font-semibold mb-4 text-center text-primary">
              Design & Experience Division
            </h5>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={jimmyImage}
                      alt="Victor Jimmy"
                      className="w-full h-full object-cover object-[50%_25%]"
                    />
                  </div>
                  <p className="font-bold text-lg">Victor Jimmy</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Product & Brand Design Manager
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={onyinyechiImage}
                      alt="Onyinyechi Sopuruchi-Obiagbaso"
                      className="w-full h-full object-cover object-[50%_15%]"
                    />
                  </div>
                  <p className="font-bold text-lg">
                    Onyinyechi Sopuruchi-Obiagbaso
                  </p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Product & Brand Designer
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={michaelImage}
                      alt="Micheal Obazu"
                      className="w-full h-full object-cover object-[50%_10%]"
                    />
                  </div>
                  <p className="font-bold text-lg">Micheal Obazu</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Product & Brand Designer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business & Growth Division */}
          <div>
            <h5 className="text-xl font-semibold mb-4 text-center text-primary">
              Business & Growth Division
            </h5>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={nsikanImage}
                      alt="Nsikan Ikpe"
                      className="w-full h-full object-cover object-[50%_10%]"
                    />
                  </div>
                  <p className="font-bold text-lg">Nsikan Ikpe</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Social Media & Digital Marketing Manager
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={frankImage}
                      alt="Lee Frank"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg">Lee Frank</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Business Development Manager
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3 mx-auto overflow-hidden">
                    <img
                      src={obinnaImage}
                      alt="Obinna Nzem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-lg">Obinna Nzem</p>
                  <p className="text-base font-semibold text-muted-foreground">
                    Marketing & Sales Manager
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
