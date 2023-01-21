import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import Row from './Row.js';
const HomeContent = ({props}) => {
  const [allMovies,setAllMovies]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5041/api/User/GetAllMovies')
        .then(res=>res.json())
        .then(data=>setAllMovies(data))
  },[])
  const [allActionMovies,setAllActionMovies]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5041/api/User/GetMoviesByGenre?genre=Action')
        .then(res=>res.json())
        .then(data=>setAllActionMovies(data))
  },[])
  const [allAdventureMovies,setAllAdventureMovies]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5041/api/User/GetMoviesByGenre?genre=Adventure')
        .then(res=>res.json())
        .then(data=>setAllAdventureMovies(data))
  },[])
  const [allComedyMovies,setAllComedyMovies]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5041/api/User/GetMoviesByGenre?genre=Comedy')
        .then(res=>res.json())
        .then(data=>setAllComedyMovies(data))
  },[])
  const [allSciFiMovies,setAllSciFiMovies]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5041/api/User/GetMoviesByGenre?genre=Sci-Fi')
        .then(res=>res.json())
        .then(data=>setAllSciFiMovies(data))
  },[])
  const [allRomanceMovies,setAllRomanceMovies]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5041/api/User/GetMoviesByGenre?genre=Romance')
        .then(res=>res.json())
        .then(data=>setAllRomanceMovies(data))
  },[])
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1671550334055_ewdsc.jpg"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670479784350_2qws.jpg"
              alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg"
              alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1669651782718_webpizza.jpg"
              alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1671453965372_2wdq.jpg"
              alt="Fifth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{ fontFamily: "'Piedra', cursive","color": "white" }}>Trending Movies</h2>
      </div>
      <Row props={props} data={allMovies} rowId={1}></Row>
      <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{fontFamily: "'Piedra', cursive","color": "white" }}>Comedy</h2>
      </div>
      <Row props={props} rowId={2} data={allComedyMovies}></Row>
      <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{ fontFamily: "'Piedra', cursive","color": "white" }}>Action</h2>
      </div>
      <Row props={props} rowId={3} data={allActionMovies}></Row>
      <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{ fontFamily: "'Piedra', cursive","color": "white" }}>Adventure</h2>
      </div>
      <Row props={props} rowId={4} data={allAdventureMovies}></Row>
      <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{fontFamily: "'Piedra', cursive","color": "white" }}>Sci-Fi</h2>
      </div>
      <Row props={props} rowId={5} data={allSciFiMovies}></Row>
      <div style={{ "display": "flex" }}>
        <h3><b style={{ "color": "green" }}>|</b></h3>
        <h2 style={{fontFamily: "'Piedra', cursive","color": "white" }}>Romance</h2>
      </div>
      <Row props={props} rowId={6} data={allRomanceMovies}></Row>
    </div>
  )
}

export default HomeContent
