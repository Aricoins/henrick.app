import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../Redux/actions/actions";
import { useEffect, useState } from "react";

const Carta = styled.div`
  
  background-color: rgba(255,255,255,.3);
border-width: 5px;
border-color: black;
padding: 2%;
margin: 2%;
display: column;
justify-content: center;
align-items: flex-end;
`


const ImagenBrilla = styled.h2`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  justify-content: center;
  border-radius: 10%;
  transition: 1s;
  opacity: 1;
  :hover {
    filter: brightness(1.2);
    width: 83%;
   }
`;

const EstiloDiv = styled.div`
  width: 90%;
  background-color: rgba(4, 79, 72, 0.715);
  display: flex;
  flex-direction: column ;
  justify-content: center;
  margin: 0.5em;
  box-shadow: 0em 1em 2em 0.5em;
  border-radius: 1em;
  align-self: center;
  align-items: center;
  align-content: center;
  opacity: 1;
  `;

const StyleLink = styled(NavLink)`
   color: #f2f5f4;
  text-decoration: none;
  text-align: center;
  transition: 1s;
  background-color: red;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  opacity: 1;
  :hover {
  
    background-color: #4dcceb45;
    color: black;
    cursor: pointer;
    opacity: 1;
  }
`;
const BotonBorde = styled.button`
  background-color: #fd0909;
  display: flex;
  color: white;
  height: 8%;
  width: 15%;
  margin: 5%;
  opacity: 1;
  cursor: pointer;
  :hover{
    background-color: #eeabab;
    color:white;
  }
`;
const H3 = styled.h3`
color:white;
display: flex;
justify-content: center;
margin: 1%;
opacity: 1;

`;

const Banda = styled.div`
  background-color: red;
 display: flex;
 padding: 10%;
 opacity: 1;
  :hover {
    background-color: #4dcceb45;
    color: black;
    cursor: pointer;
  }
`;


 function Card({id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
  eliminarPersonaje}) {
  const[isFav, setIsFav] = useState(false)

 function handleFavorite(){

    if (isFav){ setIsFav(false); 
                removeFav(id)
    }else{
      setIsFav(true)
      addFav( { id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
        myFavorites,
        eliminarPersonaje})
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);

   return (
 <Carta>
 <BotonBorde onClick={() => { eliminarPersonaje ()}}> X </BotonBorde>
 <EstiloDiv>
 {
   isFav ? (
      <BotonBorde onClick={handleFavorite}>❤️</BotonBorde>
   ) : (
      <BotonBorde onClick={handleFavorite}>🤍</BotonBorde>
   )
}
<Banda>     
  <StyleLink to ={`/detail/${id}`}>{name}</StyleLink>
</Banda>
      <ImagenBrilla>
       <img src={image} alt="Acá debería verse la imagen del perdonaje"  />
      </ImagenBrilla>
      <H3>{species}</H3>
      <H3>{gender}</H3>
      <H3>{id}</H3>
    </EstiloDiv>
    </Carta> );
}

export function mapDispatchToProps(dispatch){
return {
    addFav: function(props){
    dispatch (addFav(props))
},
  removeFav: function(id){
  dispatch(removeFav(id))
}}
}
export function mapStateToProps(state){
return {
  myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card) 
