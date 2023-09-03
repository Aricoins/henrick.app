const {User} = require ('../dbconection')

const postUser = async (req, res) => {
    const { email, password } = req.body

    if(!email || !password) return res.status(400).json({error:'Faltan datos'})

    try {
        const user = await User.findOrCreate({
            where:{email, password}
        })

        res.status(201).json(user)

        
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}

module.exports = postUser