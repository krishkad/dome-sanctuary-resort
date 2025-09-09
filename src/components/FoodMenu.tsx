import { Clock, Star, Leaf } from 'lucide-react';
import breakfastImage from '@/assets/food-breakfast.jpg';
import dinnerImage from '@/assets/food-dinner.jpg';

const FoodMenu = () => {
  const menuCategories = [
    {
      title: 'Breakfast',
      description: 'Start your day with artisanal morning delights',
      image: breakfastImage,
      items: [
        {
          name: 'Wild Berry Pancakes',
          description: 'Fluffy pancakes with locally foraged berries, maple syrup, and whipped cream',
          price: '₹24',
          tags: ['Signature', 'Local'],
        },
        {
          name: 'Forest Mushroom Omelet',
          description: 'Farm eggs with wild mushrooms, herbs, and artisan cheese',
          price: '₹28',
          tags: ['Organic', 'Vegetarian'],
        },
        {
          name: 'Smoked Salmon Benedict',
          description: 'Poached eggs, smoked salmon, hollandaise on toasted brioche',
          price: '₹32',
          tags: ['Premium', 'Signature'],
        },
      ],
    },
    {
      title: 'Lunch',
      description: 'Refined midday cuisine with forest-to-table ingredients',
      image: dinnerImage,
      items: [
        {
          name: 'Grilled Venison Salad',
          description: 'Tender venison with mixed greens, roasted nuts, and berry vinaigrette',
          price: '₹380',
          tags: ['Local Game', 'Signature'],
        },
        {
          name: 'Truffle Risotto',
          description: 'Creamy Arborio rice with wild truffles and aged Parmesan',
          price: '₹340',
          tags: ['Vegetarian', 'Premium'],
        },
        {
          name: 'Cedar Plank Salmon',
          description: 'Atlantic salmon with seasonal vegetables and herb butter',
          price: '₹420',
          tags: ['Fresh', 'Signature'],
        },
      ],
    },
    {
      title: 'Dinner',
      description: 'Exquisite evening fare for unforgettable dining',
      image: dinnerImage,
      items: [
        {
          name: 'Wagyu Beef Tenderloin',
          description: 'Premium beef with roasted root vegetables and red wine reduction',
          price: '₹780',
          tags: ['Premium', 'Signature'],
        },
        {
          name: 'Lobster Thermidor',
          description: 'Fresh lobster in cognac cream sauce with duchess potatoes',
          price: '₹680',
          tags: ['Luxury', 'Signature'],
        },
        {
          name: 'Duck Confit',
          description: 'Slow-cooked duck leg with cherry gastrique and wild rice',
          price: '₹560',
          tags: ['Traditional', 'Premium'],
        },
      ],
    },
    {
      title: 'Beverages',
      description: 'Curated selection of wines, spirits, and artisan drinks',
      image: breakfastImage,
      items: [
        {
          name: 'Vintage Wine Selection',
          description: 'Curated bottles from renowned vineyards worldwide',
          price: '₹450-2500',
          tags: ['Premium', 'Curated'],
        },
        {
          name: 'Craft Cocktails',
          description: 'House-made cocktails with premium spirits and fresh ingredients',
          price: '₹180-240',
          tags: ['Artisan', 'Fresh'],
        },
        {
          name: 'Forest Tea Blend',
          description: 'Custom herbal teas made from local botanicals',
          price: '₹120',
          tags: ['Local', 'Organic'],
        },
      ],
    },
  ];

  const getTagIcon = (tag: string) => {
    if (tag.includes('Signature') || tag.includes('Premium')) return <Star className="w-3 h-3" />;
    if (tag.includes('Organic') || tag.includes('Local')) return <Leaf className="w-3 h-3" />;
    return <Clock className="w-3 h-3" />;
  };

  const getTagColor = (tag: string) => {
    if (tag.includes('Signature') || tag.includes('Premium')) return 'bg-primary text-primary-foreground';
    if (tag.includes('Organic') || tag.includes('Local')) return 'bg-wood text-secondary';
    return 'bg-secondary text-secondary-foreground';
  };

  return (
    <section id="menu" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-premium text-primary mb-4">
            Culinary Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Indulge in carefully crafted dishes that celebrate both local ingredients 
            and international culinary traditions, prepared exclusively for your luxury experience.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-24">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Category Image */}
                <div className={`${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-luxury)]">
                    <img 
                      src={category.image} 
                      alt={`${category.title} cuisine presentation`}
                      className="w-full h-[400px] object-cover hover-scale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-elegant text-white font-luxury">
                        {category.title}
                      </h3>
                      <p className="text-white/90 mt-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className={`space-y-8 ${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="card-luxury hover-lift group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-secondary font-luxury">
                          {item.name}
                        </h4>
                        <span className="text-2xl font-bold text-primary font-luxury">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTagColor(tag)}`}
                          >
                            {getTagIcon(tag)}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-wood-light to-wood rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-elegant text-secondary mb-6 font-luxury">
              Dietary Requirements & Special Requests
            </h3>
            <p className="text-lg text-secondary/80 mb-8 leading-relaxed">
              Our culinary team is delighted to accommodate dietary restrictions, allergies, 
              and special requests. Please inform us during booking for a personalized dining experience.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Discuss Your Preferences
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;