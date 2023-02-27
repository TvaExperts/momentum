import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Greeting from './index.html';
import langArr from '../lang';

const greeting = htmlToElement(Greeting);

const timeBlock = greeting.querySelector('.time');
const dateBlock = greeting.querySelector('.date');
const greetingBlock = greeting.querySelector('.greeting');
const nameBlock = greeting.querySelector('.name');

window.addEventListener('beforeunload', () => {
    setLocalStorage();
});

window.addEventListener('load', () => {
    getLocalStorage();
});

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        nameBlock.value = localStorage.getItem('name');
    }
}

const setLocalStorage = () => {
    localStorage.setItem('name', nameBlock.value);
}

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
    const options = {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/Moscow'};
    const langSetting = (localStorage.getItem('language') === 'en') ? 'en-EN' : 'ru-RU';
    dateBlock.textContent = upperCaseFirst(date.toLocaleDateString(langSetting, options));
}

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6) return langArr['greet-night'][localStorage.getItem('language')];
    if (hours < 12) return langArr['greet-morning'][localStorage.getItem('language')];
    if (hours < 18) return langArr['greet-afternoon'][localStorage.getItem('language')];
    return langArr['greet-evening'][localStorage.getItem('language')]; 
}

const showGreeting = () => {
    greetingBlock.textContent = getTimeOfDay();
}

const loadTimeBlock = () => {
    if (localStorage.getItem('date') === 'false') {
        const date = greeting.querySelector('.date');
        date.classList.add('hide');
    }
    if (localStorage.getItem('time') === 'false') {
        const time = greeting.querySelector('.time');
        time.classList.add('hide');
    }
    if (localStorage.getItem('greeting') === 'false') {
        const greetingBlock = greeting.querySelector('.greeting-container');
        greetingBlock.classList.add('hide');
    }
    showTime();
}

loadTimeBlock();

export default greeting;