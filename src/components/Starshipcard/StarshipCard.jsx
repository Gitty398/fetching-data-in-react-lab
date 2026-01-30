import React from 'react'

const StarshipCard = ({ starship }) => {
  return (
    <>
      <ul>

        <li>
          {starship.name}
        </li>

        <li>Class: {starship.starship_class}
        </li>

        <li>Manufacturer: {starship.manufacturer}
        </li>

        <li>Model: {starship.model}
        </li>

      </ul>
    </>
  )
}

export default StarshipCard