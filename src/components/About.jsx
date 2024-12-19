import React, { useState } from 'react';
import slides from './Slides';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const { title, company, start_date, end_date, location, details } = slides[currentSlide];

  return (
    <div className="bg-buccaneer-300 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevSlide} className="p-2 bg-buccaneer-900 text-white rounded-full">
          &lt;
        </button>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button onClick={handleNextSlide} className="p-2 bg-buccaneer-900 text-white rounded-full">
          &gt;
        </button>
      </div>
      <p className="text-lg font-medium mb-2">
        {company} | {start_date} - {end_date || 'Present'} | {location}
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {details.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
