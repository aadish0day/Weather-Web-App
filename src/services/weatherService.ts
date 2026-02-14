import { WeatherData, ForecastDay } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found');
    }
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();
  return transformWeatherData(data);
}

export async function getWeatherByCoordinates(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();
  return transformWeatherData(data);
}

export async function getForecast(lat: number, lon: number): Promise<ForecastDay[]> {
  const response = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }

  const data = await response.json();
  return transformForecastData(data);
}

function transformWeatherData(data: any): WeatherData {
  return {
    location: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    pressure: data.main.pressure,
    visibility: data.visibility / 1000,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    coordinates: {
      lat: data.coord.lat,
      lon: data.coord.lon,
    },
  };
}

function transformForecastData(data: any): ForecastDay[] {
  const dailyForecasts: { [key: string]: any[] } = {};

  data.list.forEach((item: any) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = [];
    }
    dailyForecasts[date].push(item);
  });

  return Object.entries(dailyForecasts)
    .slice(0, 5)
    .map(([date, forecasts]) => {
      const temps = forecasts.map((f) => f.main.temp);
      const middayForecast = forecasts[Math.floor(forecasts.length / 2)];

      return {
        date,
        tempMax: Math.round(Math.max(...temps)),
        tempMin: Math.round(Math.min(...temps)),
        description: middayForecast.weather[0].description,
        icon: middayForecast.weather[0].icon,
      };
    });
}
