import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">trublu</span>
                <span className="text-sm text-primary-foreground/80 -mt-1">financial</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-xs">
              Modern mortgage advice with access to over 90 lenders. 
              FCA regulated and trusted by hundreds of customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#guides" className="text-primary-foreground/80 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#reviews" className="text-primary-foreground/80 hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Mortgages</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Remortgages</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Protection</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:01325794000" className="text-primary-foreground/80 hover:text-white transition-colors">
                  01325 794 000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@tru-blu.co.uk" className="text-primary-foreground/80 hover:text-white transition-colors">
                  hello@tru-blu.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © 2024 Trublu Financial. All rights reserved. | 
            Trublu Financial is authorised and regulated by the Financial Conduct Authority.
          </p>
          <p className="mt-2">
            Your home may be repossessed if you do not keep up repayments on your mortgage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;