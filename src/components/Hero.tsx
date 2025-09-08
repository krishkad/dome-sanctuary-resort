import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-dome.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-luxury text-white mb-6 animate-fade-in">
          Experience the Ultimate
          <span className="block text-primary-glow">Luxury in Nature</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in" 
           style={{ animationDelay: '0.2s' }}>
          Stay in our one-of-a-kind luxury dome — where comfort meets wilderness
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
             style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-xl px-12 py-5"
          >
            Book Now
          </button>
          <button 
            onClick={() => document.getElementById('dome')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-white border-white hover:bg-white hover:text-secondary text-xl px-12 py-5"
          >
            Discover More
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-glow transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;