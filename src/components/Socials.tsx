import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Socials = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      description: 'Follow our daily luxury experiences'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
      description: 'Join our community of nature lovers'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      description: 'Stay updated with latest news'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: '#',
      description: 'Watch exclusive dome experiences'
    },
  ];

  return (
    <section id="socials" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-premium text-primary mb-4">
            Follow Our Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected with our Castle Glamp community and be the first to discover 
            new experiences, seasonal offers, and behind-the-scenes moments.
          </p>
        </div>

        {/* Social Links */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="card-luxury text-center hover-lift group transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary mb-3 font-luxury">
                    {social.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {social.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Featured Content */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-wood-light to-wood rounded-3xl p-12">
              <h3 className="text-elegant text-secondary mb-6 font-luxury">
                Share Your Experience
              </h3>
              <p className="text-lg text-secondary/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Tag us in your Castle Glamp photos with <strong>#LuxuryDomeExperience</strong> 
                for a chance to be featured on our social media and win exclusive perks 
                for your next visit.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium">
                  #LuxuryDomeExperience
                </span>
                <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium">
                  #NatureLuxury
                </span>
                <span className="bg-wood-dark text-white px-6 py-3 rounded-full font-medium">
                  #GlampingLife
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;