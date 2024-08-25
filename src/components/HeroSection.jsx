import React, { useState } from 'react';

const HeroSection = () => {
  const images = [
    'https://picsum.photos/1200/800?random=1',
    'https://picsum.photos/1200/800?random=2',
    'https://picsum.photos/1200/800?random=3',
    'https://picsum.photos/1200/800?random=4',
    'https://picsum.photos/1200/800?random=5',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500); // Match this with the transition duration
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Match this with the transition duration
    }
  };

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          src={images[currentImageIndex]}
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10 flex items-center justify-between h-screen px-8">
        <button
          className="bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 focus:outline-none"
          onClick={handlePrevClick}
        >
          &#8249;
        </button>
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-white text-5xl sm:text-7xl font-bold tracking-tight">
            Timeless Essentials
          </h1>
          <p className="mt-4 text-white text-lg sm:text-2xl">
            Ethically made. Radically transparent.
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Shop Now
          </a>
        </div>
        <button
          className="bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 focus:outline-none"
          onClick={handleNextClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
