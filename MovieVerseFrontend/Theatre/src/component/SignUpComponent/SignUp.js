import React, { useRef,useState } from 'react'
import styled from 'styled-components';
import ButtonComponent from '../LoginComponent/Button';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./SignUp.css";
import Icon from '../LoginComponent/Icon';
import "bootstrap/dist/css/bootstrap.css";
import { City } from "country-state-city";
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
const SignUp = () => {
  const navigate= useNavigate();
  const form = useRef();
  const handleSubmit = event=> {
    if(errorValidation())
    {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "theatreName": input.theatrename,
          "theatreEmail": input.email,
          "theatrePhoneNo": input.mobileNumber,
          "theatrePassword": input.password,
          "theatreCity": input.city,
          "seats":input.seats
        })
      };
    fetch('http://localhost:5041/api/Theatre/AddTheatre', requestOptions)
        .then(res=>res.json())
        .then(data=>{
          if(data.msg==="Registered Successfully")
          {
            emailjs.sendForm('service_r6hja7d', 'template_8y6q385', form.current, 'HV9DyS49WT5Ek5kfx')
               .then((result) => {
                  console.log(result.text);
                }, (error) => {
                  console.log(error.text);
              });
            alert('Registered Successfully');
          }
          else
          {
            alert('Email already exists');
          }
          navigate('/login');
        });
    }
    else
    {
      event.preventDefault();
      alert('Submitted With Error');
      window.location.reload();
    }
  };
  const FaceBookBackground = "linear-gradient(to right,#0546A0 0%,#663FB6 100%)";
  const InstagramBackground = "linear-gradient(to right,#A12AC4 0%,#ED586C 40%,#F0A853 100%)";
  const TwitterBackground = "linear-gradient(to right,#56C1E1 0%,#35A9CE 100%)";
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const numberReg=/^[0-9]*$/;
  const passwordReg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [input, setInput] = useState({
    theatrename: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    city: '',
    seats:''
  });
  const citiesList= City.getCitiesOfCountry("IN");
  const cities=citiesList.map((data)=>{return data.name});

  const [error, setError] = useState({
    theatrename: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    city: '',
    seats:''
  })
  const errorValidation=()=>{
    if(error.theatrename===''&&error.email===''&&error.mobileNumber===''&&error.password===''&&error.confirmPassword===''&&error.city===''&&error.seats===''){
      return true;
    }
  }
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
  
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "theatrename":
          if (!value) {
            stateObj[name] = "Please enter Theatre name.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }else if(!emailReg.test(value)){
            stateObj[name]="Please enter valid Email.";
          }
          break;
        case "mobileNumber":
          if (!value) {
            stateObj[name] = "Please enter Mobile Number.";
          }else if(value.length!==10 || !numberReg.test(value)){
            stateObj[name] = "Mobile Number should consist 10 digits";
          }
          break;
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }else if(!passwordReg.test(value)){
            stateObj[name]="Password is Weak";
          } 
          else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please Confirm your Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
        case "city":
          if (!value) {
            stateObj[name] = "Please enter City.";
          }else if(!cities.includes(value)){
            stateObj[name]="Please enter Correct City Name.";
          }
          break;
          case "seats":
          if (!value) {
            stateObj[name] = "Please Enter No. Of Seats.";
          }
          break;
        default:
          break;
      }

      return stateObj;
    });
  }
  return (
    <div className='SignUp'>
      <MainContainer>
        <SignUpNow className='animate-character'>Sign Up</SignUpNow>
        <Form ref={form} onSubmit={handleSubmit}>
          <InputContainer>
            <InputDiv>
              <InputDivColumn>
              <input className='inputBox' name="theatrename" value={input.theatrename} onChange={onInputChange} onBlur={validateInput} required type="text" placeholder="Enter Theatre name"></input>
              {error.theatrename && <span className='err'>{error.theatrename}</span>}
              </InputDivColumn>
              <InputDivColumn>
              <input className='inputBox' name="email" value={input.email} onChange={onInputChange} onBlur={validateInput} required type="email" placeholder="Enter Your Email"></input>
              {error.email && <span className='err'>{error.email}</span>}
              </InputDivColumn>
            </InputDiv>
            <InputDiv>
            <InputDivColumn>
            <input className='inputBox' name="mobileNumber" value={input.mobileNumber} onChange={onInputChange} onBlur={validateInput} required type="text" placeholder="Enter Your Mobile Number"></input>
              {error.mobileNumber && <span className='err'>{error.mobileNumber}</span>}
            </InputDivColumn>
            <InputDivColumn>
             <input className='inputBox' name="city" value={input.city} onChange={onInputChange} onBlur={validateInput} required type="text" placeholder="Enter Your City"></input>
              {error.city && <span className='err'>{error.city}</span>}
             </InputDivColumn> 
            </InputDiv>
            <InputDiv>
            <InputDivColumn>
            <input className='inputBox' name="password" value={input.password} onChange={onInputChange} onBlur={validateInput} required type="password" placeholder="Enter Your Password"></input>
              {error.password && <span className='err'>{error.password}</span>}
            </InputDivColumn>
            <InputDivColumn>
            <input className='inputBox' name="confirmPassword" value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput} required type="password" placeholder="Confirm Your Password"></input>
              {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
            </InputDivColumn>
            </InputDiv>
            <InputDiv>
              <InputDivColumn>
              <input className='inputBox' name="seats" value={input.seats} onChange={onInputChange} onBlur={validateInput} required type="number" placeholder="Enter No. Of Seats"></input>
              {error.seats && <span className='err'>{error.seats}</span>}
              </InputDivColumn>
            </InputDiv>
          </InputContainer>
          <ButtonContainer>
            <ButtonComponent content="Register"></ButtonComponent>
          </ButtonContainer>
        </Form>
        <LogInWith>or Login With</LogInWith>
        <HorizontalRule></HorizontalRule>
        <IconsContainer>
          <Icon color="white"><img src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="GoogleIcon" height="25" width="25" /></Icon>
          <Icon color={FaceBookBackground}><FaFacebook /></Icon>
          <Icon color={InstagramBackground}><FaInstagram /></Icon>
          <Icon color={TwitterBackground}><FaTwitter /></Icon>
        </IconsContainer>
      </MainContainer>
    </div>
  )
}
const MainContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  height:95vh;
  width:55vw;
  background:rgba(255,255,255,0.15);
  box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter:blur(9.5px);
  border-radius:10px;
  text-transform:uppercase;
  letter-spacing:0.1rem;
  font-family: 'Piedra', cursive;
`;
const SignUpNow = styled.h1`
  margin:1.5rem 0 0rem 0;
`;
const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
height:68%;
width:55vw;
`;
const InputContainer = styled.div`
  margin:2rem 0 1rem 0;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  height:68%;
  width:55vw;
`;
const InputDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  height:20%;
  width:52vw;
`;
const InputDivColumn = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  height:30%;
  width:30vw;
`;
const ButtonContainer = styled.div`
  margin:1rem 0 0 0;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const LogInWith = styled.h5
  `
  cursor:pointer;
  color:white;
  font-size:1rem;
  &:hover{
    color:#45f3ff;
  }
`;
const HorizontalRule = styled.div
  `
  width:90%;
  height:0.3rem;
  boreder-radius:0.8rem;
  border:none;
  margin:0.2rem 0 0.2rem 0;
  background:linear-gradient(to right,#14163c 0%,#03217b 79%);
  backdrop-filter:blur(25px);
`;
const IconsContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
  margin:0.5rem 0 1.5rem 0;
  width:80%;
`;
export default SignUp
