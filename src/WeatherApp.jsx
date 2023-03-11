import React from "react";
import CurrentWeather from "./currentWeather/CurrentWeather";
import ExtraInfo from "./extraInfo/ExtraInfo";
import "./style.css";
import TempInfo from "./tempInfo/TempInfo";
import WeatherTab from "./weatherTab/WeatherTab";

export default function WeatherApp() {
  return (
    <>
      <div className="container">
        <CurrentWeather />
        <TempInfo />
        <ExtraInfo />
        <WeatherTab />
      </div>
    </>
  );
}
