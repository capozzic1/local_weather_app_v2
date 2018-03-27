// //http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=ef73411c829a4563b61b64e76cb72976
// handleCoords();




class LocalWeather {
  constructor(
    public location: string,
    public temp: number,
    public description: string,
    public humidity: number,
    public icon: string,
    public celsius: number
  )

  getCoords(): void {
    fetch('https://geoip.nekudo.com/api')
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      console.log(json);
    })
  }
}


// function handleCoords(){
//     var lat = "";
//     var long = "";
//
//   $.getJSON('https://geoip.nekudo.com/api', function(data){
//       lat = data.location.latitude;
//       long = data.location.longitude;
//
//
//     var url2 = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial" + "&APPID=ef73411c829a4563b61b64e76cb72976";
//
//     handleWeatherJSON(url2);
//   });
//
// }
//   function handleWeatherJSON(url){
//   $.getJSON(url, function(json) {
//     var location = json.name;
//     var temp = json.main.temp;
//     var desc = json.weather[0].description;
//     var humid = json.main.humidity;
//     var icon = json.weather[0].icon;
//     var celsius = Math.round((temp - 32) * 5 / 9);
//
//     console.log(celsius);
//
//
//     switch (icon) {
//       case "01d":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img923/5914/C8hAMP.jpg)");
//         break;
//       case "01n":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img924/3455/slHReo.jpg)");
//         break;
//       case "02d":
//       case "03d":
//       case "04d":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img922/8471/LF0cGZ.jpg)");
//         break;
//       case "02n":
//       case "03n":
//       case "04n":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img923/7048/Ot7l6k.jpg)");
//         break;
//       case "09d":
//       case "10d":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img921/375/RMia6h.jpg)");
//         break;
//       case "09n":
//       case "10n":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img922/1227/Lf4qc2.jpg)");
//         break;
//       case "11d":
//       case "11n":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img924/2258/h4eNcE.jpg)");
//         break;
//       case "13d":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img922/3753/cEf7xg.jpg)");
//         break;
//       case "13n":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img923/1196/G2MDy6.jpg)");
//         break;
//       case "50d":
//       case "50n":
//         $(".weather").css("background-image", "url(http://imageshack.com/a/img921/8166/H0mO7r.jpg)");
//         break;
//
//     }
//
//     $(".location").text("The current weather for " + location + ":");
//     $(".temp").text("The temperature is " + Math.round(temp)).append("<i class='wi wi-fahrenheit'></i>");
//     $(".desc").text(desc.charAt(0).toUpperCase() + desc.slice(1));
//     $(".humid").text(Math.round(humid) + "% humidity");
//
//    $(".fah1").click(function(){
//      $(".temp").text("The temperature is " + Math.round(temp)).append('<i class="wi wi-fahrenheit"></i>');
//    });
//     $(".cel2").click(function(){
//      $(".temp").text("The temperature is " + celsius).append('<i class="wi wi-celsius"></i>');
//    });
//
//
//
//   });
//   };
//
  // get data:
