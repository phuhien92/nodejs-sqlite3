const nextApp 	= require('next');
const express 	= require('express');
const helmet 	= require('helmet');
const morgan 	= require('morgan');
const Raven 	= require('raven');
const cookieParser 	= require('cookie-parser'); // parse cookie header 
const bodyParser 	= require('body-parser');
const config = require('./config');
const {
	preservedUrls
} = require('./controllers/validateBodyController');
const auth = require('./controllers/authController');

if (config.RAVEN_DSN) {
	Raven.config(config.RAVEN_DSN).install();
}

const catchErrors = fn => (req, res, next) =>
	fn(req, res, next).catch(err => {
		res.status(500).json({
			error: 'Sorry an error ocurred. Please try again later.'
		});
		if (config.RAVEN_DSN) {
			Raven.captureException(err, {
				user: {
					email: req.user && req.user.email
				},
			});
		} else {
			throw new Error(err);
		}
	});

const port = Number(config.PORT) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({
	dir: './client',
	dev
});

const routes = require('./routes');
//const handle = app.getRequestHandler();
const handle   = routes.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();

	server.set('trust proxy', true);
	server.use(helmet());
	if (process.env.NODE_ENV !== 'production') {
		server.use(morgan('dev'));
	}
	server.use(cookieParser());
	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({
		extended: true
	}));
	server.use(express.static('static'));

	server.use((req, res, next) => {
		req.realIp = req.headers['x-real-ip'] || req.connection.remoteAddress || '';
		return next();
	});

	server.use(handle);

	/* View routes */
	server.get('*', (req, res) => handle(req, res));
	server.get('/', (req, res) => app.render(req, res, '/'));
	server.get('/login', (req, res) => app.render(req, res, '/login'));
	server.get('/events', (req,res) => app.render(req, res, '/events'));
	server.get('/e/edit/:id', (req,res) => {
		const actualPage = '/events/edit';
		const queryParams = { id: req.params.id };
		app.render(req,res,actualPage, queryParams)
	})
	server.get('/event_types/:id', (req,res) => {

		const params = {id: req.params.id};
		console.log(params)
		return app.render(req, res, '/event_types/single', params)
	});
	
	/* User and authentication */
	
	server.post('/api/auth/signup', catchErrors(auth.signup));
	server.post('/api/auth/login', catchErrors(auth.login));
	server.post('/api/auth/sessionLogin', catchErrors(auth.sessionLogin));
	

	server.listen(port, err => {
		if (err) throw err;
		if (dev) {
			console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
		} else {
			console.log('> Ready on https://express-ukvgwjeuii.now.sh/events');
		}
	});
})