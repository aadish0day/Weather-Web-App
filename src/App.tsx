import { useState, useEffect } from 'react';
import { Cloud, AlertCircle, Loader2 } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { Forecast } from './components/Forecast';
import { WeatherData, ForecastDay } from './types/weather';
import {
  getWeatherByCity,
  getWeatherByCoordinates,
  getForecast,
} from './services/weatherService';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const savedCity = localStorage.getItem('lastSearchedCity');
    if (savedCity) {
      handleSearch(savedCity);
    } else {
      setIsInitialLoad(false);
    }
  }, []);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);
    setIsInitialLoad(false);

    try {
      const weatherData = await getWeatherByCity(city);
      const forecastData = await getForecast(
        weatherData.coordinates.lat,
        weatherData.coordinates.lon
      );

      setWeather(weatherData);
      setForecast(forecastData);
      localStorage.setItem('lastSearchedCity', city);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeather(null);
      setForecast([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setIsLoading(true);
    setError(null);
    setIsInitialLoad(false);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const weatherData = await getWeatherByCoordinates(
            position.coords.latitude,
            position.coords.longitude
          );
          const forecastData = await getForecast(
            weatherData.coordinates.lat,
            weatherData.coordinates.lon
          );

          setWeather(weatherData);
          setForecast(forecastData);
          localStorage.setItem('lastSearchedCity', weatherData.location);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
          setIsLoading(false);
        }
      },
      () => {
        setError('Unable to retrieve your location');
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Cloud className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-800">WeatherNow</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Get real-time weather updates for any location
          </p>
        </header>

        <div className="mb-8">
          <SearchBar
            onSearch={handleSearch}
            onUseLocation={handleUseLocation}
            isLoading={isLoading}
          />
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-600 text-lg">Fetching weather data...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="max-w-2xl mx-auto bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-1">
                Error
              </h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {!isLoading && !error && weather && (
          <div className="space-y-6 animate-fade-in">
            <WeatherCard weather={weather} />
            {forecast.length > 0 && <Forecast forecast={forecast} />}
          </div>
        )}

        {!isLoading && !error && !weather && !isInitialLoad && (
          <div className="text-center py-20">
            <Cloud className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No weather data yet
            </h2>
            <p className="text-gray-500">
              Search for a city or use your current location to get started
            </p>
          </div>
        )}

        {isInitialLoad && !isLoading && (
          <div className="text-center py-20">
            <Cloud className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Welcome to WeatherNow
            </h2>
            <p className="text-gray-500">
              Search for a city or use your current location to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
