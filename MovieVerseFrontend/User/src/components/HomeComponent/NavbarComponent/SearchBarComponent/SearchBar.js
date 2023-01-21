import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchBar.css";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    fetch('http://localhost:5041/api/User/GetMovieByName?movieName=' + value)
      .then(res => res.json())
      .then(data => { navigate(`/movieDetail/${data.movieId}`); window.location.reload(); })
  }
  return (
    <form onSubmit={handleClick}>
      <div className='searchbar'>
        <button type='submit'><i className='fas fa-search' /></button>
        <input type="search" required placeholder='Search for Movies' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </form>
  )
}

export default SearchBar
