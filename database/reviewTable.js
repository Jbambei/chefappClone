module.exports = function(sequelize, ImageDataTypes) {
    var reviewTable = sequelize.define("reviewTable", {
        id: {
            type: ImageDataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reviewChefContent: { 
            type: ImageDataTypes.STRING,
            required: true,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        reviewRecipeContent: { 
            type: ImageDataTypes.STRING,
            required: true,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        reviewChef: {
            type: ImageDataTypes.INTEGER //1-5 from dropdown or star click or w/e
        },
        reviewRecipe: {
            type: ImageDataTypes.INTEGER //1-5
        }
    })
    return reviewTable
}