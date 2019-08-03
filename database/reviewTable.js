module.exports = function(sequelize, datatypes) {
    var reveiwTable = sequelize.define("reviewTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reveiwChefContent: { 
            type: Datatypes.STRING,
            required: true,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        reveiwRecipeContent: { 
            type: Datatypes.STRING,
            required: true,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        reveiwChef: {
            type: Datatypes.INTEGER //1-5 from dropdown or star click or w/e
        },
        reviewRecipe: {
            type: Datatypes.INTEGER //1-5
        }
    })
}