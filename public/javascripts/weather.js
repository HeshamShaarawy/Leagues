fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Mississauga%2C%20on%2C%20Ca&lat=0&lon=0&callback=test&id=2172797&lang=en&units=metric&mode=HTML", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "7d3cb48b5dmsh0fa4fd61a922543p1c1466jsndbebe548230e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});