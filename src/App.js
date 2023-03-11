import WeatherApp from "./WeatherApp";
import WeatherProvider from "./weatherProvider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
}

export default App;
