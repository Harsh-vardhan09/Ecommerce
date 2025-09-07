import React, { useState, useEffect, useRef } from 'react';

const reviews = [
    {
      name: "Ravi Kumar",
      text: "Exceptional quality and incredible service. They delivered our industrial shed on time and the workmanship was outstanding.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b94450371ab?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: "Sneha Sharma",
      text: "We needed custom playground equipment for our school, and their team was a pleasure to work with. The final product is safe and durable!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1587840171676-47677d24269e?q=80&w=1935&auto=format&fit=crop',
    },
    {
      name: "Ahmed Khan",
      text: "The maintenance service for our packaging machines was seamless. Minimal downtime and our operations are back to full efficiency.",
      rating: 4,
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b89?q=80&w=1994&auto=format&fit=crop',
    },
    {
      name: "Priya Singh",
      text: "Outstanding fabrication work! The railings they installed are modern and look fantastic. Highly recommend their services.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
    },
    {
      name: "Michael Chen",
      text: "The new vacuum pump is a game-changer for our process. It performs exactly as promised with high efficiency.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
  ];


const ReviewCard = ({ review }) => (
  <div className="flex-none  w-80 bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between transform transition-transform duration-300 hover:scale-105">
    {/* Optional Image */}
    {review.image && (
      <img 
        src={review.image} 
        alt={`Review by ${review.name}`} 
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
    )}
    
    <div className="text-2xl text-yellow-400 mb-4 text-center">
      {'⭐'.repeat(review.rating)}
    </div>
    <p className="text-gray-700 italic flex-grow text-center">"{review.text}"</p>
    <p className="text-right font-semibold mt-4 text-blue-600">- {review.name}</p>
  </div>
);

const Review = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Set up the automatic sliding
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  useEffect(() => {
    // Scroll the carousel to the correct position
    if (carouselRef.current) {
      const cardWidth = 280; // Tailwind w-80 is 320px
      const scrollPosition = currentIndex * cardWidth;
      carouselRef.current.scroll({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">What Our Clients Say</h2>
        <div 
          ref={carouselRef} 
          className="flex space-x-8 overflow-x-hidden scrollbar-hide"
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;