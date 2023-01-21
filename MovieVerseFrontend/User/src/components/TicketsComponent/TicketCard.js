import React, { useEffect, useState } from 'react'
import "./TicketCard.css"
const TicketCard = ({ item }) => {
    const [showTime,setShowTime]=useState();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day=new Date(String(item.time).substring(0,10))
    const [data,setData]=useState({
        movieImage:'',
        movieName:'',
        theatreName:'',
        theatreCity:''
    });
    const endShowTime=String(parseInt(String(showTime).substring(0,String(showTime).indexOf(":")))+2)+String(showTime).substring(String(showTime).indexOf(":"),String(showTime).length);
    useEffect(()=>{
        fetch(`http://localhost:5041/api/User/GetShowTimeByShowTimingsId/${item.showTimingsId}`)
        .then(res=>res.json())
        .then(data=>setShowTime(data.msg));
        fetch(`http://localhost:5041/api/User/GetTicketInfoByShowTimingsId/${item.showTimingsId}`)
        .then(res=>res.json())
        .then(data=>setData(data));
    },[item.showTimingsId])
    return (
        <div className='ticketbody'>
            <div className="ticket">
                <div className="left">
                    <div className="image" style={{backgroundImage:`url("${data.movieImage}")`}}>
                        <p className="admit-one">
                            <span>MOVIEVERSE</span>
                            <span>MOVIEVERSE</span>
                            <span>MOVIEVERSE</span>
                        </p>
                        <div className="ticket-number">
                            <p>
                                #20230{day.getDate()}0{item.orderId}
                            </p>
                        </div>
                    </div>
                    <div className="ticket-info">
                        <p className="date">
                            <span>{weekday[day.getDay()]}</span>
                            <span className="month">{month[day.getMonth()]} {day.getDate()+(day.getDate() % 10 === 1 && day.getDate() !== 11 ? 'st' : (day.getDate() % 10 === 2 && day.getDate() !== 12 ? 'nd' : (day.getDate() % 10 === 3 && day.getDate() !== 13 ? 'rd' : 'th')))}</span>
                            <span>{day.getFullYear()}</span>
                        </p>
                        <div className="show-name">
                            <h1>{data.movieName}</h1>
                            <h2>Tickets :- {" "}{item.bookedSeats}</h2>
                        </div>
                        <div className="time">
                            <p>{showTime}{" "}<span>TO</span> {endShowTime}</p>
                            <p>DOORS <span>@</span>{" "}{showTime}</p>
                        </div>
                        <p className="location"><span>{data.theatreName}</span>
                            <span className="separator"><i className="far fa-smile"></i></span><span>{data.theatreCity}</span>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <p className="admit-one">
                            <span>MOVIEVERSE</span>
                            <span>MOVIEVERSE</span>
                            <span>MOVIEVERSE</span>
                    </p>
                    <div className="right-info-container">
                        <div className="show-name">
                            <h1>{data.movieName}</h1>
                        </div>
                        <div className="time">
                            <p>{showTime}{" "}<span>TO</span>{" "}{endShowTime}</p>
                            <p>DOORS <span>@</span>{" "}{showTime}</p>
                        </div>
                        <div className="barcode">
                            <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code" />
                        </div>
                        <p className="ticket-number">
                            #20230{day.getDate()}0{item.orderId}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard
