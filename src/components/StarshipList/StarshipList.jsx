import React from 'react'
import StarshipCard from '../Starshipcard/StarshipCard'

const StarshipList = ({ starshipsData }) => {
  if (!starshipsData.length) {
    return <p>Loading Starships...</p>;
  }

  return (
    <>
      <div>StarshipList</div>
      <ul>
        {starshipsData.map((starship, index) => (
          <li key={index}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default StarshipList