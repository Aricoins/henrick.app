import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import styled from 'styled-components'

const  Favoritos = styled.div`
  display: grid;
  grid-template-columns: 30% 50% 20%; 
  grid-template-rows: 30% 50% 20%; 
  grid-column-end: 3;
  margin-top: 30%;
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
  @media only screen and (max-width : 800px) {
border-color: aliceblue;
margin-top: 50%;
 border: 20%;
 display: grid;
 grid-template-columns: 80%; 
 grid-template-rows: 80%;
 
}
  `

const Favorites = ({myFavorites}) => {
  return (
    <Favoritos>
    <div>
         {myFavorites.map(({id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites})=> <Card 
  key= {id}
  id={id}
  name ={name}
  status={status}
  species={species}
  gender={gender}
  origin={origin}
  image={image}
  removeFav={removeFav}
  />)}
  </div>     </Favoritos>
  )
}

function mapStateToProps(state){
return{ myFavorites: state.myFavorites}    
}

export default connect(mapStateToProps)(Favorites)
