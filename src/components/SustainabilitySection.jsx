import React from 'react';

const SustainabilitySection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">Sustainability</h2>
          <p className="mt-4 text-lg text-gray-600">
            We’re committed to ethical manufacturing and sustainability in everything we do. Our mission is to provide high-quality products that are kind to both the people who make them and the planet.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://picsum.photos/400/300?random=11" // Replace with your image URL
              alt="Sustainable Materials"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Sustainable Materials</h3>
            <p className="mt-2 text-gray-600">
              We use organic cotton, recycled materials, and more sustainable fabrics in our collections.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://picsum.photos/400/300?random=12" // Replace with your image URL
              alt="Ethical Manufacturing"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Ethical Manufacturing</h3>
            <p className="mt-2 text-gray-600">
              Our factories are held to the highest standards for fair wages and safe working conditions.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://picsum.photos/400/300?random=13" // Replace with your image URL
              alt="Reducing Our Footprint"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Reducing Our Footprint</h3>
            <p className="mt-2 text-gray-600">
              We’re dedicated to reducing our carbon footprint and finding innovative ways to minimize waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilitySection;
