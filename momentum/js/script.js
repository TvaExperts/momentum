const timeBlock = document.querySelector('.time');
const dateBlock = document.querySelector('.date');

const showTime = ()=> {
    const date = new Date();
    timeBlock.textContent = date.toLocaleTimeString();
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

showTime();
