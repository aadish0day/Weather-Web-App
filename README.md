# WeatherNow

Real-time weather dashboard providing current conditions and a 5-day forecast for any city worldwide.

## Features

- **Global search** — current weather and 5-day forecast for any city
- **Geolocation** — one-click weather from your current position
- **Rich data** — temperature, feels like, humidity, wind, pressure, visibility, sunrise, sunset
- **Search persistence** — last searched city saved to localStorage
- **Responsive** — works on mobile, tablet, and desktop

## Tech Stack

React 18, TypeScript, Vite 5, Tailwind CSS 3, Lucide Icons, OpenWeatherMap API, Docker

## Quick Start

```bash
# Get an API key from https://openweathermap.org/api
echo "VITE_WEATHER_API_KEY=your_key" > .env

npm install
npm run dev

# Docker
docker compose up -d --build
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — lint
- `npm run typecheck` — TypeScript check
