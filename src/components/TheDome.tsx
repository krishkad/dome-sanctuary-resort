import { 
  Sparkles, 
  Telescope, 
  Waves, 
  TreePine, 
  Bed, 
  ShowerHead, 
  Coffee, 
  Wifi, 
  Armchair, 
  Home, 
  MapPin, 
  ChefHat, 
  Users, 
  Flame, 
  Music, 
  Mountain,
  Eye
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import heroImage from '@/assets/hero-dome.jpg';
import domeInterior from '@/assets/dome-interior.jpg';
import domeExterior from '@/assets/dome-exterior.jpg';

const TheDome = () => {
  const domeImages = [
    {
      src: heroImage,
      alt: 'Luxury dome in pristine forest setting at golden hour',
      title: 'Forest Setting'
    },
    {
      src: domeExterior,
      alt: 'Luxury dome exterior with private jacuzzi and wooden deck at sunset',
      title: 'Private Jacuzzi'
    },
    {
      src: domeInterior,
      alt: 'Premium dome interior with king-size bed and panoramic windows',
      title: 'Interior Luxury'
    },
  ];

  const amenities = [
    { icon: Waves, title: 'Private Jacuzzi', description: 'Relax in your own hot tub under the stars' },
    { icon: Telescope, title: 'Stargazing Telescope', description: 'Explore the cosmos from your private deck' },
    { icon: TreePine, title: 'Platform Hammock', description: 'Gentle swaying among the treetops' },
    { icon: Home, title: 'Private Entrance', description: 'Your own secluded pathway and balcony' },
    { icon: Bed, title: 'King-Size Bed', description: 'Premium mattress with luxury linens' },
    { icon: ShowerHead, title: 'Rain Shower', description: 'Spa-quality bathroom with luxury toiletries' },
    { icon: Coffee, title: 'Mini-Bar & Coffee', description: 'Premium beverages and artisan coffee' },
    { icon: Wifi, title: 'Complimentary Wi-Fi', description: 'High-speed internet throughout' },
    { icon: Armchair, title: 'Seating Area', description: 'Comfortable lounge space with forest views' },
    { icon: Sparkles, title: 'Modern Decor', description: 'Wooden flooring and contemporary design' },
    { icon: MapPin, title: 'Outdoor Seating', description: 'Private deck with panoramic nature views' },
    { icon: ChefHat, title: 'Private Dining', description: 'BBQ facilities and outdoor kitchen' },
    { icon: Users, title: 'Guided Nature Walks', description: 'Expert-led exploration of local wildlife' },
    { icon: Flame, title: 'Bonfire Nights', description: 'Evening fires with curated music experiences' },
    { icon: Mountain, title: 'Village Tours', description: 'Discover authentic local culture and traditions' },
    { icon: Eye, title: 'Panoramic Windows', description: 'Floor-to-ceiling views of pristine wilderness' },
  ];

  return (
    <section id="dome" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-premium text-primary mb-4">
            The Dome
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into a world where architectural innovation meets natural serenity. 
            Our exclusive dome is a masterpiece of design, offering unparalleled luxury 
            in perfect harmony with the surrounding wilderness.
          </p>
        </div>

        {/* Dome Images Carousel */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {domeImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-luxury)]">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-[500px] object-cover hover-scale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <h4 className="text-2xl font-semibold text-white font-luxury">
                          {image.title}
                        </h4>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>

        {/* Amenities List */}
        <div className="mb-16">
          <h3 className="text-elegant text-center mb-12 text-secondary">
            Luxury Amenities & Experiences
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-secondary font-luxury">
                        {amenity.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-elegant text-secondary mb-6">
              Ready for the Ultimate Luxury Experience?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our exclusive dome accommodates up to 2 guests, ensuring complete privacy 
              and personalized service throughout your stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-xl px-12 py-5"
              >
                Reserve Your Stay
              </button>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline text-xl px-12 py-5"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheDome;