const express = require(`express`);
const bcrypt = require(`bcrypt`);
const router = express.Router();
// Grab User model from models folder using "destructuring" syntax
const { User } = require("../models");

// routes will go here

// Register Route =======================================
router.post('/register', async (req, res) => {
    // hash the password provided by user with bcrypt
    const hash = bcrypt.hashSync(req.body.password, 10);
    try {
        // create a new user with password hash from bcrypt
        let user = await User.create(
            Object.assign(req.body, { password: hash })
        );
        // data will be an object with the user and its authToken
        let data = await user.authorize();
        
        // send back the new user and auth token to the client {user, authToken}
        console.log(res.json(data))
        return res.json(data);

    } catch(err) {
        return res.status(400).send(err);
    }
});
    //   router.post('/register', (req, res) => {
    //     // const { email, username, password } = req.body;
    //     // console.log(req.body)
    //     // const email = req.body.email
    //     // const username = req.body.username
    //     const password = req.body.password
    //     const saltRounds = 10;
    //     bcrypt.hash(password, saltRounds, function (err, hash) {
    //       User.create({
    //         email: req.body.email,
    //         username: req.body.username,
    //         password: req.body.password
    //       }).then((result) => {
    //         console.log("User created: ", result);
    //         res.json("user created!");
    //       })
    //     });
    //   });


// Login Route =====================================================
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)

    // if the username / password is missing, we use status code 400 indicating a bad req was made
    if (!username || !password) {
        return res.status(400).send(
            'Request missing username or password param'
        );
    }

    try {
        let user = await User.authenticate(username, password)
        console.log(user)
        user = await user.authorize();
        console.log(user)
        return res.json(user);
    } catch (err) {
        return res.status(400).send('Invalid username or password')
    }

});

// Logout Route =====================================================
router.delete('/logout', async (req, res) => {
    // logout request should have access to the user on the req object, find it and call the logout method
    const { user, cookies: { auth_token: authToken } } = req
    // There's no reason req object should not already be present, but check anyway
    if (user && authToken) {
        await req.user.logout(authToken);
        return res.status(204).send();
    }

    // If the user is missing, then they're not logged in.  Use status code 400 to indicate a bad request was made
    return res.status(400).send(
        { errors: [{ message: 'not authenticated' }] }
    );
});

// Me Route - get currently logged in user
router.get('/me', (req, res) => {
    if (req.user) {
        return res.send(req.user)
    }
    res.status(404).send(
        { errors: [{ message: 'missing auth token' }] }
    );
});


// export router so we can pass the routes to our server
module.exports = router;