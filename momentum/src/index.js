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



headerBlock.append(Player);
headerBlock.append(Weather);

mainBlock.append(Background);
mainBlock.append(Greeting);

footerBlock.prepend(Quotes);
footerBlock.prepend(Settings);

