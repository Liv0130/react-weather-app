import React, { useContext } from "react";
import { WeatherContext } from "../weatherProvider/WeatherProvider";
import { WiHumidity, WiStrongWind, WiSunrise, WiSunset } from "react-icons/wi";

function WindDirectionText({ degree = 0 }) {
  switch (true) {
    case (337.5 <= degree && degree <= 360) || (0 <= degree && degree < 22.5):
      return "north wind";
    case 22.5 <= degree && degree < 67.5:
      return "north east wind";
    case 67.5 <= degree && degree < 112.5:
      return "east wind";
    case 112.5 <= degree && degree < 157.5:
      return "south east wind";
    case 157.5 <= degree && degree < 202.5:
      return "south wind";
    case 202.5 <= degree && degree < 247.5:
      return "south west wind";
    case 247.5 <= degree && degree < 292.5:
      return "west wind";
    case 292.5 <= degree && degree < 337.5:
      return "north west wind";
    default:
      return "";
  }
}

function ExtraInfo() {
  const { humidity, speed, deg, sunset, sunrise } = useContext(WeatherContext);
  return (
    <div className="extra-info">
      <div className="extra-info-item">
        <WiSunrise style={{ fontSize: "50px", color: "#ff7500" }} />
        <p className="extra-info-text">
          {new Date(sunrise * 1000).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}{" "}
          <br />
          Sunrise
        </p>
      </div>
      <div className="extra-info-item">
        <WiSunset style={{ fontSize: "50px", color: "#ff7500" }} />
        <p className="extra-info-text">
          {new Date(sunset * 1000).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          <br />
          Sunset
        </p>
      </div>
      <div className="extra-info-item">
        <WiHumidity style={{ fontSize: "50px", color: "#0095ff" }} />
        <p className="extra-info-text">
          {`${humidity}%`}
          <br />
          Humidity
        </p>
      </div>

      <div className="extra-info-item">
        <WiStrongWind style={{ fontSize: "50px", color: "#2bc7ad" }} />
        <p className="extra-info-text">
          {`${speed}m/s`} (<WindDirectionText degree={deg} />)
          <br />
          Wind
        </p>
      </div>
    </div>
  );
}

export default ExtraInfo;
