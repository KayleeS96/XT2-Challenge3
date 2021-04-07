//Code for weather

var lng = 52.370216;
var lat = 4.895168 ;
var zoom = 12 ;
var map = document.getElementById('map');


function getAPIdata() {

	// construct request
	fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lng + '&lang=nl&appid=3b517a51064be7e3fabc50f5d61b5dad').then((response) => response.json()).then((data)=> this.weatherData(data));	
};
    



function weatherData(data){
	const { name } = data;
	const { temp } = data.main ;
	const { icon, description } = data.weather[0];
	console.log(temp);
	document.querySelector('.weather').innerText = temp + ' K ';
	document.querySelector('.icon').src='https://openweathermap.org/img/wn/' + icon + '@2x.png';
	document.querySelector('.beschrijving').innerText = description ;

}




// Code for map

function map(){

	mapboxgl.accessToken = 'pk.eyJ1Ijoia3M5NjE5IiwiYSI6ImNrbjV2ajJxMDA3emIybm54c3I1cGlqdngifQ.bYaWGr35Jq7JBbYiTIb9ow';
	map = new mapboxgl.Map ({
		container:'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [lng, lat],
		zoom: zoom,
	});
}
