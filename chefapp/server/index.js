const customAuthMiddleware = require('./middleware/custom-auth-middleware');
require('dotenv').config()
const express = require(`express`); /* NPM Express */
const bodyParser = require('body-parser'); /* NPM Body Parser */
const path = require(`path`); 
const pino = require(`express-pino-logger`)();
const cookieParser = require('cookie-parser');


// directory references
const clientDir = path.join(__dirname, `../client`);

// Express
const PORT = process.env.PORT || 3001; /* Declare different port than 3000 due to react */
const app = express(); /* Initialize Express */

// Express middlewear for POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
// use the cookie-parser to help with auth token, 
// it must come before the customAuthMiddleware
app.use(cookieParser());
app.use(customAuthMiddleware);

// Serve public folder to request assets
app.use(express.static(`${clientDir}/build`))

// Routing
require(`./routes/html-routes`)(app) /* Server routes */
require(`./routes/api-routes`)(app)

// Requiring our models for syncing
const db = require('./models/index')

db.sequelize.sync({ force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
});