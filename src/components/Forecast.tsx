import { ForecastDay } from '../types/weather';

interface ForecastProps {
  forecast: ForecastDay[];
}

export function Forecast({ forecast }: ForecastProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow"
          >
            <p className="text-sm font-medium text-gray-600 mb-2">
              {index === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
              className="w-16 h-16 mx-auto"
            />
            <p className="text-sm text-gray-600 capitalize mb-3">{day.description}</p>
            <div className="flex justify-center gap-2 text-sm">
              <span className="font-bold text-gray-800">{day.tempMax}°</span>
              <span className="text-gray-500">{day.tempMin}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
