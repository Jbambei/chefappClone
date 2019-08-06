module.exports = function(sequelize, datatypes) {
    var reviewTable = sequelize.define("reviewTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reviewChefContent: { 
            type: Datatypes.STRING,
            required: true,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        reviewRecipeContent: { 
            type: Datatypes.STRING,
            required: true,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        reviewChef: {
            type: Datatypes.INTEGER //1-5 from dropdown or star click or w/e
        },
        reviewRecipe: {
            type: Datatypes.INTEGER //1-5
        }
    })
    return reviewTable
}