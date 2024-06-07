const { where } = require("sequelize");
const Planet = require("../models/planet")

module.exports = {
    async store(req,res) {
        const {name, position} = req.body;
        const planet = await Planet.create({name, position});
        return res.json(planet)
    },

    async index(req,res) {
        const planets = await Planet.findAll();
        return res.json(planets)
    },

    async put(req,res) {
        const {name, position} = req.body;
        await Planet.update(
            {name, position}, 
            {
                where: {
                    id: req.params.id
                }
            }
        )
        return res.send("Planeta atualizado com sucesso!")
    },

    async delete(req,res) {
        await Planet.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.send("Planeta excluido com sucesso!")
    }, 

   async getById(req,res) {
        const planet = await Planet.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(planet)
    }
     
}