module.exports = function(sequelize, Datatypes) {
    var bookingTable = sequelize.define("bookingTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: { //check if this works on insertion or at time of creation. I want on insertion
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), 
            allowNull: false
          },
        bookingTime: {
            type: Datatypes.STRING, // not sure how the calander will pass info, assuming string date for now
            required: true
        },
        bookingEventType: {
            type: Datatypes.STRING,
            required: true,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        bookingNumPeople: {
            type: Datatypes.INTEGER,
            required: true
        },
        bookingRecipesOrder: {
            type: Datatypes.STRING, //will require foreign key or to be passed in as strings
        },
        bookingLocation: {
            type: Datatypes.STRING //assuming address. Use one stored in users unless otherwise specified
        },
        bookingSpecialrequests: {
            type: Datatypes.STRING
        },
        //USE STORED UNLESS SPECIFIED
        bookingStove: {
            type: Datatypes.STRING, //Making this string rather than Boolean so that we can pass in the type of grill
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        bookingGrill: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        bookingOven: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        bookingMicrowave: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        },
        bookingSink: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"] // will only allow letters
        }
    })
    return bookingTable
}