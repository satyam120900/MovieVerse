import styled from 'styled-components';
import "./Button.css";
import React from 'react'

const ButtonComponent = ({content}) => {
  return (
       <StyledButton className='glow-on-hover'>{content}</StyledButton> 
  )
}
const StyledButton=styled.button`
    background:linear-gradient(to right,#14163c 0%,#03217b 79%);
    text-transform:uppercase;
    letter-spacing:0.2rem;
    width:20vw;
    height:3rem;
    color:white;
    border:none;
    border-radius:2rem;
    cursor:pointer;
    position: relative;
    z-index: 0;
`;
export default ButtonComponent
