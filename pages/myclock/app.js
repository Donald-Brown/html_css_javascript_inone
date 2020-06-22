function updateSec() {
  // get currents
  let now = new Date();
  let displayHours = now.getHours();
  let displayMinutes = now.getMinutes();
  let displaySeconds = now.getSeconds();

  //increment seconds
  displaySeconds ++;
  // convert to 12 hours
  if(displayHours > 12){
    displayHours = displayHours - 12;
  }
  if(displayMinutes === 60){
    displayHours ++;
    displayMinutes = 0;
  }
  if(displaySeconds === 60){
    displayMinutes ++;
    displaySeconds = 0;
  }

  //display time
  document.getElementById("clock").innerHTML = `${displayHours}:${("0" + displayMinutes).slice(-2)}:${("0" + displaySeconds).slice(-2)}`;

  //callback timer
  secondsTimer = window.setTimeout("updateSec();", 1000);
}
updateSec();
