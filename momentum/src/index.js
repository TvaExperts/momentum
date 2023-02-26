import Greeting from './Greeting';
import Background from './Background';
import Player from './Player';
import Weather from './Weather';
import Quotes from './Quotes';
import Settings from './Settings';




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




