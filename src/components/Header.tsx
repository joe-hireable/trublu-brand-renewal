import { Phone, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedHouseLogo from './AnimatedHouseLogo';

const Header = () => {
  return (
    <header className="relative z-50">
      {/* Main navigation */}
      <nav className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4 max-w-[80%]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <AnimatedHouseLogo size={45} className="animate-float" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">trublu</span>
                <span className="text-sm text-muted-foreground -mt-1">financial</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#guides" className="text-muted-foreground hover:text-primary transition-colors">Guides</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm">
                Call us
              </Button>
              <Button size="sm" className="brand-gradient text-white">
                Book now
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;