import React, { useContext } from "react";
import CurrentWeatherIcon from "../currentWeatherIcons/CurrentWeatherIcons";
import { WeatherContext } from "../weatherProvider/WeatherProvider";

export default function CurrentWeather() {
  const { name, temp, weatherState } = useContext(WeatherContext);
  return (
    <div className="weather">
      {name} &nbsp;/
      <CurrentWeatherIcon weatherState={weatherState} />
      <span>{temp}&deg;</span>
    </div>
  );
}
