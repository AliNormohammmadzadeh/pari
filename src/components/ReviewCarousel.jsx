import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const ReviewCarousel = () => {
  const reviews = [
    {
      text: "Wear them 2-3 times, and you won't know you have them on! Super soft leather that gently holds your feet! Constant compliments!",
      author: "JulesLennon",
      product: "The Day Glove",
      image: "https://picsum.photos/800/600?random=1",
      rating: 5,
    },
    {
      text: "These shoes are incredibly comfortable and stylish. I can wear them all day without any discomfort.",
      author: "AlexSmith",
      product: "The Chelsea Boot",
      image: "https://picsum.photos/800/600?random=2",
      rating: 5,
    },
    {
      text: "The perfect blend of comfort and fashion. I've received so many compliments on these!",
      author: "MarieCurie",
      product: "The Cozy Sweater",
      image: "https://picsum.photos/800/600?random=3",
      rating: 5,
    },
    // Add more reviews as needed
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePrevClick = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setAnimating(false);
    }, 500); // This duration should match the CSS transition duration
  };

  const handleNextClick = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
      setAnimating(false);
    }, 500); // This duration should match the CSS transition duration
  };

  const { text, author, product, image, rating } = reviews[currentReviewIndex];

  return (
    <div className="flex items-center justify-between h-screen px-12 bg-gradient-to-r from-gray-100 to-gray-200 mt-5">
      <button
        onClick={handlePrevClick}
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
        disabled={animating}
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>

      <div
        className={`flex-1 flex items-center justify-between bg-white shadow-lg rounded-lg p-8 transition-opacity duration-500 ease-in-out ${animating ? 'opacity-0' : 'opacity-100'}`}
        key={currentReviewIndex}
      >
        <div className="max-w-lg">
          <h3 className="text-lg font-medium mb-2 text-gray-800">The Reviews Are In</h3>
          <div className="flex mb-4">
            {Array.from({ length: rating }).map((_, index) => (
              <StarIcon key={index} className="h-5 w-5 text-yellow-500 mr-1" />
            ))}
          </div>
          <p className="text-xl mb-4 text-gray-700">“{text}”</p>
          <p className="font-semibold text-gray-600">–{author}, <a href="#" className="text-blue-600 underline">{product}</a></p>
        </div>
        <div className="max-w-lg">
          <img
            src={image}
            alt={product}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      <button
        onClick={handleNextClick}
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
        disabled={animating}
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default ReviewCarousel;
