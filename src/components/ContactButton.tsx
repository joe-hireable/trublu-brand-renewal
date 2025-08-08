import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

interface ContactButtonProps {
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  className?: string;
  children?: React.ReactNode;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  size = 'lg', 
  variant = 'default',
  className = '',
  children 
}) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <>
      <Button
        size={size}
        variant={variant}
        className={`primary-button group ${className}`}
        onClick={handleOpenContactForm}
      >
        {children || 'Get in touch'}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />
    </>
  );
};

export default ContactButton;