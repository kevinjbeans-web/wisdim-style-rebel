import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Smartphone, Zap, Eye } from "lucide-react";

const AppPage = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "PHOTO RECOGNITION",
      description: "Snap photos of your clothes and let our AI instantly identify style, color, and fabric details."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "STYLE MATCHING",
      description: "Our advanced algorithms find clothing that perfectly complements your existing pieces."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "INSTANT RESULTS",
      description: "Get outfit suggestions and shopping recommendations in seconds, not hours."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "MOBILE FIRST",
      description: "Built for your lifestyle - access your style assistant anywhere, anytime."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-gothic">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-gothic text-6xl md:text-8xl font-bold text-foreground mb-6">
            COMING SOON
          </h1>
          <p className="font-punk text-xl md:text-2xl text-primary max-w-4xl mx-auto mb-8">
            THE WISDIM APP - REVOLUTIONIZING PERSONAL STYLE
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
          
          <div className="bg-card/30 backdrop-blur border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're crafting the ultimate style companion app that will transform how you interact with your wardrobe. 
              Using cutting-edge AI and computer vision, the WISDIM app will soon be your personal gothic punk style consultant.
            </p>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-gothic text-4xl font-bold text-foreground mb-6">
              Revolutionary Features Coming Your Way
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              The WISDIM app will take photos of your clothes and use advanced AI to find similar pieces, 
              suggest outfits, and expand your style horizons while staying true to your chosen aesthetic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border shadow-gothic hover:shadow-neon transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-neon rounded-full text-background mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-punk font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-gothic">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-gothic text-4xl font-bold text-foreground mb-6">
              How The App Will Work
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center text-background font-bold text-xl mx-auto mb-6">
                  1
                </div>
                <h3 className="font-punk font-bold text-primary mb-4">SNAP PHOTOS</h3>
                <p className="text-muted-foreground">
                  Take photos of your clothes using your phone camera. Our AI will analyze fabric, color, style, and fit.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center text-background font-bold text-xl mx-auto mb-6">
                  2
                </div>
                <h3 className="font-punk font-bold text-primary mb-4">AI ANALYSIS</h3>
                <p className="text-muted-foreground">
                  Advanced algorithms identify your pieces and find similar items that match your chosen aesthetic style.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center text-background font-bold text-xl mx-auto mb-6">
                  3
                </div>
                <h3 className="font-punk font-bold text-primary mb-4">GET SUGGESTIONS</h3>
                <p className="text-muted-foreground">
                  Receive outfit combinations and shopping recommendations tailored to your gothic punk style preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-gothic text-3xl font-bold text-foreground mb-6">
              Be First to Know
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our exclusive list to get early access to the WISDIM app and be among the first to revolutionize your style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-electric text-background font-punk font-bold px-6 py-3 hover:shadow-electric transition-all">
                NOTIFY ME
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppPage;