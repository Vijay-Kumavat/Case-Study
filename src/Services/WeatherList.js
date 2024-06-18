import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Example: Fetch weather data for a list of cities
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/group', {
          params: {
            id: '524901,703448,2643743', // Example city IDs (London, Paris, New York)
            units: 'metric',
            appid: 'YOUR_API_KEY', // Replace with your OpenWeatherMap API key
          },
        });
        setWeatherData(response.data.list);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Weather Forecast</h2>
      <div className="weather-list">
        {weatherData.map(city => (
          <WeatherCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
