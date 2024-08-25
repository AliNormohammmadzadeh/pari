import React from 'react';

const FullWidthHero = () => {
  return (
    <div className="relative bg-cover bg-center h-64 md:h-96 mb-32 mt-20" style={{ backgroundImage: "url('https://picsum.photos/1920/600?random=1')" }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          We're on a Mission To Clean Up the Industry
        </h1>
        <p className="text-white text-lg mb-6">
          Read about our progress in our latest Impact Report.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition duration-300">
          LEARN MORE
        </button>
      </div>
      <div className="w-4/5 border-t border-gray-300 mt-10 mx-auto"></div>
    </div>
  );
};

export default FullWidthHero;
