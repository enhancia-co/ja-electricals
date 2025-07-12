export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const categories = [
  'All', 'Lighting', 'Safety', 'Cables', 'Smart Home', 'Outlets', 
  'Boxes', 'Conduits', 'Tools', 'Emergency', 'Switches', 'Panels'
];

export const featuredProducts = [
  {
    id: 1,
    title: 'LED Panel Lights',
    description: 'Energy-efficient LED panels for commercial and residential use',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Lighting'
  },
  {
    id: 2,
    title: 'Circuit Breakers',
    description: 'High-quality circuit breakers for electrical safety',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Safety'
  },
  {
    id: 3,
    title: 'Electrical Cables',
    description: 'Premium copper cables for all electrical installations',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Cables'
  },
  {
    id: 4,
    title: 'Smart Switches',
    description: 'Modern smart switches with WiFi connectivity',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Smart Home'
  },
  {
    id: 5,
    title: 'Power Outlets',
    description: 'Durable power outlets for residential and commercial use',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Outlets'
  },
  {
    id: 6,
    title: 'Junction Boxes',
    description: 'Weather-resistant junction boxes for outdoor installations',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Boxes'
  },
  {
    id: 7,
    title: 'Conduit Pipes',
    description: 'Flexible and rigid conduit pipes for cable protection',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Conduits'
  },
  {
    id: 8,
    title: 'Voltage Testers',
    description: 'Professional voltage testers for electrical safety',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Tools'
  },
  {
    id: 9,
    title: 'Emergency Lighting',
    description: 'Battery-powered emergency lights for safety compliance',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Emergency'
  },
  {
    id: 10,
    title: 'LED Panel Lights',
    description: 'Energy-efficient LED panels for commercial and residential use',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Lighting'
  }
];

export const products: Product[] = [
  
  {
    id: 1,
    title: 'LED Panel Lights',
    description: 'Energy-efficient LED panels for commercial and residential use',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Lighting'
  },
  {
    id: 2,
    title: 'Circuit Breakers',
    description: 'High-quality circuit breakers for electrical safety',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Safety'
  },
  {
    id: 3,
    title: 'Electrical Cables',
    description: 'Premium copper cables for all electrical installations',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Cables'
  },
  {
    id: 4,
    title: 'Smart Switches',
    description: 'Modern smart switches with WiFi connectivity',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Smart Home'
  },
  {
    id: 5,
    title: 'Power Outlets',
    description: 'Durable power outlets for residential and commercial use',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Outlets'
  },
  {
    id: 6,
    title: 'Junction Boxes',
    description: 'Weather-resistant junction boxes for outdoor installations',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Boxes'
  },
  {
    id: 7,
    title: 'Conduit Pipes',
    description: 'Flexible and rigid conduit pipes for cable protection',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Conduits'
  },
  {
    id: 8,
    title: 'Voltage Testers',
    description: 'Professional voltage testers for electrical safety',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Tools'
  },
  {
    id: 9,
    title: 'Emergency Lighting',
    description: 'Battery-powered emergency lights for safety compliance',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Emergency'
  },
  {
    id: 10,
    title: 'Dimmer Switches',
    description: 'Variable dimmer switches for mood lighting control',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Switches'
  },
  {
    id: 11,
    title: 'Electrical Panels',
    description: 'Main electrical panels for residential and commercial use',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Panels'
  },
  {
    id: 12,
    title: 'LED Strip Lights',
    description: 'Flexible LED strip lights for decorative and task lighting',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Lighting'
  },
  {
    id: 13,
    title: 'Smoke Detectors',
    description: 'Advanced smoke detectors with battery backup',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Safety'
  },
  {
    id: 14,
    title: 'Ethernet Cables',
    description: 'High-speed Cat6 ethernet cables for network installations',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Cables'
  },
  {
    id: 15,
    title: 'Smart Thermostat',
    description: 'WiFi-enabled smart thermostat with app control',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Smart Home'
  },
  {
    id: 16,
    title: 'GFCI Outlets',
    description: 'Ground fault circuit interrupter outlets for safety',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Outlets'
  },
  {
    id: 17,
    title: 'Electrical Boxes',
    description: 'Standard electrical boxes for outlet and switch installations',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Boxes'
  },
  {
    id: 18,
    title: 'Flexible Conduit',
    description: 'Liquid-tight flexible conduit for challenging installations',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Conduits'
  },
  {
    id: 19,
    title: 'Multimeter',
    description: 'Digital multimeter for electrical measurements',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Tools'
  },
  {
    id: 20,
    title: 'Exit Signs',
    description: 'LED exit signs for emergency egress lighting',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Emergency'
  },
  {
    id: 21,
    title: 'Toggle Switches',
    description: 'Heavy-duty toggle switches for industrial applications',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Switches'
  },
  {
    id: 22,
    title: 'Sub Panels',
    description: 'Electrical sub panels for load distribution',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Panels'
  },
  {
    id: 23,
    title: 'Track Lighting',
    description: 'Adjustable track lighting systems for retail and residential',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Lighting'
  },
  {
    id: 24,
    title: 'Surge Protectors',
    description: 'Whole-house surge protectors for electrical safety',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
    category: 'Safety'
  }
]; 