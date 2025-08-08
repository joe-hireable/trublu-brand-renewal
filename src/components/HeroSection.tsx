import { ArrowRight, Shield, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 brand-gradient opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10 max-w-[80%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="hero-text">
                Mortgage advice with a{' '}
                <span className="text-gradient">modern approach</span>
              </h1>
              <p className="section-text max-w-xl">
                We provide tailored mortgage solutions with access to over 90 lenders. 
                Our modern approach ensures you get the best deal for your circumstances, 
                with expert guidance every step of the way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="brand-gradient text-white shadow-brand group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">90+ Lenders</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">FCA Regulated</span>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative animate-scale-in">
            <Card className="p-8 shadow-brand bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Guidance</h3>
                    <p className="text-sm text-muted-foreground">Professional mortgage advice</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-brand-gradient-subtle rounded-lg">
                    <div className="text-2xl font-bold text-gradient">90+</div>
                    <div className="text-sm text-muted-foreground">Lenders</div>
                  </div>
                  <div className="text-center p-4 bg-brand-gradient-subtle rounded-lg">
                    <div className="text-2xl font-bold text-gradient">5★</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mortgage Approval</span>
                    <span className="text-sm font-medium text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="brand-gradient h-2 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;