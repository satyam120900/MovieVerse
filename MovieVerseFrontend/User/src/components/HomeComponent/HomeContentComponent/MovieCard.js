import React from 'react'
import { useNavigate } from 'react-router-dom';
const MovieCard = ({item}) => {
  const navigate= useNavigate();
  const handleSubmit = () => {
    navigate(`/movieDetail/${item.movieId}`);
  };
  return (
    <div className="w-[190px] inline-block cursor-pointer relative p-2 z-0">
    <img className="w-full h-auto hover:opacity-50 rounded" src={item.movieImage} alt="" onClick={handleSubmit}/>
    </div>
  )
}

export default MovieCard
