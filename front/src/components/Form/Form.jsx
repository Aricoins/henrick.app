import React from "react"
import { useState } from "react";
import styled from "styled-components"
import imagen from "../../views/gif/rick.gif"
import {validation} from "./validation";


const Contenedor= styled.div`
   
    margin: 35%;
margin-top: 10%;
@media only screen and (max-width : 600px) {
 border: 20%;
 display: grid;
 grid-template-columns: 100%; 
 grid-template-rows: 100%;
 grid-row-start: 3;
 max-width: 80% ;
 text-align: center;
 justify-content: right;
 align-content: center;

}


`

const WelcomeCard = styled.div`
background-color: #2b2626;
color: white;
max-width: 100%;
max-height: 100%;
font-size: 0.8em;
padding: 1em;
box-shadow: 0.5em 0.5em 12em 2em;
border-radius: 1em;
opacity: 0.9;
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;


:hover{
  border: 5px solid #07f907;

}
  @media only screen and (max-width : 600px){
width: 11em;
justify-content: center;
text-align: center;
height: 100%;
  }
  `;


const BotonSubmit = styled.button`
text-align: center;
flex-direction: column;
background-color: #d6e909;
  align-content: center;
  width: 90%;
  color: #080000;
  cursor: pointer;
  :hover{
    background-color: #07f907;
    color: #090000;
  }
  @media only screen and (max-width : 600px){
width: 5em;
justify-content: center;
text-align: center;
align-self: center;
height: 2em }
`;
const ImagenW = styled.img`
       max-width: 50%;
`
const BotonIn = styled.input`
left:0;
right: 0;
margin: auto;
@media only screen and (max-width : 600px){
width: 7em;
text-align: center;
  }
`;

const H1 = styled.h1`
color:white;
display: flex;
justify-content: center;
align-items: center;
:hover{
  color:#07f907;
}
`;

const Formulario= styled.form`
 max-width: 80%;
 max-height: 80%;
 text-align: center;
 justify-content: center;
 align-content: center;
 align-items:center;
 align-self: center;
`
const Pe =styled.p`
  font-size: 0.8em;
  color:white;
  background-color: #31c253;
  justify-content: center;
`


export default function Form({ login }) {
  const [userData, setUserData] = useState({
      email:'',
      password:''
  })

  const [errors, setErrors] = useState({})

  function handleChange(event){
      setErrors(validation({...userData, [event.target.name]:event.target.value}))
      setUserData({...userData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
      event.preventDefault()
      login(userData)
  }
return (<Contenedor>
  <WelcomeCard>
  <H1>Henrick App</H1>
    <ImagenW src={imagen}/>
          <Formulario onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">
                  Email:
                  <BotonIn 
                      type="text" 
                      id="email"
                      value={userData.email}
                      placeholder="usuario@henrick.app"
                      name="email"
                      onChange={handleChange}/>
              </label>
              {errors.email && (<Pe>{errors.email}</Pe>)}
              </div>
              <br />
            <div>
              <label htmlFor="password">
                  Password:
                  <BotonIn 
                      type="password" 
                      id="password"
                      value={userData.password}
                      placeholder="pass1234"
                      name="password" 
                      onChange={handleChange}/>
              </label>
              {errors.password && (<Pe >{errors.password}</Pe>)}
              </div> <br />
              <BotonSubmit>Ingresar</BotonSubmit>
          </Formulario> <br />
          Email: <br />
          usuario@henrick.app 
          <br /> Password: <br />
          pass1234 </WelcomeCard>
      </Contenedor>
      )
}

// export default function Form({login}) {
//   const [userData, setUserdata] = useState({
//    username: "",
//    password: ""
//   })
  
//   const [errors, setErrors] = useState({
//     username: "",
//     password: ""
//   });

//  const handleChange = (e)=> {
//       const property= e.target.name;
//     const value = e.target.value; 
//     setErrors(validation({...userData, [property]:value}))
//     setUserdata({...userData, [property]: value});
//   }
//   const handleSubmit = (e) =>{
// e.preventdefault()
//   login(userData)
// }



//   return ( <Contenedor>
//       <WelcomeCard>
     
//       <H1>Henrick App</H1>
//        <ImagenW src={imagen}/>
//        <h2> Los 827 personajes de Rick & Morty</h2>
//         <Formulario onSubmit={handleSubmit}>

//         <div>
//         <label htmlFor="username" >
//           Ingrese un e-mail:
//         <BotonIn name="username" 
//                  id="username"
//                  type="text"
//                  value={userData.username} 
//                  placeholder="usuario@henrick.app" 
//                  onChange={handleChange}
//                  autoComplete="on"
//                  /> 
//                   {errors.username &&(<Pe>{errors.username}</Pe>)}
//         </label>
//         </div>
        
//         <div> 
//         <label htmlFor="password">
//             Ingrese una contraseña:
           
//         <BotonIn type="password"
//                  id="password" 
//                  name="password" 
//                  value={userData.password} 
//                  placeholder="pass1234" 
//                  onChange={handleChange}
//                  autoComplete="off"
//                 />
//                          {(errors.password && <Pe>{errors.password}</Pe>)}
//           </label>
//           </div>
          
//           <div> 
//           <label>
//           <BotonBorde type="submit" > Ingresar </BotonBorde>
//           </label>  
//           </div>
              
//          </Formulario> 
        
//         </WelcomeCard>
//         </Contenedor>


// );


