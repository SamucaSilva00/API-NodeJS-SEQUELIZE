const Satelite = require("../models/satelite")
const Planet = require("../models/planet")

module.exports = {
    async store (req,res) {
        const {planetId} = req.params;
        const {name, serialNumber} = req.body;

        const planet = await Planet.findByPk(planetId);

        if (!planet) {
            res.send("Esse planeta não existe!")
        }
        const satelite = await Satelite.create({name,serialNumber,planetId});
        return res.json(satelite)
    },

    async index (req,res) {
        const {planetId} = await req.params;

        if (!planetId) {
            res.send("Esse planeta não existe!")
        }

        const planet = await Planet.findByPk(planetId, {
            include: Satelite,
        })

        return res.json(planet)
    }
}