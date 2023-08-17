/*GET getCharById: "/character/:id"
GET login: "/login"
POST postFav: "/fav"
DELETE deleteFav: "/fav/:id"*/

const express = require("express");
const { getCharById } = require("../controllers/getCharacterById");
const userLogin = require("../controllers/login")
const router= express.Router();


router.get("/character/:id", getCharById)
router.get("/login", userLogin )

module.exports = router

