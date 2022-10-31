// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // SET LIST OF VOICE OPTIONS
  const synth = window.speechSynthesis;
  let voices = [];
  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // SPEAK WHEN BUTTON IS PRESSED
  const button = document.querySelector('button');
  const voiceSelect = document.querySelector('select');
  button.addEventListener('click', (event) => {
    const text = document.getElementById("text-to-speak").value;
    const speakText = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        speakText.voice = voices[i];
      }
    }
    synth.speak(speakText);
  })

  /*var isSpeaking = synth.speaking;
  console.log(isSpeaking);
   
  while (isSpeaking == true) {
    isSpeaking = synth.speaking;
    console.log(isSpeaking);
  }*/

}