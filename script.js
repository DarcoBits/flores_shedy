onload = () => {
    document.body.classList.remove("container");
  };
  
  (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})

const playPauseButton = document.getElementById('playPauseButton');
const miAudio = document.getElementById('miAudio');
let isPlaying = true;

playPauseButton.addEventListener('click', function() {
  if (isPlaying) {
    miAudio.pause(); // Pausa la reproducción del audio
    playPauseButton.textContent = '▶️';
  } else {
    miAudio.play(); // Reproduce el audio
    playPauseButton.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});
