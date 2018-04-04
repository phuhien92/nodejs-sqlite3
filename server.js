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
app.use(bodyParser.urlencoded({ extended: true }));

// default page
app.get('/', (req,res) => {
	let students = [];
	
	store.studentList().then((req,respond) => {
		students = req;

		res.render('pages/index', {
			title: 'NODEJS - SQLITE DEMO',
			students:students
		})
	})

})

app.listen(app.get('port'), () => {
    console.log("Listening to port: ", app.get("port"))
});



