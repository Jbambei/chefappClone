module.exports = function(sequelize, Datatypes) {
    var chefTable = sequelize.define("chefTable", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chefName: {
            type: Datatypes.STRING,
            required: true,
            len: [2, 50],
            is: ["^[a-z]+$", "i"], // will only allow letters
        },
        chefQualifications: {
            type: Datatypes.STRING,
            required: true,
            len: [2, 500]
        },
        chefBio: {
            type: Datatypes.STRING,
            required: true,
            len: [2, 3000]
        },
        chefLocation: {
            type: Datatypes.STRING,
            required: true,
            len:[2, 100]
        },
        chefRate: {
            type: Datatypes.INTEGER // this will be the 1-5 $ estimate. We'll store it as a INT and convert it using javascript to stars or whatever
        },
        chefAvailableBoolean: {
            type: Datatypes.BOOLEAN, //On/off switch for our database.
        },
        chefAvailibilityFull: {
            type: Datatypes.STRING // Not sure how google Calendar handles storage. For the sake of having it for now, I've put this in. We'll almost certainly need to change this to accept/format the input correctly
        },
        chefProfilePictureURL: {
            type: Datatypes.STRING, //not sure how we're storing images, so for now I'm assuming we pass in an image URL of an image hosted elsewhere
            isUrl: true
        }    
    })
}