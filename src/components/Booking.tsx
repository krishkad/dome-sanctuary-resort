import { useState } from 'react';
import { Calendar, Clock, Phone, Mail, MessageSquare, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    specialRequests: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to proceed with your booking.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your Castle Glamp reservation.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      specialRequests: '',
    });
  };

  return (
    <section id="booking" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-premium text-primary mb-4">
            Reserve Your Stay
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure your exclusive Castle Glamp experience. Our team will personally 
            ensure every detail of your stay exceeds your expectations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Booking Form */}
            <div className="card-luxury">
              <h3 className="text-elegant text-secondary mb-8 font-luxury">
                Booking Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Dietary requirements, anniversary celebration, preferred activities..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-xl py-4"
                >
                  Reserve Your Stay
                </button>
              </form>
            </div>

            {/* Booking Information */}
            <div className="space-y-8">
              {/* Pricing Info */}
              <div className="card-luxury">
                <h3 className="text-elegant text-secondary mb-6 font-luxury">
                  Pricing & Availability
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Castle Glamp (per night)</span>
                    <span className="text-2xl font-bold text-primary font-luxury">$850</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Premium Dining Package</span>
                    <span className="text-lg font-semibold text-secondary">$120 / person</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">Guided Nature Experience</span>
                    <span className="text-lg font-semibold text-secondary">$75 / person</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-4">
                  <p className="text-sm text-secondary">
                    <strong>Minimum Stay:</strong> 2 nights<br />
                    <strong>Maximum Occupancy:</strong> 2 guests<br />
                    <strong>Check-in:</strong> 3:00 PM<br />
                    <strong>Check-out:</strong> 11:00 AM
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="card-luxury">
                <h3 className="text-elegant text-secondary mb-6 font-luxury">
                  Need Assistance?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">reservations@luxurydome.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Available 24/7 for bookings</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-wood-light rounded-xl">
                  <p className="text-sm text-secondary leading-relaxed">
                    Our concierge team is available to customize your experience, 
                    arrange transportation, and ensure every detail of your luxury 
                    dome stay is perfectly tailored to your preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;