import React, { useEffect, useState } from 'react';
import "./SeatBooking.css";
import Navbar from '../HomeComponent/NavbarComponent/Navbar';
import Footer from '../HomeComponent/FooterComponent/Footer';
import {  useNavigate, useParams } from 'react-router-dom';
import Cinema from './Cinema';
import { Button } from 'react-bootstrap';
import {TbCurrencyRupee} from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SeatBooking = () => {
  const date=new Date();
  const navigate=useNavigate();
  const [selectedSeats,setSelectedSeats]=useState([]);
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    const amount=selectedSeats.length*200;
    var options={
      key:"rzp_test_PnoxVWGztTfD21",
      key_secret:"7Cy1kR8mpUszwXt5Cnnw6kNJ",
      amount:amount*100,
      currency:"INR",
      name:"MovieVerse Entertainment Pvt Ltd",
      description:"For Booked Seats",
      handler:function(){
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
        };
        fetch(`http://localhost:5041/api/User/UpdateSeatsByShowTimingsId?Id=${id_3}&BookedSeats=${selectedSeats.length}`,requestOptions)
        toast.success('Seats Booked Sucessfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        const requestOption = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "orderId": 0,
            "showTimingsId": id_3,
            "userId": localStorage.getItem('UserId'),
            "bookedSeats": selectedSeats.length,
            "time":date
          })
      };
      fetch('http://localhost:5041/api/User/AddOrderList',requestOption)
      setTimeout(() => {
        navigate('/home');
      }, 3000);
      },
      prefill:{
        name:data.userName,
        email:data.userEmail,
        contact:data.userPhoneNo
      },
      notes:{
        address:"Razorpay Corporate Office"
      },
      theme:{
        color:"#242333"
      }
    }
    var pay=new window.Razorpay(options);
    pay.open();
  }
  const {id_2}=useParams();
  const [theatre,setTheatre]=useState([]);
  const {id_3}=useParams();
  const [bookedSeats,setBookedSeats]=useState([]);
  const [data,setData]=useState();
  useEffect(()=>{
        fetch(`http://localhost:5041/api/User/GetTheatreById/${id_2}`)
        .then(res=>res.json())
        .then(data=>{setTheatre(data)});
        fetch(`http://localhost:5041/api/User/GetBookedSeatsByTheatreIdShowTimingsId/${id_2}/${id_3}`)
        .then(res=>res.json())
        .then(data=>
          {
            setBookedSeats(data);
          });
          fetch(`http://localhost:5041/api/User/GetUserById/${localStorage.getItem('UserId')}`)
        .then(res=>res.json()).then(data=>setData(data))
         
  },[id_2,id_3])
const [flag,setFlag]=useState(false);
const ShowCase = () => {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat selected" /><small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /><small>Occupied</small>
      </li>
    </ul>
  )
}
console.log(selectedSeats);
  return (
    <div>
      <Navbar></Navbar>
      <div className='SeatBooking'>
        <h1>{theatre.theatreName}</h1>
        <ShowCase></ShowCase>
        <Cinema selectedSeats={selectedSeats} onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)} setFlag={setFlag} theatre={theatre} bookedSeats={bookedSeats}></Cinema>
        {flag&&<Button variant="danger" className='pay' onClick={handleSubmit}>Pay <TbCurrencyRupee size={25}></TbCurrencyRupee> {selectedSeats.length*200}</Button>}
      </div>
      <Footer></Footer>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </div>
  )
}

export default SeatBooking
