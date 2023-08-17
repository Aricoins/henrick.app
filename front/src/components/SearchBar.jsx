import styled from "styled-components";
import React from "react";
import { useState } from "react";


const Barra = styled.nav`
display: flex;
flex-direction: row;


/* padding: 5%;
padding-bottom: 6%;
border-radius: 10px;
border-color: black;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: end; */
`

const Input= styled.input`

border-color: #5cf509;
height: 3rem; 
`

const Boton = styled.button`
    background-color: #5cf509;
    color: #0d0000;
    width: 30%;
    height: 3em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8%;
    border: 0.08em solid black;
    transition-duration: 0.8s;
    cursor: pointer;
       :hover{
       background-color: white;
        border-color: #22f901;
        border-bottom: #09090e;
      color: #080000;
        cursor: pointer;
      }
`

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const ingreso = (event) => {
    setId(event.target.value);
  };
   const personajeRandom = parseInt(Math.random() * (826 - 1) + 1);

  return (
    <Barra>
         <Input type='search' onChange={ingreso} />
         
        <Boton onClick={() => { props.searchUser(id) }}>Agregar</Boton>
        <Boton onClick={() => {props.searchUser(personajeRandom)}}> Al azar</Boton>
    </Barra>
  );
}
