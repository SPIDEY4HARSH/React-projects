import React from 'react';
import Card from './Card';

const Tour = ({ tour, InterestHandler }) => {  // ✅ Correctly destructuring `tour` from props
  console.log("Tour Component - tour data:", tour);

  return (
    <div>
      <h1>Plan With Love</h1>
      <div className="card">
        {tour.map((tourItem) => (  // ✅ Now `tour` is correctly an array
          <Card key={tourItem.id} {...tourItem} InterestHandler={InterestHandler} />
        ))}
      </div>
    </div>
  );
};

export default Tour;



