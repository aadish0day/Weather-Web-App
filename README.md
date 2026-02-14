# WeatherNow

A beautiful, real-time weather application built with React, TypeScript, and Tailwind CSS.

## Features

- Search weather by city name
- Get weather data using your current location
- View current weather conditions including temperature, humidity, wind speed, and more
- 5-day weather forecast
- Responsive design for mobile and desktop
- Remembers your last searched city

## Setup Instructions

### 1. Get Your OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### 2. Configure Environment Variables

1. Create a `.env` file in the root directory
2. Add your API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Docker Setup

### Build the Docker Image

```bash
docker build -t weather-app .
```

### Run with Docker

```bash
docker run -p 5173:5173 -e VITE_WEATHER_API_KEY=your_api_key_here weather-app
```

Or using docker-compose:

```bash
docker-compose up
```

Make sure to update the `docker-compose.yml` file with your API key.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- OpenWeatherMap API
- Lucide React Icons

## License

MIT
