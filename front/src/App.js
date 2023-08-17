import './App.css';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from "./components/Cards" 
import Nav from './components/Nav';
import About from './views/About'
 import  Detail  from './views/Detail';
 import Form from './components/Form/Form';
 import { useParams } from 'react-router-dom';
import Favorites from './components/Favorites';



function App() {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const {id} = useParams()

   const EMAIL = 'usuario@henrick.app';
   const PASSWORD = 'pass1234'

   function login({email, password}){
      if(email === EMAIL && password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
      else alert('Usuario o contraseña inválida')
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access, navigate])


   function searchUser(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if(!characters.find(char => char.id === data.id)){
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }else{
            alert(`Ya existe el personaje con el id ${id}`)
         }
      }).catch((err) => alert(err.response.data.error) )
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
      function eliminarPersonaje(id) {
     const nuevosPersonajes = characters.filter((personaje) => personaje.id !== id);
     setCharacters(nuevosPersonajes);
   }

   return (
      <div className='App'>
        { pathname !== '/' && <Nav searchUser={searchUser}/> }
        <Routes>
          <Route path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} eliminarPersonaje={eliminarPersonaje}/>} />
          <Route path='/about' element={<About/>}/>
          <Route path="/favorites" element={<Favorites characters={characters}/>}/>
          <Route path='/detail/:id' element={
          <Detail 
                  id={id} 
                  characters={characters} 
                  setCharacters={setCharacters} 
                  eliminarPersonaje={eliminarPersonaje}   />        
                          }/>
        
          </Routes>
          </div>
   );
}

export default App;


// import React, { useEffect } from 'react'
// import './App.css'
// import axios from 'axios'
// import Nav from "./components/Nav.jsx"
// import Cards from './components/Cards.jsx'
// import { useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import Detail from './views/Detail'
// import { Route, Routes, useParams, useNavigate } from 'react-router-dom'
// import About from './views/About'
// import Form from "./components/Form/Form.jsx"






// function App() {
//   const [character, setCharacter] = useState([])
//   const [access, setAccess] = useState(false)
//   const {pathname} = useLocation()
//   const {id} = useParams()
//   const navigate = useNavigate();


//   let EMAIL= "usuario@henrick.app"
//   let PASSWORD= "pass1234"
  
//     function login(userData){
//   if (userData.username === EMAIL && userData.password === PASSWORD){
//            setAccess(true);
//          navigate('/home')
//          }
//     else alert( "Credenciales incorrectas")}
      
     
//      const logout =() =>{
//   setAccess(false)
//   navigate("/")
//   }

// // useEffect(()=>{
// //     !access && navigate("/") 
// //   }, [access])

  
  

//   function searchUser(id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//        if (data.name) {
//           setCharacter((oldChars) => [...oldChars, data]);
//        } else {
//           window.alert('¡No hay personajes con este ID!');
//        }
//     });
//   }

//   function eliminarPersonaje(id) {
//     const nuevosPersonajes = character.filter((personaje) => personaje.id !== id);
//     setCharacter(nuevosPersonajes);
//   }
// //credenciales fake:


//   return (
//     <div className='App'>
// {pathname !== "/" && <Nav searchUser={searchUser}/>  }
//         <Routes>
                
//              <Route path="/" element={<Form login={login} />}/>
//              <Route path="/home" element={<Cards character={character} eliminarPersonaje={eliminarPersonaje}/>}/>
//              <Route className="aboutStyle" 
//                     path="/about" 
//                     element={<About />}/>
           
//         <Route 
//               path="/detail/:id" 
//               element={<>
//                        <Nav searchUser={searchUser}/>
//                        <Detail id={id} 
//                                 character={character} 
//                                  setCharacter={setCharacter} 
//                                  eliminarPersonaje={eliminarPersonaje}/>
//                         </>}       
//                             />
//     </Routes>
// </div>
   
//   )
//   }

// export default App
