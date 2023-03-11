import React, { useContext } from "react";
import { Bar, BarChart, XAxis } from "recharts";
import { WeatherContext } from "../weatherProvider/WeatherProvider";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const formatXAxis = (data) => `${new Date(data * 1000).getHours()}:00`;

const CustomizedLabel = function ({ x, y, value }) {
  return (
    <text x={x + 30} y={y - 2} fontSize="15" textAnchor="middle">
      {value}%
    </text>
  );
};

function BarGraph({ num }) {
  const { list } = useContext(WeatherContext);
  return (
    <BarChart
      width={960}
      height={200}
      data={list
        ?.slice(num * 12, (num + 1) * 12)
        .map(({ dt, main }) => ({ dt, humidity: main.humidity }))}
      margin={{ top: 30, right: 30, left: 30, bottom: 10 }}
    >
      <XAxis dataKey="dt" fontSize={15} tickFormatter={formatXAxis} />
      <Bar
        dataKey="humidity"
        fill="#2C6CFF"
        isAnimationActive={false}
        label={<CustomizedLabel />}
      />
    </BarChart>
  );
}

function HumidityGraph() {
  const slides = [];

  for (let i = 0; i < 2; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <BarGraph num={i} />
      </SwiperSlide>
    );
  }
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {slides}
    </Swiper>
  );
}

export default HumidityGraph;
