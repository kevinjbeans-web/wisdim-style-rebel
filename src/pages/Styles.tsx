import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gothStyle from "@/assets/goth-style.jpg";
import punkStyle from "@/assets/punk-style.jpg";
import oldMoneyStyle from "@/assets/old-money-style.jpg";
import streetwearStyle from "@/assets/streetwear-style.jpg";

const Styles = () => {
  const styles = [
    {
      id: "goth",
      name: "GOTH",
      image: gothStyle,
      description: "Dark romanticism meets Victorian elegance. Embrace the shadows with dramatic silhouettes, rich fabrics, and mysterious allure.",
      traits: ["Dark Colors", "Dramatic Makeup", "Victorian Elements", "Silver Jewelry", "Flowing Fabrics"]
    },
    {
      id: "punk",
      name: "PUNK",
      image: punkStyle,
      description: "Rebellious energy channeled through fashion. Express your defiance with studded leather, bold statements, and unapologetic attitude.",
      traits: ["Leather & Studs", "Band Merch", "Ripped Denim", "Combat Boots", "Bold Hair Colors"]
    },
    {
      id: "old-money",
      name: "OLD MONEY",
      image: oldMoneyStyle,
      description: "Timeless sophistication with understated luxury. Classic pieces that whisper wealth and refinement across generations.",
      traits: ["Neutral Tones", "Quality Fabrics", "Classic Cuts", "Minimal Jewelry", "Refined Elegance"]
    },
    {
      id: "streetwear",
      name: "STREETWEAR",
      image: streetwearStyle,
      description: "Urban culture meets comfort. Contemporary style rooted in youth culture, music, and the streets that never sleep.",
      traits: ["Oversized Fits", "Sneaker Culture", "Brand Graphics", "Casual Comfort", "Urban Edge"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-gothic">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-gothic text-5xl md:text-7xl font-bold text-foreground mb-6">
            PICK YOUR STYLE
          </h1>
          <p className="font-punk text-lg md:text-xl text-primary max-w-3xl mx-auto">
            Choose the aesthetic that speaks to your soul. Each style represents a different way to express your unique identity.
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto mt-8"></div>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {styles.map((style) => (
              <Card key={style.id} className="group cursor-pointer bg-card border-border shadow-gothic hover:shadow-neon transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={style.image} 
                    alt={`${style.name} style showcase`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-gothic text-3xl font-bold text-foreground mb-2">
                      {style.name}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {style.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-punk font-bold text-primary mb-3">KEY ELEMENTS:</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.traits.map((trait) => (
                        <span 
                          key={trait}
                          className="px-3 py-1 bg-muted border border-border rounded text-sm font-punk text-muted-foreground"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-neon text-background font-punk font-bold hover:shadow-neon transition-all">
                    SELECT {style.name} STYLE
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-gothic">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-gothic text-3xl font-bold text-foreground mb-4">
            Can't Decide? We Can Help.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our style consultants can analyze your personality and preferences to recommend the perfect aesthetic for you.
          </p>
          <Button className="bg-gradient-electric text-background font-punk font-bold px-8 py-3 hover:shadow-electric transition-all">
            GET PERSONAL CONSULTATION
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Styles;