let counter = 0;
      
// call Update function 2 seconds after first load
timeoutID=window.setTimeout("Update();",2000);

function Update() {
  counter++;
  var textField = document.getElementById("showText");
  textField.innerHTML = `The counter is at: ${counter}`;
  
  // set another timeout for the next count
  timeoutID=window.setTimeout("Update();",2000);
}

// set event listeners for the buttons
document.getElementById("restart").addEventListener("click", () => {
  window.clearTimeout(timeoutID);
  counter = 0;
  Update();
});
document.getElementById("stop").addEventListener("click", () => window.clearTimeout(timeoutID));

// set event listener for enter key
document.getElementById("restart").addEventListener('keypress', (e) => {
  if(e.which === 13){
    window.clearTimeout(timeoutID);
    counter = 0;
    Update();
  }
});

document.getElementById("stop").addEventListener('keypress', (e) => {
  if(e.which === 13){
    window.clearTimeout(timeoutID);
  }
});