// 3rd Party Resources
const express = require('express');
const router = require('./auth/router');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo
app.post('/signin', router);
app.post('/signup', router);


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo



function start(port) {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
}


module.exports = {
    app, start
}