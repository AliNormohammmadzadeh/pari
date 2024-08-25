import React from 'react';
import { TruckIcon, ArrowsRightLeftIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Top Features Section */}
      <div className="container mx-auto py-12">
        <div className="flex justify-around text-center">
          <div className="flex flex-col items-center">
            <TruckIcon className="h-12 w-12 text-black mb-4" />
            <h4 className="text-lg font-medium">Complimentary Shipping</h4>
            <p className="text-gray-600">Enjoy free shipping on U.S. orders over $100.</p>
          </div>
          <div className="flex flex-col items-center">
            <ArrowsRightLeftIcon className="h-12 w-12 text-black mb-4" />
            <h4 className="text-lg font-medium">Consciously Crafted</h4>
            <p className="text-gray-600">Designed with you and the planet in mind.</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPinIcon className="h-12 w-12 text-black mb-4" />
            <h4 className="text-lg font-medium">Come Say Hi</h4>
            <p className="text-gray-600">We have 11 stores across the U.S.</p>
          </div>
        </div>
      </div>

      {/* Bottom Links and Signup Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Log In</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Redeem a Gift Card</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Environmental Initiatives</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Factories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">DEI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">International</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Return Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Bulk Orders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Affiliates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Our Stores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sign up to receive 15% off your first order.</h4>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  type="submit"
                  className="bg-black text-white p-2 rounded-r-md hover:bg-gray-800"
                >
                  &rarr;
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-600">
                By providing your email address, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
        <div className="container mx-auto mt-12 text-center text-xs text-gray-600">
          <p>Privacy Policy &nbsp;|&nbsp; Terms of Service &nbsp;|&nbsp; Do Not Sell or Share My Personal Information &nbsp;|&nbsp; CA Supply Chain Transparency &nbsp;|&nbsp; Vendor Code of Conduct &nbsp;|&nbsp; Sitemap Pages &nbsp;|&nbsp; Sitemap Products</p>
          <p className="mt-4">&copy; 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
