


import Settings from './Settings';
import Greeting from './Greeting';
import Background from './Background';
import Player from './Player';
import Weather from './Weather';
import Quotes from './Quotes';





import '../css/style.css';

const headerBlock = document.querySelector('.header');
const mainBlock = document.querySelector('.main');
const footerBlock = document.querySelector('.footer');
footerBlock.append(Settings);
footerBlock.append(Quotes);


const div = document.createElement('div');
div.innerHTML = `<a href="https://rs.school/js/" target="_blank">RS</a>`;
footerBlock.append(div);

headerBlock.append(Player);
headerBlock.append(Weather);

mainBlock.append(Background);
mainBlock.append(Greeting);

console.log('Адаптива пока нет');
console.log('Появление и сокрытие объектов тоже порой не так как хотелось бы')
console.log('Дополнительной фичи тоже нет(')
console.log('Если не все объекты прогрузились - обновить лучше страницу - криво сделал работу с локалсторадж, но уже некогда поправлять')
console.log('Как-то не расчитал время или пошел не по той дорожке где-то в начале пути')

