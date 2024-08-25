import React, { useState } from 'react';

const Carousel = () => {
  const items = [
    {
      img: 'https://picsum.photos/400/300?random=1',
      label: 'The Must-Have Shirtdress in Butterlite',
      price: '$148',
      subtitle: 'Navy',
    },
    {
      img: 'https://picsum.photos/400/300?random=2',
      label: 'The Penny Loafer',
      price: '$198',
      subtitle: 'Rum',
    },
    {
      img: 'https://picsum.photos/400/300?random=3',
      label: 'The Supima® Cotton Boyfriend Shirt',
      price: '$98',
      subtitle: 'White / Moss Green',
    },
    {
      img: 'https://picsum.photos/400/300?random=4',
      label: 'The Mid-Way Skirt',
      price: '$118',
      subtitle: 'Deep Atlantic',
    },
    {
      img: 'https://picsum.photos/400/300?random=5',
      label: 'The Long Sleeve Tee',
      price: '$58',
      subtitle: 'Bone / Black',
    },
    {
      img: 'https://picsum.photos/400/300?random=6',
      label: 'The Classic Blazer',
      price: '$298',
      subtitle: 'Charcoal',
    },
    {
      img: 'https://picsum.photos/400/300?random=7',
      label: 'The Leather Tote',
      price: '$198',
      subtitle: 'Brown',
    },
    {
      img: 'https://picsum.photos/400/300?random=8',
      label: 'The Cozy Sweater',
      price: '$98',
      subtitle: 'Cream',
    },
    {
      img: 'https://picsum.photos/400/300?random=9',
      label: 'The Knit Beanie',
      price: '$28',
      subtitle: 'Gray',
    },
    {
      img: 'https://picsum.photos/400/300?random=10',
      label: 'The Ankle Boots',
      price: '$158',
      subtitle: 'Black',
    },
    {
      img: 'https://picsum.photos/400/300?random=11',
      label: 'The Sunglasses',
      price: '$78',
      subtitle: 'Tortoise Shell',
    },
    {
      img: 'https://picsum.photos/400/300?random=12',
      label: 'The Wool Scarf',
      price: '$68',
      subtitle: 'Navy',
    },
    {
      img: 'https://picsum.photos/400/300?random=13',
      label: 'The Slim Jeans',
      price: '$118',
      subtitle: 'Denim',
    },
    {
      img: 'https://picsum.photos/400/300?random=14',
      label: 'The Chelsea Boots',
      price: '$198',
      subtitle: 'Black Leather',
    },
    {
      img: 'https://picsum.photos/400/300?random=15',
      label: 'The Wool Coat',
      price: '$298',
      subtitle: 'Camel',
    },
    {
      img: 'https://picsum.photos/400/300?random=16',
      label: 'The Weekender Bag',
      price: '$98',
      subtitle: 'Olive',
    },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (!isAnimating && newPage >= 0 && newPage < totalPages) {
      setIsAnimating(true);
      setCurrentPage(newPage);
      setTimeout(() => setIsAnimating(false), 500); // Match with CSS transition duration
    }
  };

  return (
    <div className="container mx-auto mb-28">
      <h2 className="text-center text-3xl font-bold my-8">
        New For Fall: Our Preppiest Collection Ever
      </h2>
      <div className={`flex justify-center space-x-4 transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {items
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((item, index) => (
            <div key={index} className="w-1/4">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-auto object-cover rounded-md shadow-lg"
                />
                <span className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-semibold rounded-md">
                  New!
                </span>
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-lg font-medium">{item.label}</h3>
                <p className="text-gray-500">{item.subtitle}</p>
                <p className="text-black font-bold mt-1">{item.price}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex)}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              pageIndex === currentPage
                ? 'bg-black'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
