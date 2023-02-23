import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Player from './index.html';
import playList  from './playList';

const player = htmlToElement(Player);


const playButton = player.querySelector('.play');
const playPrevButton = player.querySelector('.play-prev');
const playNextButton = player.querySelector('.play-next');

const playListBlock = player.querySelector('.play-list');

const progressBarBlock = player.querySelector('.progress-bar');
const progressFillBlock = player.querySelector('.progress-fill');

const toggleBtnPlay = () => {
  playButton.classList.toggle('pause');
  isPlay = !isPlay;
  playAudio();
}


playButton.addEventListener('click', toggleBtnPlay);

let isPlay = false;
let numSong = 0;
let currentTime = 0;


const createShortSongTitle= (title) => {
  if (title.length < 18) {
    return title
  } else {
    return `${title.slice(0,14)}...`;
  }
}

const loadPlayList = () => {
  playList.forEach(song => {
    const li = document.createElement('li');
    li.innerHTML = `${createShortSongTitle(song.title)}<span>${song.duration}</span>`;
    li.className = 'play-item';
    playListBlock.append(li);
  })
}

loadPlayList();



const audio = new Audio();




audio.addEventListener('ended', (event) => {
  numSong++;
  if (numSong>=playList.length) numSong = 0;
  currentTime = 0;
  playAudio();
});

const convertSongDurationInSec = (duration) => {
  return parseInt(duration.slice(0,2))*60+parseInt(duration.slice(3));
}

const showProgress = () => {
  if (!isPlay) return;
  const maxWidth = progressBarBlock.clientWidth;
  const songDurationInSec = convertSongDurationInSec(playList[numSong].duration);
  progressFillBlock.style.width = `${Math.round(audio.currentTime / songDurationInSec * maxWidth)}px`;
  console.log(progressFillBlock.style.width);

  setTimeout(showProgress, 1000);

}



const playAudio = () => {

  if (isPlay) {
    audio.src = playList[numSong].src;
    audio.currentTime = currentTime;
    audio.play();
    console.log(progressFillBlock.style.width);
    showProgress();
  } else {
    audio.pause();
    currentTime = audio.currentTime;
  }
  
}






export default player;