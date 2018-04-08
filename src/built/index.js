// //http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=ef73411c829a4563b61b64e76cb72976
// handleCoords();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var LocalWeather = /** @class */ (function () {
    function LocalWeather() {
    }
    LocalWeather.prototype.getCoords = function () {
        return __awaiter(this, void 0, void 0, function () {
            var coords, weatherURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://geoip.nekudo.com/api').then(function (response) { return response.json(); })];
                    case 1:
                        coords = _a.sent();
                        this.location = coords.city;
                        console.log(coords);
                        this.lat = coords.location.latitude;
                        this.long = coords.location.longitude;
                        weatherURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + this.lat + "&lon=" + this.long + "&units=imperial&APPID=ef73411c829a4563b61b64e76cb72976";
                        this.getWeatherData(weatherURL);
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalWeather.prototype.getWeatherData = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url).then((function (result) { return result.json(); }))];
                    case 1:
                        weatherData = _a.sent();
                        console.log(weatherData);
                        this.icon = weatherData.weather[0].icon;
                        this.temp = weatherData.main.temp;
                        this.description = weatherData.weather[0].description;
                        this.humidity = weatherData.main.humidity;
                        this.handleBackgroundImg(this.icon);
                        this.displayWeather();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalWeather.prototype.handleBackgroundImg = function (icon) {
        var weather = document.querySelector(".weather");
        console.log(weather);
        switch (this.icon) {
            case "01d":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img923/5914/C8hAMP.jpg")';
                break;
            case "01n":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img924/3455/slHReo.jpg")';
                break;
            case "02d":
            case "03d":
            case "04d":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img922/8471/LF0cGZ.jpg")';
                break;
            case "02n":
            case "03n":
            case "04n":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img923/7048/Ot7l6k.jpg")';
                break;
            case "09d":
            case "10d":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img921/375/RMia6h.jpg")';
                break;
            case "09n":
            case "10n":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img922/1227/Lf4qc2.jpg")';
                break;
            case "11d":
            case "11n":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img924/2258/h4eNcE.jpg")';
                break;
            case "13d":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img922/3753/cEf7xg.jpg")';
                break;
            case "13n":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img923/1196/G2MDy6.jpg")';
                break;
            case "50d":
            case "50n":
                weather.style.backgroundImage = 'url("http://imageshack.com/a/img921/8166/H0mO7r.jpg")';
                break;
        }
    };
    LocalWeather.prototype.displayWeather = function () {
        var locationSelect = document.querySelector(".location");
        var tempSelect = document.querySelector(".temp");
        var newI = document.createElement('i');
        var descSelect = document.querySelector(".desc");
        var humidSelect = document.querySelector(".humid");
        newI.classList.add('wi', 'wi-fahrenheit');
        locationSelect.textContent = "Location: " + this.location;
        tempSelect.textContent = "The temperature is " + Math.round(this.temp) + " ";
        tempSelect.appendChild(newI);
        descSelect.textContent = "Description: " + this.description.charAt(0).toUpperCase() + this.description.slice(1);
        humidSelect.textContent = "Humidity: " + Math.round(this.humidity) + "%";
        this.handleEvents();
    };
    LocalWeather.prototype.handleEvents = function () {
        var _this = this;
        var fahBtn = document.querySelector(".fah1");
        var temperature = document.querySelector(".temp");
        var newI = document.createElement("i");
        var celBtn = document.querySelector(".cel2");
        fahBtn.addEventListener("click", function () {
            temperature.textContent = "The temperature is " + Math.round(_this.temp);
            temperature.appendChild(newI);
            newI.classList.add("wi", "wi-fahrenheit");
        });
        celBtn.addEventListener("click", function () {
            _this.celsius = Math.round((_this.temp - 32) * 5 / 9);
            temperature.textContent = "The temperature is " + _this.celsius + " ";
            temperature.appendChild(newI);
            newI.classList.add("wi", "wi-celsius");
        });
        //    $(".fah1").click(function(){
        //      $(".temp").text("The temperature is " + Math.round(temp)).append('<i class="wi wi-fahrenheit"></i>');
        //    });
        //     $(".cel2").click(function(){
        //      $(".temp").text("The temperature is " + celsius).append('<i class="wi wi-celsius"></i>');
        //    });
    };
    return LocalWeather;
}());
var weather = new LocalWeather();
weather.getCoords();
// function handleCoords() {
//   var lat = "";
//   var long = "";
//
//   $.getJSON('https://geoip.nekudo.com/api', function(data) {
//     lat = data.location.latitude;
//     long = data.location.longitude;
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
