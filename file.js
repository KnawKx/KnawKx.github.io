var audio = document.getElementById("myAudio");

function playAudio() { 
  audio.play();
  document.getElementById("playButton").style.display = "none";
  document.getElementById("pauseButton").style.display = "inline-block";
} 

function pauseAudio() { 
  audio.pause(); 
  document.getElementById("pauseButton").style.display = "none";
  document.getElementById("playButton").style.display = "inline-block";
}