# 🌤️ WeatherNow - Real-time Weather Intelligence

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance weather application that provides real-time atmospheric data and multi-day forecasts for any city worldwide. Built with React and TypeScript, it leverages the OpenWeatherMap API to deliver precise weather insights in a clean, professional interface.

![Project Preview](https://via.placeholder.com/1200x600?text=WeatherNow+Preview)

## ✨ Features

- **🌍 Global Search:** Instantly find current weather conditions for any city across the globe.
- **📍 Smart Geolocation:** Get hyper-local weather updates with a single click using the browser's Geolocation API.
- **📅 5-Day Forecast:** Detailed daily forecasts including temperature highs/lows and atmospheric conditions.
- **📊 Rich Weather Data:**
  - Real-time temperature & "Feels Like" metrics.
  - Humidity, Wind Speed, Pressure, and Visibility.
  - Sunrise and Sunset timings.
- **🔄 Search Persistence:** Remembers your last searched city for a seamless return experience.
- **📱 Responsive & Elegant:** Fully optimized for mobile, tablet, and desktop with a focus on typography and clarity.
- **⚡ Fast Performance:** Built with Vite for rapid development and optimized production deployment.

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS, Lucide React (Icons)
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)
- **Build Tool:** Vite
- **Deployment:** Docker & Nginx

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An [OpenWeatherMap API Key](https://home.openweathermap.org/api_keys)

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Weather-Web-App.git
   cd Weather-Web-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your API key:
   ```env
   VITE_WEATHER_API_KEY=your_openweather_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### 🐳 Running with Docker

Easily host the application using Docker Compose:

```bash
docker-compose up -d --build
```
The application will be accessible at [http://localhost:8080](http://localhost:8080).

## 📁 Project Structure

```text
Weather-Web-App/
├── src/
│   ├── components/       # UI Components (Forecast, SearchBar, WeatherCard)
│   ├── services/         # Weather API service logic
│   ├── types/            # TypeScript interface definitions
│   ├── App.tsx           # Main application state & layout
│   ├── index.css         # Global styles & Tailwind
│   └── main.tsx          # Entry point
├── Dockerfile            # Production multi-stage build
├── docker-compose.yml    # Docker configuration
└── tailwind.config.js    # Styling configuration
```

## 🛠️ Scripts

- `npm run dev`: Launch development server.
- `npm run build`: Build production-ready assets.
- `npm run lint`: Static code quality analysis.
- `npm run typecheck`: TypeScript compiler validation.

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and inspire.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with 🌤️ by [Your Name/Organization]
