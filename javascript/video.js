const videoPlayer = document.querySelector('.product-video-container')
const video = document.querySelector('#product-video')
const pauseButton = videoPlayer.querySelector('#pause-button')
const buttonIcon = pauseButton.querySelector('#icon')

// Play and Pause Button

pauseButton.addEventListener('click', () => {
  if(video.paused){
    video.play()
    buttonIcon.setAttribute('class', 'pause-icon');
  }
  else {
    video.pause()
    buttonIcon.setAttribute('class', 'play-icon');
  }

})