const API_KEY = '8d9e9903aee5f553468cad45bd445b1a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    return {
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      conditions: data.weather[0].description,
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchForecastData = async (city) => {
    try {
      const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      
      const dailyData = {};
      data.list.forEach(entry => {
        const date = new Date(entry.dt * 1000).toLocaleDateString();
        if (!dailyData[date]) {
          dailyData[date] = entry;
        }
      });
  
      return Object.values(dailyData).map(entry => ({
        date: new Date(entry.dt * 1000).toLocaleDateString(),
        temp: entry.main.temp,
        conditions: entry.weather[0].description,
      }));
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
