import React, { useState } from 'react';
import Borabora from '../../assets/borabora.jpg';
import Borabora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const images = [
  { src: Borabora, alt: 'Borabora' },
  { src: Borabora2, alt: 'Borabora2' },
  { src: Maldives, alt: 'Maldives' },
  { src: Maldives2, alt: 'Maldives2' },
  { src: Keywest, alt: 'Keywest' },
];

const Destinations = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="max-w-[600px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Carribbean's Best Beaches</p>
      <div className="relative flex justify-center items-center">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-blue-500 cursor-pointer z-10 hover:scale-110 transition-transform"
        />
        <img
          className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          src={images[current].src}
          alt={images[current].alt}
        />
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-blue-500 cursor-pointer z-10 hover:scale-110 transition-transform"
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
