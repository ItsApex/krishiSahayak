import React from "react";

// function Weathercomp({date, temperature, humidity, weatherDescription}) {
//   return (
//     <div className="h-[90%] min-w-44 flex flex-col justify-center items-center border border-sky-500 rounded">
//       <div>Date: {date}</div>
//       <div>Temperature: {temperature} K</div>
//       <div>Humidity: {humidity}</div>
//       <div>Weather Description: {weatherDescription}</div>
//     </div>
//   );
// }
const Weathercomp = ({ forecast }) => {
  // const { dt_txt, weather, main } = forecast;
  // const { description, icon } = weather[0];

  return (
    <div>
      {/* <h3>{new Date(dt_txt).toLocaleDateString()}</h3> */}
      <div>
        {/* <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} /> */}
        {/* <p>{description}</p> */}
      </div>
      {/* <p>Temperature: {main.temp}°C</p> */}
      {/* <p>Feels Like: {main.feels_like}°C</p>
      <p>Min Temperature: {main.temp_min}°C</p>
      <p>Max Temperature: {main.temp_max}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p> */}
      {/* <p>Wind Speed: {forecast.wind.speed} m/s</p> */}
    </div>
  );
};

export default Weathercomp;
