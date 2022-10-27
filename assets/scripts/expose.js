// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /*** HORN SELECT AND SETTING VALUES ***/
  var hornType = document.querySelector('#horn-select');
  var image = document.getElementsByTagName('img');
  const audio = document.getElementsByTagName('audio');
  hornType.addEventListener('change', (event) => {
    if (event.target.value == 'air-horn') {
      image[0].src="assets/images/air-horn.svg";
      audio[0].src="assets/audio/air-horn.mp3";
      hornType = 'air-horn';
    }

    if (event.target.value == 'car-horn') {
      image[0].src="assets/images/car-horn.svg";
      audio[0].src="assets/audio/car-horn.mp3";
      hornType = 'car-horn';
    }

    if (event.target.value == 'party-horn') {
      image[0].src="assets/images/party-horn.svg";
      audio[0].src="assets/audio/party-horn.mp3";
      hornType = 'party-horn';
    }
  })

  /*** VOLUME CONTROLS ***/
  var volumeControl = document.getElementById('volume-controls');
  var volume = document.getElementById('volume');
  volumeControl.addEventListener('input', (event) => {
    if (volume.value == 0) {
      image[1].src="assets/icons/volume-level-0.svg";
      audio[0].volume = 0;
    }

    if (volume.value >= 1 & volume.value < 33) {
      image[1].src="assets/icons/volume-level-1.svg";
      audio[0].volume = volume.value/100;
    }

    if (volume.value >= 33 & volume.value < 67) {
      image[1].src="assets/icons/volume-level-2.svg";
      audio[0].volume = volume.value/100;
    }

    if (volume.value >= 67) {
      image[1].src="assets/icons/volume-level-3.svg";
      audio[0].volume = volume.value/100;
    }
  })

  /*** CONFETTI AND PLAYING AUDIO ***/
  const canvas = document.getElementsByTagName('script');
  const jsConfetti = new JSConfetti({ canvas:0 });
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    audio[0].play();
    if (hornType == 'party-horn') {
      jsConfetti.addConfetti({
        confettiColors: [
          '#FFE930', '#73B6ED ', '#9DCC85', '#B085CC', '#fbb1bd', '#f9bec7',
        ],
        confettiNumber: 750,
        confettiRadius: 6,
      })
    }
  })
}