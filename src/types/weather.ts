export interface WeatherData {
  location: string;
  country: string;
  temperature: number;
  feelsLike: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  sunrise: number;
  sunset: number;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface ForecastDay {
  date: string;
  tempMax: number;
  tempMin: number;
  description: string;
  icon: string;
}
