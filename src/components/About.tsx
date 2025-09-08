import domeInterior from '@/assets/dome-interior.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-premium text-primary mb-4">
                Where Luxury Meets Wilderness
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Nestled in pristine nature, our exclusive luxury dome offers an unparalleled 
                escape from the ordinary. This isn't just accommodation—it's a transformative 
                experience where modern comfort seamlessly blends with the raw beauty of the wilderness.
              </p>
              
              <p>
                Designed for the discerning traveler who seeks both adventure and refinement, 
                our singular dome represents the pinnacle of glamping luxury. Every detail has 
                been meticulously crafted to provide an intimate connection with nature without 
                compromising on the elegance and comfort you deserve.
              </p>
              
              <p>
                Privacy, exclusivity, and immersive natural experiences define our philosophy. 
                Here, you'll discover a sanctuary where the pressures of modern life dissolve, 
                replaced by the serene rhythm of nature and uncompromising luxury.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('dome')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Explore The Dome
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                View Gallery
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-luxury)]">
              <img 
                src={domeInterior} 
                alt="Luxury dome interior with premium furnishings and panoramic forest views"
                className="w-full h-[600px] object-cover hover-scale"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 wood-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;