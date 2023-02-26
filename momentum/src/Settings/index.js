import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Settings from './index.html';
import langArr from '../lang';

const settings = htmlToElement(Settings);


window.addEventListener('beforeunload', () => {
    setLocalStorage();
});

window.addEventListener('load', () => {
    getLocalStorage();
});




const selectLang = settings.querySelector('.settings-lang');
const selectSourcePhoto = settings.querySelector('.settings-source');

const tagPhoto = settings.querySelector('.api-tag');

const icoBlock = settings.querySelector('.settings-ico');
const toggleIcoClick= ()=> {
    settings.classList.toggle('show');
}
icoBlock.addEventListener('click', toggleIcoClick);

const changeTagPhoto = () => {
    localStorage.setItem('tag-photo', tagPhoto.value);
}

tagPhoto.addEventListener('change' , changeTagPhoto);



const getLocalStorage = () => {

    if(!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
        console.log('Привет!')
    }

    if (localStorage.getItem('language') === 'ru') {
        selectLang.selectedIndex = 0;
    } else {
        selectLang.selectedIndex = 1;
    }

    if(localStorage.getItem('tag-photo')) {
        tagPhoto.value = localStorage.getItem('tag-photo');
    }



    if(!localStorage.getItem('photo-source')) {
        localStorage.setItem('photo-source', 'github');
    }

    switch (localStorage.getItem('photo-source')) {
        case 'github': selectSourcePhoto.selectedIndex = 0;
            break;
        case 'unsplash': selectSourcePhoto.selectedIndex = 1;
            break;
        case 'flickr': selectSourcePhoto.selectedIndex = 2;
            break;
    }

    if(!localStorage.getItem('time')) {
        localStorage.setItem('time', 'true');
    }
    if(!localStorage.getItem('date')) {
        localStorage.setItem('date', 'true');
    }
    if(!localStorage.getItem('greeting')) {
        localStorage.setItem('greeting', 'true');
    }
    if(!localStorage.getItem('quotes')) {
        localStorage.setItem('quotes', 'true');
    }
    if(!localStorage.getItem('weather')) {
        localStorage.setItem('weather', 'true');
    }
    if(!localStorage.getItem('player')) {
        localStorage.setItem('player', 'true');
    }
}

const setLocalStorage = () => {
    localStorage.setItem('name', nameBlock.value);
    
}



const changeLanguage = () => {
    if (selectLang.selectedIndex === 0) {
        localStorage.setItem('language', 'ru');
    } else {
        localStorage.setItem('language', 'en');
    }
    location.reload();
}

selectLang.addEventListener('change', changeLanguage)

const changeSourcePhoto = () => {
    switch (selectSourcePhoto.selectedIndex) {
        case 0: localStorage.setItem('photo-source', 'github');
                break;
        case 1: localStorage.setItem('photo-source', 'unsplash');
                break;
        case 2: localStorage.setItem('photo-source', 'flickr');
                break;
    }
}

selectSourcePhoto.addEventListener('change', changeSourcePhoto)

const loadSettings = () => {
    if(!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
        console.log('Привет!')
    }
    const timeBlock = settings.querySelector('.settings-time');
    timeBlock.innerText = langArr['settings-time'][localStorage.getItem('language')];
    const dateBlock = settings.querySelector('.settings-date');
    dateBlock.innerText = langArr['settings-date'][localStorage.getItem('language')];
    const greetingBlock = settings.querySelector('.settings-greeting');
    greetingBlock.innerText = langArr['settings-greeting'][localStorage.getItem('language')];
    const quoteBlock = settings.querySelector('.settings-quotes');
    quoteBlock.innerText = langArr['settings-quotes'][localStorage.getItem('language')];
    const weatherBlock = settings.querySelector('.settings-weather');
    weatherBlock.innerText = langArr['settings-weather'][localStorage.getItem('language')];
    const playerBlock = settings.querySelector('.settings-player');
    playerBlock.innerText = langArr['settings-player'][localStorage.getItem('language')];
    const languageBlock = settings.querySelector('.settings-language');
    languageBlock.innerText = langArr['settings-language'][localStorage.getItem('language')];
    const photoBlock = settings.querySelector('.settings-photo');
    photoBlock.innerText = langArr['settings-photo'][localStorage.getItem('language')];



    if(!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
        console.log('Привет!')
    }

    if (localStorage.getItem('language') === 'ru') {
        selectLang.selectedIndex = 0;
    } else {
        selectLang.selectedIndex = 1;
    }

    if(localStorage.getItem('tag-photo')) {
        tagPhoto.value = localStorage.getItem('tag-photo');
    }



    if(!localStorage.getItem('photo-source')) {
        localStorage.setItem('photo-source', 'github');
    }

    switch (localStorage.getItem('photo-source')) {
        case 'github': selectSourcePhoto.selectedIndex = 0;
            break;
        case 'unsplash': selectSourcePhoto.selectedIndex = 1;
            break;
        case 'flickr': selectSourcePhoto.selectedIndex = 2;
            break;
    }

    if(!localStorage.getItem('time')) {
        localStorage.setItem('time', 'true');
    }
    if(!localStorage.getItem('date')) {
        localStorage.setItem('date', 'true');
    }
    if(!localStorage.getItem('greeting')) {
        localStorage.setItem('greeting', 'true');
    }
    if(!localStorage.getItem('quotes')) {
        localStorage.setItem('quotes', 'true');
    }
    if(!localStorage.getItem('weather')) {
        localStorage.setItem('weather', 'true');
    }
    if(!localStorage.getItem('player')) {
        localStorage.setItem('player', 'true');
    }


    const cbTime = settings.querySelector('.cb-time');
    cbTime.checked = (localStorage.getItem('time') === 'true');
    cbTime.addEventListener('change' , changeTime)
    const cbDate = settings.querySelector('.cb-date');
    cbDate.checked = (localStorage.getItem('date') === 'true');
    cbDate.addEventListener('change' , changeDate)
    const cbGreeting = settings.querySelector('.cb-greeting');
    cbGreeting.checked = (localStorage.getItem('greeting') === 'true');
    cbGreeting.addEventListener('change' , changeGreeting)
    const cbQuotes = settings.querySelector('.cb-quotes');
    cbQuotes.checked = (localStorage.getItem('quotes') === 'true');
    cbQuotes.addEventListener('change' , changeQuotes)
    const cbWeather = settings.querySelector('.cb-weather');
    cbWeather.checked = (localStorage.getItem('weather') === 'true');
    cbWeather.addEventListener('change' , changeWeather)
    const cbPlayer= settings.querySelector('.cb-player');
    cbPlayer.checked = (localStorage.getItem('player') === 'true');
    cbPlayer.addEventListener('change' , changePlayer)

}

const changeTime = () => {
    const time = document.querySelector('.time');
    localStorage.setItem('time', time.classList.contains('hide').toString());
    time.classList.toggle('hide');
}


const changeDate = () => {
    const date = document.querySelector('.date');
    localStorage.setItem('date', date.classList.contains('hide').toString());
    date.classList.toggle('hide');
}

const changeGreeting = () => {
    const greeting = document.querySelector('.greeting-container');
    localStorage.setItem('greeting', greeting.classList.contains('hide').toString());
    greeting.classList.toggle('hide');
}

const changeQuotes = () => {
    const quotes = document.querySelector('.quotes__wrraper');
    localStorage.setItem('quotes', quotes.classList.contains('hide').toString());
    quotes.classList.toggle('hide');
}

const changeWeather = () => {
    const weather = document.querySelector('.weather');
    localStorage.setItem('weather', weather.classList.contains('hide').toString());
    weather.classList.toggle('hide');
}

const changePlayer = () => {
    const player = document.querySelector('.player');
    localStorage.setItem('player', player.classList.contains('hide').toString());
    player.classList.toggle('hide');
}

loadSettings();

export default settings;