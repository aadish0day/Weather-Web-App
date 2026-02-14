import { WeatherData } from '../types/weather';
import { Droplets, Wind, Gauge, Eye, Sunrise, Sunset } from 'lucide-react';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                {weather.location}, {weather.country}
              </h2>
              <p className="text-xl capitalize opacity-90">{weather.description}</p>
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt={weather.description}
              className="w-32 h-32 -mt-4"
            />
          </div>
          <div className="mt-6">
            <div className="text-7xl font-bold">{weather.temperature}°C</div>
            <p className="text-lg mt-2 opacity-90">
              Feels like {weather.feelsLike}°C
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
          <DetailCard
            icon={<Droplets className="w-6 h-6" />}
            label="Humidity"
            value={`${weather.humidity}%`}
          />
          <DetailCard
            icon={<Wind className="w-6 h-6" />}
            label="Wind Speed"
            value={`${weather.windSpeed} m/s`}
          />
          <DetailCard
            icon={<Gauge className="w-6 h-6" />}
            label="Pressure"
            value={`${weather.pressure} hPa`}
          />
          <DetailCard
            icon={<Eye className="w-6 h-6" />}
            label="Visibility"
            value={`${weather.visibility} km`}
          />
          <DetailCard
            icon={<Sunrise className="w-6 h-6" />}
            label="Sunrise"
            value={formatTime(weather.sunrise)}
          />
          <DetailCard
            icon={<Sunset className="w-6 h-6" />}
            label="Sunset"
            value={formatTime(weather.sunset)}
          />
        </div>
      </div>
    </div>
  );
}

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
      <div className="text-blue-600 mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-600 mb-1">{label}</p>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
