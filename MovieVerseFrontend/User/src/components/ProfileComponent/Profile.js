import React, { useEffect, useState } from 'react';
import Navbar from '../HomeComponent/NavbarComponent/Navbar';
import Footer from '../HomeComponent/FooterComponent/Footer';
import styled from 'styled-components';
import "./Profile.css";
import {BiEdit} from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Profile = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    fetch(`http://localhost:5041/api/User/GetUserById/${localStorage.getItem('UserId')}`)
        .then(res=>res.json())
        .then(data=>{
          setUserName(data.userName);
          setUserEmail(data.userEmail);
          setUserMobile(data.userPhoneNo);
          setUserCity(data.userCity);
          setUserPassword(data.userPassword);
        });
    },[]);
    const [flag,setFlag]=useState(false);
    const [userName,setUserName]=useState("");
    const [userEmail,setUserEmail]=useState("");  
    const [userMobile,setUserMobile]=useState("");
    const [userCity,setUserCity]=useState("");
    const [userPassword,setUserPassword]=useState("");
    const handleSubmit=(event)=>
    {
      event.preventDefault();
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "userName": userName,
          "userEmail": userEmail,
          "userPhoneNo": userMobile,
          "userPassword": userPassword,
          "userCity": userCity
        })
      };
      fetch("http://localhost:5041/api/User/UpdateUser",requestOptions)
        .then(res=>res.json())
        .then(data=>{
          toast.success(data.msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(() => {
              window.location.reload(1);
            }, 3000);
        });
    }
    const deleteProfile=()=>
    {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      };
      fetch("http://localhost:5041/api/User/DeleteUser/"+localStorage.getItem('UserId'),requestOptions)
        .then(res=>res.json())
        .then(data=>{
          localStorage.removeItem('token');
          localStorage.removeItem('UserId');
          toast.success(data.msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(() => {
              navigate('/login');
            }, 3000);
        });
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className='Profile'>
        <MainContainerIntro>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" style={{height:"200px", width:"15vw",marginTop:"2rem"}} alt="Profile"/>
        <Name>{userName}</Name>
        <BiEdit size={30} style={{color:"white","cursor":"pointer"}} onClick={()=>{setFlag(!flag)}}></BiEdit>
        </MainContainerIntro>
        <MainContainerInfo>
        <Form style={{marginTop:"2rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>User Name</Form.Label>
                    {!flag&&<Form.Control value={userName} disabled style={{ width: "400px" }} />}
                    {flag&&<Form.Control value={userName} placeholder="Enter User Name" onChange={(e)=>{setUserName(e.target.value)}} style={{ width: "400px" }} />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    {!flag&&<Form.Control value={userEmail} type="email" disabled/>}
                    {flag&&<Form.Control value={userEmail} type="email" placeholder="Enter email" onChange={(e)=>{setUserEmail(e.target.value)}} />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    {!flag&&<Form.Control type='password' value={userPassword} disabled />}
                    {flag&&<Form.Control type='password' value={userPassword} placeholder="Password" onChange={(e)=>{setUserPassword(e.target.value)}} />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Label>Mobile No.</Form.Label>
                    {!flag&&<Form.Control value={userMobile} disabled />}
                    {flag&&<Form.Control value={userMobile} placeholder="Enter Mobile No." onChange={(e)=>{setUserMobile(e.target.value)}}/>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    {!flag&&<Form.Control value={userCity} disabled />}
                    {flag&&<Form.Control value={userCity} placeholder="Enter City" onChange={(e)=>{setUserCity(e.target.value)}}/>}
                </Form.Group>
                {flag&&<Button variant="primary" type="submit" onClick={handleSubmit}>Update</Button>}
                {flag&&<Button variant="danger" type="button" style={{marginLeft:"10px"}} onClick={deleteProfile}>Delete</Button>}
            </Form>
        </MainContainerInfo>
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
  font-size:1.5rem;
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
