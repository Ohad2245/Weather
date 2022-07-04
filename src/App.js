import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bc5ff553e5f5cae4bc94d8f06085e42b`


  
  // Date 
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString('en-us', {month:'long'});
  let day = d.toLocaleString('en-us', {weekday:'long'});

  // Time
  let time = d.toLocaleDateString([],{
    
  });

  let time2 = d.toLocaleTimeString([],{ 
    hour: '2-digit',
    minute: '2-digit',
    second:'2-digit'
  })


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

//   const onSubmit = e =>{
//     e.preventDefault();
//     if(!location || location === '') return location;
//  }

  return (
    <div className="app">
            <p className="text">Weather Forecast</p>
      <div className="search">
      {/* {data.cod == "404" ? (
          <p>City Not Found</p>
        ) : (
          <>
          </>
        ) } */}
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Search for Location'
          type="text" />
          {/* <button type="submit" onClick={onSubmit}>Submit</button> */}
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            <p>{day},{month} {date} ,{year}</p>
            <h3>{time}</h3>
            {time2} PM
          </div>
          <div className="temp">
            {data.main ? <h1>{((data.main.temp.toFixed())-32)/1.8.toFixed()}°c</h1> : null}
          </div>
          {data.main ? <h2>{data.main.temp.toFixed()}°f</h2> : null}
          {/* {data.main.temp - 273.15}.toFixed(2); */}
          {/* {data.main.temp < 0 ? <p>ohad</p> : <p>Shiran</p>} */}
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
    
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{((data.main.feels_like.toFixed())-32)/1.8.toFixed()}°c</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        </div>
    </div>
  );
}

export default App;