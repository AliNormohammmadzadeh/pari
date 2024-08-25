import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid'; // Corrected import for Heroicons v2

const StickyButtonWithDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {/* Sticky Button */}
      <button
        onClick={handleDialogOpen}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none z-50 flex items-center justify-center"
      >
        <InformationCircleIcon className="h-6 w-6" />
      </button>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Our Site!</h2>
            <p className="text-gray-600 mb-6">
              We're delighted to have you here. Explore our collection and discover amazing products tailored just for you. If you need any assistance, feel free to reach out to our support team.
            </p>
            <p className="text-gray-600 mb-6">
              Don't forget to check out our latest offers and exclusive discounts available only to our members.
            </p>
            <button
              onClick={handleDialogClose}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition duration-300 focus:outline-none"
            >
              Start Exploring
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyButtonWithDialog;
