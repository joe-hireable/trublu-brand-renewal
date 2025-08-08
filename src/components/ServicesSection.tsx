import { Home, Shield, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Mortgages",
      description: "Access to over 90 lenders with competitive rates for first-time buyers, remortgages, and buy-to-let properties.",
      features: ["First Time Buyers", "Remortgages", "Buy-to-Let", "Commercial"],
      color: "hsl(211 100% 35%)"
    },
    {
      icon: Shield,
      title: "Protection",
      description: "Comprehensive life insurance and protection policies to safeguard your family's financial future.",
      features: ["Life Insurance", "Critical Illness", "Income Protection", "Buildings & Contents"],
      color: "hsl(194 100% 39%)"
    },
    {
      icon: FileText,
      title: "Insurance",
      description: "Wide range of insurance products tailored to protect your home, family, and financial commitments.",
      features: ["Home Insurance", "Travel Insurance", "Motor Insurance", "Commercial Insurance"],
      color: "hsl(174 100% 41%)"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            What can we <span className="text-gradient">offer you?</span>
          </h2>
          <p className="section-text max-w-3xl mx-auto">
            We've got a service that's tailored just for you. We'll listen to what you need, 
            take into account your preferences, and help you navigate the process with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[80%] mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-brand transition-all duration-500 hover:-translate-y-2 border-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="space-y-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}25)`,
                    border: `1px solid ${service.color}30`
                  }}
                >
                  <service.icon 
                    className="h-8 w-8 transition-colors"
                    style={{ color: service.color }}
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="secondary-button w-full justify-between group"
                >
                  <span className="text-gradient">Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1 text-muted-foreground group-hover:text-gradient" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reminder section */}
        <div className="mt-16 p-8 rounded-2xl brand-gradient-subtle border border-primary/20 animate-fade-in-up max-w-[80%] mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Never Miss a Rate Change</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Once your introductory rate is within 6 months of the end, we'll send you an email 
              to remind you of your mortgage end date. That way, you can avoid those high variable rates.
            </p>
            <Button className="brand-gradient text-white">
              Get Reminders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;