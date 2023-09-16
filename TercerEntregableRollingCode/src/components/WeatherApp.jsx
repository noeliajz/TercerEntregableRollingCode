import axios from "axios";
import React, { useState, useEffect } from "react";
import cloud from "../components/img/cloud.png"
import humidity from "../components/img/humidity.png"
import wind from "../components/img/wind.png"



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

  function fahrenheitToCelsius(fahrenheit) {
    console.log(fahrenheit);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2); // Redondear a 2 decimales
  }
  const search = () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
  };

  return (
    <div className="containerWea text-dark">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={snow} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={cloud-icon} alt="" />
        <div className="weather-temp text-dark">
          {fahrenheitToCelsius(weatherData?.main.temp)}
        </div>
        <p className="location">Tucumán</p>
        <div className="data-container">
          <div className="element"></div>
          <img src={humidity} alt=""  className='icon'/>
          <div className="data">
            <p className="humidity-percent text-dark">
              {weatherData?.main.humidity}
            </p>
            <p className="className text-dark">Humidity</p>
          </div>
          <div className="element"></div>
          <img src={wind_icon} alt=""  className='icon'/>
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
