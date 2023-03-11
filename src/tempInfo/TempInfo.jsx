import React, { useContext } from "react";
import { WeatherContext } from "../weatherProvider/WeatherProvider";

function TempInfo() {
  const { feels_like, temp_min, temp_max } = useContext(WeatherContext);
  return (
    <div className="temperature-info">
      <div>
        Feels like <span>{feels_like}&deg;</span>
      </div>
      <div>
        Lowest temperature <span>{temp_min}&deg;</span>
      </div>
      <div>
        Highest temperature <span>{temp_max}&deg;</span>
      </div>
    </div>
  );
}

export default TempInfo;
