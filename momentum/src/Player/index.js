import './index.css';
import htmlToElement from '../../utils/htmlToElement';
import Player from './index.html';
import playList  from './playList';

const player = htmlToElement(Player);

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
    audio.src = playList[numSong].src;
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
  if (numSong >= playList.length) numSong = 0;
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
  durationInfo.innerText = `${convertSecondsInMinStr(currTime)}/${playList[numSong].duration}`;
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
  if (numSong < 0) numSong = playList.length - 1;
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
  songTitle.innerHTML = `${numSong+1}. ${createShortSongTitle(playList[numSong].title, 23)}`;
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
  const songDurationInSec = convertSongDurationInSec(playList[numSong].duration);
  progressFader.value = Math.round(audio.currentTime / songDurationInSec * 1000)
  progressSlider.style.width = Math.round(320 * progressFader.value / 1000).toString()+'px';
}

const loadPlayList = () => {
  playList.forEach((song , i) => {
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
  const newTime = convertSongDurationInSec(playList[numSong].duration) * percentage;
  currentTime = newTime;
  audio.currentTime = currentTime;
  updateInfo();
  playAudio();
}

progressFader.addEventListener('input', changeProgressValue);

loadPlayer();

export default player;