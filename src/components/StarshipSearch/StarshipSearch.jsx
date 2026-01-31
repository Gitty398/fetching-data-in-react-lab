import { useState } from 'react'


const StarshipSearch = ({ formData, handleChange, handleSearch }) => {
  const [prevSearchTerm, setPreviousSearchTerm] = useState("Search for a Starship by name.")
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(formData.search);
    setPreviousSearchTerm(formData.search)
  }

  return (
    <>
      <h2>StarshipSearch</h2>

      <p>Last Search: {prevSearchTerm}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          name="search"
          value={formData.search}
          onChange={handleChange}>
        </input>
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default StarshipSearch
