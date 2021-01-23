// 1.create a request variable
var request = new XMLHttpRequest();
//2. create a new connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3.send request
request.send();
//load response
request.onload = function(){
    var data = JSON.parse(this.response);
    data.forEach(element => {
        openWeatherApi(element.latlng);
        
    });
}

function openWeatherApi(latilongi){
    var request = new XMLHttpRequest();
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latilongi[0] + '&lon=' + latilongi[1] + '&appid=639fcf2e3e97f2746304b077e3adaa38';
    request.open('GET', weatherUrl, true);
    request.send();
    request.onload = function(){
        var weatherData = JSON.parse(this.response);
        console.log(weatherData.main.temp);
    }

}