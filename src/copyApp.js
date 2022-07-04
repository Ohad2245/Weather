// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const apiKey = 'bc5ff553e5f5cae4bc94d8f06085e42b';
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=bc5ff553e5f5cae4bc94d8f06085e42b;
//   `

//   const [weatherData, setWeatherData] = useState([{}]);
//   const [city,setCity] = useState("");

//   const getWeather = (event) => {
//     if(event.key === "Enter"){
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
//         response => response.json()
//       ).then(
//         data => {
//           setWeatherData(data)
//           setCity("")
//         }
//       )
//     }
//   }

//   return (
//     <div className="container">
//     <input 
//     className="input" 
//     placeholder="Enter City..."
//     onChange={e => setCity(e.target.value)}
//     value={city}
//     onKeyPress={getWeather}
//     />

//     {typeof weatherData.main === 'undefined' ? (
//       <div>
//         <p>Welcome to weather app! Enter in a city to get the weather of.</p>
//       </div>
//     ):(
//       <div className='weather-data'>
//         <p className="city">{weatherData.name}</p>
//         <p className="temp">{Math.round(weatherData.main.temp)}</p>
//         <p className="weather">{weatherData.weather[0].main}</p>
//       </div>
//     )}

//     {weatherData.cod === "404" ? (
//       <p>City Not Found :( </p>
//     ) : (
//       <>
//       </>
//     )}

//     </div>
//   )
// }

// export default App

// ~`~~~~~~~~~``App.CSS~~~~~~~~~~~~~~~~~~~~~~~~
// .container{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 25px;
//   }
  
//   .input{
//     padding:15px;
//     width:80%;
//     margin:auto;
//     border:1px solid lightgray;
//     border-radius: 6px;
//     font-size: 16px;
//   }
  
//   .input:focus{
//     outline:none;
  
//   }
  
//   .weather-data{
//     margin-top:100px;
//     display:flex;
//     flex-direction: column;
//     align-items: center;
//   }
  
//   .city{ 
//     font-size:30px;
//     font-weight: 200;
//   }
  
//   .temp{
//     font-size: 90px;
//     padding:10px;
//     border:1px solid lightgray;
//     border-radius: 12px;
//   }
  
//   .weather{ 
//     font-size: 30px;
//     font-weight: 200;
//   }
  
  