module.exports = function(sequelize, Datatypes) {
    var recipeTable = sequelize.define("recipeTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        recipeDescription: {
            type: Datatypes.STRING,
            len: [1, 300],
            required: true
        },
        recipeAllergens: {
            type: Datatypes.INTEGER, // Convert allergens from dropdown into numbers. (ex. almonds = 1, peanuts = 2, etc. Then when checking for allergens check if number = 0 first (which would mean no allergens) to avoid checking everything else)
            required: true
        },
        recipeSiteFavorite: {
            type: Datatypes.BOOLEAN //if we add a top 5/10/15 list
        }
    })
    return recipeTable
}