import styled from "styled-components";

import React from 'react'

const Icon = ({color,children}) => {
  return (
    <div>
      <StyledIcon background={color} >{children}</StyledIcon>
    </div>
  )
}

const StyledIcon=styled.div`
    height:2.5rem;
    width:2.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5rem;
    color:white;
    cursor:pointer;
    background:${(props)=>props.background};
    &:hover{
        border-radius:3rem;
        box-shadow:0 0 0 0.2rem rgba(31,38,135,0.37);
        backdrop-filter:blur(9.5px);
        transform:rotate(360deg) ;
        transition-duration:500ms;

    }
    svg{
        width:1.5rem;
        height:1.5rem;
    }
`;

export default Icon
