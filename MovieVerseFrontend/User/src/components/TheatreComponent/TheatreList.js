import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import TheatreCard from './TheatreCard';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../HomeComponent/NavbarComponent/Navbar';
import Footer from '../HomeComponent/FooterComponent/Footer';
import "./TheatreList.css";
import { useParams } from 'react-router-dom';
const TheatreList = () => {
    const {id}=useParams();
  const [movie,setMovie]=useState([]);
  const [genre,setGenre]=useState([]);
  const [data,setData]=useState([]);
  useEffect(()=>{
        fetch(`http://localhost:5041/api/User/GetMovieById/${id}`)
        .then(res=>res.json())
        .then(data=>setMovie(data));
        fetch(`http://localhost:5041/api/User/GetGenresByMovieId?id=${id}`)
        .then(res=>res.json())
        .then(data=>setGenre(data));
        fetch(`http://localhost:5041/api/User/GetTheatreListByMovieId?id=${id}`)
        .then(res=>res.json())
        .then(data=>setData(data));
  },[id])
  return (
    <div className='theatrebody'>
        <Navbar></Navbar>
       <div className='theatreListHeader'>
                <br />
                <h1>{movie.movieName}</h1>
                <div className='theatrebadge'>
                    <span className='dot'>UA</span>
                    {genre.map((item)=><h5 key={item.genreId}><Badge pill bg="secondary">{item.genreName}</Badge></h5>)}
                </div>
        </div>
        <br></br>
        <div className='theatreList'>
        <ListGroup>
        {data.map((item) => {
                        const id=movie.movieId;
                        return (
                            <ListGroup.Item key={item.theatreId}>
                                <TheatreCard item={item} id={id}></TheatreCard>
                            </ListGroup.Item>
                        );
                    })}
        </ListGroup>
        </div>
        <br />
        <Footer></Footer>
    </div>
  )
}

export default TheatreList
