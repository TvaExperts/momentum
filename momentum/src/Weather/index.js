import './owfont-regular.css';
import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Weather from './index.html';

const weather = htmlToElement(Weather);

const WEATHER_API_KEY = '7084f9129f59e9d3a287c7606d73e5ba';

const weatherIconBlock = weather.querySelector('.weather-icon');
const temperatureBlock = weather.querySelector('.temperature');
const windBlock = weather.querySelector('.wind');
const humidityBlock = weather.querySelector('.humidity');
const weatherDescriptionBlock = weather.querySelector('.weather-description');
const cityBlock = weather.querySelector('.city');

const weatherErrorBlock = weather.querySelector('.weather-error');

const upperCaseFirst = (str)=> {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

const convertInStrTemperature = (temperature) => {
    temperature = Math.round(temperature);
    let strTemperature = temperature.toString();
    if (temperature > 0) strTemperature = '+' + strTemperature;
    return strTemperature;
}

const convertDegreeToDirection = (degree) => {
    if (degree < 22.5) return 'C';
    if (degree < 67.5) return 'C-В';
    if (degree < 112.5) return 'В';
    if (degree < 157.5) return 'Ю-В';
    if (degree < 202.5) return 'Ю';
    if (degree < 247.5) return 'Ю-З';
    if (degree < 292.5) return 'З';
    return 'C';
}

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityBlock.value}&lang=ru&appid=${WEATHER_API_KEY}&units=metric`;
    weatherIconBlock.className = 'weather-icon owf';
    weatherErrorBlock.textContent = '';
    try {
        const res = await fetch(url);
        const data = await res.json(); 
        weatherIconBlock.classList.add(`owf-${data.weather[0].id}`);
        temperatureBlock.textContent = `${convertInStrTemperature(data.main.temp)}°C`;
        weatherDescriptionBlock.textContent = upperCaseFirst(data.weather[0].description);
        humidityBlock.textContent = `Влажность: ${data.main.humidity}%`;
        windBlock.textContent = `Ветер ${convertDegreeToDirection(data.wind.deg)}, ${Math.round(data.wind.speed)} м/с`;
        
    }
    catch (err) {
        temperatureBlock.textContent = '';
        weatherDescriptionBlock.textContent = '';
        humidityBlock.textContent = '';
        windBlock.textContent = '';
        weatherErrorBlock.textContent = 'Введите корректный город!';
    }
}

getWeather(); 
cityBlock.addEventListener('change', getWeather);

export default weather;