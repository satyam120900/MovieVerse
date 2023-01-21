import React, { useEffect, useState } from 'react';
import Navbar from '../HomeComponent/NavbarComponent/Navbar';
import Footer from '../HomeComponent/FooterComponent/Footer';
import styled from 'styled-components';
import "./Profile.css";
import {BiEdit} from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Profile = () => {
    useEffect(()=>{
    fetch(`http://localhost:5041/api/Theatre/GetTheatreById/${localStorage.getItem('theatreId')}`)
        .then(res=>res.json())
        .then(data=>{
          setTheatreName(data.theatreName);
          setTheatreEmail(data.theatreEmail);
          setTheatreMobile(data.theatrePhoneNo);
          setTheatreCity(data.theatreCity);
          setTheatrePassword(data.theatrePassword);
        });
    },[]);
    const [flag,setFlag]=useState(false);
    const [theatreName,setTheatreName]=useState("");
    const [theatreEmail,setTheatreEmail]=useState("");  
    const [theatreMobile,setTheatreMobile]=useState("");
    const [theatreCity,setTheatreCity]=useState("");
    const [theatrePassword,setTheatrePassword]=useState("");
    const handleSubmit=(event)=>
    {
      event.preventDefault();
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "theatreName": theatreName,
          "theatreEmail": theatreEmail,
          "theatrePhoneNo": theatreMobile,
          "theatrePassword": theatrePassword,
          "theatreCity": theatreCity
        })
      };
      fetch("http://localhost:5041/api/Theatre/UpdateTheatre",requestOptions)
        .then(res=>res.json())
        .then(data=>{
          alert(data.msg);
          window.location.reload();
        });
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className='Profile'>
        <MainContainerIntro>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" style={{height:"200px", width:"15vw",marginTop:"2rem"}} alt="Profile"/>
        <Name>{theatreName}</Name>
        <BiEdit size={30} style={{color:"white","cursor":"pointer"}} onClick={()=>{setFlag(!flag)}}></BiEdit>
        </MainContainerIntro>
        <MainContainerInfo>
        <Form style={{marginTop:"2rem"}}>
                <Form.Group className="mb-3" controlId="formTheatreName">
                    <Form.Label>Theatre Name</Form.Label>
                    {!flag&&<Form.Control value={theatreName} disabled style={{ width: "400px" }} />}
                    {flag&&<Form.Control value={theatreName} placeholder="Enter Theatre Name" onChange={(e)=>{setTheatreName(e.target.value)}} style={{ width: "400px" }} />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    {!flag&&<Form.Control type="email" value={theatreEmail} disabled/>}
                    {flag&&<Form.Control type="email" value={theatreEmail} placeholder="Enter email" onChange={(e)=>{setTheatreEmail(e.target.value)}}/>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    {!flag&&<Form.Control type="password" value={theatrePassword} disabled />}
                    {flag&&<Form.Control type="password" value={theatrePassword} placeholder="Password" onChange={(e)=>{setTheatrePassword(e.target.value)}}/>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Label>Mobile No.</Form.Label>
                    {!flag&&<Form.Control value={theatreMobile} disabled />}
                    {flag&&<Form.Control value={theatreMobile} placeholder="Enter Mobile No." onChange={(e)=>{setTheatreMobile(e.target.value)}}/>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    {!flag&&<Form.Control value={theatreCity} disabled />}
                    {flag&&<Form.Control value={theatreCity} placeholder="Enter City" onChange={(e)=>{setTheatreCity(e.target.value)}}/>}
                </Form.Group>
                {flag&&<Button variant="primary" type="submit" onClick={handleSubmit}>Update</Button>}
            </Form>
        </MainContainerInfo>
      </div>
      <Footer></Footer>
    </div>
  )
}
const MainContainerIntro = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:90vh;
  width:20vw;
  background:linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));
  box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter:blur(9.5px);
  border-radius:10px;
  text-transform:uppercase;
  letter-spacing:0.1rem;
  font-family: 'Piedra', cursive;
`;
const Name = styled.h2`
  margin:1.5rem 0 1.5rem 0;
  text-align:center;
  font-size:1.2rem;
  color:#fff;
`;
const MainContainerInfo = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:90vh;
  width:40vw;
  background:#93e2bb;
  box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter:blur(9.5px);
  border-radius:10px;
  text-transform:uppercase;
  letter-spacing:0.1rem;
  font-family: 'Piedra', cursive;
`;
export default Profile
