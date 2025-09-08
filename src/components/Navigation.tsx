import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsSheetOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'The Dome', id: 'dome' },
    { label: 'Menu', id: 'menu' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Booking', id: 'booking' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-[var(--shadow-elegant)]' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-luxury font-bold text-primary">
            Luxury Dome
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="btn-primary"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden text-foreground p-2"
                aria-label="Toggle mobile menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-background">
              <SheetHeader>
                <SheetTitle className="text-2xl font-luxury text-primary">
                  Luxury Dome
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col h-full pt-8">
                <nav className="space-y-6 flex-1">
                  {navItems.map((item) => (
                    <button
                      key={`sheet-${item.id}`}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-xl font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/50"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                
                <div className="pt-8 pb-6">
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="btn-primary w-full text-xl py-4"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;