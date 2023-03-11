import React, { useContext } from "react";
import { LabelList, Line, LineChart, XAxis } from "recharts";
import CurrentWeatherIcons from "../currentWeatherIcons/CurrentWeatherIcons";
import { WeatherContext } from "../weatherProvider/WeatherProvider";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const formatXAxis = (data) => `${new Date(data * 1000).getHours()}:00`;

const CustomizedDot = ({ payload, cx, cy }) => (
  <CurrentWeatherIcons
    weatherState={payload.weather}
    x={cx - 13}
    y={cy - 5}
    fontSize={30}
  />
);
const CustomizedLabel = ({ x, y, value }) => (
  <text x={x} y={y} dy={-4} fontSize={15} textAnchor="middle">
    {value}°
  </text>
);

function LineGraph({ num }) {
  const { list } = useContext(WeatherContext);
  return (
    <LineChart
      width={960}
      height={200}
      data={list
        ?.slice(num * 12, (num + 1) * 12)
        .map(({ dt, main, weather }) => ({
          dt,
          main: main.temp,
          weather: weather[0].main,
        }))}
      margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 0,
      }}
    >
      <XAxis dataKey="dt" fontSize={15} tickFormatter={formatXAxis} />
      <Line
        dataKey="main"
        stroke="#3cb371"
        strokeWidth={2}
        dot={<CustomizedDot />}
        isAnimationActive={false}
      >
        <LabelList content={<CustomizedLabel />} />
      </Line>
    </LineChart>
  );
}

function WeatherGraph() {
  const slides = [];

  for (let i = 0; i < 2; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <LineGraph num={i} />
      </SwiperSlide>
    );
  }
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {slides}
    </Swiper>
  );
}

export default WeatherGraph;
