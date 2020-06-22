function mouseStatus(e){
  // for older browser support
  if(!e){
    e = window.event
  }
  //get button from event
  btn = e.button;
  // left button = 0, middle = 1, right = 2
  switch(btn){
    case 0:
      whichBtn = 'Left';
      break;
    case 1:
      whichBtn = 'Center';
      break;
    case 2:
      whichBtn = 'Right';
      break;
    default:
      whichBtn = 'Unkown';
  }

  let message = `${e.type} : ${whichBtn}<br/>`;
  document.getElementById('testarea').innerHTML += message;
  e.preventDefault();
}

let obj = document.getElementById('testlink');
obj.addEventListener('click', mouseStatus);
obj.addEventListener('mousedown', mouseStatus);
obj.addEventListener('mouseup', mouseStatus);
obj.addEventListener('dblclick', mouseStatus);