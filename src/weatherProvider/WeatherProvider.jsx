import React, { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext({});

export default function WeatherProvider({ children }) {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const currentWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_WEATHER_API}&q=malmö&units=metric`;
      const currentWeatherInfo = await fetch(currentWeatherInfoAPI);
      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      } = await currentWeatherInfo.json();
      const fivedaysWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&q=malmö&units=metric`;
      const fivedaysWeatherInfo = await fetch(fivedaysWeatherInfoAPI);
      const { list } = await fivedaysWeatherInfo.json();
      setWeatherInfo({
        name,
        temp,
        humidity,
        weatherState,
        feels_like,
        speed,
        deg,
        list,
        sunset,
        sunrise,
        temp_max,
        temp_min,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <WeatherContext.Provider value={{ ...weatherInfo }}>
      {children}
    </WeatherContext.Provider>
  );
}
