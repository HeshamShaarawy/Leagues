var router = require('express').Router();
var passport= require('passport');
var unirest = require("unirest");
var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");
var weather = "weather"


req.query({
	"q": "mississauga, on, ca",
	"lat": "0",
	"lon": "0",
	//"callback": "passWeather",
	"id": "2172797",
	"lang": "en",
	"units": "metric",
	"mode": "json"
});

req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "7d3cb48b5dmsh0fa4fd61a922543p1c1466jsndbebe548230e",
	"useQueryString": true
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);
  weather = res.body
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', weather });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/teams',
    failureRedirect : '/courts'
  }
));

router.get('/logout', function(req, res){ 
  req.logout();
  res.redirect('/');
});


module.exports = router;