const express = require('express');

const store   = require('./store');

// middleware to handle HTTP POST request
// extract the entire body portion of an incoming request and exposes it on req.body
const bodyParser = require('body-parser');

const app = express();
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());

// index page
app.get('/', (req,res) => {
    res.render('pages/index', {
        title: 'NODEJS - SQLITE DEMO'
    })
})

app.post('/createUser', (req,res) => {
    store
        .createUser({
            username: req.body.username,
            password: req.body.password 
        })
        .then(() => res.sendStatus(200))
})

app.listen(app.get('port'), () => {
    console.log("Listening to port: ", app.get("port"))
});



