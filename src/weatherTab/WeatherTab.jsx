import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import HumidityGraph from "../humidityGraph/HumidityGraph";
import WeatherGraph from "../weatherGraph/WeatherGraph";
import "swiper/css";
import "swiper/css/navigation";
import WindGraph from "../windGraph/WindGraph";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function WeatherTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Weather" />
          <Tab label="Humidity" />
          <Tab label="Wind" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WeatherGraph />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HumidityGraph />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WindGraph />
      </TabPanel>
    </Box>
  );
}

export default WeatherTab;
