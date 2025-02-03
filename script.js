const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "337b975c454e46e01684abce83fcb10b";

const SearchInput = document.querySelector(".search input");
const SearchButton = document.querySelector(".search button");

const WheatherIcon = document.querySelector(".wheather-icon");

const wheather = document.querySelector(".wheather");

async function checkwheather(City) {
  const response = await fetch(apiUrl + City + `&appid=${apiKey}`);
  var data = await response.json();
//   console.log(data.weather[0].main);

  const temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(data.main.temp)}°C`;

  const city = document.querySelector(".City");
  city.innerHTML = `${data.name}`;

  const humidity = document.querySelector(".humidity");
  humidity.innerHTML = `${data.main.humidity}%`;

  const wind = document.querySelector(".Wind");
  wind.innerHTML = `${data.wind.speed}km/hr`;

  if (data.weather[0].main === "Clouds") {
    WheatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    WheatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    WheatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    WheatherIcon.src === "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    WheatherIcon.src = "images/mist.png";
  }

}

SearchButton.addEventListener("click", () => {
  checkwheather(SearchInput.value);
  wheather.style.display = "block";

});
