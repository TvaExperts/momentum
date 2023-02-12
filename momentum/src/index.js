import {BB} from './js/Date';

const timeBlock = document.querySelector('.time');
const dateBlock = document.querySelector('.date');
const greetingBlock = document.querySelector('.greeting');
const nameBlock = document.querySelector('.name');

const showTime = ()=> {
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
const getTimeOfDay = (hours) => {
    if (hours < 6) return 'night';
    if (hours < 12) return 'morning';
    if (hours < 18) return 'afternoon';
    return 'evening';
}

const showGreeting = () => {
    const date = new Date();
    const hours = date.getHours();
    const greetingText = `Good ${getTimeOfDay(hours)},`;
    greetingBlock.textContent = greetingText;
}


showTime();

function setLocalStorage() {
    localStorage.setItem('name', nameBlock.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
        nameBlock.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)
