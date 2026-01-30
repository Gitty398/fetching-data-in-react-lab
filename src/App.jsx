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

  useEffect(() => {
    const fetchData = async () => {
      const starships = await starshipService.show();

      setStarshipsData(starships);
      setDisplayedStarships(starships);
    };


    fetchData();
  }, []);




  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search:</h2>
      <StarshipSearch />
      <h2>Starships</h2>
      <StarshipList starshipsData={starshipsData} />
    </>
  )
}

export default App
