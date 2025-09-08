import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
import breakfastImage from '@/assets/food-breakfast.jpg';
import dinnerImage from '@/assets/food-dinner.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: heroImage,
      alt: 'Luxury dome in pristine forest setting at golden hour',
      category: 'Exterior'
    },
    {
      src: domeInterior,
      alt: 'Premium dome interior with king-size bed and panoramic windows',
      category: 'Interior'
    },
    {
      src: domeExterior,
      alt: 'Dome exterior with private jacuzzi and wooden deck',
      category: 'Exterior'
    },
    {
      src: breakfastImage,
      alt: 'Gourmet breakfast presentation with artisanal dishes',
      category: 'Dining'
    },
    {
      src: dinnerImage,
      alt: 'Fine dining dinner with premium ingredients and elegant presentation',
      category: 'Dining'
    },
    {
      src: heroImage,
      alt: 'Dome surrounded by misty forest at dawn',
      category: 'Nature'
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    } else {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Exterior': return 'bg-primary text-primary-foreground';
      case 'Interior': return 'bg-secondary text-secondary-foreground';
      case 'Dining': return 'bg-wood text-secondary';
      case 'Nature': return 'bg-wood-dark text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-premium text-primary mb-4">
            Visual Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the beauty and luxury of our exclusive dome experience 
            through these carefully curated moments of serenity and sophistication.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-luxury)] transition-all duration-500"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                          {image.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-all duration-300"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Gallery Footer */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-elegant text-secondary mb-6 font-luxury">
              Experience It Yourself
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              These images capture just a glimpse of the luxury and tranquility awaiting you. 
              Book your stay to create your own unforgettable memories in our exclusive dome.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-xl px-12 py-5"
            >
              Reserve Your Experience
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-md flex items-center justify-center p-6">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] relative">
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/80 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(galleryImages[selectedImage].category)}`}>
                  {galleryImages[selectedImage].category}
                </span>
                <span className="text-white text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;