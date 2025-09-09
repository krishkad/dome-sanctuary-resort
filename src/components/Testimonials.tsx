import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah & Michael Thompson',
      location: 'San Francisco, CA',
      rating: 5,
      review: 'An absolutely magical experience! The dome exceeded all our expectations. Waking up to panoramic forest views through floor-to-ceiling windows was breathtaking. The private jacuzzi under the stars was the highlight of our anniversary trip.',
      experience: 'Anniversary Getaway'
    },
    {
      name: 'James Rodriguez',
      location: 'Austin, TX',
      rating: 5,
      review: 'The perfect blend of luxury and nature. Every amenity was thoughtfully designed, from the rain shower to the stargazing telescope. The guided nature walks were incredible, and the bonfire nights created memories we\'ll treasure forever.',
      experience: 'Solo Retreat'
    },
    {
      name: 'Emma & David Chen',
      location: 'Seattle, WA',
      rating: 5,
      review: 'We\'ve stayed at luxury resorts worldwide, but this dome experience was truly unique. The privacy, the connection to nature, and the impeccable service made it unforgettable. Already planning our return visit!',
      experience: 'Romantic Escape'
    },
    {
      name: 'Robert & Lisa Johnson',
      location: 'Denver, CO',
      rating: 5,
      review: 'The dome provided the perfect digital detox while maintaining all the comforts we could want. The gourmet meals were exceptional, and the staff anticipated our every need. This is luxury hospitality at its finest.',
      experience: 'Digital Detox Weekend'
    },
    {
      name: 'Alexandra Martinez',
      location: 'Miami, FL',
      rating: 5,
      review: 'As a travel photographer, I\'m always seeking unique experiences. This dome delivered beyond imagination. The architecture, the setting, the amenities - everything was Instagram-worthy, but more importantly, soul-nourishing.',
      experience: 'Creative Retreat'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-muted'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-premium text-primary mb-4">
            Guest Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what makes our Castle Glamp experience truly exceptional through 
            the words of our valued guests who have created unforgettable memories.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="card-luxury h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                          {testimonial.experience}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-secondary font-luxury">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Review */}
                    <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-6">
                      "{testimonial.review}"
                    </blockquote>

                    {/* Footer */}
                    <div className="text-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-elegant text-secondary mb-6 font-luxury">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our community of satisfied guests and experience the Castle Glamp 
              that has captured hearts and created countless magical moments.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-xl px-12 py-5"
            >
              Book Your Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;