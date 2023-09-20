import axios from "axios";
import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState();
  let api_key = "e47f1d44e228227a5c531e3969a92d96";
  
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=-26.8241400&lon=-65.2226000&appid=${api_key}`
    );
    setWeatherData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function convertKelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15; // La temperatura en Kelvin se resta por 273.15 para obtener grados Celsius
    return celsius.toFixed(2); // Redondear a 2 decimales
  }

  return (
    <div className="containerWea text-dark">
      <div className="weather-image">
        <img src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135569/proyecto/img/cloud.png.png" alt="" />
        <div className="weather-temp text-dark">
          {convertKelvinToCelsius(weatherData?.main.temp)}°C
        </div>
        <p className="location">Tucumán</p>
        <div className="data-container">
          <div className="element"></div>
          <img src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135571/proyecto/img/rain.png.png" alt=""  className='icon'/>
          <div className="data">
            <p className="humidity-percent text-dark">
              {weatherData?.main.humidity}%
            </p>
            <p className="className text-dark">Humidity</p>
          </div>
          <div className="element"></div>
          <img src="https://res.cloudinary.com/diozlbqlt/image/upload/v1695135575/proyecto/img/wind.png.png" alt=""  className='icon'/>
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="className text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;