const axios = require('axios')

function getCharById(req, res) {

const {id}= req.params

  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        console.log(response.data)
       
        const character = {
          id: id,
          name: response.data.name,
          gender: response.data.gender,
          species: response.data.species,
          origin: response.data.origin.name,
          image: response.data.image,
          status: response.data.status,
        };
        res.status(200).json(character)  
        }) .catch((error) => {
          if(error.response.status === 404)
          {res.status(404).send("not fund")}
          else
          {res.status(500).send({messege: error.message}) }
        });
  }
  
module.exports = { getCharById }