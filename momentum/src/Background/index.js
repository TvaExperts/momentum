import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import BackgroundBlock from './index.html';
const backgroundBlock = htmlToElement(BackgroundBlock);

const slideNext = backgroundBlock.querySelector('.slide-next');
const slidePrev = backgroundBlock.querySelector('.slide-prev');
const UNSPLASH_API_KEY = 'yw2PXnVSDFGPpRVYC-NpSCm-ggZXLbGimG_gLiCmzak';

async function setWebBg () {
    const urlImage = await getLinkToImage();
    const img = new Image();
    img.src = urlImage;
    img.onload = () => {      
        document.body.style.backgroundImage = `url('${urlImage}')`;
    }; 
}

async function getLinkToImage() {
    const timeOfDay = getTimeOfDay();
    const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=${UNSPLASH_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
}


const getTimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 6) return 'night';
    if (hours < 12) return 'morning';
    if (hours < 18) return 'afternoon';
    return 'evening';
}

setWebBg();

slideNext.addEventListener('click', setWebBg);
slidePrev.addEventListener('click', setWebBg);

export default backgroundBlock;