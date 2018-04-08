

// //http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=ef73411c829a4563b61b64e76cb72976
// handleCoords();




class LocalWeather {
  private location: string;
  private temp: number;
  private description: string;
  private humidity: number;
  private icon: string;
  private celsius: number;
  private lat: number;
  private long: number;

  constructor() {

  }

  public async getCoords(): Promise<any> {
    let coords = await fetch('https://geoip.nekudo.com/api').then((response) => response.json());
    this.location = coords.city;
    console.log(coords)
    this.lat = coords.location.latitude;
    this.long = coords.location.longitude;

    let weatherURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&units=imperial&APPID=ef73411c829a4563b61b64e76cb72976`;

    this.getWeatherData(weatherURL);

  }

  public async getWeatherData(url: string): Promise<any> {
    let weatherData = await fetch(url).then((result => result.json()));

    this.icon = weatherData.weather[0].icon;
    this.temp = weatherData.main.temp;
    this.description = weatherData.weather[0].description;
    this.humidity = weatherData.main.humidity;

    this.handleBackgroundImg(this.icon);
    this.displayWeather();
  }

  public handleBackgroundImg(icon: string): void {
    let weather = document.querySelector(".weather") as HTMLElement;
    console.log(weather)

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
  }

  public displayWeather(): void {
    let locationSelect = document.querySelector(".location") as HTMLElement;
    let tempSelect = document.querySelector(".temp") as HTMLElement;
    let newI = document.createElement('i');
    let descSelect = document.querySelector(".desc") as HTMLElement;
    let humidSelect = document.querySelector(".humid") as HTMLElement;

    newI.classList.add('wi', 'wi-fahrenheit');
    locationSelect.textContent = `Location: ${this.location}`;
    tempSelect.textContent = `The temperature is ${Math.round(this.temp)} `;
    tempSelect.appendChild(newI);
    descSelect.textContent = `Description: ${this.description.charAt(0).toUpperCase()}${this.description.slice(1)}`;
    humidSelect.textContent = `Humidity: ${Math.round(this.humidity)}%`;

    this.handleEvents();
  }

  private handleEvents(): void {
    let fahBtn = document.querySelector(".fah1");
    let temperature = document.querySelector(".temp");
    let newI = document.createElement("i");
    let celBtn = document.querySelector(".cel2");

    fahBtn.addEventListener("click", () => {
      temperature.textContent = `The temperature is ${Math.round(this.temp)}`;
      temperature.appendChild(newI);
      newI.classList.add("wi", "wi-fahrenheit");
    });

    celBtn.addEventListener("click", () => {
      this.celsius = Math.round((this.temp - 32) * 5 / 9);
      temperature.textContent = `The temperature is ${this.celsius} `;
      temperature.appendChild(newI);
      newI.classList.add("wi", "wi-celsius");
    });

  }
}
let weather = new LocalWeather();
weather.getCoords();
