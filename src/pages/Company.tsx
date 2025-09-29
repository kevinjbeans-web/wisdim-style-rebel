import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-gothic">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-gothic text-6xl md:text-8xl font-bold text-foreground mb-6">
            THE COMPANY
          </h1>
          <p className="font-punk text-xl md:text-2xl text-primary max-w-4xl mx-auto mb-8">
            UNLEASH YOUR DARK AESTHETIC WITH WISDIM
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mb-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-gothic text-4xl font-bold text-foreground mb-8">
                Transform Your Existing Wardrobe
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At WISDIM, we don't believe in starting from scratch. We believe in transformation. 
                  Our gothic punk approach takes the clothes you already own and reimagines them 
                  into stunning, cohesive outfits that express your true aesthetic.
                </p>
                <p>
                  Whether you're drawn to the dark romanticism of gothic fashion or the rebellious 
                  edge of punk culture, we help you discover the hidden potential in your current 
                  wardrobe. Our expert stylists understand that style isn't about buying more – 
                  it's about seeing more.
                </p>
                <p className="font-punk text-primary">
                  YOUR STYLE. YOUR CLOTHES. OUR VISION.
                </p>
              </div>
              <Link to="/styles">
                <Button className="mt-8 bg-gradient-neon text-background font-punk font-bold px-8 py-3 hover:shadow-neon transition-all">
                  DISCOVER YOUR STYLE
                </Button>
              </Link>
            </div>

            <Card className="p-8 bg-card border-border shadow-gothic">
              <h3 className="font-gothic text-2xl font-bold text-primary mb-6">
                How WISDIM Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-neon rounded flex-shrink-0 flex items-center justify-center text-background font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-punk font-bold text-foreground">STYLE ASSESSMENT</h4>
                    <p className="text-muted-foreground">Choose your aesthetic preference from our curated style categories</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-neon rounded flex-shrink-0 flex items-center justify-center text-background font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-punk font-bold text-foreground">WARDROBE ANALYSIS</h4>
                    <p className="text-muted-foreground">Our AI analyzes your existing pieces for hidden potential</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-neon rounded flex-shrink-0 flex items-center justify-center text-background font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-punk font-bold text-foreground">OUTFIT CREATION</h4>
                    <p className="text-muted-foreground">Receive personalized outfit combinations that match your chosen aesthetic</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gothic">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-gothic text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Style?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the gothic punk revolution and discover the dark potential hiding in your closet
          </p>
          <Link to="/styles">
            <Button className="bg-gradient-electric text-background font-punk font-bold px-12 py-4 text-lg hover:shadow-electric transition-all">
              START YOUR TRANSFORMATION
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Company;