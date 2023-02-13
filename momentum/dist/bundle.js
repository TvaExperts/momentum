/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./momentum/src/index.js":
/*!*******************************!*\
  !*** ./momentum/src/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Date */ \"./momentum/src/js/Date.js\");\n\r\n\r\nconst timeBlock = document.querySelector('.time');\r\nconst dateBlock = document.querySelector('.date');\r\nconst greetingBlock = document.querySelector('.greeting');\r\nconst nameBlock = document.querySelector('.name');\r\nconst slideNext = document.querySelector('.slide-next');\r\nconst slidePrev = document.querySelector('.slide-prev');\r\nconst bodyBlock = document.body;\r\n\r\n\r\nconst weatherIconBlock = document.querySelector('.weather-icon');\r\nconst temperatureBlock = document.querySelector('.temperature');\r\nconst weatherDescriptionBlock = document.querySelector('.weather-description');\r\nconst cityBlock = document.querySelector('.city');\r\n\r\nconst quoteBlock = document.querySelector('.quote');\r\nconst autorBlock = document.querySelector('.author');\r\nconst changeQuoteBlock = document.querySelector('.change-quote');\r\n\r\n\r\nconst WEATHER_API_KEY = '7084f9129f59e9d3a287c7606d73e5ba';\r\nconst UNSPLASH_API_KEY = 'yw2PXnVSDFGPpRVYC-NpSCm-ggZXLbGimG_gLiCmzak';\r\n\r\n\r\n\r\n\r\n// ****************** Load and Unload Doc ********************\r\n\r\nwindow.addEventListener('beforeunload', () => {\r\n    setLocalStorage();\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n    getLocalStorage();\r\n});\r\n\r\n\r\n\r\n\r\n// ****************** Local Storage ********************\r\n\r\nconst getLocalStorage = () => {\r\n    if(localStorage.getItem('name')) {\r\n        nameBlock.value = localStorage.getItem('name');\r\n    }\r\n}\r\n\r\nconst setLocalStorage = () => {\r\n    localStorage.setItem('name', nameBlock.value);\r\n}\r\n\r\n// ****************** Staff ********************\r\n\r\nconst getRandomInt = (max) => {\r\n    return Math.floor(Math.random() * max);\r\n}\r\n\r\n\r\n\r\n// ****************** Name Imput Block ********************\r\n\r\nconst showTime = () => {\r\n    const date = new Date();\r\n    timeBlock.textContent = date.toLocaleTimeString();\r\n    showGreeting();\r\n    showDate();\r\n    setTimeout(showTime, 1000);\r\n}\r\n\r\nconst upperCaseFirst = (str)=> {\r\n    if (!str) return str;\r\n    return str[0].toUpperCase() + str.slice(1);\r\n  }\r\n\r\nconst showDate = () => {\r\n    const date = new Date();\r\n    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Moscow'};\r\n    dateBlock.textContent = upperCaseFirst(date.toLocaleDateString('ru-RU', options));\r\n}\r\n\r\nconst getTimeOfDay = () => {\r\n    const date = new Date();\r\n    const hours = date.getHours();\r\n    if (hours < 6) return 'night';\r\n    if (hours < 12) return 'morning';\r\n    if (hours < 18) return 'afternoon';\r\n    return 'evening';\r\n}\r\n\r\nconst showGreeting = () => {\r\n    const greetingText = `Good ${getTimeOfDay()},`;\r\n    greetingBlock.textContent = greetingText;\r\n}\r\n\r\nshowTime();\r\n\r\n\r\n// ****************** BG Image ********************\r\n\r\nasync function setWebBg () {\r\n    const urlImage = await getLinkToImage();\r\n    const img = new Image();\r\n    img.src = urlImage;\r\n    img.onload = () => {      \r\n        bodyBlock.style.backgroundImage = `url('${urlImage}')`;\r\n    }; \r\n}\r\n\r\nasync function getLinkToImage() {\r\n    const timeOfDay = getTimeOfDay();\r\n    const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=${UNSPLASH_API_KEY}`;\r\n    const res = await fetch(url);\r\n    const data = await res.json();\r\n    return data.urls.regular;\r\n}\r\n\r\nsetWebBg();\r\n\r\nslideNext.addEventListener('click', setWebBg);\r\nslidePrev.addEventListener('click', setWebBg);\r\n\r\n/*\r\nlet randomImageNum = getRandomInt(20) + 1;\r\n\r\nconst setBg = (timeOfDay, bgNum) => {\r\n    const urlImage=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum.toString().padStart(2,'0')}.jpg`;\r\n    const img = new Image();\r\n    img.src = urlImage;\r\n    img.onload = () => {      \r\n        bodyBlock.style.backgroundImage = `url('${urlImage}')`;\r\n    }; \r\n}\r\n\r\nsetBg(getTimeOfDay(),randomImageNum);\r\n\r\nconst getSlideNext = () => {\r\n    randomImageNum++;\r\n    if (randomImageNum>20) randomImageNum=1;\r\n    if (randomImageNum<1) randomImageNum=20;\r\n    setBg(getTimeOfDay(),randomImageNum);\r\n}\r\n\r\nconst getSlidePrev = () => {\r\n    randomImageNum--;\r\n    if (randomImageNum<1) randomImageNum=20;\r\n    setBg(getTimeOfDay(),randomImageNum);\r\n}*/\r\n\r\n// ****************** Weather ********************\r\n\r\nconst convertInStrTemperature = (temperature) => {\r\n    temperature = Math.round(temperature);\r\n    let strTemperature = temperature.toString();\r\n    if (temperature>0) strTemperature = '+' + strTemperature;\r\n    return strTemperature;\r\n}\r\n\r\nasync function getWeather() {  \r\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityBlock.value}&lang=ru&appid=${WEATHER_API_KEY}&units=metric`;\r\n    const res = await fetch(url);\r\n    const data = await res.json(); \r\n    weatherIconBlock.className = 'weather-icon owf';\r\n    weatherIconBlock.classList.add(`owf-${data.weather[0].id}`);\r\n    temperatureBlock.textContent = `${convertInStrTemperature(data.main.temp)}°C`;\r\n    weatherDescriptionBlock.textContent = upperCaseFirst(data.weather[0].description);\r\n}\r\n\r\ngetWeather(); \r\n\r\ncityBlock.addEventListener('change', getWeather);\r\n\r\n// ****************** Quotes ********************\r\n\r\nlet numQuote = 0;\r\n\r\nconst getNewNumQuote = (max) => {\r\n    if (max === 1) return 0;\r\n    let newNumQuote = getRandomInt(max);\r\n    while (newNumQuote === numQuote) {\r\n        newNumQuote = getRandomInt(max);\r\n    }\r\n   return newNumQuote;\r\n}\r\n\r\nasync function getQuotes() {  \r\n    const quotes = '../momentum/assets/quotes.json';\r\n    const res = await fetch(quotes);\r\n    const data = await res.json(); \r\n    numQuote=getNewNumQuote(data.length);\r\n    quoteBlock.textContent = data[numQuote].text;\r\n    autorBlock.textContent = data[numQuote].author;\r\n}\r\ngetQuotes();\r\n\r\nchangeQuoteBlock.addEventListener('click', getQuotes);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://tvaexperts/./momentum/src/index.js?");

/***/ }),

/***/ "./momentum/src/js/Date.js":
/*!*********************************!*\
  !*** ./momentum/src/js/Date.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BB\": () => (/* binding */ BB)\n/* harmony export */ });\nclass BB {\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://tvaexperts/./momentum/src/js/Date.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./momentum/src/index.js");
/******/ 	
/******/ })()
;