
require('dotenv').config()
const express = require(`express`); /* NPM Express */
const bodyParser = require('body-parser'); /* NPM Body Parser */
const path = require(`path`); 
// const pino = require(`express-pino-logger`)();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const customAuthMiddleware = require('./middleware/custom-auth-middleware');
const userController = require('./controllers/user-controller');
// directory references
const clientDir = path.join(__dirname, `../client`);

// Express
const PORT = process.env.PORT || 3001; /* Declare different port than 3000 due to react */
const app = express(); /* Initialize Express */
app.use(cors());
// Express middlewear for POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(pino);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// use the cookie-parser to help with auth token, 
// it must come before the customAuthMiddleware
app.use(cookieParser());
app.use(customAuthMiddleware);

// Serve public folder to request assets
app.use(express.static(`${clientDir}/build`))
app.get('/*', (req, res) => {

    console.log('hi from app.get')
    console.log(req)
    console.log(res)
    res.sendFile(path.resolve(__dirname, `${clientDir}/build`, 'index.html'));
  });
// Routing
/* Server routes */
// require(`./routes/html-routes`)(app) 
// require(`./routes/api-routes`)(app)
app.use(userController);
// Requiring our models for syncing
const db = require('./models/index')

db.sequelize.sync({ force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
});