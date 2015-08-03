'use strict';

var express = require('express'),
	exphbs = require('express-handlebars'),
	app = express();


app.set('port', process.env.PORT || 3300);
app.set('__appdir', __dirname + '/server');
app.set('views', app.get('__appdir') + '/views');

var hbs = exphbs.create({ 
	extname:'hbs',
	layoutsDir: app.get('views') + '/layouts',
	defaultLayout: 'main'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('home');
});


var server = app.listen(app.get('port'), function() {
	var port = server.address().port;

	console.log('App listen at http://localhost:%s', port);
});