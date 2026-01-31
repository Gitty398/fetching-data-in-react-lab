import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarshipList from './components/StarshipList/StarshipList'
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import * as starshipService from "./services/starshipService"

function App() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [formData, setFormData] = useState({ search: "" })

  const handleSearch = (searchTerm) => {
    const normalized = searchTerm.trim().toLowerCase();


    if (!normalized) {
      setDisplayedStarships(starshipsData);
      return;
    }

    const filteredStarships = starshipsData.filter((starship) =>
      starship.name.toLowerCase().includes(normalized)
    );
    setDisplayedStarships(filteredStarships);
    setFormData({ search: "" });

  }

  const handleChange = (event) => {
    setFormData({ ...formData, search: event.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const starships = await starshipService.show();

      setStarshipsData(starships);
      setDisplayedStarships(starships);
    };


    fetchData();
  }, []);

  const searchResultNumber = displayedStarships.length;



  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search:</h2>
      {searchResultNumber > 0 ? (
        <h3>Displaying {searchResultNumber} starships</h3>
      ) : (
        <h3>Search for a starship by name</h3>
      )}
      <StarshipSearch handleSearch={handleSearch} formData={formData} handleChange={handleChange} />
      <h2>Starships</h2>
      <StarshipList starshipsData={displayedStarships} />
    </>
  )
}

export default App
