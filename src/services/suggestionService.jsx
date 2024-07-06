const API_KEY = '8d9e9903aee5f553468cad45bd445b1a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchSuggestions = async (query) => {
  if (!query) return [];
  const response = await fetch(`${BASE_URL}/find?q=${query}&type=like&sort=population&cnt=5&appid=${API_KEY}`);
  const data = await response.json();
  if (data.list) {
    return data.list.map(city => city.name);
  }
  return [];
};
