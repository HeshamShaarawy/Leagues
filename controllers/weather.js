var unirest = require("unirest");
var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");
var weather = "weather"


req.query({
	"q": "mississauga, on, ca",
	"lat": "0",
	"lon": "0",
	//"callback": "showWeather",
	"id": "2172797",
	"lang": "en",
	"units": "metric",
	"mode": "html"
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


function showWeather(req, res){
    console.log(weather)
    res.render('weather/weather',{weather})
}


module.exports ={
    showWeather
}



