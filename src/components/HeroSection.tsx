import { ArrowRight, Shield, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 brand-gradient opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-[80%]">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-stretch">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="hero-text">
                Mortgage protection,{' '}
                <span className="text-gradient">without the stress.</span>
              </h1>
              <p className="section-text max-w-xl">
                We provide tailored mortgage solutions with access to over 90 lenders. 
                Our modern approach ensures you get the best deal for your circumstances, 
                with expert guidance every step of the way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="primary-button group">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="secondary-button">
                <span className="text-gradient">Learn more</span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gradient fill-current" />
                <span className="text-sm font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gradient" />
                <span className="text-sm font-medium">90+ Lenders</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gradient" />
                <span className="text-sm font-medium">FCA Regulated</span>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative animate-scale-in h-full flex">
            <Card className="h-full w-full p-10 shadow-brand bg-gradient-to-br from-card via-card/80 to-card/60 backdrop-blur-sm border-primary/20 flex flex-col relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-4 -translate-x-4" />
              
              <div className="space-y-8 flex-1 flex flex-col justify-between relative z-10">
                {/* Header section */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Expert Guidance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Professional mortgage advice tailored to your needs</p>
                  </div>
                </div>
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="text-center p-6 bg-brand-gradient-subtle rounded-xl border border-primary/5 hover:border-primary/10 transition-colors">
                    <div className="text-3xl font-bold text-gradient mb-1">90+</div>
                    <div className="text-sm text-muted-foreground font-medium">Lenders</div>
                  </div>
                  <div className="text-center p-6 bg-brand-gradient-subtle rounded-xl border border-primary/5 hover:border-primary/10 transition-colors">
                    <div className="text-3xl font-bold text-gradient mb-1">5★</div>
                    <div className="text-sm text-muted-foreground font-medium">Rating</div>
                  </div>
                </div>

                {/* Progress section */}
                <div className="space-y-4 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Mortgage Approval Rate</span>
                    <span className="text-lg font-bold text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                    <div className="brand-gradient h-3 rounded-full transition-all duration-700 ease-out" style={{ width: '95%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground">Based on successful applications in 2024</p>
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