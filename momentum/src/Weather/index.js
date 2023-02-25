import './owfont-regular.css';
import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Weather from './index.html';
import langArr from '../lang';

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
    if (degree < 22.5) return langArr['n'][localStorage.getItem('language')];
    if (degree < 67.5) return langArr['ne'][localStorage.getItem('language')];
    if (degree < 112.5) return langArr['e'][localStorage.getItem('language')];
    if (degree < 157.5) return langArr['se'][localStorage.getItem('language')];
    if (degree < 202.5) return langArr['s'][localStorage.getItem('language')];
    if (degree < 247.5) return langArr['sw'][localStorage.getItem('language')];
    if (degree < 292.5) return langArr['w'][localStorage.getItem('language')];
    if (degree < 337.5) return langArr['nw'][localStorage.getItem('language')];
    return langArr['n'][localStorage.getItem('language')];
}

async function getWeather() { 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityBlock.value}&lang=${localStorage.getItem('language')}&appid=${WEATHER_API_KEY}&units=metric`;
    weatherIconBlock.className = 'weather-icon owf';
    weatherErrorBlock.textContent = '';
    try {
        const res = await fetch(url);
        const data = await res.json(); 
        weatherIconBlock.classList.add(`owf-${data.weather[0].id}`);
        temperatureBlock.textContent = `${convertInStrTemperature(data.main.temp)}°C`;
        weatherDescriptionBlock.textContent = upperCaseFirst(data.weather[0].description);
        humidityBlock.textContent = `${langArr['humidity'][localStorage.getItem('language')]}: ${data.main.humidity}%`;
        windBlock.textContent = `${langArr['wind'][localStorage.getItem('language')]} ${convertDegreeToDirection(data.wind.deg)}, ${Math.round(data.wind.speed)} ${langArr['speed'][localStorage.getItem('language')]}`;
        
    }
    catch (err) {
        temperatureBlock.textContent = '';
        weatherDescriptionBlock.textContent = '';
        humidityBlock.textContent = '';
        windBlock.textContent = '';
        weatherErrorBlock.textContent = langArr['error'][localStorage.getItem('language')];
    }
}

getWeather(); 
cityBlock.addEventListener('change', getWeather);

export default weather;