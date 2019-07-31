module.exports = function(sequelize, datatypes) {
    var userTable = sequelize.define("chefTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userFirstName: {
            type: Datatypes.STRING,
            required: true,
            len: [2, 50],
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        userLastName: {
            type: Datatypes.STRING,
            required: true,
            len: [2, 50],
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        userAllergies: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        userPhone: {
            type: Datatypes.STRING,
            isNumeric: true,          // will only allow numbers
        },
        //Kitchen objects. More than likely more will be needed
        userStove: {
            type: Datatypes.STRING, //Making this string rather than Boolean so that we can pass in the type of grill
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        userGrill: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        userOven: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        userMicrowave: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        userSink: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"], // will only allow letters
        }
    })
}