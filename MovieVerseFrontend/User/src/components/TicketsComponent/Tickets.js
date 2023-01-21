import React, { useEffect, useState } from 'react'
import Footer from '../HomeComponent/FooterComponent/Footer'
import Navbar from '../HomeComponent/NavbarComponent/Navbar'
import TicketCard from './TicketCard'
import "./Tickets.css"
const Tickets = () => {
    const [data,setData]=useState([]);
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
        fetch(`http://localhost:5041/api/User/GetOrderListsByUserId/${localStorage.getItem('UserId')}`)
        .then(res=>res.json())
        .then(data=>
        { 
          setData(data); 
          if(data[0].userId>0){
            setFlag(true);
          }
        });
    },[])
  return (
    <div>
      <Navbar></Navbar>
      <div className={flag?'noOrder':'noOrder active'}>
        <h1>No Orders Placed</h1>
      </div>
      <div className={flag?'tickets':'noOrder'}>
        <h1 className='heading'>My Tickets</h1>
        {data.map((item)=>{
            return(<TicketCard item={item} key={item.orderId}></TicketCard>);
        })}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Tickets
