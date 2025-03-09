import React, { useState } from 'react';
import './App.css';
import data from './data.js';
import Tour from './components/Tour';

function App() {
  const [tourData, setTourData] = useState(data);

  console.log("App Component - tourData:", tourData);

  function InterestHandler(id) {
    setTourData((prevTourData) => prevTourData.filter(tour => tour.id !== id));
  }

  if (tourData.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTourData(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="AppContainer">
      <Tour tour={tourData} InterestHandler={InterestHandler} />
    </div>
  );
}

export default App;
