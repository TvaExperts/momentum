import {BB} from './js/Date';

const timeBlock = document.querySelector('.time');
const dateBlock = document.querySelector('.date');
const greetingBlock = document.querySelector('.greeting');
const nameBlock = document.querySelector('.name');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const bodyBlock = document.body;


const weatherIconBlock = document.querySelector('.weather-icon');
const temperatureBlock = document.querySelector('.temperature');
const weatherDescriptionBlock = document.querySelector('.weather-description');
const cityBlock = document.querySelector('.city');

const WEATHER_API_KEY='7084f9129f59e9d3a287c7606d73e5ba';



// ****************** Load and Unload Doc ********************

window.addEventListener('beforeunload', () => {
    setLocalStorage();
});

window.addEventListener('load', () => {
    getLocalStorage();
});


// ****************** Local Storage ********************

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        nameBlock.value = localStorage.getItem('name');
    }
}

const setLocalStorage = () => {
    localStorage.setItem('name', nameBlock.value);
}

// ****************** Name Imput Block ********************

const showTime = () => {
    const date = new Date();
    timeBlock.textContent = date.toLocaleTimeString();
    showGreeting();
    showDate();
    setTimeout(showTime, 1000);
}

const upperCaseFirst = (str)=> {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

const showDate = () => {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Moscow'};
    dateBlock.textContent = upperCaseFirst(date.toLocaleDateString('ru-RU', options));
}

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6) return 'night';
    if (hours < 12) return 'morning';
    if (hours < 18) return 'afternoon';
    return 'evening';
}

const showGreeting = () => {
    const greetingText = `Good ${getTimeOfDay()},`;
    greetingBlock.textContent = greetingText;
}

showTime();


// ****************** BG Image ********************

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let randomImageNum = getRandomInt(20) + 1;

const setBg = (timeOfDay, bgNum) => {
    const urlImage=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum.toString().padStart(2,'0')}.jpg`;
    const img = new Image();
    img.src = urlImage;
    img.onload = () => {      
        bodyBlock.style.backgroundImage = `url('${urlImage}')`;
    }; 
   
}

setBg(getTimeOfDay(),randomImageNum);

const getSlideNext = () => {
    randomImageNum++;
    if (randomImageNum>20) randomImageNum=1;
    if (randomImageNum<1) randomImageNum=20;
    setBg(getTimeOfDay(),randomImageNum);
}

const getSlidePrev = () => {
    randomImageNum--;
    if (randomImageNum<1) randomImageNum=20;
    setBg(getTimeOfDay(),randomImageNum);
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);



// ****************** Weather ********************

async function getWeather() {  
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityBlock.value}&lang=ru&appid=${WEATHER_API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIconBlock.className = 'weather-icon owf';
    weatherIconBlock.classList.add(`owf-${data.weather[0].id}`);
    temperatureBlock.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescriptionBlock.textContent = upperCaseFirst(data.weather[0].description);
    
}
getWeather(); 

cityBlock.addEventListener('change', getWeather);


