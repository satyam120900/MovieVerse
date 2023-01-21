import React, { useState } from 'react'
import "./Login.css"
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import ButtonComponent from './Button';
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const FaceBookBackground="linear-gradient(to right,#0546A0 0%,#663FB6 100%)";
  const InstagramBackground="linear-gradient(to right,#A12AC4 0%,#ED586C 40%,#F0A853 100%)";
  const TwitterBackground="linear-gradient(to right,#56C1E1 0%,#35A9CE 100%)";

  const navigate=useNavigate();
  const handleSubmit =(event)=> {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
  };
  fetch('http://localhost:5041/api/Theatre/LoginTheatre?TheatreEmail='+email+'&TheatrePassword='+password, requestOptions)
      .then(response => response.json())
      .then(res=>{
        if(res.title==="Unauthorized")
        {
          alert('Invalid Credentials');
          window.location.reload();
        }
        else
        {
          localStorage.setItem('token',res.token);
          localStorage.setItem('theatreId',res.theatreId);
          navigate('/home');
        }
      });
  };
  const[email,setEmail]=useState(); 
  const[password,setPassword]=useState();
  return (
    <div className='login'>
      <MainContainer>
        <LogIn className='animate-character'>LogIn</LogIn>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Input required type="email" placeholder="Email" onChange={e=>{setEmail(e.target.value)}}></Input>
            <Input required type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}></Input>
          </InputContainer>
          <ButtonContainer>
          <ButtonComponent  content="Sign In"  ></ButtonComponent>
          </ButtonContainer>
        </Form>
        <LogInWith>or Login With</LogInWith>
        <HorizontalRule></HorizontalRule>
        <IconsContainer>
          <Icon color="white"><img src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="GoogleIcon" height="25" width="25"/></Icon>
          <Icon color={FaceBookBackground}><FaFacebook /></Icon>
          <Icon color={InstagramBackground}><FaInstagram/></Icon>
          <Icon color={TwitterBackground}><FaTwitter/></Icon>
        </IconsContainer>
        <a href='https://www.google.com/'><ForgotPassword>Forgot Password ?</ForgotPassword></a>
        <DontHaveAccount>Don't have an account ? <Register href='/SignUp'>SignUp</Register></DontHaveAccount>
      </MainContainer>
    </div>
  )
}
const MainContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:80vh;
  width:30vw;
  background:rgba(255,255,255,0.15);
  box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter:blur(9.5px);
  border-radius:10px;
  text-transform:uppercase;
  letter-spacing:0.1rem;
  font-family: 'Piedra', cursive;
`;

const LogIn = styled.h1`
  margin:1.5rem 0 1.5rem 0;
  font-size:2.5rem;
`;
const Form=styled.form`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:35%;
width:100;

`;
const InputContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  height:20%;
  width:100;
`;
const Input=styled.input`
    background:rgba(255,255,255,0.15);
    box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius:2rem;
    margin-top:0.5rem;
    width:25vw;
    height:3rem;
    padding:1rem;
    border:none;
    outline:none;
    color:black;
    font-size:1rem;
    font-weight:lightbold;
    font-style:italic;
    &:focus{
      display:inline-block;
      box-shadow:0 0 0 0.2rem #FEFBEA;
      backdrop-filter:blur(12rem);
      border-radius:2rem;
    }
    &:hover{
      border-radius:2rem;
      box-shadow:0 0 0 0.2rem #FEFBEA;
  }
    &::placeholder{
      color: #232323;
      font-weight:lightbold;
      font-size:1rem;
      font-style:italic;
    }
`;
const ButtonContainer=styled.div`
  margin:1rem 0 0 0;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const LogInWith=styled.h5
`
  cursor:pointer;
  color:white;
  font-size:1rem;
  &:hover{
    color:#45f3ff;
  }
`;
const HorizontalRule=styled.div
`
  width:90%;
  height:0.3rem;
  boreder-radius:0.8rem;
  border:none;
  margin:0.2rem 0 0.2rem 0;
  background:linear-gradient(to right,#14163c 0%,#03217b 79%);
  backdrop-filter:blur(25px);
`;
const IconsContainer=styled.div`
  display:flex;
  justify-content:space-evenly;
  margin:0.5rem 0 1.5rem 0;
  width:80%;
`;
const ForgotPassword=styled.h5
`
  cursor:pointer;
  color:white;
  font-size:0.9rem;
  &:hover{
    color:#45f3ff;
  }
`;
const DontHaveAccount=styled.h6
`
  text-transform:none;
  color:#03217b;
  font-size:0.9rem;
`;
const Register=styled.a
`
  cursor:pointer;
  text-decoration:none;
  text-transform:none;
  color:white;
  font-size:1rem;
  font-weight:lightbold;
  &:hover{
    color:#45f3ff;
  }
`;
export default Login
