import React, { useState } from 'react';

const Card = ({ id, image, price, name, info = "", InterestHandler }) => {
  console.log("Card Component - received props:", { id, image, price, name, info });

  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : info.substring(0, 100) + "...";

  return (
    <div>
      <img src={image} alt={name} />
      <div className="Amount">{price}</div>
      <div>{name}</div>
      <div className="description">
        {description}
        <span className="readmore" onClick={() => setReadMore(!readMore)}>
          {readMore ? " Show Less" : " Read More"}
        </span>
      </div>
      <button onClick={() => InterestHandler(id)}>Not Interested</button>
    </div>
  );
};

export default Card;
