import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import "./HomeContent.css";
const HomeContent = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5041/api/Theatre/GetAllMoviesByTheatreId?id=${localStorage.getItem('theatreId')}`)
        .then(res=>res.json())
        .then(data=>setData(data))
  },[])
  const navigate=useNavigate();
  const handleSubmit=()=>
  {
    navigate('/addMovie');
  }
  return (
    <div className='movielist'>
      <h1>Added Movies List</h1>
      <div className="movieRows">
        {data.map(c => <Card key={c.movieId} movie={c}/>)}
      </div>
      <Button onClick={handleSubmit}>Add New Movie</Button>
    </div>
  )
}

export default HomeContent
