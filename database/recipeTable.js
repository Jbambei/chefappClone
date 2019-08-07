module.exports = function(sequelize, DataTypes) {
    var recipeTable = sequelize.define("recipeTable", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        recipeDescription: {
            type: DataTypes.STRING,
            len: [1, 300],
            required: true
        },
        recipeAllergens: {
            type: DataTypes.INTEGER, // Convert allergens from dropdown into numbers. (ex. almonds = 1, peanuts = 2, etc. Then when checking for allergens check if number = 0 first (which would mean no allergens) to avoid checking everything else)
            required: true
        },
        recipeSiteFavorites: {
            type: DataTypes.STRING //if we add a top 5/10/15 list
        }
    })
    return recipeTable
}