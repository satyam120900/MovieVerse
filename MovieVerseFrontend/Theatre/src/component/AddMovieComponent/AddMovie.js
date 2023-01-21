import React, { useState } from 'react'
import Navbar from "../HomeComponent/NavbarComponent/Navbar"
import Footer from "../HomeComponent/FooterComponent/Footer"
import "./AddMovie.css";
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import genre from"./genres.json";
import timings from "./timings.json";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
const AddMovie = () => {
  const navigate=useNavigate();
  const handleSubmit=(event)=>
    {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "movieName": movieName,
          "movieImage": movieImageUrl,
          "moviePoster": moviePosterUrl,
          "movieRating": movieRating,
          "movieYoutubeId": movieYoutubeId,
          "movieDescription": movieDescription,
          "movieReleasedDate": movieReleasedDate,
          "movieDuration": movieDuration,
          "theatreID": localStorage.getItem('theatreId'),
          "genres": lstgenres,
          "showTimings":lstTiming
        })
      };
      fetch("http://localhost:5041/api/Theatre/AddMovie",requestOptions)
      .then(res=>res.json())
        .then(data=>{
          alert(data.msg);
          navigate('/home');
        });
    }
  const[movieName,setMovieName]=useState();
  const[movieDescription,setMovieDescription]=useState();
  const[movieImageUrl,setMovieImageUrl]=useState();
  const[moviePosterUrl,setMoviePosterUrl]=useState();
  const[movieYoutubeId,setMovieYoutubeId]=useState();
  const [genres,setGenres]=useState([]);
  var lstgenres=[];
  for(let i=0;i<genres.length;i++)
  {
    lstgenres.push(genres[i].label);
  }
  const [timing,setTiming]=useState([]);
  const lstTiming=[];
  for(let i=0;i<timing.length;i++)
  {
    lstTiming.push(timing[i].label);
  }
  const [movieRating,setMovieRating]=useState();
  const [movieReleasedDate,setMovieReleasedDate]=useState();
  const [movieDuration,setMovieDuration]=useState();
  return (
    <div>
      <Navbar></Navbar>
      <div className='addMovie'>
        <MainContainerInfo>
            <h2 style={{marginTop:"1rem"}}>Add A Movie</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formMovieName">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control placeholder="Enter Movie Name" style={{ width: "500px" }} onChange={(e)=>{setMovieName(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMovieDescription">
                    <Form.Label>Movie Description</Form.Label>
                    <Form.Control placeholder="Movie Description" onChange={(e)=>{setMovieDescription(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMovieImageUrl">
                    <Form.Label>Movie Image Url</Form.Label>
                    <Form.Control placeholder="Movie Image Url" onChange={(e)=>{setMovieImageUrl(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMoviePosterUrl">
                    <Form.Label>Movie Poster Url</Form.Label>
                    <Form.Control placeholder="Movie Poster Url" onChange={(e)=>{setMoviePosterUrl(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYoutubeId">
                    <Form.Label>Movie Trailer YouTube Id</Form.Label>
                    <Form.Control placeholder="Trailer YouTube Id" onChange={(e)=>{setMovieYoutubeId(e.target.value)}}/>
                </Form.Group>
                <Form.Label>Genres</Form.Label>
                <Select isMulti options={genre} placeholder="Genres" onChange={setGenres}></Select>
                <Form.Label>Show Timings</Form.Label>
                <Select isMulti options={timings} placeholder="Show Timings" onChange={setTiming}></Select>
                <Form.Group className="mb-3" controlId="formMovieRating">
                    <Form.Label>Movie Rating</Form.Label>
                    <Form.Control placeholder="Movie Rating" onChange={(e)=>{setMovieRating(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMovieReleasedDate">
                    <Form.Label>Movie Released Date</Form.Label>
                    <Form.Control type="date" onChange={(e)=>{setMovieReleasedDate(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMovieDuration">
                    <Form.Label>Movie Duration</Form.Label>
                    <Form.Control placeholder="Movie Duration" onChange={(e)=>{setMovieDuration(e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>Add Movie</Button>
            </Form>
        </MainContainerInfo>
      </div>
      <Footer></Footer>
    </div>
  )
}
const MainContainerInfo = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:160vh;
  width:50vw;
  background:linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));
  box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter:blur(9.5px);
  border-radius:10px;
  text-transform:uppercase;
  letter-spacing:0.1rem;
  font-family: 'Piedra', cursive;
`;
export default AddMovie
