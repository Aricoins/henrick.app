const { Favorite } = require('../dbconection')

module.exports = async (req, res) => {
    const { name, origin, status, image,species,gender } = req.body

    try {
        if(![name, origin, status, image, species, gender].every(Boolean)) return res.status(401).send('Faltan datos')

        await Favorite.findOrCreate({where: {name, origin, status, image,species,gender}})

        const allFavs = await Favorite.findAll()

        return res.status(200).json(allFavs)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}