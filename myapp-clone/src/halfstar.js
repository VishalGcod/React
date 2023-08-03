import React, { useState } from 'react';

const StarRating = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingChange = (newValue) => {
    onChange(newValue);
  };

  const handleMouseEnter = (newValue) => {
    setHoverRating(newValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (newValue) => {
    onChange(newValue);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const isSelected = rating >= starValue;
        const isHovered = hoverRating >= starValue;

        return (
          <span
            key={index}
            className={`star ${isSelected ? 'selected' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
