const db = require("../models");
const bcrypt = require(`bcrypt`);
const { User } = require("../models");

module.exports = function(app) {
    app.get('/api/greeting', (req, res) => {
        const name = req.query.name || 'World';
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
      });

      // app.post('/register', (req, res) => {
      //   // const { email, username, password } = req.body;
      //   console.log(req.body)
      //   const email = req.body.email
      //   const username = req.body.username
      //   const password = req.body.password
      //   // const saltRounds = 10;
      //   // bcrypt.hash(password, saltRounds, function (err, hash) {
      //     db.User.create({
      //       email: email,
      //       username: username,
      //       password: password
      //     }).then((result) => {
      //       console.log("User created: ", result);
      //       res.json("user created!");
      //     })
      //   // });
      // });


        // app.post('/register', async(req, res) => {
        // // hash the password provided by user with bcrypt
        // const hash = bcrypt.hashSync(req.body.password, 10);
        // const saltRounds = 10;
        // try {
        //     // create a new user with password hash from bcrypt
        //     let user = await User.create(
        //         Object.assign(req.body, { password: hash })
        //     );
        //     // data will be an object with the user and its authToken
        //     let data = await user.authorize();
            
        //     // send back the new user and auth token to the client {user, authToken}
        //     return res.json(data);
    
        // } catch(err) {
        //     return res.status(400).send(err);
        // }

        //   })
}