module.exports = function(sequelize, Datatypes) {
    var consumerInfoTable = sequelize.define("consumerInfoTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        consumerAllergies: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        //Kitchen objects. More than likely more will be needed
        consumerStove: {
            type: Datatypes.STRING, //Making this string rather than Boolean so that we can pass in the type of grill
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerGrill: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerOven: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerMicrowave: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        consumerSink: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        }
    })
    return consumerInfoTable
}