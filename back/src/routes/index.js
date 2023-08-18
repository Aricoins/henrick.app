/*GET getCharById: "/character/:id"
GET login: "/login"
POST postFav: "/fav"
DELETE deleteFav: "/fav/:id"*/

const express = require("express");
const { getCharById } = require("../controllers/getCharacterById");
const userLogin = require("../controllers/login")
const router= express.Router();


router.get("/character/:id", (req, res) => {
  const {id} = req.id
  if(id) {
  const char = getCharById (id);
  res.status(200).json(char) }}
  else{
  res.status(400).json("Ingrese un número del 1 al 385"))
           
router.get("/login", userLogin);
router.post("/favs, addFav);
router.delete("/fav/:id, deleteFav);

module.exports = router

