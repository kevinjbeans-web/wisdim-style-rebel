import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-gothic">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-gothic text-6xl md:text-8xl font-bold text-foreground mb-6">
            CONTACT US
          </h1>
          <p className="font-punk text-xl md:text-2xl text-primary max-w-4xl mx-auto mb-8">
            READY TO TRANSFORM YOUR STYLE? LET'S TALK.
          </p>
          <div className="w-24 h-1 bg-gradient-neon mx-auto"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-gothic text-4xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're ready to revolutionize your wardrobe or have questions about our gothic punk 
                approach to style, we're here to help. Reach out to our team and let's start your transformation.
              </p>

              <div className="space-y-6">
                <Card className="bg-card border-border shadow-gothic">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center text-background">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-punk font-bold text-primary mb-1">CEO</h3>
                        <a 
                          href="mailto:kevin.jbeans@gmail.com"
                          className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                        >
                          kevin.jbeans@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border shadow-gothic">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center text-background">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-punk font-bold text-primary mb-1">RESPONSE TIME</h3>
                        <p className="text-foreground text-lg">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border shadow-gothic">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center text-background">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-punk font-bold text-primary mb-1">BUSINESS HOURS</h3>
                        <p className="text-foreground text-lg">Mon-Fri: 9AM-6PM EST</p>
                        <p className="text-muted-foreground">Weekend consultations available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border shadow-gothic">
                <CardContent className="p-8">
                  <h3 className="font-gothic text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h3>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block font-punk font-bold text-primary mb-2">
                        YOUR NAME
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block font-punk font-bold text-primary mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input 
                        type="email"
                        className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block font-punk font-bold text-primary mb-2">
                        STYLE PREFERENCE
                      </label>
                      <select className="w-full px-4 py-3 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                        <option value="">Select your style</option>
                        <option value="goth">Gothic</option>
                        <option value="punk">Punk</option>
                        <option value="old-money">Old Money</option>
                        <option value="streetwear">Streetwear</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-punk font-bold text-primary mb-2">
                        MESSAGE
                      </label>
                      <textarea 
                        rows={5}
                        className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us about your style goals, questions, or anything else you'd like to discuss..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-gradient-neon text-background font-punk font-bold py-4 text-lg hover:shadow-neon transition-all">
                      SEND MESSAGE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-gothic">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-gothic text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Style Revolution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait to unlock the dark potential in your wardrobe. Contact us today and begin your gothic punk transformation.
          </p>
          <Button className="bg-gradient-electric text-background font-punk font-bold px-12 py-4 text-lg hover:shadow-electric transition-all">
            START CONSULTATION
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;