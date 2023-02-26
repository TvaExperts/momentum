import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import BackgroundBlock from './index.html';
const backgroundBlock = htmlToElement(BackgroundBlock);

const slideNext = backgroundBlock.querySelector('.slide-next');
const slidePrev = backgroundBlock.querySelector('.slide-prev');

const UNSPLASH_API_KEY = 'yw2PXnVSDFGPpRVYC-NpSCm-ggZXLbGimG_gLiCmzak';
const FLICKR_API_KEY = 'e42abac3a12ae59ea2cda0d295b92890';



setBg();


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let randomImageNum = getRandomInt(20) + 1;

async function setBg () {
    if(!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
        
    }
    if(!localStorage.getItem('photo-source')) {
        localStorage.setItem('photo-source', 'github');
    }
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



export default backgroundBlock;