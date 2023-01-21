import React, { useState } from 'react';
import "./Home.css";
import Chatbot from './ChatBotComponent/Chatbot';
import Navbar from './NavbarComponent/Navbar';
import Sidebar from './SidebarComponent/Sidebar';
import Footer from "./FooterComponent/Footer"
import Login from "../LoginComponent/Login"
const Home = () => {
const [chatbot,setChatbot]=useState(false); 
if(localStorage.getItem('token')===null)
{
  alert('Please Login');
  return(
    <Login></Login>
  )
}
else{
  return (
    <div className='Home'>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className='chatbotDiv'>
      {chatbot&&<Chatbot></Chatbot>}
      <button className='chatbot' onClick={()=>setChatbot(!chatbot)}><i className='fas fa-robot fa-2x'/></button>
      </div>
      <Footer></Footer>
    </div>
  )
}
}
export default Home
