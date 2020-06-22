function displayKeys(e){
  // determine key pressed
  keyCode = e.which;
  character = String.fromCharCode(keyCode);
  // add chacter to paragragh
  document.getElementById('keys').innerHTML += character;
}

document.addEventListener('keypress', displayKeys);