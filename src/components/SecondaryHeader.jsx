import React, { useState } from 'react';

const SecondaryHeader = () => {
  const items = [
    { title: 'Clothing', links: ['Tops', 'Bottoms', 'Outerwear', 'Dresses', 'Sweaters'] },
    { title: 'Accessories', links: ['Bags', 'Hats', 'Scarves', 'Belts'] },
    { title: 'Shoes', links: ['Boots', 'Sneakers', 'Flats', 'Heels'] },
    { title: 'Sustainability', links: ['Materials', 'Factories', 'Initiatives'] },
    { title: 'Sale', links: ['Women\'s Sale', 'Men\'s Sale', 'Kid\'s Sale'] },
    { title: 'New Arrivals', links: ['Women', 'Men', 'Kids', 'Accessories'] },
  ];

  const images = [
    'https://picsum.photos/1200/400?random=1',
    'https://picsum.photos/1200/400?random=2',
    'https://picsum.photos/1200/400?random=3',
    'https://picsum.photos/1200/400?random=4',
    'https://picsum.photos/1200/400?random=5',
    'https://picsum.photos/1200/400?random=6',
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-white shadow-sm mt-16">
      <div className="container mx-auto px-6 py-4 flex justify-center space-x-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              {item.title}
            </a>
          </div>
        ))}
      </div>

      {hoveredItem !== null && (
        <div
          className="absolute left-0 w-full bg-white shadow-lg z-50 transform transition-all duration-500 ease-out"
          style={{
            maxWidth: 'calc(100% )',
            opacity: hoveredItem !== null ? 1 : 0,
            transform: hoveredItem !== null ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          <div className="max-w-screen-lg mx-auto flex p-6">
            <div className="w-1/2 pr-6">
              {items[hoveredItem].links.map((link, i) => (
                <a key={i} href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded">
                  {link}
                </a>
              ))}
            </div>
            <div className="w-1/2">
              <img src={images[hoveredItem % images.length]} alt="Random" className="w-full h-full object-cover rounded-lg"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondaryHeader;
