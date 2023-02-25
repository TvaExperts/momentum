import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Greating from './index.html';
import langArr from '../lang';

const greating = htmlToElement(Greating);

const timeBlock = greating.querySelector('.time');
const dateBlock = greating.querySelector('.date');
const greetingBlock = greating.querySelector('.greeting');
const nameBlock = greating.querySelector('.name');

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
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Moscow'};
    const langSetting = (localStorage.getItem('language') === 'en') ? 'en-EN' : 'ru-RU';
    dateBlock.textContent = upperCaseFirst(date.toLocaleDateString(langSetting, options));
}

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6) return langArr['great-night'][localStorage.getItem('language')];
    if (hours < 12) return langArr['great-morning'][localStorage.getItem('language')];
    if (hours < 18) return langArr['great-afternoon'][localStorage.getItem('language')];
    return langArr['great-evening'][localStorage.getItem('language')]; 
}

const showGreeting = () => {
    greetingBlock.textContent = getTimeOfDay();
}

showTime();

export default greating;