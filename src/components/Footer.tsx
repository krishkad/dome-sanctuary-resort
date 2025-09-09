import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for joining our newsletter. You'll receive exclusive updates.",
    });

    setEmail('');
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'The Dome', href: '#dome' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Booking', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-luxury font-bold text-primary mb-6">
              Castle Glamp
            </div>
            
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              Where architectural innovation meets natural serenity. Experience 
              unparalleled luxury in perfect harmony with pristine wilderness.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold font-luxury mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold font-luxury mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">info@luxurydome.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="text-secondary-foreground/80">Hidden Valley Nature Reserve</span>
                  <p className="text-sm text-secondary-foreground/60">
                    Exact location provided upon booking
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold font-luxury mb-6">Newsletter</h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Subscribe for exclusive offers, seasonal updates, and luxury travel inspiration.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-l-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-r-xl hover:bg-primary-glow transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/60 text-sm">
              © 2024 Castle Glamp Resort. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;