const users = require("../utils/users")

const userLogin = (req, res)=>{
const {email, password } = req.query

const valido = users.find((user)=> user.email=== email && user.pasword === password)
if (valido) {res.status(200).json({acces:true})
res.json(login)}

else {
return res.status(404).json({acces: false})

} }

module.exports= userLogin