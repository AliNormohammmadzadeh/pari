import React from 'react';

const NewArrivals = () => {
  const products = [
    {
      title: 'The New Day Tote',
      price: '$150',
      imageUrl: 'https://picsum.photos/400/300?random=1', // Random image from Lorem Picsum
      link: '#',
    },
    {
      title: 'The Modern Loafer',
      price: '$120',
      imageUrl: 'https://picsum.photos/400/300?random=2', // Random image from Lorem Picsum
      link: '#',
    },
    {
      title: 'The Cashmere Crew',
      price: '$100',
      imageUrl: 'https://picsum.photos/400/300?random=3', // Random image from Lorem Picsum
      link: '#',
    },
    {
      title: 'The Organic Cotton Tee',
      price: '$40',
      imageUrl: 'https://picsum.photos/400/300?random=4', // Random image from Lorem Picsum
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <a href={product.link}>
                <div className="relative">
                  <img
                    className="w-full h-72 object-cover rounded-lg"
                    src={product.imageUrl}
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{product.title}</h3>
                <p className="mt-2 text-gray-600">{product.price}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
