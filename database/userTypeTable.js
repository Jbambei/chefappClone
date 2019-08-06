module.exports = function(sequelize, Datatypes) {
    var userTypeTable = sequelize.define("userTypeTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        //needs foreign key to user info
        userType: {
            type: Datatypes.STRING //we should pass in a user as default, and have them sign up to be a chef if needed
        }
    })
    return userTypeTable
}