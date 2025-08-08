import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 brand-gradient opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to get <span className="text-gradient">started?</span>
          </h2>
          <p className="section-text max-w-2xl mx-auto">
            Get in touch with our expert team today. We're here to help you find the 
            perfect mortgage solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 shadow-soft border-primary/10">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Speak to our expert advisors</p>
                    <a 
                      href="tel:01325794000" 
                      className="text-primary font-semibold hover:underline"
                    >
                      01325 794 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-2">Get a response within 24 hours</p>
                    <a 
                      href="mailto:hello@tru-blu.co.uk" 
                      className="text-accent font-semibold hover:underline"
                    >
                      hello@tru-blu.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="space-y-8 animate-scale-in">
            <Card className="p-8 shadow-brand bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-0 space-y-6 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Book Your Free Consultation</h3>
                  <p className="text-muted-foreground">
                    No obligation, no fees. Just expert advice tailored to your needs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-brand-gradient-subtle rounded-lg">
                    <div className="font-semibold text-gradient">Free</div>
                    <div className="text-muted-foreground">Initial Consultation</div>
                  </div>
                  <div className="p-3 bg-brand-gradient-subtle rounded-lg">
                    <div className="font-semibold text-gradient">Expert</div>
                    <div className="text-muted-foreground">Professional Advice</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full brand-gradient text-white shadow-brand">
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-primary/20">
                    Call Back Request
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  Your home may be repossessed if you do not keep up repayments on your mortgage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;