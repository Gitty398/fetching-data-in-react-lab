import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarshipList from './components/StarshipList/StarshipList'
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import * as starshipService from "./services/starshipService"

function App() {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])

  const fetchData = async (starship) => {
    const data = await starshipService.show(starship);
    setStarshipsData((old) => [...old, {
      name: data.name,
      starship_class: data.starship_class,
      manufacturer: data.manufacturer,
      model: data.model
    }
    ])
  }

  useEffect(() => {
    fetchData("falcon")
  }, []);






  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
