const Planet = require("../models/planet")
const Satelite = require("../models/satelite")
const Cap = require("../models/cap")
const Spaceship = require("../models/spaceship")
 
Planet.hasOne(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"});

Cap.belongsToMany(Spaceship, {
    foreingKey: "capId",
    through: "capSpaceship",
    as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps",
});

module.exports = {Planet, Satelite};