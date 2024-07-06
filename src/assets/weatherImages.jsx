// src/assets/weatherImages.js
import clearDay from './weather/clear-day.png';
import clearNight from './weather/clear-night.webp';
import rain from './weather/rain.png';
import snow from './weather/snow.png';
import cloudy from './weather/cloudy.webp';
import mist from './weather/mist.png';
import overcastclouds from './weather/overcast.png';
import heavyRain from './weather/heavy rain.png';
import clouds from './weather/clouds.png';
import clearsky from './weather/clearsky.png';

const weatherImages = {
  Clear: clearDay,
  'Clear Night': clearNight,
  'heavy intensity rain': heavyRain,
  'very heavy rain': heavyRain,
  'light rain': rain,
  mist: mist,
  haze: mist,
  Snow: snow,
  'overcast clouds': overcastclouds,
  'broken clouds': overcastclouds,
  'few clouds': clouds,
  'clouds': cloudy,
  'clear sky': clearsky,
};

export default weatherImages;
