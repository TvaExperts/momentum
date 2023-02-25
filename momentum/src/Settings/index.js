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
// ****************** Local Storage ********************

const getLocalStorage = () => {
    if(!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
    }
    
   if (localStorage.getItem('language')==='ru') {
    selectLang.selectedIndex=0;
   } else {
    selectLang.selectedIndex=1;
   }

        


    if(!localStorage.getItem('photo-source')) {
        localStorage.setItem('photo-source', 'github');
    }

    if(!localStorage.getItem('time')) {
        localStorage.setItem('time', 'true');
    }
    if(!localStorage.getItem('date')) {
        localStorage.setItem('date', 'true');
    }
    if(!localStorage.getItem('greating')) {
        localStorage.setItem('greating', 'true');
    }
    if(!localStorage.getItem('quotes')) {
        localStorage.setItem('quotes', 'true');
    }
    if(!localStorage.getItem('weather')) {
        localStorage.setItem('weather', 'true');
    }
    if(!localStorage.getItem('audioplayer')) {
        localStorage.setItem('audioplayer', 'true');
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
    console.log(localStorage.getItem('photo-source'));
}

selectSourcePhoto.addEventListener('change', changeSourcePhoto)

const loadSettings = () => {
        
    const timeBlock = settings.querySelector('.settings-time');
    timeBlock.innerText = langArr['settings-time'][localStorage.getItem('language')];
    const dateBlock = settings.querySelector('.settings-date');
    dateBlock.innerText = langArr['settings-date'][localStorage.getItem('language')];
    const greatingBlock = settings.querySelector('.settings-greating');
    greatingBlock.innerText = langArr['settings-greating'][localStorage.getItem('language')];
    const quoteBlock = settings.querySelector('.settings-quote');
    quoteBlock.innerText = langArr['settings-quote'][localStorage.getItem('language')];
    const weatherBlock = settings.querySelector('.settings-weather');
    weatherBlock.innerText = langArr['settings-weather'][localStorage.getItem('language')];
    const playerBlock = settings.querySelector('.settings-player');
    playerBlock.innerText = langArr['settings-player'][localStorage.getItem('language')];
    const languageBlock = settings.querySelector('.settings-language');
    languageBlock.innerText = langArr['settings-language'][localStorage.getItem('language')];
    const photoBlock = settings.querySelector('.settings-photo');
    photoBlock.innerText = langArr['settings-photo'][localStorage.getItem('language')];

    
    //if (localStorage.getItem('greating') === 'true') photoCheckbox.checked = true;
    

}

loadSettings();

export default settings;