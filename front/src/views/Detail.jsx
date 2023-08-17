
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components"; 

const Onda = styled.div`
background-color: #060000;
color:white;
width: 20em;
  padding: 1em;
margin: 10%;
  margin-left: 35%;
  box-shadow: 0em 1em 2em 0.5em;
  border-radius: 1em;
  opacity: 0.9;
  justify-content:center;
  align-items: center;
    text-align: center;
    @media only screen and (max-width : 600px) {
border-color: aliceblue;
margin-top: 30%;
 border: 20%;
 display: grid;
 grid-template-columns: 80%; 
 grid-template-rows: 80%;
 
}

`


const Propiedades = styled.h3`
  justify-content: center;
color: red; 
`

const Detalle = styled.div`
background-color: red

`

function Detail(props) {
  const { id} = useParams();
  const { characters , setCharacters} = props;
  
  useEffect(() => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacters({});
}, [id, setCharacters]);

        console.log(characters)
  return (
    <>
    <Onda>
    <Detalle>Nombre: {characters.name} </Detalle>
      <h1>{id}</h1>
      <img alt="Imagen del personaje" src={characters.image} /> 
    
     <Propiedades>Género:</Propiedades>  {characters.gender}
     
      {/* <h4>{props.origin?.name}</h4> */}
     <Propiedades>Especie:</Propiedades> {characters.species}
    
      <Propiedades>Episodio:</Propiedades> {characters.episode}
      
    
      {/* <div>{character.result.dimension}</div> */}
     
    </Onda>
    
      </>
  );
}

export default Detail;
