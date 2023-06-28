const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const customersRouter = require('./routes/customers');
const Shop = require('./models/shop');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(async function (req, res, next) {
	res.locals.servicesInTheShop = await Shop.find({}).sort({customerName: 1, carName: 1});
	next();
});

app.use(methodOverride("_method"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customers', customersRouter);

app.use(function (req, res, next) {
	console.log(req.url);
	const context = {
		title: 'Error 404 Page not found!',
		prevUrl: req.url,
	};
	res.status(404).render('404', context)
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error', {title: 'error'});
});

module.exports = app;
