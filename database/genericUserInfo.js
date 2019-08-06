module.exports = function(sequelize, datatypes) {
    var genericUserTable = sequelize.define("genericUserTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userFirstName: {
            type: Datatypes.STRING,
            required: true,
            len: [2, 50],
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        userLastName: {
            type: Datatypes.STRING,
            required: true,
            len: [2, 50],
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        userPhone: {
            type: Datatypes.STRING,
            isNumeric: true          // will only allow numbers
        },
        userAddress: {
            type: Datatypes.STRING
        }
        //maybe have a userID we can use that isn't the primary key to avoid giving away how many users we have if we wanted to display a userID for some reason
    })
    return genericUserTable
}