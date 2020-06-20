function addText(){
  if(!document.getElementById) return;

  let sentence = document.changeform.sentence.value;
  let node = document.createTextNode(" " + sentence);
  document.getElementById('paragraph1').appendChild(node);
  document.changeform.sentence.value = "";
}

