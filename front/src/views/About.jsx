import styled from "styled-components"
import imagenn from "./gif/rick.gif"
import { Link } from "react-router-dom";


const Contenedor= styled.div`

 background-color: #f7f7f3;
opacity: 0.9;
width: 25%;
max-width: 1100px;
height: 20em;
padding: 2%;
margin-top: 40%;
border-radius: 3%;
text-align: center;
margin-left: 36%; 
@media only screen and (max-width : 800px) {
border-color: aliceblue;
margin-top: 80%;
 border: 20%;
 display: grid;
 grid-template-columns: 80%; 
 grid-template-rows: 80%;
 
}
`
const Bloque= styled.div`
margin-top: 2%;
width: 15em ;
height: 20em;
background-color: rgba(4, 79, 72, 0.5);
display: flex;
flex-direction: column ;
justify-content: center;
box-shadow: 0em 0em 2em 0.5em;
border-radius: 1em;
align-self: center;
align-items: center;
align-content: center;
@media only screen and (max-width : 600px) {
border-color: aliceblue;
margin-top: 30%;
 border: 20%;
 display: grid;
 grid-template-columns: 80%; 
 grid-template-rows: 80%;
 
}    `;

  const Imagen= styled.img`
border-radius: 35%;
width: 60%;
height: 60%;
display:flex;
opacity: 1;
margin: 1%;
`
const Estilo = styled.span`
  background-color: #0e0e0e;
  opacity: 0.8;
  width: 86%;
  color: white; 
  text-align: jugitstify;
  margin-top: 33%;
  padding: 5%;
  `
const H2= styled.h2`
 
color: white;
font-size: 20px;
:hover{

color: #11f509; 

}
`

const Tecnologias = styled.div`
  
    flex-direction: column; 
    background-color: rgb(4, 79, 72, .8);
    width: 800px;
    height: 90%;
  opacity: 0.9;
  text-align: center;
  color: #faf9f9;
  font-family: Lato;
  padding: 2%;
  /*font-size: 80%;
  padding: 2%;
  align-items: center;*/
  
  display: flex;
  justify-content:center;
align-content: center;
margin-top: 50%;
`



function About (){

    return(<>
<Contenedor>
<Bloque>
     <H2> About Henrick App</H2>   
     <Imagen src={imagenn} alt="imagen del desarrollador"/>
       <Estilo >   
       Esta Single Page Application es desarrollada para Henry, con el entusiasmo propio de quien descubre cómo funciona cada elemento. <br/>
Rick, Morty y los 826 personajes que aquí se evocan pasan el tiempo entre la vida doméstica y los viajes espaciales e intergalácticos. <br/>
<br/> <i>Codeando</i> los algoritmos de estas tecnologías, ¿cómo no pretender habitar ese intersticio?
        </Estilo>
       <Tecnologias>
          <h3>   <p> Desarrollada por <Link to="https://aegres.netlify.app/">AEGR </Link></p> Con Javascript, CSS, HTML, React, React Router & Redux </h3>
        <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Logo de JavaScript" width="50px" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="Logo de CSS" width="50px" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="Logo de HTML5" width="50px" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo de React" width="50px" />
      <img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" alt="Logo de React Router" width="50px" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Logo de Redux" width="50px" />
      </div>
    </Tecnologias>
    </Bloque>
    
 
    </Contenedor>
    </>
    )
}

export default About