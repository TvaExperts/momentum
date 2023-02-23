import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Greating from './index.html';

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



// ****************** Local Storage ********************

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



export default greating;