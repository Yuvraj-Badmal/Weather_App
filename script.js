const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "130d66bf0dmsh5d8050066177ad9p1f3499jsn1bcb9e045be3",
      "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  const getWeather = async (city)=>{
      try {
          cityName.innerHTML = city;
          const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
          const response = await fetch(url, options);
          const data = await response.json();
          console.log(data);
          cloud_pct.innerHTML = data.cloud_pct;
          temp.innerHTML = data.temp;
          temp2.innerHTML = data.temp;
          feels_like.innerHTML = data.feels_like;
          humidity.innerHTML = data.humidity;
          humidity2.innerHTML = data.humidity;
          min_temp.innerHTML = data.min_temp;
          max_temp.innerHTML = data.max_temp;
          wind_speed.innerHTML = data.wind_speed;
          wind_speed2.innerHTML = data.wind_speed + " km/hr";
          wind_degrees.innerHTML = data.wind_degrees;
          sunrise.innerHTML = data.sunrise;
          sunset.innerHTML = data.sunset;
      } catch (error) {
          console.error(error);
      }
  }
  
  submit.addEventListener("click", (e)=>{
      e.preventDefault();
      getWeather(city.value);
  })

  try {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    cloud_pct3.innerHTML = data.cloud_pct;
    temp3.innerHTML = data.temp;
    feels_like3.innerHTML = data.feels_like;
    humidity3.innerHTML = data.humidity;
    min_temp3.innerHTML = data.min_temp;
    max_temp3.innerHTML = data.max_temp;
    wind_speed3.innerHTML = data.wind_speed;
    wind_degrees3.innerHTML = data.wind_degrees;
    sunrise3.innerHTML = data.sunrise;
    sunset3.innerHTML = data.sunset;
} catch (error) {
    console.error(error);
}

try {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    cloud_pct4.innerHTML = data.cloud_pct;
    temp4.innerHTML = data.temp;
    feels_like4.innerHTML = data.feels_like;
    humidity4.innerHTML = data.humidity;
    min_temp4.innerHTML = data.min_temp;
    max_temp4.innerHTML = data.max_temp;
    wind_speed4.innerHTML = data.wind_speed;
    wind_degrees4.innerHTML = data.wind_degrees;
    sunrise4.innerHTML = data.sunrise;
    sunset4.innerHTML = data.sunset;
} catch (error) {
    console.error(error);
}

try {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    cloud_pct5.innerHTML = data.cloud_pct;
    temp5.innerHTML = data.temp;
    feels_like5.innerHTML = data.feels_like;
    humidity5.innerHTML = data.humidity;
    min_temp5.innerHTML = data.min_temp;
    max_temp5.innerHTML = data.max_temp;
    wind_speed5.innerHTML = data.wind_speed;
    wind_degrees5.innerHTML = data.wind_degrees;
    sunrise5.innerHTML = data.sunrise;
    sunset5.innerHTML = data.sunset;
} catch (error) {
    console.error(error);
}

try {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai";
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    cloud_pct6.innerHTML = data.cloud_pct;
    temp6.innerHTML = data.temp;
    feels_like6.innerHTML = data.feels_like;
    humidity6.innerHTML = data.humidity;
    min_temp6.innerHTML = data.min_temp;
    max_temp6.innerHTML = data.max_temp;
    wind_speed6.innerHTML = data.wind_speed;
    wind_degrees6.innerHTML = data.wind_degrees;
    sunrise6.innerHTML = data.sunrise;
    sunset6.innerHTML = data.sunset;
} catch (error) {
    console.error(error);
}
  
  getWeather("Mysore");
  