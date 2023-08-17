import React from 'react';
import Card from './Card';
import './cards.css'




export default function Cards(props) {
   const { characters , eliminarPersonaje} = props;
   const lista = characters.map((e) => (
         <Card 
         key= {e.id}
            id={e.id}
            name={e.name} 
            image={e.image} 
            species={e.species} 
            gender={e.gender}
            eliminarPersonaje={() => eliminarPersonaje(e.id)}
         />
        
   ))
  
     return (

      <div className='lista'>
         {lista}
      </div>


   );
     }