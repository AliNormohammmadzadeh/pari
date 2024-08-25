import React, { useState } from 'react';

const ImageGridWithDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="relative bg-white">
      {/* Image Grid */}
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative group">
          <img
            src="https://picsum.photos/600/800?random=1"
            alt="Feels Like A Dream"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-3xl font-bold mb-4">Feels Like A Dream</h2>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
              SHOP THE COLLECTION
            </button>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://picsum.photos/600/800?random=2"
            alt="TikTok Famous"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-3xl font-bold mb-4">TikTok Famous</h2>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
              SHOP UTILITY PANTS
            </button>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://picsum.photos/600/800?random=3"
            alt="Best Sellers"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-3xl font-bold mb-4">Best Sellers</h2>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
              SHOP YOUR FAVORITES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGridWithDialog;
