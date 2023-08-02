import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StyledStar = styled(FaStar)`
  font-size: 85px;
  cursor: pointer;
`;

function Stars() {
  const [rating, setRating] = useState("");

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="App">
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <StyledStar
            key={index}
            color={index <= rating ? getColorByRating(rating) : "grey"}
            onClick={() => handleRating(index)}
          />
        ))}
      </div>
    </div>
  );
}

function getColorByRating(rating) {
  const colors = ["#CF0812", "#CF0812", "#faad14", "#85ba6a", "#1f5404"];
  return colors[rating];
}

export default Stars;
