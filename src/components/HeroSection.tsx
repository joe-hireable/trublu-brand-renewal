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

          {/* Hero image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/0ae6e3b5-402a-42c0-93a8-0cc8ae3ce0d8.png"
                alt="Person reviewing mortgage plans in front of house with solar panels"
                className="w-full h-auto max-w-lg mx-auto"
              />
              {/* Subtle gradient overlay for brand integration */}
              <div className="absolute inset-0 brand-gradient-subtle opacity-10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;