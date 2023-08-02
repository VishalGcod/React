import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { styled } from "styled-components";

export const DivArea = styled.div`
  height: 100dvh;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;

export const Star1=styled(FaStar)`
color:${(props)=>props.c};
font-size:75px;
cursor:pointer;
`; 
