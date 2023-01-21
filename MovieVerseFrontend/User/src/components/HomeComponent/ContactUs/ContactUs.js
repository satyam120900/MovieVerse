import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {
    const form = useRef();
    const navigate=useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r6hja7d', 'template_2p4etb5', form.current, 'HV9DyS49WT5Ek5kfx')
      .then((result) => {
            toast.info('Message Sent Successfully', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          console.log(result.text);
          setTimeout(() => {
            navigate('/home');
          }, 3000);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
      <StyledContactForm >
        <h1 style={{color:"white",textAlign:"center"}}>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
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

export default ContactUs
const StyledContactForm = styled.div`
  width: 400px;
  margin-top:50px;
  font-family: 'Piedra', cursive;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
        color:white;
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;