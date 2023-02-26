/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Background/index.html":
/*!***********************************!*\
  !*** ./src/Background/index.html ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"slider-icons\">\r\n    <button class=\"slide-prev slider-icon\"></button>\r\n    <button class=\"slide-next slider-icon\"></button>\r\n  </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Greeting/index.html":
/*!*********************************!*\
  !*** ./src/Greeting/index.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"greeting__wrapper\">\r\n    <time class=\"time\"></time>\r\n    <date class=\"date\"></date>\r\n    <div class=\"greeting-container\">\r\n        <span class=\"greeting\"></span>\r\n        <input type=\"text\" class=\"name\" placeholder=\"Ваше имя...\"/>\r\n    </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Player/index.html":
/*!*******************************!*\
  !*** ./src/Player/index.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"player\">\r\n  <div class=\"player-header\">\r\n    <div class=\"player-controls\">\r\n      <button class=\"play-prev player-icon\"></button>\r\n      <button class=\"play player-icon\"></button>\r\n      <button class=\"play-next player-icon\"></button>\r\n    </div>\r\n    <div class=\"info\">\r\n      <div class=\"song-title\"> </div>\r\n      <div class=\"volume\">\r\n        <div class=\"volume-ico\"></div>\r\n        <!--<div class=\"volume-bar\">\r\n          <div class=\"volume-bar-fill\"></div>\r\n        </div>-->\r\n        <div class=\"volume-slider\">\r\n            <input type=\"range\" class=\"volume-fader\" min=\"0\" max=\"1000\" value=\"1000\" step=\"1\">\r\n        </div>\r\n      </div>\r\n      <div class=\"duration\">--:--/--:--</div> \r\n    </div>\r\n  </div>\r\n  <!--<div class=\"progress-bar\">\r\n    <div class=\"progress-fill\"></div>\r\n  </div>-->\r\n\r\n  <div class=\"progress-slider\">\r\n    <input type=\"range\" class=\"progress-fader\" min=\"0\" max=\"1000\" value=\"0\" step=\"1\">\r\n  </div>\r\n  <ul class=\"play-list\"></ul>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Quotes/index.html":
/*!*******************************!*\
  !*** ./src/Quotes/index.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"quotes__wrraper\">\r\n    <button class=\"change-quote\"></button>\r\n    <div>\r\n      <div class=\"quote\"></div>\r\n      <div class=\"author\"></div>\r\n    </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Settings/index.html":
/*!*********************************!*\
  !*** ./src/Settings/index.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"settings-wrapper\">\r\n    <div class=\"settings-ico\"></div>\r\n    <div class=\"settings\">\r\n        <ul class=\"setting-list\">\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-language\">Язык</span>\r\n                <select class=\"select settings-lang\">\r\n                    <option>РУ</option>\r\n                    <option>EN</option>\r\n                    </select>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-photo\">Фото</span>\r\n                <input type=\"text\" class=\"api-tag\" placeholder=\"Tags\" />\r\n                <select class=\"select settings-source\">\r\n                    <option>GitHub</option>\r\n                    <option>Unsplash</option>\r\n                    <option>Flickr</option>\r\n                </select>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-time\">Время</span>  \r\n                <label class=\"checkbox\"> \r\n                    <input type=\"checkbox\" class=\"checkbox-input cb-time\"/>\r\n                    <div class=\"checkbox-wrapper\"></div>\r\n                </label>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-date\">Дата</span>\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" class=\"checkbox-input cb-date\"/>\r\n                    <div class=\"checkbox-wrapper\"></div>\r\n                </label>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-greeting\">Приветствие</span>\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" class=\"checkbox-input cb-greeting\"/>\r\n                    <div class=\"checkbox-wrapper\"></div>\r\n                </label>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-quotes\">Цитата дня</span>\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" class=\"checkbox-input cb-quotes\" checked/>\r\n                    <div class=\"checkbox-wrapper\"></div>\r\n                </label>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-weather\">Прогноз погоды</span>\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" class=\"checkbox-input cb-weather\"/>\r\n                    <div class=\"checkbox-wrapper\"></div>\r\n                </label>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                <span class=\"settings-player\">Аудиоплеер</span>\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" class=\"checkbox-input cb-player\"/>\r\n                    <div class=\"checkbox-wrapper\"></div>\r\n                </label>\r\n            </li>\r\n            <li class=\"settings-item\">\r\n                \r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/Weather/index.html":
/*!********************************!*\
  !*** ./src/Weather/index.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"weather\">\r\n    <input type=\"text\" class=\"city\"/>\r\n    <div class=\"weather-error\"></div>\r\n    <div class=\"description-container\">\r\n      <i class=\"weather-icon owf\"></i>\r\n      <span class=\"temperature\"></span>\r\n      <span class=\"weather-description\"></span>\r\n    </div>\r\n    <div class=\"wind\"></div>\r\n    <div class=\"humidity\"></div>\r\n  </div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Background/index.css":
/*!**********************************!*\
  !*** ./src/Background/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Greeting/index.css":
/*!********************************!*\
  !*** ./src/Greeting/index.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Player/index.css":
/*!******************************!*\
  !*** ./src/Player/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Quotes/index.css":
/*!******************************!*\
  !*** ./src/Quotes/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Settings/index.css":
/*!********************************!*\
  !*** ./src/Settings/index.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Weather/index.css":
/*!*******************************!*\
  !*** ./src/Weather/index.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Weather/owfont-regular.css":
/*!****************************************!*\
  !*** ./src/Weather/owfont-regular.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Background/index.js":
/*!*********************************!*\
  !*** ./src/Background/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/Background/index.css");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/Background/index.html");



const backgroundBlock = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_2__["default"]);

const slideNext = backgroundBlock.querySelector('.slide-next');
const slidePrev = backgroundBlock.querySelector('.slide-prev');

const UNSPLASH_API_KEY = 'yw2PXnVSDFGPpRVYC-NpSCm-ggZXLbGimG_gLiCmzak';
const FLICKR_API_KEY = 'e42abac3a12ae59ea2cda0d295b92890';





const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let randomImageNum = getRandomInt(20) + 1;

async function setBg () {
    const urlImage = await getLinkToImage();
    const img = new Image();
    img.src = urlImage;
    img.onload = () => {      
        document.body.style.backgroundImage = `url('${urlImage}')`;
    }; 
}

async function getLinkToImage() {
    
    let urlGet;
    let urlImage;
    const timeOfDay = getTimeOfDay();
    const tag = (localStorage.getItem('tag-photo')) || timeOfDay;
    switch (localStorage.getItem('photo-source')) {
        case 'unsplash': 
            urlGet = `https://api.unsplash.com/photos/random?query=${tag}&client_id=${UNSPLASH_API_KEY}`;
            const res = await fetch(urlGet);
            const data = await res.json();
            urlImage = data.urls.regular;
            break;
        case 'flickr': 
            urlGet = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${tag}&format=json&nojsoncallback=1`;
            const res1 = await fetch(urlGet);
            const data1 = await res1.json();
            const randomImg = getRandomInt(data1.photos.photo.length);
            urlImage=`https://farm${data1.photos.photo[randomImg].farm}.staticflickr.com/${data1.photos.photo[randomImg].server}/${data1.photos.photo[randomImg].id}_${data1.photos.photo[randomImg].secret}.jpg`
            break;
        default :
            urlImage = `./images/${timeOfDay}/${randomImageNum.toString().padStart(2,'0')}.jpg`;
    }
    return urlImage;
}

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6) return 'night';
    if (hours < 12) return 'morning';
    if (hours < 18) return 'afternoon';
    return 'evening';
}

setBg();

const getSlideNext = () => {
    if (localStorage.getItem('photo-source')==='github') {
        randomImageNum++;
        if (randomImageNum>20) randomImageNum=1;
    }
    setBg();
}

const getSlidePrev = () => {
    if (localStorage.getItem('photo-source')==='github') {
        randomImageNum--;
        if (randomImageNum<1) randomImageNum=20;
    }
    setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backgroundBlock);

/***/ }),

/***/ "./src/Greeting/index.js":
/*!*******************************!*\
  !*** ./src/Greeting/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/Greeting/index.css");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/Greeting/index.html");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang */ "./src/lang.js");





const greeting = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Moscow'};
    const langSetting = (localStorage.getItem('language') === 'en') ? 'en-EN' : 'ru-RU';
    dateBlock.textContent = upperCaseFirst(date.toLocaleDateString(langSetting, options));
}

const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6) return _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["greet-night"][localStorage.getItem('language')];
    if (hours < 12) return _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["greet-morning"][localStorage.getItem('language')];
    if (hours < 18) return _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["greet-afternoon"][localStorage.getItem('language')];
    return _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["greet-evening"][localStorage.getItem('language')]; 
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (greeting);

/***/ }),

/***/ "./src/Player/index.js":
/*!*****************************!*\
  !*** ./src/Player/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/Player/index.css");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/Player/index.html");
/* harmony import */ var _playList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playList */ "./src/Player/playList.js");





const player = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_2__["default"]);

const playButton = player.querySelector('.play');
const playPrevButton = player.querySelector('.play-prev');
const playNextButton = player.querySelector('.play-next');
const playListBlock = player.querySelector('.play-list');
const volumeIco = player.querySelector('.volume-ico');
const volSlider = player.querySelector('.volume-slider');
const volFader = player.querySelector('.volume-fader');
const progressSlider = player.querySelector('.progress-slider');
const progressFader = player.querySelector('.progress-fader');

const audio = new Audio();

let isPlay = false;
let numSong = 0;
let currentTime = 0;
let isRunUpdater = false;

const toggleMute = () => {
  volumeIco.classList.toggle('mute');
  if (audio.muted) {
    audio.muted = false;
    volFader.value = audio.volume * 1000;
    volSlider.style.width = Math.round(audio.volume * 70).toString() + 'px';
  } else {
    audio.muted = true;
    volFader.value = 0;
    volSlider.style.width = `0px`;
  }
}

volumeIco.addEventListener('click', toggleMute)

const playAudio = () => {
  if (isPlay) {
    changeActiveItem();
    if (!isRunUpdater) {
      isRunUpdater=true;
      startUpdaterInfo();
    } 
    audio.src = _playList__WEBPACK_IMPORTED_MODULE_3__["default"][numSong].src;
    audio.currentTime = currentTime;
    let playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
      })
      .catch(error => {
      });
    }
    showProgress();
  } else {
    audio.pause();
    currentTime = audio.currentTime;
  }
}

const removePauseMini = () => {
  const playBottons = player.querySelectorAll('.play-button');
  playBottons.forEach (button => {
      button.classList.remove('pause-mini');
    })
}

const addPauseMini = () => {
  const liItems = player.querySelectorAll('.play-item');
  liItems.forEach (item => {
    if (item.id === `song-${numSong}`) 
    {
      const button = item.querySelector('.play-button');
      button.classList.add('pause-mini');
    }
  })
}

const clickBtnPlay = () => {
  if (isPlay) {
    playButton.classList.remove('pause');
    removePauseMini();
    isPlay = false;
  } else {
    playButton.classList.add('pause');
    isPlay = true;
    addPauseMini();
  }
  updateInfo();
  playAudio();
}

const parseNumSongInId = (strId) => {
  return parseInt(strId.slice(5));
}

const clickPlaySong = (event) => {
  if (event.target.classList.contains('play-button')) {
    const id = parseNumSongInId(event.target.parentElement.id);
    if (!isPlay) {
      if (id != numSong)  {
        numSong = id;
        currentTime = 0;
        audio.currentTime=currentTime;
      }
      clickBtnPlay();
    } else {
      if (numSong === id) {
        clickBtnPlay();
      } else {
        removePauseMini();
        numSong = id;
        currentTime = 0;
        audio.currentTime=currentTime;
        addPauseMini();
        playAudio();
      }
    }
  }
}

playListBlock.addEventListener('click', clickPlaySong)

const clickBtnNextSong = () => {
  clearActiveSongStile();
  removePauseMini();
  numSong++;
  if (numSong >= _playList__WEBPACK_IMPORTED_MODULE_3__["default"].length) numSong = 0;
  isPlay = true;
  currentTime = 0;
  audio.currentTime=currentTime;
  playButton.classList.add('pause');
  addPauseMini();
  addActiveSongStyle();
  playAudio();
}

const convertSecondsInMinStr = (sec) => { 
  const min = Math.floor(sec/60).toString();
  return `${min.padStart(2,'0')}:${Math.floor(sec % 60).toString().padStart(2,'0')}`;
}

const updateInfo = () =>
{
  const currTime = audio.currentTime;
  const durationInfo = player.querySelector('.duration');
  durationInfo.innerText = `${convertSecondsInMinStr(currTime)}/${_playList__WEBPACK_IMPORTED_MODULE_3__["default"][numSong].duration}`;
  showProgress();
}

const startUpdaterInfo = () => {
  updateInfo();
  setTimeout(startUpdaterInfo, 1000);
}

const clickBtnPrevSong = () => {
  clearActiveSongStile();
  removePauseMini();
  numSong--;
  if (numSong < 0) numSong = _playList__WEBPACK_IMPORTED_MODULE_3__["default"].length - 1;
  isPlay = true;
  currentTime = 0;
  audio.currentTime = currentTime;
  playButton.classList.add('pause');
  addPauseMini();
  addActiveSongStyle();
  playAudio();
}

playNextButton.addEventListener('click', clickBtnNextSong);
playPrevButton.addEventListener('click', clickBtnPrevSong);
playButton.addEventListener('click', clickBtnPlay);

const createShortSongTitle= (title, maxLength) => {
  if (title.length < maxLength) {
    return title;
  } else {
    return `${title.slice(0, maxLength - 3)}...`;
  }
}

const clearActiveSongStile = () => {
  const liItems = player.querySelectorAll('.play-item');
  liItems.forEach (item => {
    if (item.classList.contains('item-active')) {
      item.classList.remove('item-active');
    }
  })
}

const addActiveSongStyle = () => {
  const liItems = player.querySelectorAll('.play-item');
  liItems.forEach (item => {
    if (item.id === `song-${numSong}`) 
    {
      item.classList.add('item-active');
    }
  })
  updateInfo();
  const songTitle = player.querySelector('.song-title');
  songTitle.innerHTML = `${numSong+1}. ${createShortSongTitle(_playList__WEBPACK_IMPORTED_MODULE_3__["default"][numSong].title, 23)}`;
}

const changeActiveItem =() => {
  clearActiveSongStile();
  addActiveSongStyle();
}

audio.addEventListener('ended', (event) => {
  clickBtnNextSong();
});

const convertSongDurationInSec = (duration) => {
  return parseInt(duration.slice(0,2))*60+parseInt(duration.slice(3));
}

const showProgress = () => {
  const songDurationInSec = convertSongDurationInSec(_playList__WEBPACK_IMPORTED_MODULE_3__["default"][numSong].duration);
  progressFader.value = Math.round(audio.currentTime / songDurationInSec * 1000)
  progressSlider.style.width = Math.round(320 * progressFader.value / 1000).toString()+'px';
}

const loadPlayList = () => {
  _playList__WEBPACK_IMPORTED_MODULE_3__["default"].forEach((song , i) => {
    const li = document.createElement('li');
    const divPlay = document.createElement('div');
    const divTitle = document.createElement('div');
    const divDuration = document.createElement('div');
    divPlay.className = 'play-button';
    li.append(divPlay);
    divTitle.innerHTML = createShortSongTitle(song.title, 33);
    divTitle.className = 'play-title';
    li.append(divTitle);
    divDuration.className = 'playlist-duration';
    divDuration.innerText = song.duration;
    li.append(divDuration);
    li.className = 'play-item';
    li.id = `song-${i}`;
    playListBlock.append(li);
  })
}

const loadPlayer = () => { 
  if (localStorage.getItem('player') === 'false') {
    player.classList.add('hide');
  }
  loadPlayList();
}

const changeVolumeValue = () => {
  audio.volume = volFader.value / 1000;
  volSlider.style.width = Math.round(audio.volume * 70).toString() + 'px';
}

volFader.addEventListener('input', changeVolumeValue);

const changeProgressValue = () => {
  const percentage = progressFader.value / 1000;
  progressSlider.style.width = Math.round(320 * percentage).toString()+'px';
  const newTime = convertSongDurationInSec(_playList__WEBPACK_IMPORTED_MODULE_3__["default"][numSong].duration) * percentage;
  currentTime = newTime;
  audio.currentTime = currentTime;
  updateInfo();
  playAudio();
}

progressFader.addEventListener('input', changeProgressValue);

loadPlayer();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/Player/playList.js":
/*!********************************!*\
  !*** ./src/Player/playList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playList = [
    {      
      title: 'Long name - Aqua Caelestis Aqua Caelestis Aqua Caelestis Aqua Caelestis Aqua Caelestis ',
      src: './sounds/Aqua Caelestis.mp3',
      duration: '00:39'
    },  
    {      
      title: 'River Flows In You',
      src: './sounds/River Flows In You.mp3',
      duration: '01:37'
    },
    {      
      title: 'Ennio Morricone',
      src: './sounds/Ennio Morricone.mp3',
      duration: '01:37'
    }, 
    {      
      title: 'Summer Wind',
      src: './sounds/Summer Wind.mp3',
      duration: '01:50'
    }, 
  ]
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playList);

/***/ }),

/***/ "./src/Quotes/index.js":
/*!*****************************!*\
  !*** ./src/Quotes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/Quotes/index.css");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/Quotes/index.html");






const quotes = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_2__["default"]);


const quoteBlock = quotes.querySelector('.quote');
const autorBlock = quotes.querySelector('.author');
const changeQuoteBlock = quotes.querySelector('.change-quote');




let numQuote = parseInt(localStorage.getItem('numQuote')) || 0 ;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getNewNumQuote = (max) => {
    if (max === 1) return 0;
    let newNumQuote = getRandomInt(max);
    while (newNumQuote === numQuote) {
        newNumQuote = getRandomInt(max);
    }
   return newNumQuote;
}

async function getQuotes() {  
    const quotes = `./json/${localStorage.getItem('language')}-quotes.json`;
    const res = await fetch(quotes);
    const data = await res.json(); 
    numQuote = getNewNumQuote(data.length);
    localStorage.setItem('numQuote', numQuote.toString());
    quoteBlock.textContent = data[numQuote].text;
    autorBlock.textContent = data[numQuote].author;
}

const loadQuotes = () => { 
    if (localStorage.getItem('quotes') === 'false') {
        quotes.classList.add('hide');
    }
    getQuotes();
  }


changeQuoteBlock.addEventListener('click', getQuotes);

loadQuotes();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quotes);

/***/ }),

/***/ "./src/Settings/index.js":
/*!*******************************!*\
  !*** ./src/Settings/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/Settings/index.css");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/Settings/index.html");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang */ "./src/lang.js");





const settings = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_2__["default"]);


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
        
    const timeBlock = settings.querySelector('.settings-time');
    timeBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-time"][localStorage.getItem('language')];
    const dateBlock = settings.querySelector('.settings-date');
    dateBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-date"][localStorage.getItem('language')];
    const greetingBlock = settings.querySelector('.settings-greeting');
    greetingBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-greeting"][localStorage.getItem('language')];
    const quoteBlock = settings.querySelector('.settings-quotes');
    quoteBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-quotes"][localStorage.getItem('language')];
    const weatherBlock = settings.querySelector('.settings-weather');
    weatherBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-weather"][localStorage.getItem('language')];
    const playerBlock = settings.querySelector('.settings-player');
    playerBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-player"][localStorage.getItem('language')];
    const languageBlock = settings.querySelector('.settings-language');
    languageBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-language"][localStorage.getItem('language')];
    const photoBlock = settings.querySelector('.settings-photo');
    photoBlock.innerText = _lang__WEBPACK_IMPORTED_MODULE_3__["default"]["settings-photo"][localStorage.getItem('language')];

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);

/***/ }),

/***/ "./src/Weather/index.js":
/*!******************************!*\
  !*** ./src/Weather/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _owfont_regular_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owfont-regular.css */ "./src/Weather/owfont-regular.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/Weather/index.css");
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.html */ "./src/Weather/index.html");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang */ "./src/lang.js");






const weather = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_3__["default"]);

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
    if (degree < 22.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].n[localStorage.getItem('language')];
    if (degree < 67.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].ne[localStorage.getItem('language')];
    if (degree < 112.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].e[localStorage.getItem('language')];
    if (degree < 157.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].se[localStorage.getItem('language')];
    if (degree < 202.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].s[localStorage.getItem('language')];
    if (degree < 247.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].sw[localStorage.getItem('language')];
    if (degree < 292.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].w[localStorage.getItem('language')];
    if (degree < 337.5) return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].nw[localStorage.getItem('language')];
    return _lang__WEBPACK_IMPORTED_MODULE_4__["default"].n[localStorage.getItem('language')];
}

const loadWeatherBlock = () => {

    if (localStorage.getItem('weather') === 'false') {
        weather.classList.add('hide');
    }

    if (!localStorage.getItem('city')) {
        localStorage.setItem('city', 'Минск');
    }
    cityBlock.value = localStorage.getItem('city');
    getWeather();
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
        humidityBlock.textContent = `${_lang__WEBPACK_IMPORTED_MODULE_4__["default"].humidity[localStorage.getItem('language')]}: ${data.main.humidity}%`;
        windBlock.textContent = `${_lang__WEBPACK_IMPORTED_MODULE_4__["default"].wind[localStorage.getItem('language')]} ${convertDegreeToDirection(data.wind.deg)}, ${Math.round(data.wind.speed)} ${_lang__WEBPACK_IMPORTED_MODULE_4__["default"].speed[localStorage.getItem('language')]}`;
        localStorage.setItem('city', cityBlock.value);
    }
    catch (err) {
        temperatureBlock.textContent = '';
        weatherDescriptionBlock.textContent = '';
        humidityBlock.textContent = '';
        windBlock.textContent = '';
        weatherErrorBlock.textContent = _lang__WEBPACK_IMPORTED_MODULE_4__["default"].error[localStorage.getItem('language')];
    }
}
loadWeatherBlock();


cityBlock.addEventListener('change', getWeather);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

/***/ }),

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const langArr = {
    'greet-night' : {
        'ru' : 'Спокойной ночи,',
        'en' : 'Good night,'
    },
    'greet-morning' : {
        'ru' : 'Доброе утро,',
        'en' : 'Good morning,'
    },
    'greet-afternoon' : {
        'ru' : 'Добрый день,',
        'en' : 'Good afternoon,'
    },
    'greet-evening' : {
        'ru' : 'Доброго вечера,',
        'en' : 'Good evening,'
    },


    'settings-language' : {
        'ru' : 'Ярык',
        'en' : 'Language'
    },
    'settings-photo' : {
        'ru' : 'Фото',
        'en' : 'Photo'
    },
    'settings-time' : {
        'ru' : 'Время',
        'en' : 'Time'
    },
    'settings-date' : {
        'ru' : 'Дата',
        'en' : 'Date'
    },
    'settings-greeting' : {
        'ru' : 'Приветствие',
        'en' : 'Greetings'
    },
    'settings-quotes' : {
        'ru' : 'Цитаты',
        'en' : 'Quotes'
    },
    'settings-weather' : {
        'ru' : 'Погода',
        'en' : 'Weather'
    },
    'settings-player' : {
        'ru' : 'Плеер',
        'en' : 'Player'
    },




    'humidity' : {
        'ru' : 'Влажность',
        'en' : 'Humidity'
    },
    'wind' : {
        'ru' : 'Ветер',
        'en' : 'Wind'
    },
    'speed' : {
        'ru' : 'м/с',
        'en' : 'm/s'
    },

    'n' : {
        'ru' : 'С',
        'en' : 'N'
    },
    'ne' : {
        'ru' : 'С-В',
        'en' : 'NE'
    },
    'e' : {
        'ru' : 'В',
        'en' : 'E'
    },
    'se' : {
        'ru' : 'Ю-В',
        'en' : 'SE'
    },
    's' : {
        'ru' : 'Ю',
        'en' : 'S'
    },
    'sw' : {
        'ru' : 'Ю-З',
        'en' : 'SW'
    },
    'w' : {
        'ru' : 'З',
        'en' : 'W'
    },
    'nw' : {
        'ru' : 'С-З',
        'en' : 'NW'
    },
    'error' : {
        'ru' : 'Введите корректный город!',
        'en' : 'Enter the correct city!'
    },

    'city-def' : {
        'ru' : 'Минск',
        'en' : 'Minsk'
    },


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (langArr);

/***/ }),

/***/ "./utils/htmlToElement.js":
/*!********************************!*\
  !*** ./utils/htmlToElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstChild;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Greeting */ "./src/Greeting/index.js");
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ "./src/Background/index.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player/index.js");
/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Weather */ "./src/Weather/index.js");
/* harmony import */ var _Quotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Quotes */ "./src/Quotes/index.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Settings */ "./src/Settings/index.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");












const headerBlock = document.querySelector('.header');
const mainBlock = document.querySelector('.main');
const footerBlock = document.querySelector('.footer');
footerBlock.append(_Settings__WEBPACK_IMPORTED_MODULE_5__["default"]);
footerBlock.append(_Quotes__WEBPACK_IMPORTED_MODULE_4__["default"]);


const div = document.createElement('div');
div.innerHTML = `<a href="https://rs.school/js/" target="_blank">RS</a>`;
footerBlock.append(div);

headerBlock.append(_Player__WEBPACK_IMPORTED_MODULE_2__["default"]);
headerBlock.append(_Weather__WEBPACK_IMPORTED_MODULE_3__["default"]);

mainBlock.append(_Background__WEBPACK_IMPORTED_MODULE_1__["default"]);
mainBlock.append(_Greeting__WEBPACK_IMPORTED_MODULE_0__["default"]);





})();

/******/ })()
;
//# sourceMappingURL=main.js.map