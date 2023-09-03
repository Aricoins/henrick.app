const { User } = require('../dbconection')
module.exports = async (req, res) => {
    const { email, password } = req.body;
console.log (req)
    if(!email || !password) return res.status(400).send('Faltan datos')

    try {
        const logUser = await User.findOne({
            where:{email}
        })

        if(!logUser) return res.status(404).send('Usuario no encontrado')

        return logUser.password === password ? res.status(202).json({access:true}) : res.status(403).json({error: "Contraseña incorrecta"})
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}