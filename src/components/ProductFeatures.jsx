import React from 'react';

const ProductFeatures = () => {
  const features = [
    {
      title: 'Women',
      description: 'Shop the latest women’s collection.',
      imageUrl: 'https://picsum.photos/400/300?random=7', // Replace with your image URL
      link: '#',
    },
    {
      title: 'Men',
      description: 'Explore our men’s collection.',
      imageUrl: 'https://picsum.photos/400/300?random=8', // Replace with your image URL
      link: '#',
    },
    {
      title: 'Kids',
      description: 'Discover our kids’ clothing.',
      imageUrl: 'https://picsum.photos/400/300?random=9', // Replace with your image URL
      link: '#',
    },
    {
      title: 'Shoes',
      description: 'Find the perfect pair of shoes.',
      imageUrl: 'https://picsum.photos/400/300?random=10', // Replace with your image URL
      link: '#',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <a href={feature.link}>
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={feature.imageUrl}
                    alt={feature.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
