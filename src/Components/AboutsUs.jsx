import React from 'react';

export default function About() {
  return (
    <section 
      className="relative bg-gray-900 text-center py-24 md:py-32 overflow-hidden h-[567px]" 
      style={{
        backgroundImage: 'url(https://thumbs.dreamstime.com/b/automatic-packaging-machine-working-pile-cardboard-boxes-interior-spacious-warehouse-background-work-116610728.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div> 
      
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 backdrop-filter backdrop-blur-sm  bg-opacity-30 p-4 rounded">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
          We are a family-run business with years of experience in manufacturing,
          fabrication, and industrial solutions. Our mission is to provide
          high-quality machinery, fabrication services, and maintenance solutions
          to both government and private sectors. With a strong focus on precision,
          durability, and customer satisfaction, we stand as a trusted partner for
          industries, schools, hospitals, parks, and contractors.
        </p>
      </div>
    </section>
  );
}