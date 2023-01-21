import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import {FaMobileAlt} from "react-icons/fa";
import {IoFastFoodOutline} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import "./TheatreCard.css"
const TheatreCard = ({ item,id}) => {
    const navigate= useNavigate();
    const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5041/api/User/GetShowTimingsByMovieIdTheatreId?movieId=${id}&theatreId=${item.theatreId}`)
        .then(res=>res.json())
        .then(data=>setData(data));
  },[id,item.theatreId])
    return (
        <div className='theatre'>
            <div className='theatretittle'>
                <h5>{item.theatreName}</h5>
                <div className='theatrelogo'>
                <div className='theatrelogoticket'>
                    <FaMobileAlt size={25}/>
                    <br/>
                    <p>M-tickets</p>
                </div>
                <div className='theatrelogofood'>
                    <IoFastFoodOutline size={25}/>
                    <p>Food & Beverages</p>
                </div>
                </div>
            </div>
            <div className='theatretiming'>
                {data.map((timings)=>
                {
                    const handleSubmit = () => {
                        navigate(`/seats/${id}/${item.theatreId}/${timings.showTimingsId}`);
                    };
                    return(
                        <Button onClick={handleSubmit} variant="outline-danger" key={timings.showTimingsId}>{timings.showTime}</Button>
                    )
                })}
            </div>
        </div>
    )
}

export default TheatreCard
