const nextApp = require('next');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const Raven = require('raven');
const cookieParser = require('cookie-parser'); // parse cookie header 
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
const {
	preservedUrls
} = require('./controllers/validateBodyController');

require('./passport');

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
const handle = app.getRequestHandler();

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
	server.use(passport.initialize());
	server.use(express.static('static'));

	server.use((req, res, next) => {
		req.realIp = req.headers['x-real-ip'] || req.connection.remoteAddress || '';
		return next();
	});

	// server.use((req, res, next) => {
	// 	const {
	// 		headers,
	// 		path
	// 	} = req;
	// 	if (
	// 		headers.host !== config.DEFAULT_DOMAIN &&
	// 		(path === '/' || preservedUrls.some(item => item === path.replace('/', '')))
	// 	) {
	// 		return res.redirect(`http://${config.DEFAULT_DOMAIN + path}`);
	// 	}
	// 	return next();
	// });

	/* View routes */
	server.get('/', (req, res) => app.render(req, res, '/'));
	server.get('/login', (req, res) => app.render(req, res, '/login'));
	server.get('/logout', (req, res) => app.render(req, res, '/logout'));

	server.get('*', (req, res) => handle(req, res));

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
	});
})