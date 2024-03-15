import React, { useState } from 'react';
import '../styles/Carousel.scss';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>{'<'}</button>
      <button className="next" onClick={handleNext}>{'>'}</button>
    </div>
  );
};

export default Carousel;
