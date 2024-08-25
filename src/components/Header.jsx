import React from 'react';
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Women</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Men</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Kids</a>
        </div>
        <div className="flex items-center justify-center">
          <a href="#" className="text-2xl font-bold text-gray-800">Everlane</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <UserIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <ShoppingCartIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
